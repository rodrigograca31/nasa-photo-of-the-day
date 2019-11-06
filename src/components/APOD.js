import React from "react";
import "./APOD.scss";

const APODComp = (props) => {

	return (
		<div id="data">
			{/* {JSON.stringify(props.data)} */}
			<h1>{props.data.title}</h1>
			{/* I should deal with 'media_types' but Im lazy */}
			<img src={props.data.url} alt={props.data.title}/>
			<p>{props.data.explanation}</p>
		</div>
	);
}

export default APODComp;