import React, { useState } from "react";
import { SuperSEO } from "react-super-seo";
import { LinkPreview } from "@dhaiwat10/react-link-preview";
const items = [
	{
		title: "What is React",
		content: "React is a front end javascript framework",
		video: "https://www.youtube.com/watch?v=N3AkSS5hXMA",
	},
	{
		title: "Why use React",
		content: "React is a favorite JS library among engineers",
		video: "https://www.youtube.com/watch?v=yAbnoYfV99g",
	},
	{
		title: "How do you use React",
		content: "You use React by creating Components",
		video: "https://www.youtube.com/watch?v=MRIMT0xPXFI",
	},
];

const Accordian = () => {
	const [activeIndex, setActiveIndex] = useState(null);

	const onTitleClick = (index) => {
		setActiveIndex(index);
	};

	const renderedItem = items.map((item) => {
		const active = items.indexOf(item) === activeIndex ? "active" : "";
		return (
			<React.Fragment key={item.title}>
				<SuperSEO
					title="React Instruction"
					description="Instruction how to use React"
				/>
				<div
					className={`${active} title`}
					onClick={() => onTitleClick(items.indexOf(item))}
				>
					<i className="dropdown icon"></i>
					{item.title}
				</div>
				<div className={`${active} content`}>
					<p>{item.content}</p>
					<LinkPreview url={item.video} width="390px" />
				</div>
			</React.Fragment>
		);
	});
	return <div className="ui styled accordion">{renderedItem}</div>;
};

export default Accordian;
