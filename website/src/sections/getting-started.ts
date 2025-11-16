import { css } from "goober";
import { html } from "htm/preact";

export function GettingStarted({ order }) {
	const example = "&lt;crumbs-p&gt; Hello world ! &lt;/crumbs-p&gt;";

	const tabStyle = css`
		max-height: 70cqh;
	`;

	return html`
		<span slot=${`title-${order}`}> Getting started</span>
		<crumbs-panel panel-title="Getting started" slot=${`content-${order}`} className=${tabStyle}>
			<crumbs-p>
				<b>Installation</b>

				<code block>
npm i crumbs-design-system
				</code>

				<b>JavaScript usage</b>

				<code block>
import "crumbs-design-system";
				</code>

				<b>HTML usage</b>

				<code
					block
					dangerouslySetInnerHTML=${{ __html: example }}
				>
				</code>

			</crumbs-p>
		</crumbs-panel>
	`;
}
