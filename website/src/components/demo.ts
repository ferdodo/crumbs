import { css } from "goober";
import { html } from "htm/preact";

interface DemoProps {
	title: string;
	children: Element[] | Element[][];
}

const contentStyle = css`
	height: 95%;
	display: grid;
	place-content: center;
`;

export function Demo({ title, children }: DemoProps) {
	return html`
		<crumbs-panel panel-title=${title}>
			<crumbs-tabs style="height: 100%;">
				<span slot="title-1"> Demo </span>
				<div className=${contentStyle} slot="content-1">${children[0]}</div>
				<span slot="title-2"> Parameters </span>
				<div className=${contentStyle} slot="content-2">${children[1]}</div>
				<span slot="title-3"> Code </span>
				<div className=${contentStyle} slot="content-3">${children[2]}</div>
			</crumbs-tabs>
		</crumbs-panel>
	`;
}
