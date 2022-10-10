// == Import npm
import React from "react";
import DailyWeather from "./DailyWeather";
import propTypesLib from "prop-types";
// == Component
// Prediction sur les 5 prochains jours
function Morning({ morningWeather, units }) {
	// transforme l'unité en fonction de la valeur retournée par l'API
	if (units === "metric") {
		units = "°C"
	};
	if (units === "imperial") {
		units = "°F"
	};
	let id = 0;
	morningWeather.forEach(element => {
		element["id"] = id++;
	});
	return (
		<div>
			<div className="flex items-center justify-start mt-3">
				<p className=" text-white font-medium uppercase">Morning</p>
			</div>
			<hr className="my-2" /*Ligne de séparation*/ />
			<div className="flex flex-row ic justify-between text-white">
				{morningWeather.map((weather) => (
					<DailyWeather key={weather.id} units={units} {...weather} />
				))}
			</div>
		</div>
	);
}

Morning.propTypes = {
	units: propTypesLib.string.isRequired,
}

// == Export
export default Morning;
