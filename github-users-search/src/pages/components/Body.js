import Sidebar from "./Sidebar";
import Main from "./Main";

function Body() {
	return (
		<section className="section-search">
			<div className="pwr"><div className="pct">
			
				<Sidebar />
				<Main />

			</div></div>
		</section>
	);
}

export default Body;