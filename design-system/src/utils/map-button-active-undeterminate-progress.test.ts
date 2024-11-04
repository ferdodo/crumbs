import { firstValueFrom, from, of } from "rxjs";
import { expect, test } from "vitest";
import { mapButtonActiveUndeterminateProgress } from "./map-button-active-undeterminate-progress";

test("Defaults to false when progress is not finished", async function () {
	const indeterminateProgress = false;
	const progress = 50;
	const indeterminedLoadingTime = 0;
	const indeterminateDurationMs = null;

	const source$ = of(<[boolean, number, number, number | null]>[
		indeterminateProgress,
		progress,
		indeterminedLoadingTime,
		indeterminateDurationMs
	]);

	const result$ = source$.pipe(mapButtonActiveUndeterminateProgress());
	const result = await firstValueFrom(result$);
	expect(result).toBe(false);
});

test("Is true when progress is finished but there is time left", async function () {
	const indeterminateProgress = false;
	const progress = 100;
	const indeterminedLoadingTime = 1400;
	const indeterminateDurationMs = 2000;

	const source$ = of(<[boolean, number, number, number | null]>[
		indeterminateProgress,
		progress,
		indeterminedLoadingTime,
		indeterminateDurationMs
	]);

	const result$ = source$.pipe(mapButtonActiveUndeterminateProgress());
	const result = await firstValueFrom(result$);
	expect(result).toBe(true);
});

test("Is false when progress is finished but there is no time left", async function () {
	const indeterminateProgress = false;
	const progress = 100;
	const indeterminedLoadingTime = 2400;
	const indeterminateDurationMs = 2000;

	const source$ = of(<[boolean, number, number, number | null]>[
		indeterminateProgress,
		progress,
		indeterminedLoadingTime,
		indeterminateDurationMs
	]);

	const result$ = source$.pipe(mapButtonActiveUndeterminateProgress());
	const result = await firstValueFrom(result$);
	expect(result).toBe(false);
});

test("Is false when progress is finished but time is exactly the duration", async function () {
	const indeterminateProgress = false;
	const progress = 100;
	const indeterminedLoadingTime = 2000;
	const indeterminateDurationMs = 2000;

	const source$ = of(<[boolean, number, number, number | null]>[
		indeterminateProgress,
		progress,
		indeterminedLoadingTime,
		indeterminateDurationMs
	]);

	const result$ = source$.pipe(mapButtonActiveUndeterminateProgress());
	const result = await firstValueFrom(result$);
	expect(result).toBe(false);
});

test("Is false when progress is not finished but there is time left", async function () {
	const indeterminateProgress = false;
	const progress = 50;
	const indeterminedLoadingTime = 1400;
	const indeterminateDurationMs = 2000;

	const source$ = of(<[boolean, number, number, number | null]>[
		indeterminateProgress,
		progress,
		indeterminedLoadingTime,
		indeterminateDurationMs
	]);

	const result$ = source$.pipe(mapButtonActiveUndeterminateProgress());
	const result = await firstValueFrom(result$);
	expect(result).toBe(false);
});
