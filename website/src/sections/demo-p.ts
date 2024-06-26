import { html } from "htm/preact";
import { useState } from "preact/hooks";
import { Demo } from "../components";

export function DemoP() {
	const [content, setContent] = useState("I'm a <b>paragraph</b> !");

	return html`
		<${Demo} title="Paragraph">
			<div>
				<crumbs-p dangerouslySetInnerHTML=${{ __html: content }}>
				</crumbs-p>

				<crumbs-p>Here's an <code> inlineCode() </code>.</crumbs-p>

				<crumbs-p>
					Here's then a block of code:
					
					<code block>
function logNumbers() {
	console.log(1);
	console.log(2);
	console.log(3);
}
					</code>
				</crumbs-p>

				<crumbs-p>
					Here's a <span style="color: purple;">purple</span> word.
				</crumbs-p>
			</div>
			<crumbs-input type="text" value=${content} onInput=${(e) => setContent(e.originalTarget.value)} />
			<code> <pre dangerouslySetInnerHTML=${{ __html: `&lt;crumbs-p&gt; ${content} &lt;/crumbs-p&gt;` }}> </pre></code>
		<//>
	`;
}
