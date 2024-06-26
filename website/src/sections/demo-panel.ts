import { html } from "htm/preact";
import { useCallback, useState } from "preact/hooks";
import { Demo } from "../components";

export function DemoPanel() {
	const [content, setContent] = useState("I'm a panel !");
	const [title, setTitle] = useState("");
	const [loading, setLoading] = useState("100");
	const [isSimulating, setIsSimulating] = useState(false);

	const codeTemplate = `&lt;crumbs-panel\n\tpanel-title="${title}"\n\tpanel-loading="${loading}"&gt;\n\t${content}\n&lt;/crumbs-panel&gt;`;

	const simulateProgress = useCallback(async () => {
		if (isSimulating) return;

		setIsSimulating(true);
		setLoading("0");

		for (let value = 0; value <= 100; value += 0.1 + (100 - value) / 100) {
			await new Promise((resolve) => setTimeout(resolve, 10));
			setLoading(Math.floor(value).toString());
		}

		setLoading("100");
		setIsSimulating(false);
	}, [isSimulating]);

	const handleClick = () => {
		if (!isSimulating) {
			simulateProgress();
		}
	};

	return html`
		<${Demo} title="Panel">
			<div style="padding: 5rem">
				<crumbs-panel
					panel-loading=${loading}
					panel-title=${title}>
					${content}
				</crumbs-panel>
			</div>

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

				<crumbs-p> Loading </crumbs-p>

				<input
					type="range"
					value=${loading}
					onInput=${(e) => setLoading(String(e.target.value))}
					min="0"
					max="100"
				/>

				<br/>

				<crumbs-button onClick=${handleClick}> Simulate loading </crumbs-button>
			</div>

			<code> <pre dangerouslySetInnerHTML=${{ __html: codeTemplate }}> </pre></code>
		<//>
	`;
}
