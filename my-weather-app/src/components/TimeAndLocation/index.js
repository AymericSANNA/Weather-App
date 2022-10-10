// == Import npm
import React from "react";
import { formatToLocalTime } from "../../services/weatherService/.weatherService";

// == Component
function TimeAndLocation({weather: {dt, timezone, name, country}}) {
  return ( <div>

    <div className="flex items-center justify-center my-6">

    <p className=" text-white text-xl font-extralight drop-shadow-md shadow-gray-900"/* Renvoie la date et l'heure*/>
        {formatToLocalTime(dt,timezone)}
    </p>      

    </div>
    <div className="flex items-center justify-center my-3"/* Renvoie la ville */>
        <p className="text-white text-3xl font-meduim drop-shadow-md shadow-gray-900">{name} {country}</p>
    </div>
  </div>
  )
}

// == Export
export default TimeAndLocation