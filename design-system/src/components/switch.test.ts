import { within } from "@testing-library/dom";
import { describe, beforeAll, expect, test } from "vitest";
import { generateShadowRootFirstHTMLElement as html } from "../utils/generate-shadow-root-first-html-element";
import { defineSwitchCustomElement } from "./switch";

describe("<crumbs-switch>", () => {
	beforeAll(async () => {
		await defineSwitchCustomElement();
	});

	test("should be unchecked by default", async () => {
		const switchElement = html`<crumbs-switch></crumbs-switch>`;
		const checkbox: HTMLInputElement = within(switchElement).getByRole("checkbox", {
			hidden: true,
		});
		expect(checkbox.checked).toBe(false);
	});

	test("should be checked when having checked attribute", async () => {
		const switchElement = html`<crumbs-switch checked></crumbs-switch>`;
		const checkbox: HTMLInputElement = within(switchElement).getByRole("checkbox", {
			hidden: true,
		});
		expect(checkbox.checked).toBe(true);
	});

	test("should be checked when having checked='true'", async () => {
		const switchElement = html`<crumbs-switch checked="true"></crumbs-switch>`;
		const checkbox: HTMLInputElement = within(switchElement).getByRole("checkbox", {
			hidden: true,
		});
		expect(checkbox.checked).toBe(true);
	});

	test("should be enabled by default", async () => {
		const switchElement = html`<crumbs-switch></crumbs-switch>`;
		const checkbox: HTMLInputElement = within(switchElement).getByRole("checkbox", {
			hidden: true,
		});
		expect(checkbox.disabled).toBe(false);
	});

	test("should be disabled when having disabled attribute", async () => {
		const switchElement = html`<crumbs-switch disabled></crumbs-switch>`;
		const checkbox: HTMLInputElement = within(switchElement).getByRole("checkbox", {
			hidden: true,
		});
		expect(checkbox.disabled).toBe(true);
	});

	test("should dispatch change event when checkbox is toggled", async () => {
		const switchElement = html`<crumbs-switch></crumbs-switch>`;
		const checkbox: HTMLInputElement = within(switchElement).getByRole("checkbox", {
			hidden: true,
		});

		let changeEventFired = false;
		switchElement.addEventListener("change", () => {
			changeEventFired = true;
		});

		checkbox.click();
		expect(changeEventFired).toBe(true);
	});

	test("should compose event bubbles through shadow DOM", async () => {
		const switchElement = html`<crumbs-switch></crumbs-switch>`;
		const checkbox: HTMLInputElement = within(switchElement).getByRole("checkbox", {
			hidden: true,
		});

		let eventReceived = false;
		document.addEventListener(
			"change",
			() => {
				eventReceived = true;
			},
			{ once: true }
		);

		checkbox.click();
		expect(eventReceived).toBe(true);
	});
});
