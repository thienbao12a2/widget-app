import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";
import { SuperSEO } from "react-super-seo";

const options = [
	{
		label: "Afrikaans",
		value: "af",
	},
	{
		label: "Arabic",
		value: "ar",
	},
	{
		label: "Hindi",
		value: "hi",
	},
];

const Translate = () => {
	const [language, setLanguage] = useState(options[0]);
	const [text, setText] = useState("");
	return (
		<div>
			<SuperSEO
				title="Translate"
				description="Translate languages to your native language"
			>
				<meta name="keywords" content="Translate" />
			</SuperSEO>
			<div className="ui form">
				<div className="field">
					<label>Enter Text</label>
					<input
						value={text}
						onChange={(event) => setText(event.target.value)}
						type="text"
					/>
				</div>
			</div>

			<Dropdown
				options={options}
				selected={language}
				onSelectedChange={setLanguage}
				label={"Select a Language"}
			/>
			<hr />
			<h3 className="ui hearder">Output</h3>
			<Convert text={text} language={language} />
		</div>
	);
};

export default Translate;
