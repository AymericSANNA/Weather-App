// == Import npm
import React from "react";
// == Import Externals
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
// == Import Local

// == Component
function Inputs() {
	return (
		// Div englobant l'ensemble des élements de l'input
		<div className="flex flex-row justify-center my-6 ">
			<div
				className="flex flex-row w-3/4 items-center justify-center space-x-4" /*div englobant l'input et les icones de search et location*/
			>
				<input
					type="text"
					className="text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase" /* input pour sélectionner les villes*/
					placeholder="Search for city ..."
				/>
				<UilSearch
					size={25}
					className=" text-white cursor-pointer transition ease-out hover: scale-125" /*search icon*/
				/>
				<UilLocationPoint
					size={25}
					className=" text-white cursor-pointer transition ease-out hover: scale-125" /* location icon*/
				/>
			</div>
			<div
				className="flex flex-row w-1/4 items-center justify-center" /* div englobant la selection des températures*/
			>
				<button
					name="metric"
					className="text-xl text-white font-light" /* bouton pour selectionner les °C */
				>
					°C
				</button>
				<p className="text-xl text-white mx-1" /* barre de separation */>|</p>
				<button
					name="imperial"
					className="text-xl text-white font-light" /* bouton pour selectionner les °F */
				>
					°F
				</button>
			</div>
		</div>
	);
}

// == Export
export default Inputs;
