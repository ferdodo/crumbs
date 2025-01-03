import { html } from "htm/preact";
import { useState } from "preact/hooks";
import { Demo } from "../components";

export function DemoButton() {
	const [content, setContent] = useState("Click me !");
	const [progress, setProgress] = useState("100");
	const [disabled, setDisabled] = useState(false);

	const codeTemplate = `
		&lt;crumbs-button
			${disabled ? "\tdisabled" : ""}
			\tprogress="${progress}"&gt;
			\t${content}
		&lt;/crumbs-button&gt;
	`;

	return html`
		<${Demo} title="Button">
			<crumbs-button
				progress=${progress}
				disabled=${disabled}>
				${content}
			</crumbs-button>

			<div>
				<crumbs-input
					type="text"
					value=${content}
					onInput=${(e) => setContent(e.originalTarget.value)}/>

				<input
					type="range"
					value=${progress}
					onInput=${(e) => setProgress(String(e.target.value))}
					min="0"
					max="100"/>

				<br/>

				<input type="checkbox" onInput=${() => setDisabled(!disabled)} />
				<label> Disabled </label>

			</div>

			<code> <pre dangerouslySetInnerHTML=${{ __html: codeTemplate }}> </pre></code>
		<//>
	`;
}
