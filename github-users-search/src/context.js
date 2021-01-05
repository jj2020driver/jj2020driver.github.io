import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider(props) {
	const [searchProduced, setSearchProduced] = useState(false);
	const [searchResultsIsLoading, setSearchResultsIsLoading] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const [history, setHistory] = useState([]);
	const [requestPage, setRequestPage] = useState(1);

	function addToHistory(item) {
		let trimmedItem = item.trim();
		setHistory(prevHistory => {
			let updatedHistory = [];
			if (prevHistory.includes(trimmedItem)) {
				updatedHistory = [trimmedItem, ...prevHistory.filter(i => i !== trimmedItem)];
			} else {
				updatedHistory = [trimmedItem, ...prevHistory];
				if (updatedHistory.length > 5) {
					updatedHistory.length = 5;
				}
			}

			localStorage.setItem('history', JSON.stringify(updatedHistory));
			return updatedHistory;
		});
	}

	useEffect(() => {
		const history = JSON.parse(localStorage.getItem('history'));
		if (history) {
			setHistory(history);
		}
	}, []);

	return (
		<Context.Provider
			{...props}
			value={{
				searchProduced,
				setSearchProduced,
				searchResultsIsLoading,
				setSearchResultsIsLoading,
				inputValue,
				setInputValue,
				searchResults,
				setSearchResults,
				history,
				addToHistory,
				requestPage,
				setRequestPage
			}}
		>
			{props.children}
		</Context.Provider>
	)
}

export {ContextProvider, Context};