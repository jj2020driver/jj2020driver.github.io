import { useState, useEffect, useContext } from "react";
import { DebounceInput } from "react-debounce-input";
import { Context } from "../../context";
import fetchData from "../utils/fetchData";

function SearchForm() {
	const {
		setSearchProduced,
		searchResultsIsLoading,
		setSearchResultsIsLoading,
		inputValue,
		setInputValue,
		searchResults,
		setSearchResults,
		history,
		addToHistory
	} = useContext(Context);

	function handleChange({ target: { value } }) {
		setInputValue(value);
	}
	function handleSubmit(e) {
		e.preventDefault();
		submitSearch();
	}
	function submitSearch() {
		if (inputValue.trim().length >= 3) {
			addToHistory(inputValue);
			setSearchProduced(true);
			setSearchResultsIsLoading(true);
			setSearchResults([]);

			fetchData(inputValue, 1, [])
				.then(({ resultData }) => {
					// console.log(resultData);
					setSearchResultsIsLoading(false);
					setSearchResults(resultData);
				});
		}
	}

	useEffect(() => {
		submitSearch();
	}, [ inputValue ]);

	return (
		<form onSubmit={handleSubmit}>
			<DebounceInput
			  placeholder="Search Github for..."
			  className="input"
	          minLength={3}
	          debounceTimeout={800}
	          value={inputValue}
	          onChange={handleChange} />
		</form>
	);
}

export default SearchForm;