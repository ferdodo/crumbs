import { Subject } from "rxjs";

let font = "initial";
const _font = new Subject<string>();

export const font$ = _font.asObservable();

export function getFont() {
	return font;
}

export function setFont(n: string) {
	font = n;
	_font.next(n);
}
