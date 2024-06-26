import { html } from "htm/preact";

export function GettingStarted() {
	const example = "&lt;crumbs-p&gt; Hello world ! &lt;/crumbs-p&gt;";

	return html`
		<crumbs-panel panel-title="Getting started">
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
