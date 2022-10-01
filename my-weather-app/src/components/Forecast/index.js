// == Import npm
import React from "react";

// == Component
// Prediction sur les 5 prochains jours
function Forecast({title}) {
	return (
		<div>
			<div className="flex items-center justify-start mt-6">
				<p className=" text-white font-medium uppercase">{title}</p>
			</div>
			<hr className="my-2" /*Ligne de séparation*//> 

      <div className="flex flex-row ic justify-between text-white">
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">04:30 PM</p>
          <img
					className=" w-12 my-1"
					src="http://openweathermap.org/img/wn/01d@2x.png" /* Image du temps actuel*/
					alt=""
				/>
        <p className="font-medium">22°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">04:30 PM</p>
          <img
					className=" w-12 my-1"
					src="http://openweathermap.org/img/wn/01d@2x.png" /* Image du temps actuel*/
					alt=""
				/>
        <p className="font-medium">22°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">04:30 PM</p>
          <img
					className=" w-12 my-1"
					src="http://openweathermap.org/img/wn/01d@2x.png" /* Image du temps actuel*/
					alt=""
				/>
        <p className="font-medium">22°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">04:30 PM</p>
          <img
					className=" w-12 my-1"
					src="http://openweathermap.org/img/wn/01d@2x.png" /* Image du temps actuel*/
					alt=""
				/>
        <p className="font-medium">22°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">04:30 PM</p>
          <img
					className=" w-12 my-1"
					src="http://openweathermap.org/img/wn/01d@2x.png" /* Image du temps actuel*/
					alt=""
				/>
        <p className="font-medium">22°</p>
        </div>
      </div>
		</div>
	);
}

// == Export
export default Forecast;
