import { html } from "htm/preact";
import { Demo } from "../components";

export function DemoNav({ order }) {
	const codeTemplate = `&lt;crumbs-nav&gt;
	&lt;crumbs-p
		slot=&quot;title-1&quot;&gt;
		Tab title
	&lt;/crumbs-p&gt;
	&lt;crumbs-p
		slot=&quot;content-1&quot;&gt;
		Tab content
	&lt;/crumbs-p&gt;
	&lt;crumbs-p
		slot=&quot;title-2&quot;&gt;
		Tab title 2
	&lt;/crumbs-p&gt;
	&lt;crumbs-p
		slot=&quot;content-2&quot;&gt;
		Tab content 2
	&lt;/crumbs-p&gt;
	&lt;span slot=&quot;navigation-toggle&quot;&gt; :: &lt;/span&gt;
&lt;/crumbs-nav&gt;
	`;

	return html`
		<${Demo} title="Nav" order=${order}>
			<crumbs-nav>
				<crumbs-p
					slot="title-1">
					Tab title
				</crumbs-p>
				<crumbs-p
					slot="content-1">
					Tab content
				</crumbs-p>
				<crumbs-p
					slot="title-2">
					Tab title 2
				</crumbs-p>
				<crumbs-p
					slot="content-2">
					Tab content 2
				</crumbs-p>
				<span slot="navigation-toggle"> :: </span>
			</crumbs-nav>

			<div>
				<crumbs-p>no params</crumbs-p>
			</div>

			<code> <pre dangerouslySetInnerHTML=${{ __html: codeTemplate }}> </pre></code>
		<//>
	`;
}
