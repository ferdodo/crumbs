import { html } from "htm/preact";
import { useState } from "preact/hooks";
import { Demo } from "../components";

export function DemoInput({ order }) {
	const [content, setContent] = useState("I'm an input !");
	const codeTemplate = `&lt;crumbs-input\n\tvalue="${content}"\n\tplaceholder="Enter text..."\n&gt;\n&lt;/crumbs-input&gt;`;

	return html`
		<${Demo} title="Input" order=${order}>
			<crumbs-input
				value=${content}
				placeholder="Enter text..."
				oninput=${(e) => setContent(e.originalTarget.value)}
			/>

			<div>
				<crumbs-p>Input's value</crumbs-p>

				<crumbs-input
					value=${content}
					placeholder="Enter text..."
					oninput=${(e) => setContent(e.originalTarget.value)}
				/>
			</div>

			<code> <pre dangerouslySetInnerHTML=${{ __html: codeTemplate }}> </pre></code>
		<//>
	`;
}
