// == Import npm
import React from "react";
// == Import Icones
import {
	UilTemperature,
	UilTear,
	UilWind,
	UilSun,
	UilSunset,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from "../../services/weatherService/.weatherService";
import propTypesLib from 'prop-types';

// == Component
function TemperatureAndDetails( {weather: {temp, temp_max, temp_min, details, icon, humidity, speed, feels_like, sunrise, sunset, timezone}, units} ) {
	
	// transforme l'unité en fonction de la valeur retournée par l'API
	if (units === "metric") {
		units = "°C"
	};
	if (units === "imperial") {
		units = "°F"
	};
	const temperature = Math.round(temp); // permet d'arrondir la temperature

	return (
		<div>
			<div className="flex items-center justify-center py-6 text-xl text-gray-200"/* Aspect general du temps*/>
				<p>{details}</p>
			</div>
			<div className="flex flex-row items-center justify-between text-white py-3 drop-shadow-md shadow-gray-900">
				<img
					className=" w-20"
					src= {iconUrlFromCode(icon)} /* Image du temps actuel*/
					alt=""
				/>
				<p className="text-5xl">{temperature} {units}</p>
				<div className="flex flex-col space-y-2">
					<div className="flex font-light text-sm items-center justify-center" /* Renvoie la temperature ressentie*/>
						<UilTemperature size={18} className="mr-1" />
						Real fell:
						<span className="font-medium ml-1">{feels_like}</span>
					</div>

					<div className="flex font-light text-sm items-center justify-center" /* Renvoie le taux d'humidité*/>
						<UilTear size={18} className="mr-1" />
						Humidity:
						<span className="font-medium ml-1">{humidity}%</span>
					</div>

					<div className="flex font-light text-sm items-center justify-center"/* Renvoie la vitesse du vent */>
						<UilWind size={18} className="mr-1" />
						Wind:
						<span className="font-medium ml-1">{speed} km/h</span>
					</div>
				</div>
			</div>

			<div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3 drop-shadow-md shadow-gray-900">
				
				<UilSun />
				<p className="font-light" /* Heure du levé du soleil*/>
					Rise:<span className="font-medium ml-1">{formatToLocalTime(sunrise, timezone, "hh:mma")}</span>
				</p>
                <p className="font-light">|</p>
                
                <UilSunset />
				<p className="font-light" /* Heure du coucher du soleil*/>
					Set:<span className="font-medium ml-1">{formatToLocalTime(sunset, timezone, "hh:mma")}</span>
				</p>
                <p className="font-light">|</p>

                <UilTemperature />
				<p className="font-light" /* Temperature maximale */>
					High:<span className="font-medium ml-1">{temp_max}{units}</span>
				</p>
                <p className="font-light">|</p>
                
                <UilTemperature/>
				<p className="font-light" /* Temperature minimale*/>
					Low:<span className="font-medium ml-1">{temp_min}{units}</span>
				</p>
                <p className="font-light">|</p>
			</div>
		</div>
	);
}

TemperatureAndDetails.propTypes = {
	weather: propTypesLib.shape({
			temp: propTypesLib.number.isRequired,
			temp_max: propTypesLib.number.isRequired,
			temp_min: propTypesLib.number.isRequired,
			details: propTypesLib.string.isRequired,
			icon: propTypesLib.string.isRequired,
			humidity: propTypesLib.number.isRequired,
			speed: propTypesLib.number.isRequired,
			feels_like: propTypesLib.number.isRequired,
			sunrise: propTypesLib.number.isRequired,
			sunset: propTypesLib.number.isRequired,
			timezone: propTypesLib.string,
			lat: propTypesLib.number.isRequired,
		}).isRequired,
	
	units: propTypesLib.string.isRequired,
	
}

// == Export
export default TemperatureAndDetails;
