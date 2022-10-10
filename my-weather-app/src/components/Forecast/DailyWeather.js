import React from "react";
import propTypesLib from "prop-types";

function DailyWeather({hour, temp, units, title, icon}) {

	return (
		<div className="flex flex-col items-center justify-center">
        <p className="font-light text-sm">{title}</p>
			<p className="font-light text-sm">{hour}</p>
			<img
				className=" w-12 my-1"
				src={icon} /* Image du temps actuel*/
				alt=""
			/>
			<p className="font-medium">
				{temp}
				{units}
			</p>
		</div>
	);
}

DailyWeather.propTypes = {
hour: propTypesLib.string.isRequired,
temp: propTypesLib.number.isRequired,
units: propTypesLib.string.isRequired,
title: propTypesLib.string.isRequired,
icon: propTypesLib.string.isRequired,
}

export default DailyWeather;
