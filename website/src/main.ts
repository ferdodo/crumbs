import "crumbs-design-system";
import { css } from "goober";
import { html } from "htm/preact";
import { render } from "preact";
import { useObservableState } from "preact-observable-hooks";
import { background$, font$, getBackground, getFont } from "./states";

import {
	About,
	DemoButton,
	DemoInput,
	DemoP,
	DemoPanel,
	DemoTabs,
	GettingStarted,
	Personalization
} from "./sections";
import { DemoNav } from "./sections/demo-nav";

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
		z-index: -999;
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

		<crumbs-nav class=${sectionClass}>
			<${About} order=${1}><//>
			<${GettingStarted} order=${2}><//>
			<${Personalization} order=${3}><//>
			<${DemoP} order=${4}><//>
			<${DemoPanel} order=${5}><//>
			<${DemoInput} order=${6}><//>
			<${DemoTabs} order=${7}><//>
			<${DemoButton} order=${8}><//>
			<${DemoNav} order=${9}><//>
			<span slot="navigation-toggle"> :: </span>
		</crumbs-nav>
	`;
}

render(html`<${Main}><//>`, document.body);
