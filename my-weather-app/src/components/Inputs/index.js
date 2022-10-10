// == Import npm
import React, { useState } from "react";
// == Import Externals
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { toast } from "react-toastify";

// == Import Local

// == Component
function Inputs({ setQuery, setUnits, units }) {
	//
	const [city, setCity] = useState("");
	// Handler
	const handleClick = () => {// vérifie que l'input ne soit pas vide avant de lancer la recherche au click (icone loupe)
		if (city !== "") {
			setQuery({ q: city })
			setCity(''); // vide le champs de l'input
		}; 
	};
	const handleChange = (event) => setCity(event.target.value); // permet d'attribuer la valeur de l'input dans le state city.
	
	const handleSubmit = (event) => {// vérifie que l'input ne soit pas vide avant de lancer la recherche au submit (touche entrée)
		event.preventDefault();
		if (city !== "") {
			setQuery({ q: city });
			setCity(''); // vide le champs de l'input
		} 
	};
	const handleLocation = () => {
		navigator.geolocation.getCurrentPosition((position) => {
			toast.success("Successfully get weather for your current location")
			let lat = position.coords.latitude;
			let lon = position.coords.longitude;
			setQuery({
				lat,
				lon,
			});
		});
	};

	const handleUnits = (event) => {
		const selectedUnit = event.currentTarget.name;
		if (units !== selectedUnit) setUnits(selectedUnit);
	}

	return (
		// Div englobant l'ensemble des élements de l'input
		<div className="flex flex-row justify-center my-6 ">
			<form
				className="flex flex-row w-3/4 items-center justify-center space-x-4" /*div englobant l'input et les icones de search et location*/
				onSubmit={handleSubmit}
			>
				<input
					value={city}
					onChange={handleChange}
					type="text"
					className="text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase" /* input pour sélectionner les villes*/
					placeholder="Search for city ..."
				/>
				<UilSearch
					size={25}
					className=" text-white cursor-pointer transition ease-out hover:scale-125" /*search icon*/
					onClick={handleClick}
				/>
				<UilLocationPoint
					size={25}
					className=" text-white cursor-pointer transition ease-out hover:scale-125" /* location icon*/
					onClick={handleLocation}
				/>
			</form>
			<div
				className="flex flex-row w-1/4 items-center justify-center" /* div englobant la selection des températures*/
			>
				<button
					name="metric"
					className="text-xl text-white font-light transition ease-out hover:scale-125" /* bouton pour selectionner les °C */
					onClick={handleUnits}					
				>
					°C
				</button>
				<p className="text-xl text-white mx-1" /* barre de separation */>|</p>
				<button
					name="imperial"
					className="text-xl text-white font-light transition ease-out hover:scale-125" /* bouton pour selectionner les °F */
					onClick={handleUnits}
				>
					°F
				</button>
			</div>
		</div>
	);
}

// == Export
export default Inputs;
