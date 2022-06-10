import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { SuperSEO } from "react-super-seo";

const options = [
	{
		label: "The Color Red",
		value: "red",
	},
	{
		label: "The Color Green",
		value: "green",
	},
	{
		label: "A Shade of Blue",
		value: "blue",
	},
];

const PickColor = () => {
	const [selected, setSelected] = useState(options[0]);
	const [showDropdown, setShowDropdown] = useState(true);
	return (
		<div>
			<SuperSEO
				title="Pick Color"
				description="Pick a Color that you like"
			/>
			<button
				className="ui primary button"
				onClick={() => setShowDropdown(!showDropdown)}
			>
				Toggle Dropdown
			</button>
			{showDropdown ? (
				<Dropdown
					options={options}
					selected={selected}
					onSelectedChange={setSelected}
					label="Select a Color"
				/>
			) : null}
		</div>
	);
};

export default PickColor;
