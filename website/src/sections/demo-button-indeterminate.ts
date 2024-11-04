import { html } from "htm/preact";
import { useState } from "preact/hooks";
import { Demo } from "../components";

export function DemoButtonIndeterminate() {
	const [content, setContent] = useState("Click me !");
	const [indeterminate, setIndeterminate] = useState(false);
	const [indeterminateDuration, setIndeterminateDuration] = useState(2000);

	const codeTemplate = `
		&lt;crumbs-button
			${indeterminate ? "\tindeterminate-progress" : ""}
			${indeterminate ? `\tindeterminate-duration-ms="${indeterminateDuration}"` : ""}
			\t${content}
		&lt;/crumbs-button&gt;
	`;

	return html`
		<${Demo} title="Button indeterminate loading">
			<crumbs-button
				indeterminate-progress=${indeterminate}
				indeterminate-duration-ms=${indeterminateDuration}>
				${content}
			</crumbs-button>

			<div>
				<crumbs-input
					type="text"
					value=${content}
					onInput=${(e) => setContent(e.originalTarget.value)}/>


				<br/>

				<input type="checkbox" onInput=${() => setIndeterminate(!indeterminate)} />
				<label> Indeterminate loading </label>

				<br/>

				<crumbs-input
					type="text"
					value=${indeterminateDuration}
					onInput=${(e) => setIndeterminateDuration(Number(e.originalTarget.value))}/>
				<label> Indeterminate loading duration (ms) </label>
			</div>

			<code> <pre dangerouslySetInnerHTML=${{ __html: codeTemplate }}> </pre></code>
		<//>
	`;
}
