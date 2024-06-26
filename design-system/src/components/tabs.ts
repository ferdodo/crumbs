import htm from "htm/mini";
import h from "hyperscript";
import { type Subscription, fromEvent } from "rxjs";
import { createTemplate, getShadowRoot } from "../utils";

const html = htm.bind(h);
const tagName = "crumbs-tabs";

declare global {
	export namespace JSX {
		export interface IntrinsicElements {
			[tagName]: undefined;
		}
	}
}

const template = createTemplate(html`
	<style>
		:host {
			display: block;
		}

		.selected-title {
			background: linear-gradient(0deg, rgba(255, 255, 255, 0.46) 0%, rgba(255, 255, 255, 0.44) 100%);
			border-radius: 0.3rem;
		}

		#tabs {
			display: flex;
			justify-content: space-around;

			& > div {
				padding: 10px;
				cursor: pointer;
				width: 100%;
				text-align: center;
				user-select: none;
			}
		}

		#content {
			display: grid;
			grid-auto-flow: column;
			overflow: scroll;
			grid-auto-columns: 100%;
			scroll-snap-type: x mandatory;
			scroll-behavior: smooth;
			-ms-overflow-style: none;
			scrollbar-width: none;

			& > div {
				scroll-snap-align: start;
			}
		}

		#content::-webkit-scrollbar {
			display: none;
		}

		#container {
			display: grid;
			grid-template-rows: 1fr auto;
			height: 100%;
		}
	</style>

	<div id="container">
		<div id="content"></div>
		<div id="tabs"></div>
	</div>
`);

class Tabs extends HTMLElement {
	selected = 1;
	subscriptions: Subscription[] = [];

	async connectedCallback() {
		this.attachShadow({ mode: "open" });
		const shadowRoot = getShadowRoot(this);
		const clonedTemplate = template.content.cloneNode(true);
		shadowRoot.appendChild(clonedTemplate);
		const selected = this.getAttribute("selected");
		this.selected = Number.parseInt(selected || "1");
		const tabs = shadowRoot.querySelector("#tabs");
		const content = shadowRoot.querySelector("#content");

		if (!tabs) {
			throw new Error("Tabs not found");
		}

		if (!content) {
			throw new Error("Content not found");
		}

		for (const slotName of { [Symbol.iterator]: () => this.getSlots() }) {
			if (slotName.startsWith("content-")) {
				const slot = html`<div id=${`${slotName}`}> <slot name=${slotName}></slot> </div>`;

				if (slot instanceof Element) {
					content.appendChild(slot);
				}
			}

			if (slotName.startsWith("title-")) {
				const slot = html`<div id=${slotName}> <crumbs-p> <slot name=${slotName}></slot> </crumbs-p> </div>`;

				if (slot instanceof Element) {
					tabs.appendChild(slot);
				}
			}
		}

		this.subscriptions = [...tabs.children].map((title, index) => {
			return fromEvent(title, "click").subscribe(() => {
				const contentName = title.id.replace("title-", "content-");
				const targetElement = shadowRoot.querySelector(`#${contentName}`);

				if (
					targetElement instanceof HTMLElement &&
					content instanceof HTMLElement
				) {
					targetElement.scrollIntoView({
						behavior: "smooth",
						block: "nearest",
						inline: "center"
					});
				}

				this.selected = index + 1;
				this.render();
			});
		});

		this.render();
	}

	render() {
		const shadowRoot = getShadowRoot(this);
		const tabs = shadowRoot.querySelector("#tabs");

		if (!tabs) {
			throw new Error("Tabs not found");
		}

		[...tabs.children].forEach((title, index) => {
			if (index + 1 === this.selected) {
				if (title instanceof HTMLElement) {
					title.classList.add("selected-title");
				}
			} else {
				if (title instanceof HTMLElement) {
					title.classList.remove("selected-title");
				}
			}
		});
	}

	disconnectedCallback() {
		for (const subscription of this.subscriptions) {
			subscription.unsubscribe();
		}
	}

	*getSlots(): Iterator<string> {
		for (const child of Array.from(this.children)) {
			const slot = child.getAttribute("slot");

			if (slot) {
				yield slot;
			}
		}
	}
}

customElements.define(tagName, Tabs);
