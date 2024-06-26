import { html } from "htm/preact";
import { useState } from "preact/hooks";
import { Demo } from "../components";

export function DemoTabs() {
	const [content, setContent] = useState("Tab content");
	const [title, setTitle] = useState("Tab title");
	const [content2, setContent2] = useState("Tab content 2");
	const [title2, setTitle2] = useState("Tab title 2");
	const codeTemplate = `&lt;crumbs-tabs&gt;\n\t&lt;crumbs-p\n\t\tslot="title-1"&gt;\n\t\t${title}\n\t&lt;/crumbs-p&gt;\n\t&lt;crumbs-p\n\t\tslot="content-1"&gt;\n\t\t${content}\n\t&lt;/crumbs-p&gt;\n\t&lt;crumbs-p\n\t\tslot="title-2"&gt;\n\t\t${title2}\n\t&lt;/crumbs-p&gt;\n\t&lt;crumbs-p\n\t\tslot="content-2"&gt;\n\t\t${content2}\n\t&lt;/crumbs-p&gt;\n&lt;/crumbs-panel&gt;`;

	return html`
		<${Demo} title="Tabs">
			<crumbs-tabs>
				<crumbs-p slot="title-1"> ${title} </crumbs-p>
				<crumbs-p slot="content-1"> ${content} </crumbs-p>
				<crumbs-p slot="title-2"> ${title2} </crumbs-p>
				<crumbs-p slot="content-2"> ${content2} </crumbs-p>
			</crumbs-panel>

			<div>
				<crumbs-p>Title</crumbs-p>

				<crumbs-input
					type="text"
					value=${title}
					onInput=${(e) => setTitle(e.originalTarget.value)}
				/>

				<crumbs-p>Content</crumbs-p>

				<crumbs-input
					type="text"
					value=${content}
					onInput=${(e) => setContent(e.originalTarget.value)}
				/>

				<crumbs-p>Title 2</crumbs-p>

				<crumbs-input
					type="text"
					value=${title2}
					onInput=${(e) => setTitle2(e.originalTarget.value)}
				/>

				<crumbs-p>Content 2</crumbs-p>

				<crumbs-input
					type="text"
					value=${content2}
					onInput=${(e) => setContent2(e.originalTarget.value)}
				/>
			</div>

			<code> <pre dangerouslySetInnerHTML=${{ __html: codeTemplate }}> </pre></code>
		<//>
	`;
}
