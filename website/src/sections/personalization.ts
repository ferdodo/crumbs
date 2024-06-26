import { css } from "goober";
import { html } from "htm/preact";

import {
	background$,
	font$,
	getBackground,
	getFont,
	setBackground,
	setFont
} from "../states";

import { useObservableState } from "preact-observable-hooks";

export function Personalization() {
	const background = useObservableState(background$, getBackground);
	const font = useObservableState(font$, getFont);

	const personalizationClass = css`
		display: grid;
		grid-template-rows: auto 1fr;
		height: 100%;
	`;

	const radioClass = css`
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
		grid-gap: 0.5rem;

		& > div {
			display: grid;
			grid-template-columns: auto 1fr;
			place-content: center;
			text-align: center;
		}
	`;

	return html`
		<crumbs-panel panel-title="Personalization">
			<div className=${personalizationClass}>
				<crumbs-p>
					Some samples to demonstrate personalization.
				</crumbs-p>

				<crumbs-tabs>	
					<crumbs-p slot="title-1"> Background </crumbs-p>

					<div slot="content-1" class=${radioClass}>
						<div>
							<input type="radio" checked=${background === 1} onInput=${() => setBackground(1)}/>
							<crumbs-p> Dog </crumbs-p>
						</div>
						<div>
							<input type="radio" checked=${background === 2} onInput=${() => setBackground(2)}/>
							<crumbs-p> Abstract </crumbs-p>
						</div>
						<div>
							<input type="radio" checked=${background === 3} onInput=${() => setBackground(3)}/>
							<crumbs-p> Leaf </crumbs-p>
						</div>
						<div>
							<input type="radio" checked=${background === 4} onInput=${() => setBackground(4)}/>
							<crumbs-p> Cat </crumbs-p>
						</div>
						<div>
							<input type="radio" checked=${background === 5} onInput=${() => setBackground(5)}/>
							<crumbs-p> Pug </crumbs-p>
						</div>
						<div>
							<input type="radio" checked=${background === 6} onInput=${() => setBackground(6)}/>
							<crumbs-p> Crystal </crumbs-p>
						</div>
					</div>

					<crumbs-p slot="title-2"> Font </crumbs-p>

					<div slot="content-2" class=${radioClass}>
						<div>
							<input type="radio" checked=${font === "initial"} onInput=${() => setFont("initial")}/>
							<crumbs-p> Default </crumbs-p>
						</div>

						<div>
							<input type="radio" checked=${font === "monospace"} onInput=${() => setFont("monospace")}/>
							<crumbs-p> Monospace </crumbs-p>
						</div>

						<div>
							<input type="radio" checked=${font === "serif"} onInput=${() => setFont("serif")}/>
							<crumbs-p> Serif </crumbs-p>
						</div>

						<div>
							<input type="radio" checked=${font === "sans-serif"} onInput=${() => setFont("sans-serif")}/>
							<crumbs-p> Sans-serif </crumbs-p>
						</div>

						<div>
							<input type="radio" checked=${font === "cursive"} onInput=${() => setFont("cursive")}/>
							<crumbs-p> Cursive </crumbs-p>
						</div>

						<div>
							<input type="radio" checked=${font === "fantasy"} onInput=${() => setFont("fantasy")}/>
							<crumbs-p> Fantasy </crumbs-p>
						</div>

						<div>
							<input type="radio" checked=${font === "system-ui"} onInput=${() => setFont("system-ui")}/>
							<crumbs-p> System </crumbs-p>
						</div>
					</div>
				</crumbs-tabs>
			</div>
		</crumbs-panel>
	`;
}
