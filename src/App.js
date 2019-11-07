import React from "react";
import "./App.scss";
import APODComp from "./components/APOD";
import axios from "axios";

import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
// import { } from "@material-ui/core/";
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers/';
import DateFnsUtils from '@date-io/date-fns';
import { setDay } from "date-fns";

const theme = createMuiTheme({
	palette: {
		primary: purple
	}
});

function App() {

	const [APOD, setAPOD] = React.useState({})
	const [date, setDate] = React.useState(new Date())

	const [days, setDays] = React.useState(0)

	React.useEffect(() => {
		// https://api.nasa.gov/planetary/apod?api_key=tsGCE22GDvhxJbssPpCtznaQVPqBI3QdAD71Zufp
		console.log(date.toISOString().slice(0, 10));

		// const newDate = (new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * (days))).toISOString().slice(0, 10);
		// setDate(newDate)

		axios.get("https://api.nasa.gov/planetary/apod?api_key=tsGCE22GDvhxJbssPpCtznaQVPqBI3QdAD71Zufp&date=" + date.toISOString().slice(0, 10))
		.then((response) => {
			console.log(response);
			return response.data;
		}).then((data) => {
			setAPOD(data)
		})

		console.log("once");

	}, [date]);

	const newDate = (dir) => {
		console.log("new date");
		setAPOD({});
		if (dir === "prev") {
			setDate(new Date(date.getTime() - 1000 * 60 * 60 * 24));
		} else {
			setDate(new Date(date.getTime() + 1000 * 60 * 60 * 24));
		}
	}

	const dateChanged = (date) => {
		console.log(date);
		setAPOD({});
		setDate(date)
	}

	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<p>🚀 🚀 🚀</p>
				<div className="buttons">
					<Button variant="contained" color="primary" onClick={() => newDate("prev")}>⬅️ Prev Dat</Button>
					
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<KeyboardDatePicker
							disableToolbar
							variant="inline"
							format="MM/dd/yyyy"
							margin="normal"
							id="date-picker-inline"
							label="Date picker inline"
							value={date}
							KeyboardButtonProps={{
								'aria-label': 'change date',
							}}
							onChange={dateChanged}
						/>
					</MuiPickersUtilsProvider>

					<Button variant="contained" color="primary" onClick={() => newDate("next")}>Next Date ➡️</Button>
				</div>
				{
					JSON.stringify(APOD) !== "{}" && <APODComp setAPOD={setAPOD} data={APOD} />
				}
			</div>
		</ThemeProvider>
	);
}

export default App;
