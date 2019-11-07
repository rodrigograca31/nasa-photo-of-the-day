import React from "react";
import "./APOD.scss";

const APODComp = (props) => {

	React.useEffect(() => {
		return (() => {
			setLoading(true);
			console.log("unmount");
		})
	}, []);

	const [loading, setLoading] = React.useState(true);

	React.useEffect(()=> {
		setLoading(true);
	}, [props.data.hdurl]);

	const finishedLoading = () => {
		console.log("f l");
		setLoading(false);
	}

	return (
		<div id="data">
			{/* {JSON.stringify(props.data)} */}
			<h1>{props.data.title}</h1>
			{/* I should deal with 'media_types' but Im lazy */}
			<div>
				<div className="spinner">
					{loading && <img src="./imgs/spinner.png" alt="" />}
				</div>
				<img src={props.data.hdurl} alt={props.data.title} onLoad={() => { finishedLoading() }} />
			</div>
			<p>{props.data.explanation.slice(0, 200)}......</p>
		</div>
	);
}

export default APODComp;