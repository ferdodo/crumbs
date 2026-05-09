import htm from "htm/mini";
import h from "hyperscript";
import { createTemplate, getElement, getShadowRoot } from "../utils";

const html = htm.bind(h);
const tagName = "crumbs-switch";

declare global {
	export namespace JSX {
		export interface IntrinsicElements {
			[tagName]: {
				checked?: boolean;
				disabled?: boolean;
			};
		}
	}
}

const template = createTemplate(html`
	<style>
		:host {
			display: inline-block;
		}

		.switch {
			display: grid;
			grid-template: 1fr / 1fr;
			align-items: center;
			justify-items: center;
			width: 50px;
			height: 28px;
			cursor: pointer;
			user-select: none;
		}

		.switch input[type="checkbox"] {
			grid-column: 1;
			grid-row: 1;
			width: 100%;
			height: 100%;
			margin: 0;
			appearance: none;
			cursor: pointer;
		}

		.toggle {
			grid-column: 1;
			grid-row: 1;
			width: 100%;
			height: 100%;
			border-radius: 14px;
			background-color: transparent;
			transition: background-color 0.3s ease;
			box-shadow: inset 2px 2px 6px 0px rgba(0, 0, 0, 0.29),
				inset -2px -2px 3px #ffffffa8,
				2px 2px 1px 0px #ffffff1c,
				-2px -2px 1px rgba(0, 0, 0, 0.02);
			pointer-events: none;
		}

		.thumb {
			grid-column: 1;
			grid-row: 1;
			width: 24px;
			height: 24px;
			background-color: #ffffffc4;
			border-radius: 50%;
			align-self: center;
			justify-self: start;
			margin-left: 2px;
			transform: translateX(0);
			transition: transform 0.3s ease;
			box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
			pointer-events: none;
		}

		.switch input[type="checkbox"]:checked ~ .toggle {
			background-color:rgba(255, 255, 255, 0.62);
		}

		.switch input[type="checkbox"]:checked ~ .thumb {
			transform: translateX(22px);
			background-color: #ffffff;
		}

		.switch input[type="checkbox"]:disabled ~ .toggle {
			opacity: 0.5;
			cursor: not-allowed;
		}

		.switch input[type="checkbox"]:disabled ~ .thumb {
			background-color: #ffffff6e;
		}

		.switch input:disabled {
			cursor: not-allowed;
		}
	</style>

	<label className="switch">
		<input type="checkbox"/>
		<div className="toggle"></div>
		<div className="thumb"></div>
	</label>
`);

class Switch extends HTMLElement {
	static get observedAttributes() {
		return ["checked", "disabled"];
	}

	async connectedCallback() {
		this.attachShadow({ mode: "open" });
		const shadowRoot = getShadowRoot(this);
		const clonedTemplate = template.content.cloneNode(true);
		shadowRoot.appendChild(clonedTemplate);

		const checkbox = getElement(shadowRoot, 'input[type="checkbox"]');
		
		if (checkbox instanceof HTMLInputElement) {
			const checked = this.hasAttribute("checked");
			const disabled = this.hasAttribute("disabled");
			
			checkbox.checked = checked;
			checkbox.disabled = disabled;

			checkbox.addEventListener("change", (event) => {
				const newChecked = (event.target as HTMLInputElement).checked;
				this.setAttribute("checked", newChecked ? "true" : "");
				this.dispatchEvent(
					new CustomEvent("change", {
						detail: { checked: newChecked },
						bubbles: true,
						composed: true,
					})
				);
			});
		}
	}

	attributeChangedCallback(name: string, _oldValue: string | null, newValue: string | null) {
		if (!this.shadowRoot) return;
		
		const shadowRoot = getShadowRoot(this);
		const checkbox = getElement(shadowRoot, 'input[type="checkbox"]');

		if (checkbox instanceof HTMLInputElement) {
			if (name === "checked") {
				checkbox.checked = newValue === "true" || newValue === "";
			} else if (name === "disabled") {
				checkbox.disabled = newValue !== null;
			}
		}
	}
}

customElements.define(tagName, Switch);

export async function defineSwitchCustomElement() {
	if (customElements.get(tagName) === undefined) {
		customElements.define(tagName, Switch);
	}

	await customElements.whenDefined(tagName);
}
