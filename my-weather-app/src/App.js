// == Npm Imports
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// == Local Imports
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import getFormattedWeatherData from "./services/weatherService/.weatherService";
import Morning from "./components/Forecast/Morning";
import Afternoon from "./components/Forecast/Afternoon";

// Reuni les different components pour les afficher
function App() {
	const [query, setQuery] = useState({ q: "paris" });
	const [units, setUnits] = useState("metric");
	const [morning, setMorning] = useState(null);
	const [afternoon, setAfternoon] = useState(null);
	const [weather, setWeather] = useState(null);

	useEffect(() => {
		const fetchWeather = async () => {
			const message = query.q ? query.q : "current location";
			toast.info("Searching weather for " + message);

			await getFormattedWeatherData({ ...query, units }).then((data) => {
				toast.success(
					`Successfully get weather for ${data.name}, ${data.country}`
				);
				setWeather(data);
				setMorning(data.morningWeather);
				setAfternoon(data.afternoonWeather);
			});
		};
		fetchWeather();
	}, [query, units]);

	return (
		<div
			className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-500 to to-blue-900 h-fit shadow-xl shadow-gray-400 "
		>
			<TopButtons setQuery={setQuery} />
			<Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
			{weather && (
				<div>
					<TimeAndLocation weather={weather} />
					<TemperatureAndDetails weather={weather} units={units} />
					<h1 className="text-white text-2xl text-center py-2">
						Daily Forecast{" "}
					</h1>
					<Morning morningWeather={morning} units={units} />
					<Afternoon
						title="Afternoon"
						afternoonWeather={afternoon}
						units={units}
					/>
				</div>
			)}
			<ToastContainer autoClose={4000} theme="colored" newestOnTop={true} />
		</div>
	);
}

// == Export
export default App;
