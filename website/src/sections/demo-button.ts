import { html } from "htm/preact";
import { useCallback, useState } from "preact/hooks";
import { Demo } from "../components";

export function DemoButton() {
	const [content, setContent] = useState("Click me !");
	const [progress, setProgress] = useState("100");
	const [isSimulating, setIsSimulating] = useState(false);

	const simulateProgress = useCallback(async () => {
		if (isSimulating) return;

		setIsSimulating(true);
		setProgress("0");

		for (let value = 0; value <= 100; value += 0.1 + (100 - value) / 100) {
			await new Promise((resolve) => setTimeout(resolve, 10));
			setProgress(Math.floor(value).toString());
		}

		setProgress("100");
		setIsSimulating(false);
	}, [isSimulating]);

	const handleClick = () => {
		if (!isSimulating) {
			simulateProgress();
		}
	};

	const codeTemplate = `&lt;crumbs-button progress="${progress}" &gt; ${content} &lt;/crumbs-button&gt;`;

	return html`
		<${Demo} title="Button">
			<crumbs-button progress=${progress} loading=${progress} data-testid=${progress}> ${content} </crumbs-button>

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

				<crumbs-button onClick=${handleClick}>
					Simulate progress
				</crumbs-button>
			</div>

			<code> <pre dangerouslySetInnerHTML=${{ __html: codeTemplate }}> </pre></code>
		<//>
	`;
}
