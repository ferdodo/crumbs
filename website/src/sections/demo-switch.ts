import { html } from "htm/preact";
import { useState } from "preact/hooks";
import { Demo } from "../components";

export function DemoSwitch({ order }) {
	const [checked, setChecked] = useState(false);
	const [disabled, setDisabled] = useState(false);

	const codeTemplate = `&lt;crumbs-switch
	${checked ? "checked" : ""}
	${disabled ? "disabled" : ""}&gt;
&lt;/crumbs-switch&gt;`;

	return html`
		<${Demo} title="Switch" order=${order}>
			<crumbs-switch
				checked=${checked}
				disabled=${disabled}
				onchange=${(e) => setChecked(e.detail.checked)}
			/>

			<div>
				<crumbs-p>Controls</crumbs-p>

				<div>
					<input
						type="checkbox"
						id="disabled-checkbox"
						onInput=${() => setDisabled(!disabled)}
					/>
					<label for="disabled-checkbox"> Disabled </label>
				</div>

				<div>
					<crumbs-p>State: ${checked ? "ON" : "OFF"}</crumbs-p>
				</div>
			</div>

			<code> <pre dangerouslySetInnerHTML=${{ __html: codeTemplate }}> </pre></code>
		<//>
	`;
}
