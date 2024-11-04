import "crumbs-design-system";
import { css } from "goober";
import { html } from "htm/preact";
import { render } from "preact";
import { useObservableState } from "preact-observable-hooks";
import { background$, font$, getBackground, getFont } from "./states";

import {
	About,
	DemoButton,
	DemoButtonIndeterminate,
	DemoInput,
	DemoP,
	DemoPanel,
	DemoTabs,
	GettingStarted,
	Personalization
} from "./sections";

function Main() {
	const background = useObservableState(background$, getBackground);
	const font = useObservableState(font$, getFont);

	const backgroundClass = css`
		background-image: url('bg${background}.jpg');
		background-size: cover;
		min-height: 100vh;
		position: fixed;
		min-width: 100vw;
		background-position: center;
	`;

	const sectionClass = css`
		display: grid;
		overflow-y: scroll;
		height: 100vh;
		grid-template-columns: repeat(auto-fit, minmax(max(28rem + 6vw), 1fr));
		font-family: ${font};
	`;

	return html`
		<div class=${backgroundClass}></div>

		<div class=${sectionClass}>
			<${About}><//>
			<${GettingStarted}><//>
			<${Personalization}><//>
			<${DemoP}><//>
			<${DemoPanel}><//>
			<${DemoInput}><//>
			<${DemoTabs}><//>
			<${DemoButton}><//>
			<${DemoButtonIndeterminate}><//>
		</div>
	`;
}

render(html`<${Main}><//>`, document.body);
