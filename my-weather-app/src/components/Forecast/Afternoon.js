// == Import npm
import React from "react";
import DailyWeather from "./DailyWeather";

// == Component
// Prediction sur les 5 prochains jours
function Afternoon({ afternoonWeather, units }) {
	// transforme l'unité en fonction de la valeur retournée par l'API
	if (units === "metric") {
		units = "°C"
	};
	if (units === "imperial") {
		units = "°F"
	};
    let id = 0;
	afternoonWeather.forEach(element => {
		element["id"] = id++;
	});  
	return (
		<div>
			<div className="flex items-center justify-start mt-3">
				<p className=" text-white font-medium uppercase">Afternoon</p>
			</div>
			<hr className="my-2" /*Ligne de séparation*/ />
			<div className="flex flex-row ic justify-between text-white">
				{afternoonWeather.map((weather) => (
					<DailyWeather key={weather.id} units={units} {...weather} />
				))}
			</div>
		</div>
	);
}

// == Export
export default Afternoon;
