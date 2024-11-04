import type { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { getIndeterminateMinimumDurationMs } from "./get-indeterminate-minimum-duration";

export function mapButtonLoading() {
	return (
		source: Observable<[number | null, number, number | null, boolean]>
	) =>
		source.pipe(
			map(
				([
					progress,
					indeterminedLoadingTime,
					indeterminateDurationMs,
					indeterminateProgress
				]: [number | null, number, number | null, boolean]) => {
					const isRunningIndeterminateMinimalDuration =
						Number(indeterminateDurationMs) -
							getIndeterminateMinimumDurationMs() >
						indeterminedLoadingTime;

					if (isRunningIndeterminateMinimalDuration) {
						const totalDuration =
							Number(indeterminateDurationMs) -
							getIndeterminateMinimumDurationMs();

						const totalDuration1 = Math.max(totalDuration, 0);

						const progress = Math.ceil(
							(indeterminedLoadingTime / totalDuration1) * 100
						);

						return Math.min(100, progress);
					}

					if (indeterminateProgress) {
						return 0;
					}

					return progress || 0;
				}
			)
		);
}
