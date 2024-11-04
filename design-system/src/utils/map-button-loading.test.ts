import { firstValueFrom, from, of } from "rxjs";
import { expect, test } from "vitest";
import { mapButtonLoading } from "./map-button-loading";

test("Defaults to 0 on unspecified progress", async function () {
	const progress = null;
	const indeterminedLoadingTime = 0;
	const indeterminateDurationMs = null;
	const indeterminateProgress = false;

	const source$ = of(<[number | null, number, number | null, boolean]>[
		progress,
		indeterminedLoadingTime,
		indeterminateDurationMs,
		indeterminateProgress
	]);

	const result$ = source$.pipe(mapButtonLoading());
	const result = await firstValueFrom(result$);
	expect(result).toBe(0);
});

test("Should be progress on nominal case", async function () {
	const progress = 25;
	const indeterminedLoadingTime = 0;
	const indeterminateDurationMs = null;
	const indeterminateProgress = false;

	const source$ = of(<[number | null, number, number | null, boolean]>[
		progress,
		indeterminedLoadingTime,
		indeterminateDurationMs,
		indeterminateProgress
	]);

	const result$ = source$.pipe(mapButtonLoading());
	const result = await firstValueFrom(result$);
	expect(result).toBe(25);
});

test("Should be 100 on indeterminate progress without ongoing minimal progress", async function () {
	const progress = 50;
	const indeterminedLoadingTime = 0;
	const indeterminateDurationMs = null;
	const indeterminateProgress = true;

	const source$ = of(<[number | null, number, number | null, boolean]>[
		progress,
		indeterminedLoadingTime,
		indeterminateDurationMs,
		indeterminateProgress
	]);

	const result$ = source$.pipe(mapButtonLoading());
	const result = await firstValueFrom(result$);
	expect(result).toBe(100);
});

test("Should have an ongoing progress when indeterminate progress is ongoing under minimal time", async function () {
	const progress = 25;
	const indeterminedLoadingTime = 500;
	const indeterminateDurationMs = 2000;
	const indeterminateProgress = true;

	const source$ = of(<[number | null, number, number | null, boolean]>[
		progress,
		indeterminedLoadingTime,
		indeterminateDurationMs,
		indeterminateProgress
	]);

	const result$ = source$.pipe(mapButtonLoading());
	const result = await firstValueFrom(result$);
	expect(result).toBe(50);
});

test("Should should be back to progress when indeterminate duration is over and reset", async function () {
	const progress = 25;
	const indeterminedLoadingTime = 2500;
	const indeterminateDurationMs = 2000;
	const indeterminateProgress = false;

	const source$ = of(<[number | null, number, number | null, boolean]>[
		progress,
		indeterminedLoadingTime,
		indeterminateDurationMs,
		indeterminateProgress
	]);

	const result$ = source$.pipe(mapButtonLoading());
	const result = await firstValueFrom(result$);
	expect(result).toBe(25);
});

test("Removing the duration while ongoing undeterminate progress should cancel the thing", async function () {
	const progress = 25;
	const indeterminedLoadingTime = 500;
	const indeterminateDurationMs = null;
	const indeterminateProgress = true;

	const source$ = of(<[number | null, number, number | null, boolean]>[
		progress,
		indeterminedLoadingTime,
		indeterminateDurationMs,
		indeterminateProgress
	]);

	const result$ = source$.pipe(mapButtonLoading());
	const result = await firstValueFrom(result$);
	expect(result).toBe(100);
});

test("Should be finished when loading time is exactly the indeterminate duration", async function () {
	const progress = 25;
	const indeterminedLoadingTime = 2000;
	const indeterminateDurationMs = 2000;
	const indeterminateProgress = true;

	const source$ = of(<[number | null, number, number | null, boolean]>[
		progress,
		indeterminedLoadingTime,
		indeterminateDurationMs,
		indeterminateProgress
	]);

	const result$ = source$.pipe(mapButtonLoading());
	const result = await firstValueFrom(result$);
	expect(result).toBe(100);
});
