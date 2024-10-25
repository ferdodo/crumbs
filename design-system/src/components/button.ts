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

declare global {
	export namespace JSX {
		export interface IntrinsicElements {
			[tagName]: { progress?: string };
		}
	}
}

class Button extends HTMLElement {
	clickSubscription: Subscription | null = null;
	_progress = "0";
	_indeterminate_progress = false;
	_indeterminate_duration_ms = 0;
	_disabled = false;
	_progressSubject = new Subject<string | null>();
	_disabledSubject = new Subject<string | null>();
	_indeterminateProgressSubject = new Subject<string | null>();
	_indeterminateDurationMsSubject = new Subject<string | null>();

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
		this._progress = this.getAttribute("progress") || "0";
		shadowRoot.appendChild(template.content.cloneNode(true));
		this.render();
	}

	attributeChangedCallback(name: string) {
		if (this.shadowRoot) {
			const progress: string | null = this.getAttribute("progress");
			const disabled: string | null = this.getAttribute("disabled");

			const indeterminateProgress: string | null = this.getAttribute(
				"indeterminate-progress"
			);

			this._indeterminate_progress =
				indeterminateProgress !== null && indeterminateProgress !== "false";

			const indeterminateDurationMs: string | null = this.getAttribute(
				"indeterminate-duration-ms"
			);

			this._indeterminate_duration_ms =
				Number.isInteger(Number(indeterminateDurationMs)) &&
				Number.isFinite(Number(indeterminateDurationMs))
					? Number(indeterminateDurationMs)
					: 0;

			this._disabled =
				(disabled !== null && disabled !== "false") ||
				(progress !== null && progress !== "100");

			if (isProgressValid(progress)) {
				this._progress = progress === null ? "0" : progress;
			}

			this.render();

			switch (name) {
				case "progress":
					this._progressSubject.next(this.getAttribute("progress"));
					break;
				case "disabled":
					this._disabledSubject.next(this.getAttribute("disabled"));
					break;
				case "indeterminate-progress":
					this._indeterminateProgressSubject.next(
						this.getAttribute("indeterminate-progress")
					);
					break;
				case "indeterminate-duration-ms":
					this._indeterminateDurationMsSubject.next(
						this.getAttribute("indeterminate-duration-ms")
					);
					break;
				default:
					throw new Error("Unknown attribute !");
			}
		}
	}

	render() {
		const shadowRoot = getShadowRoot(this);
		const progress = getElement(shadowRoot, "#progress");
		const button = getElement(shadowRoot, "button");

		if (button instanceof HTMLButtonElement) {
			button.disabled = this._disabled;
		}

		progress.style.width = `${this._progress}%`;
	}

	disconnectedCallback() {
		this.clickSubscription?.unsubscribe();
	}

	observeLastIndeterminedLoadingTime(): Observable<number> {
		return this._indeterminateProgressSubject.pipe(
			startWith(null),
			map((value) => value !== null && value !== "false"),
			pairwise(),
			filter(([previous, current]) => current && !previous),
			map(() => Date.now())
		);
	}

	observeLoading(): Observable<string> {
		return combineLatest(
			this._progressSubject.pipe(startWith(null)),
			this.observeLastIndeterminedLoadingTime(),
			this._indeterminateDurationMsSubject.pipe(startWith(null)),
			this._indeterminateProgressSubject.pipe(startWith(null))
		).pipe(
			mergeMap(
				([
					progress,
					lastIndeterminedLoadingTime,
					indeterminateDurationMs,
					indeterminateProgress
				]) => {
					if (
						indeterminateProgress !== null &&
						indeterminateProgress !== "false"
					) {
						if (
							lastIndeterminedLoadingTime !== null &&
							Number.isFinite(Number(lastIndeterminedLoadingTime)) &&
							Number.isInteger(Number(lastIndeterminedLoadingTime)) &&
							lastIndeterminedLoadingTime !== null
						) {
							return interval(100).pipe(
								map(() => {
									const now = Date.now();
									const duration = now - lastIndeterminedLoadingTime;

									return String(
										Math.ceil(
											Math.min(100, duration / Number(indeterminateDurationMs))
										)
									);
								})
							);
						}

						return of("0");
					}

					if (isProgressValid(progress)) {
						return of(progress || "0");
					}

					return of("100");
				}
			)
		);
	}
}

function isProgressValid(progress: string | null): boolean {
	if (progress === null) {
		return true;
	}

	const progressAsNumber: number = Number(progress);
	const rounded: number = Math.floor(progressAsNumber);

	return (
		rounded === progressAsNumber &&
		Number.isInteger(rounded) &&
		Number.isFinite(rounded) &&
		rounded <= 100 &&
		rounded >= 0
	);
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
