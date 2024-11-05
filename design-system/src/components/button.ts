import htm from "htm";
import h from "hyperscript";
import type { Observable, Subscription } from "rxjs";

import {
	NEVER,
	Subject,
	combineLatestWith,
	concatMap,
	delay,
	filter,
	interval,
	map,
	of,
	pairwise,
	share,
	startWith,
	switchMap,
	takeUntil,
	takeWhile,
	tap,
	timer
} from "rxjs";

import { createTemplate, getElement, getShadowRoot } from "../utils";
import { mapButtonActiveUndeterminateProgress } from "../utils/map-button-active-undeterminate-progress";
import { mapButtonDisabled } from "../utils/map-button-disabled";
import { mapButtonLoading } from "../utils/map-button-loading";

const html = htm.bind(h);
const tagName = "crumbs-button";

declare global {
	export namespace JSX {
		export interface IntrinsicElements {
			[tagName]: { progress?: string };
		}
	}
}

class Button extends HTMLElement {
	_renderSubscription: Subscription | null = null;
	_clickSubscription: Subscription | null = null;
	_attributeChanges$: Subject<[string, string | null]> = new Subject();
	_parsedProgress$: Observable<number | null>;
	_parsedDisabled$: Observable<boolean>;
	_parsedIndeterminateProgress$: Observable<boolean>;
	_parsedIndeterminateDurationMs$: Observable<number | null>;
	_indeterminedLoadingTime$: Observable<number>;
	_loading$: Observable<number>;
	_activeIndeterminateProgress$: Observable<boolean>;
	_disabled$: Observable<boolean>;
	_loadingBarTransitionEnabled$: Observable<boolean>;

	constructor() {
		super();

		this._parsedProgress$ = this._attributeChanges$.pipe(
			filter(([name]) => name === "progress"),
			map(([_, value]) => value),
			startWith(this.getAttribute("progress")),
			map((progress) => (progress === null ? null : Number(progress))),
			filter((progress) => {
				return (
					progress === null ||
					(Number.isInteger(progress) &&
						Number.isFinite(progress) &&
						progress <= 100 &&
						progress >= 0)
				);
			})
		);

		this._parsedDisabled$ = this._attributeChanges$.pipe(
			filter(([name]) => name === "disabled"),
			map(([_, value]) => value),
			startWith(this.getAttribute("disabled")),
			map((disabled) => disabled !== null && disabled !== "false")
		);

		this._parsedIndeterminateProgress$ = this._attributeChanges$.pipe(
			filter(([name]) => name === "indeterminate-progress"),
			map(([_, value]) => value),
			startWith(this.getAttribute("indeterminate-progress")),
			map(
				(indeterminateProgress) =>
					indeterminateProgress !== null && indeterminateProgress !== "false"
			)
		);

		this._parsedIndeterminateDurationMs$ = this._attributeChanges$.pipe(
			filter(([name]) => name === "indeterminate-duration-ms"),
			map(([_, value]) => value),
			startWith(this.getAttribute("indeterminate-duration-ms")),
			map((indeterminateDurationMs) => {
				return indeterminateDurationMs === null
					? null
					: Number(indeterminateDurationMs);
			}),
			filter((indeterminateDurationMs) => {
				return (
					indeterminateDurationMs === null ||
					(Number.isInteger(indeterminateDurationMs) &&
						Number.isFinite(indeterminateDurationMs) &&
						indeterminateDurationMs >= 0)
				);
			})
		);

		const step = 50;

		this._indeterminedLoadingTime$ = this._parsedIndeterminateProgress$.pipe(
			startWith(false),
			pairwise(),
			filter(([previous, current]) => current && !previous),
			switchMap(() => interval(step).pipe(takeUntil(timer(20000 * step)))),
			map((value) => value * step),
			startWith(0)
		);

		this._loading$ = this._parsedProgress$.pipe(
			combineLatestWith(
				this._indeterminedLoadingTime$,
				this._parsedIndeterminateDurationMs$,
				this._parsedIndeterminateProgress$
			),
			mapButtonLoading(),
			startWith(0)
		);

		this._activeIndeterminateProgress$ =
			this._parsedIndeterminateProgress$.pipe(
				combineLatestWith(
					this._loading$,
					this._indeterminedLoadingTime$,
					this._parsedIndeterminateDurationMs$
				),
				mapButtonActiveUndeterminateProgress(),
				startWith(false)
			);

		this._disabled$ = this._parsedDisabled$.pipe(
			combineLatestWith(this._activeIndeterminateProgress$, this._loading$),
			mapButtonDisabled(),
			//share(),
			startWith(false)
		);

		this._loadingBarTransitionEnabled$ = this._loading$.pipe(
			pairwise(),
			map(([previous, current]) => current >= previous),
			startWith(false)
		);
	}

	static get observedAttributes() {
		return [
			"progress",
			"disabled",
			"indeterminate-progress",
			"indeterminate-duration-ms"
		];
	}

