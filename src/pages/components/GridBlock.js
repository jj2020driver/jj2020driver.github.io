import PropTypes from "prop-types";

function GridBlock({ html_url, full_name, language, description }) {
	return (
		<div className="grid-block">
			<h3 className="grid-block__title"><a href={html_url} target="_blank">{ full_name }</a></h3>
			{
				language
				&& <div className="grid-block__info">Language: <span className="grid-block__info__value">{ language }</span></div>
			}
			{
				description
				&& <div className="grid-block__info">Description: <span className="grid-block__info__value">{ description }</span></div>
			}
		</div>
	);
}

GridBlock.defaultProps = {
	full_name: ""
}

GridBlock.propTypes = {
	html_url: PropTypes.string.isRequired,
	full_name: PropTypes.string.isRequired,
	language: PropTypes.string,
	description: PropTypes.string
}

export default GridBlock;