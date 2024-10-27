import { html } from "htm/preact";
import { useCallback, useState } from "preact/hooks";
import { Demo } from "../components";

export function DemoButton() {
	const [content, setContent] = useState("Click me !");
	const [progress, setProgress] = useState("100");
	const [disabled, setDisabled] = useState(false);
	const [indeterminate, setIndeterminate] = useState(false);
	const [indeterminateDuration, setIndeterminateDuration] = useState(2000);

	const codeTemplate = `
		&lt;crumbs-button
			${disabled ? "\tdisabled" : ""}
			${indeterminate ? "\tindeterminate-progress" : ""}
			${indeterminate ? `\tindeterminate-duration-ms="${indeterminateDuration}"` : ""}
			\tprogress="${progress}"&gt;
			\t${content}
		&lt;/crumbs-button&gt;
	`;

	return html`
		<${Demo} title="Button">
			<crumbs-button
				progress=${progress}
				loading=${progress}
				disabled=${disabled}
				indeterminate-progress=${indeterminate}
				indeterminate-duration-ms=${indeterminateDuration}
				data-testid=${progress}>
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
