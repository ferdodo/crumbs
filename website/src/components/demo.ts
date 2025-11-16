import { css } from "goober";
import { html } from "htm/preact";

interface DemoProps {
	title: string;
	children: Element[] | Element[][];
	order: number;
}

const panelStyle = css`
	height: 70cqh;
`;

const contentStyle = css`
	min-height: 95%;
	display: grid;
	align-content: space-evenly;
`;

const frameStyle = css`
	display: grid;
	justify-content: center;
`;

export function Demo({ title, children, order }: DemoProps) {
	return html`
		<span slot=${`title-${order}`}>${title}</span>
		<crumbs-panel panel-title=${title} slot=${`content-${order}`} className=${panelStyle}>
			<crumbs-tabs style="height: 100%;">
				<span slot="title-1"> Demo </span>
				<div className=${contentStyle} slot="content-1">
					<crumbs-frame className=${frameStyle}>
						${children[0]}
					</crumbs-frame>
					<crumbs-frame className=${frameStyle}>
						<crumbs-p>
							<h3>Parameters</h3>
						</crumbs-p>
						${children[1]}
					</crumbs-frame>
				</div>
				<span slot="title-3"> Code </span>
				<div className=${contentStyle} slot="content-3">${children[2]}</div>
			</crumbs-tabs>
		</crumbs-panel>
	`;
}
