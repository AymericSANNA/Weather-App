import { DateTime } from "luxon";

const API_KEY = "5ba84ea9dbffe70e69c81d6cdc4e2a77";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// https://api.openweathermap.org/data/2.5/onecall?lat=48.8534&lon=2.3488&exclude=current,minutely,hourly,alerts&appid=1fa9ff4126d95b8db54f3897a208e91c&units=metric

const getWeatherData = (infoType, searchParams) => {
	const url = new URL(BASE_URL + "/" + infoType);
	url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

	return fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (data) => {
	
	const {
		coord: { lat, lon },
		main: { temp, feels_like, temp_min, temp_max, humidity },
		name,
		dt,
		sys: { country, sunrise, sunset },
		weather,
		wind: { speed },
	} = data;

	const { main: details, icon } = weather[0];

	return {
		lat,
		lon,
		temp,
		feels_like,
		temp_min,
		temp_max,
		humidity,
		name,
		dt,
		country,
		sunrise,
		sunset,
		details,
		icon,
		speed,
	};
};

const formatForecastWeather = (data) => {
	let { timezone, list, morningWeather, afternoonWeather } = data;
	list = list.map((d) => {
		
		return {
			
			title: formatToLocalTime(d.dt, timezone, "cccc"),
			hour: formatToLocalTime(d.dt, timezone, "hh:mm a"),
			temp: Math.round(d.main.temp),
			icon: iconUrlFromCode(d.weather[0].icon),
		};
	});
	morningWeather = list.filter((list) => list.hour === "08:00 AM");
	afternoonWeather = list.filter((list) => list.hour === "02:00 PM");

	return { timezone, morningWeather, afternoonWeather };
};

const getFormattedWeatherData = async (searchParams) => {
	const formattedCurrentWeather = await getWeatherData(
		"weather",
		searchParams
	).then(formatCurrentWeather);

	const { lat, lon } = formattedCurrentWeather;

	const formattedForecastWeather = await getWeatherData("forecast", {
		lat,
		lon,
		exclude: "current,minutely,alerts",
		units: searchParams.units,
	}).then(formatForecastWeather);

	return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

const formatToLocalTime = (
	secs,
	zone,
	format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) =>
	`https://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;

export { formatToLocalTime, iconUrlFromCode };
