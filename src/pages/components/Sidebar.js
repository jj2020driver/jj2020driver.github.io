import SearchForm from "./SearchForm";
import History from "./History";

function Sidebar() {
	return (
		<aside className="sidebar">
			<SearchForm />
			<History />
		</aside>
	);
}

export default Sidebar;