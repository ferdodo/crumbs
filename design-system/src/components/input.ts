import htm from "htm/mini";
import h from "hyperscript";
import { createTemplate, getElement, getShadowRoot } from "../utils";

const html = htm.bind(h);
const tagName = "crumbs-input";

declare global {
	export namespace JSX {
		export interface IntrinsicElements {
			[tagName]: {
				value: string;
			};
		}
	}
}

const template = createTemplate(html`
	<style>
		:host {
			display: block;
		}

		input {
			font-size: 1rem;
			font-family: inherit;
			background-color: transparent;
			padding: 0.4rem;
			border-radius: 10px;
			border-color: transparent;
			padding: 10px 25px;

			box-shadow: inset 2px 2px 6px 0px rgba(0, 0, 0, 0.29),
				inset -2px -2px 3px #ffffffa8,
				2px 2px 1px 0px #ffffff1c,
				-2px -2px 1px rgba(0, 0, 0, 0.02);

			border-width: 0;
			margin: 0.1rem;
		}

		@media screen and (min-width: 800px) {
			input {
				font-size: 1.4rem;
			}
		}

		input:focus, input:focus-visible {
			outline: none;
		}
	</style>

	<input type="text"/>
`);

class Input extends HTMLElement {
	static get observedAttributes() {
		return ["value"];
	}

	async connectedCallback() {
		this.attachShadow({ mode: "open" });
		const shadowRoot = getShadowRoot(this);
		const clonedTemplate = template.content.cloneNode(true);
		shadowRoot.appendChild(clonedTemplate);
		const input = getElement(shadowRoot, "input");
		const value = this.getAttribute("value");

		if (input instanceof HTMLInputElement && value) {
			input.value = value;
		}
	}

	attributeChangedCallback(name: string, oldValue: string, newValue: string) {
		if (name === "value" && this.shadowRoot) {
			const shadowRoot = getShadowRoot(this);
			const input = getElement(shadowRoot, "input");

			if (input instanceof HTMLInputElement) {
				input.value = newValue;
			}
		}
	}
}

customElements.define(tagName, Input);
