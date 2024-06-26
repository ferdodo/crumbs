import {
	type Observable,
	combineLatest,
	filter,
	first,
	fromEvent,
	map,
	mapTo,
	merge
} from "rxjs";

function isWindowVisible(): boolean {
	return !document.hidden;
}

function visibleAndFocusedObservable(): Observable<boolean> {
	const visibilityChange$ = fromEvent(document, "visibilitychange");
	const focus$ = fromEvent(window, "focus").pipe(mapTo(true));
	const blur$ = fromEvent(window, "blur").pipe(mapTo(false));
	const focused$ = merge(focus$, blur$);

	return combineLatest(visibilityChange$, focused$).pipe(
		map(([, focused]) => isWindowVisible() && focused),
		filter((visible) => visible),
		first()
	);
}

const mouseOverDocument$ = fromEvent(document, "mouseover");

async function waitVisible() {
	if (isWindowVisible()) {
		return;
	}

	await Promise.race([
		visibleAndFocusedObservable().toPromise(),
		mouseOverDocument$.toPromise()
	]);
}

async function waitAppReady() {
	await new Promise((r) => setTimeout(r, 400));
	await waitVisible();
	await new Promise((r) => setTimeout(r, 400));
}

export const appReady = waitAppReady();
