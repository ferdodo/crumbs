import { Subject } from "rxjs";

let background = 4;
const _background = new Subject<number>();

export const background$ = _background.asObservable();

export function getBackground() {
	return background;
}

export function setBackground(n: number) {
	background = n;
	_background.next(n);
}
