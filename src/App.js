import React from "react";
import axios from "axios";
import "./App.css";
import APODComp from "./components/APOD";

function App() {

	const [APOD, setAPOD] = React.useState({})

	React.useEffect(() => {
		// https://api.nasa.gov/planetary/apod?api_key=tsGCE22GDvhxJbssPpCtznaQVPqBI3QdAD71Zufp
		console.log(axios);

		axios.get("https://api.nasa.gov/planetary/apod?api_key=tsGCE22GDvhxJbssPpCtznaQVPqBI3QdAD71Zufp")
		.then((response)=>{
			console.log(response);
			return response.data;
		}).then((data)=> {
			setAPOD(data)
		})

		
		console.log("once");
		
		
	}, []);

	return (
		<div className="App">
			<p>🚀 🚀 🚀</p>

			<APODComp data={APOD} />
		</div>
	);
}

export default App;
