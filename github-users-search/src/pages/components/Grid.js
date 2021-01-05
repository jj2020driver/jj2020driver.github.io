import { useState, useContext } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Context } from "../../context";
import fetchData from "../utils/fetchData";
import GridBlock from "./GridBlock";

function Grid() {
	const {
		searchProduced,
		searchResultsIsLoading,
		inputValue,
		searchResults,
		setSearchResults,
		requestPage,
		setRequestPage
	} = useContext(Context);
	const [isMore, setIsMore] = useState(true);

	let items = [];
	if (searchResults) {
		items = searchResults.map(item => {
			return (
				<GridBlock
					key={item.id}
					html_url={item.html_url}
					full_name={item.full_name}
					language={item.language}
					description={item.description}
				/>
			)
		});
	}

	function fetchNewData() {
		fetchData(inputValue, requestPage+1, searchResults)
			.then(({ resultData, hasMore }) => {
				// console.log(resultData);
				setSearchResults(resultData);
				setRequestPage(prevRequestPage => prevRequestPage + 1);
				setIsMore(hasMore);
			});
	}

	return (
		<>
			{ searchResultsIsLoading 
				? <div className="preloader"><div className="preloader-dots"><span className="preloader-dots__dot"></span><span className="preloader-dots__dot"></span><span className="preloader-dots__dot"></span></div></div>
				:  items.length
					? (<div className="grid">
							<InfiniteScroll
								dataLength={items.length} //This is important field to render the next data
								next={fetchNewData}
								hasMore={isMore}
								loader={
									<div className="loading-status">Loading more...</div>
								}
								endMessage={
									<div className="loading-status"><b>That's all!</b></div>
								}
							>
								{ items }
							</InfiniteScroll>
						</div>)
					: searchProduced && <div className="search-empty">Nothing found for this query</div>
			}
		</>
	);
}

export default Grid;