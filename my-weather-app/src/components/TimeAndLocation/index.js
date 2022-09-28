// == Import npm
import React from "react";

// == Component
function TimeAndLocation() {
  return ( <div>

    <div className="flex items-center justify-center my-6">

    <p className=" text-white text-xl font-extralight "/* Renvoie la date et l'heure*/>
        Tuesday, 31 May 2022 | Local time: 12:56 PM
    </p>      

    </div>
    <div className="flex items-center justify-center my-3"/* Renvoie la ville */>
        <p className="text-white text-3xl font-meduim">Berlin, DE</p>
    </div>
  </div>
  )
}

// == Export
export default TimeAndLocation