	async connectedCallback() {
		this.attachShadow({ mode: "open" });
		const shadowRoot = getShadowRoot(this);
		shadowRoot.appendChild(template.content.cloneNode(true));

		this._renderSubscription = this._disabled$
			.pipe(
				combineLatestWith(
					this._loading$,
					this._activeIndeterminateProgress$,
					this._loadingBarTransitionEnabled$
				)
			)
			.subscribe((args) => {
				this.render(...args);
			});

		this._attributeChanges$.next(["disabled", this.getAttribute("disabled")]);
		this._attributeChanges$.next(["progress", this.getAttribute("progress")]);
		this._attributeChanges$.next([
			"indeterminate-progress",
			this.getAttribute("indeterminate-progress")
		]);

		this._attributeChanges$.next([
			"indeterminate-duration-ms",
			this.getAttribute("indeterminate-duration-ms")
		]);
	}

	attributeChangedCallback(name: string) {
		this._attributeChanges$.next([name, this.getAttribute(name)]);
	}

	render(
		disabled: boolean,
		progressValue: number,
		indeterminateLoading: boolean,
		loadingBarTransitionEnabled: boolean
	) {
		if (!this.shadowRoot) {
			return;
		}

		const shadowRoot = getShadowRoot(this);
		const progress = getElement(shadowRoot, "#progress");
		const button = getElement(shadowRoot, "button");
		const semanticProgress = getElement(shadowRoot, "progress");

		if (button instanceof HTMLButtonElement) {
			button.disabled = disabled;
		}

		if (indeterminateLoading) {
			button.classList.remove("indeterminate-loading-end");
			button.classList.add("indeterminate-loading");
		} else {
			button.classList.add("indeterminate-loading-end");

			setTimeout(() => {
				button.classList.remove("indeterminate-loading");
			}, 500);
		}

		if (loadingBarTransitionEnabled) {
			progress.classList.add("transition");
		} else {
			progress.classList.remove("transition");
		}

		progress.style.width = `${progressValue}%`;

		if (semanticProgress instanceof HTMLProgressElement) {
			semanticProgress.value = progressValue;
		}
	}

	disconnectedCallback() {
		this._clickSubscription?.unsubscribe();
		this._renderSubscription?.unsubscribe();
	}
}

customElements.define(tagName, Button);

export async function defineButtonCustomElement() {
	if (customElements.get(tagName) === undefined) {
		customElements.define(tagName, Button);
	}

	await customElements.whenDefined(tagName);
}

const template = createTemplate(html`
	<style>
		:host {
			display: inline-block;
		}

		/* ❤️ https://codepen.io/yuhomyan/pen/OJMejWJ */

		.custom-btn {
			border: none;
			font-family: ds-notes-sans;
			font-size: 1rem;
			display: grid;
			place-content: center;
			border-radius: 5px;
			padding: 10px 25px;
			font-weight: 500;
			background: transparent;
			transition: all 0.3s ease;
			position: relative;
			box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
			7px 7px 20px 0px rgba(0,0,0,.1),
			4px 4px 5px 0px rgba(0,0,0,.1);
			outline: none;
			grid-area: 2 / 2 / 3 / 3;
			user-select: none;
		}

		.indeterminate-loading {
			/*animation: transparency-fade 1.5s ease-in-out infinite;*/
		}

		.indeterminate-loading-end {
			animation-iteration-count: 1;
		}	

		@keyframes transparency-fade {
			0% {
				background-color: transparent;
			}
			50% {
				background-color: rgba(255, 255, 255, 0.15);
			}
			100% {
				background-color: transparent;
			}
		}

		@media screen and (min-width: 800px) {
			.custom-btn {
				font-size: 1.4rem;
			}
		}

		.btn-16 {
			border: none;
		}
		.btn-16:after {
			position: absolute;
			content: "";
			width: 0;
			height: 100%;
			top: 0;
			left: 0;
			direction: rtl;
			z-index: -1;
			box-shadow: -1px -1px 5px 0px #fff0, -1px -1px 5px 0px #fff, 7px 7px 10px 0px #0002, 4px 4px 5px 0px #0001;
			transition: all 0.3s ease;
			border-radius: 5px;
			background-color: #fff3;
		}
		.btn-16:hover {
		}
		.btn-16:hover:after {
			left: auto;
			right: 0;
			width: 100%;
		}

		.btn-16:hover:after:disabled {
			left: initial;
			right: initial;
			width: inherit;
		}

		.btn-16:active {
			top: 2px;
		}

		.button-container {
			display: grid;
			grid-template-columns: 0.4rem 1fr 0.4rem;
			grid-template-rows: 0.4rem 1fr 0.4rem; 
		}

		.progress-container {
			grid-area: 2 / 2 / 3 / 3;
		}

		#progress {
			background-color: #fff3;
			height: 100%;
			width: 0%;
			border-radius: 5px;
		}

		progress {
			visibility: hidden;
		}

		#progress.transition {
			transition: width 0.3s ease-in-out;
		}

		button {
			background-color: transparent;
			padding: 0;
			border: none;
		}
	</style>

	<div className="button-container">
		<button className="custom-btn btn-16">
			<slot></slot>
		</button>
		<div className="progress-container">
			<div id="progress"></div>
		</div>
		<progress></progress>
	</div>
`);
