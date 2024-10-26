import htm from "htm";
import h from "hyperscript";
import type { Observable, Subscription } from "rxjs";

import {
	Subject,
	combineLatest,
	filter,
	interval,
	map,
	mergeMap,
	of,
	pairwise,
	startWith
} from "rxjs";

import { createTemplate, getElement, getShadowRoot } from "../utils";

const html = htm.bind(h);
const tagName = "crumbs-button";
const indeterminateMinimumMs = 600;

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
	_indeterminedLoadingAt$: Observable<number>;
	_loading$: Observable<number>;
	_activeIndeterminateProgress$: Observable<boolean>;
	_disabled$: Observable<boolean>;

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
				return indeterminateDurationMs !== null
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

		this._indeterminedLoadingAt$ = this._parsedIndeterminateProgress$.pipe(
			startWith(false),
			pairwise(),
			filter(([previous, current]) => current && !previous),
			map(() => Date.now()),
			startWith(0)
		);

		this._loading$ = combineLatest(
			this._parsedProgress$,
			this._indeterminedLoadingAt$,
			this._parsedIndeterminateDurationMs$,
			this._parsedIndeterminateProgress$
		).pipe(
			mergeMap(
				([
					progress,
					indeterminedLoadingAt,
					indeterminateDurationMs,
					indeterminateProgress
				]) => {
					if (indeterminateProgress) {
						if (indeterminedLoadingAt && indeterminateDurationMs !== null) {
							return interval(100).pipe(
								map(() => {
									const now = Date.now();
									const duration = now - indeterminedLoadingAt;

									const totalDuration =
										indeterminateDurationMs - indeterminateMinimumMs;

									const totalDuration1 = Math.max(totalDuration, 0);
									const progress = Math.ceil((duration / totalDuration1) * 100);
									return Math.min(100, progress);
								})
							);
						}

						return of(0);
					}

					return of(progress || 0);
				}
			)
		);

		this._activeIndeterminateProgress$ = combineLatest(
			this._parsedIndeterminateProgress$,
			this._loading$
		).pipe(
			map(([indeterminateProgress, progress]) => {
				return indeterminateProgress && progress === 100;
			})
		);

		this._disabled$ = combineLatest(
			this._parsedDisabled$,
			this._activeIndeterminateProgress$,
			this._loading$
		).pipe(
			map(([disabled, activeIndeterminateProgress, loading]) => {
				return (
					disabled ||
					activeIndeterminateProgress ||
					(loading > 0 && loading < 100)
				);
			})
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

		this._renderSubscription = combineLatest(
			this._disabled$,
			this._loading$
		).subscribe(([disabled, progressValue]) => {
			this.render(disabled, Number(progressValue));
		});
	}

	attributeChangedCallback(name: string) {
		if (this.shadowRoot) {
			this._attributeChanges$.next([name, this.getAttribute(name)]);
		}
	}

	render(disabled: boolean, progressValue: number) {
		const shadowRoot = getShadowRoot(this);
		const progress = getElement(shadowRoot, "#progress");
		const button = getElement(shadowRoot, "button");

		if (button instanceof HTMLButtonElement) {
			button.disabled = disabled;
		}

		progress.style.width = `${progressValue}%`;
	}

	disconnectedCallback() {
		this._clickSubscription?.unsubscribe();
		this._renderSubscription?.unsubscribe();
	}
}

customElements.define(tagName, Button);

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
			animation: transparency-fade 1.5s ease-in-out infinite;
		}

		@keyframes transparency-fade {
			0%, 100% {
				background-color: transparent;
			}
			50% {
				background-color: rgba(255, 255, 255, 1);
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
			transition: width 0.3s ease-in-out;
		}

		button {
			background-color: transparent;
			padding: 0;
			border: none;
		}
	</style>

	<div className="button-container">
		<button disabled className="custom-btn btn-16">
			<slot></slot>
		</button>
		<div className="progress-container">
			<div id="progress"></div>
		</div>
	</div>
`);
