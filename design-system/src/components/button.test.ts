import { within } from "@testing-library/dom";
import { beforeAll, expect, test } from "vitest";
import { generateShadowRootFirstHTMLElement as html } from "../utils/generate-shadow-root-first-html-element";
import { defineButtonCustomElement } from "./button";

beforeAll(async () => {
	defineButtonCustomElement();
	await customElements.whenDefined("crumbs-button");
});

test("Expect button to be enabled by default2", async () => {
	const button = html`<crumbs-button> content </crumbs-button>`;
	const innerButton: HTMLButtonElement = within(button).getByRole("button");
	expect(innerButton.disabled).toBe(false);
});

test("Expect button to be disabled when having disabled attribute2", async () => {
	const button = html`<crumbs-button disabled> content </crumbs-button>`;
	const innerButton: HTMLButtonElement = within(button).getByRole("button");
	expect(innerButton.disabled).toEqual(true);
});
