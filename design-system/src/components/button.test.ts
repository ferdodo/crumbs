import { within } from "@testing-library/dom";
import { map } from "rxjs/operators";
import { TestScheduler } from "rxjs/testing";
import { beforeAll, expect, test } from "vitest";
import { generateShadowRootFirstHTMLElement as html } from "../utils/generate-shadow-root-first-html-element";
import { defineButtonCustomElement } from "./button";

beforeAll(async () => {
	await defineButtonCustomElement();
});

test("Expect button to be enabled by default", async () => {
	const button = html`<crumbs-button> content </crumbs-button>`;
	const innerButton: HTMLButtonElement = within(button).getByRole("button");
	expect(innerButton.disabled).toBe(false);
});

test("Expect button to be disabled when having disabled attribute", async () => {
	const button = html`<crumbs-button disabled> content </crumbs-button>`;
	const innerButton: HTMLButtonElement = within(button).getByRole("button");
	expect(innerButton.disabled).toEqual(true);
});

test("Expect button to be loading when having loading attribute", async () => {
	const button = html`<crumbs-button progress="50"> content </crumbs-button>`;
	const progress = within(button).getByRole("progressbar");
	const value = progress.getAttribute("value");
	expect(value).toEqual("50");
});
