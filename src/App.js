import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { Schema } from "./components/Schema";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import PickColor from "./components/PickColor";
import Translate from "./components/Translate";

const App = () => {
	return (
		<div className="ui container">
			<Schema />

			<BrowserRouter>
				<Header />
				<Routes>
					<Route exact path="/" element={<Accordion />} />

					<Route exact path="/list" element={<Search />} />

					<Route exact path="/dropdown" element={<PickColor />} />

					<Route exact path="/translate" element={<Translate />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
