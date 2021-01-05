import { useState, useEffect, useContext } from "react";
import { Context } from "../../context";

function History() {
	const {
		setSearchResults,
		setInputValue
	} = useContext(Context);
	const [savedHistory, setSavedHistory] = useState("");
	const [historyHTML, setHistoryHTML] = useState(null);

	function searchForQuery(query) {
		setInputValue(query);
	}

	useEffect(() => {
		const history = JSON.parse(localStorage.getItem("history"));
		setSavedHistory(history);
	}, []);

	useEffect(() => {
		if (savedHistory && savedHistory.length) {
			setHistoryHTML(
				<div className="history">
					<h4 className="title">Search history:</h4>
					{	
						<ul>
							{ savedHistory.map((item, index) => <li key={index}><span onClick={() => searchForQuery(item)}>{ item }</span></li>) }
						</ul>
					}
				</div>
			);
		}
	}, [savedHistory]);
	return historyHTML;
}

export default History;