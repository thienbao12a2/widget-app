import React, { useState, useEffect } from "react";
import wikipedia from "./Wikipedia";
import { SuperSEO } from "react-super-seo";

const Search = () => {
	const [term, setTerm] = useState("");
	const [results, setResult] = useState([]);

	useEffect(() => {
		const search = async () => {
			const data = await wikipedia.get(
				"https://en.wikipedia.org/w/api.php",
				{
					params: {
						srsearch: term,
					},
				}
			);
			setResult(data.data.query.search);
		};

		if (term && !results.length) {
			search();
		} else {
			const timeId = setTimeout(() => {
				if (term) {
					search();
				}
			}, 500);
			return () => {
				clearTimeout(timeId);
			};
		}
	}, [term]);

	const renderedResults = results.map((result) => {
		return (
			<div key={result.pageid} className="item">
				<div className="right floated content">
					<a
						className="ui button"
						href={`https://en.wikipedia.org?curid=${result.pageid}`}
					>
						Go
					</a>
				</div>
				<div className="content">
					<div className="header">{result.title}</div>
					<span
						dangerouslySetInnerHTML={{ __html: result.snippet }}
					></span>
				</div>
			</div>
		);
	});

	const onFormSubmit = (event) => {
		event.preventDefault();
	};

	const onInputChange = (event) => {
		setTerm(event.target.value);
	};

	return (
		<div>
			<SuperSEO
				title="Search Wikipedia"
				description="Search for anything on Wikipedia"
			/>
			<form className="ui form" onSubmit={onFormSubmit}>
				<div className="field">
					<label>Search</label>
					<input
						type="text"
						value={term}
						placeholder="Search for something cool"
						onChange={onInputChange}
					/>
				</div>
			</form>
			<div className="ui celled list">{renderedResults}</div>
		</div>
	);
};

export default Search;
