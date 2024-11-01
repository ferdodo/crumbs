import { screen } from "@testing-library/dom";
import { expect, test } from "vitest";
import { defineButtonCustomElement } from "./button";

defineButtonCustomElement();

test("Expect button to be enabled by default", async () => {
	await customElements.whenDefined("crumbs-button");
	const container = document.createElement("div");
	const dataTestid = Math.random().toString();
	container.innerHTML = `<crumbs-button data-testid="${dataTestid}"> content </crumbs-button>`;
	document.body.appendChild(container);

	expect(
		screen.getByTestId(dataTestid)?.shadowRoot?.querySelector("button")
			?.disabled
	).toBe(false);
});

test("Expect button to be disabled when having disabled attribute", async () => {
	await customElements.whenDefined("crumbs-button");
	const container = document.createElement("div");
	const dataTestid = Math.random().toString();
	container.innerHTML = `<crumbs-button data-testid="${dataTestid}" disabled> content </crumbs-button>`;
	document.body.appendChild(container);

	expect(
		screen.getByTestId(dataTestid)?.shadowRoot?.querySelector("button")
			?.disabled
	).toBe(true);
});
