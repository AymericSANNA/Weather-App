// == Import npm
import React from "react";
// == Import Icones
import {
	UilArrowUp,
	UilArrowDown,
	UilTemperature,
	UilTear,
	UilWind,
	UilSun,
	UilSunset,
} from "@iconscout/react-unicons";

// == Component
function TemperatureAndDetails() {
	return (
		<div>
			<div className="flex items-center justify-center py-6 text-xl text-cyan-300"/* Aspect general du temps*/>
				<p>Cloudy or whatever</p>
			</div>
			<div className="flex flex-row items-center justify-between text-white py-3">
				<img
					className=" w-20"
					src="http://openweathermap.org/img/wn/01d@2x.png" /* Image du temps actuel*/
					alt=""
				/>
				<p className="text-5xl">34°</p>
				<div className="flex flex-col space-y-2">
					<div className="flex font-light text-sm items-center justify-center" /* Renvoie la temperature ressentie*/>
						<UilTemperature size={18} className="mr-1" />
						Real fell:
						<span className="font-medium ml-1">32°</span>
					</div>

					<div className="flex font-light text-sm items-center justify-center" /* Renvoie le taux d'humidité*/>
						<UilTear size={18} className="mr-1" />
						Humidity:
						<span className="font-medium ml-1">65%</span>
					</div>

					<div className="flex font-light text-sm items-center justify-center"/* Renvoie la vitesse du vent */>
						<UilWind size={18} className="mr-1" />
						Wind:
						<span className="font-medium ml-1">15 km/h</span>
					</div>
				</div>
			</div>

			<div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
				<UilSun />
				<p className="font-light" /* Heure du levé du soleil*/>
					Rise:<span className="font-medium ml-1">06:45 AM</span>
				</p>
                <p className="font-light">|</p>
                
                <UilSunset />
				<p className="font-light" /* Heure du coucher du soleil*/>
					Set:<span className="font-medium ml-1">07:45 PM</span>
				</p>
                <p className="font-light">|</p>

                <UilSun />
				<p className="font-light" /* Temperature maximale */>
					High:<span className="font-medium ml-1">45°</span>
				</p>
                <p className="font-light">|</p>
                
                <UilSun />
				<p className="font-light" /* Temperature minimale*/>
					Low:<span className="font-medium ml-1">40°</span>
				</p>
                <p className="font-light">|</p>
			</div>
		</div>
	);
}

// == Export
export default TemperatureAndDetails;
