import type { Observable } from "rxjs";
import { map } from "rxjs/operators";

export function mapButtonActiveUndeterminateProgress() {
	return (source: Observable<[boolean, number, number, number | null]>) =>
		source.pipe(
			map(
				([
					indeterminateLoading,
					progress,
					indeterminedLoadingTime,
					indeterminateDurationMs
				]: [boolean, number, number, number | null]) => {
					if (!indeterminedLoadingTime) {
						return false;
					}

					if (
						progress !== 100 &&
						progress !== 0 &&
						indeterminateDurationMs !== null
					) {
						return false;
					}

					return (
						indeterminedLoadingTime < Number(indeterminateDurationMs) ||
						indeterminateLoading
					);
				}
			)
		);
}
