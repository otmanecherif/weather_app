import convertTo24HourFormat from "../convertTo24HourFormat";
const apiKey = "d3455c3a345a4a43953191226240103"

const getFullMeteo = async (lat,lng, place) => {
	const baseUrl = "http://api.weatherapi.com/v1/forecast.json";

	const url = new URL(baseUrl);
	url.searchParams.append("key", apiKey);
	url.searchParams.append("q", `${lat},${lng}`);
	url.searchParams.append("days", 7);
	try {
		return await fetch(url.toString())
		.then((res) => res.json())
		.then(async (data) => {
			let result = {
				humidite:data.current.humidity,
				indiceUV:data.current.uv,
				temperature:data.current.temp_c,
				vitesseVent:data.current.wind_kph,
				visibilite:data.current.vis_km,
				pluie:data.forecast.forecastday[0].day.daily_will_it_rain
			}
			return result;
		})
	} catch (error) {
		console.log("Error fetching data:", error.message);
		return null;
	}
};

export default getFullMeteo;