import React from "react";
import "./APOD.scss";
import styled from 'styled-components';

const Div = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
`;

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
			<Div>
				<Div className="spinner">
					{loading && <img src="./imgs/spinner.png" alt="" />}
				</Div>
				<img src={props.data.hdurl} alt={props.data.title} onLoad={() => { finishedLoading() }} />
			</Div>
			<p>{props.data.explanation.slice(0, 200)}......</p>
		</div>
	);
}

export default APODComp;