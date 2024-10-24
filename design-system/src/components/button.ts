import htm from "htm";
import h from "hyperscript";
import type { Subscription } from "rxjs";
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
			cursor: pointer;
			transition: all 0.3s ease;
			position: relative;
			box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
			7px 7px 20px 0px rgba(0,0,0,.1),
			4px 4px 5px 0px rgba(0,0,0,.1);
			outline: none;
			grid-area: 2 / 2 / 3 / 3;
			user-select: none;
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

class Button extends HTMLElement {
	clickSubscription: Subscription | null = null;
	_progress = "0";
	_disabled = false;

	static get observedAttributes() {
		return ["progress", "disabled"];
	}

	async connectedCallback() {
		this.attachShadow({ mode: "open" });
		const shadowRoot = getShadowRoot(this);
		this._progress = this.getAttribute("progress") || "0";
		shadowRoot.appendChild(template.content.cloneNode(true));
		this.render();
	}

	attributeChangedCallback() {
		if (this.shadowRoot) {
			const progress: string | null = this.getAttribute("progress");
			const disabled: string | null = this.getAttribute("disabled");

			this._disabled =
				(disabled !== null && disabled !== "false") ||
				(progress !== null && progress !== "100");

			if (isProgressValid(progress)) {
				this._progress = progress === null ? "0" : progress;
			}

			this.render();
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
