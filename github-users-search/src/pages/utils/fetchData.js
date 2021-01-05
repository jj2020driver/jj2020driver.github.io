window.addEventListener('unhandledrejection', event => console.log(event.reason));

async function fetchData(searchTerm, page, currentData) {
	function reflect(promise){
	    return promise.then(function(value){ return {value: value, status: "fulfilled" }},
	                        function(error){ return {error: error, status: "rejected" }});
	}
	function combineWithCurrentData(currentData, newData) {
		if (!newData.length) {
			return currentData;
		} else {
			let ids = new Set(currentData.map(item => item.id));
			let merged = [...currentData, ...newData.filter(item => !ids.has(item.id))];
			return merged;
		}
	}
	function combineResults(...results) {
		if (results.length === 1) {
			return results;
		}
		// console.log(results);
		let merged = results[0];

		for(let i = 1; i < results.length; i++) {
			let ids = new Set(merged.map(item => item.id));
			merged = [...merged, ...results[i].filter(item => !ids.has(item.id))];
		}

		if (!merged.length) hasMore = false;

	    return combineWithCurrentData(currentData, merged)
	}


	let resultData = [];
	let hasMore = true;
	const urls = [
		`https://api.github.com/search/repositories?q=${searchTerm}&page=${page}`,
		`https://api.github.com/users/${searchTerm}/repos?page=${page}`,
		`https://api.github.com/orgs/${searchTerm}/repos?page=${page}`
	];
	const requests = [];

	urls.forEach(url => {
		requests.push(reflect(fetch(url, {
		    headers: {
		      authorization: "token e3b8cd4b4bb65209cfd5bb32a7f86107dba7b139"
		    }
		})));
	});

	await Promise.all(requests)
		.then(responses => Promise.all(responses.map(response => {
			if (!response.value.ok) {
				return [];
			} else {
				return response.value.json();
			}
		})))
		.then(responses => {
			resultData = combineResults(responses[0].items, responses[1], responses[2])
		});

	return { resultData, hasMore };
}

export default fetchData;




