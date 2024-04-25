import convertTo24HourFormat from "../convertTo24HourFormat";
const apiKey = "d3455c3a345a4a43953191226240103"

const getMeteo = async (lat,lng, place) => {
	const baseUrl = "http://api.weatherapi.com/v1/forecast.json";

	const url = new URL(baseUrl);
	url.searchParams.append("key", apiKey);
	url.searchParams.append("q", `${lat},${lng}`);
	url.searchParams.append("days", 7);
	try {
		return await fetch(url.toString())
		.then((res) => res.json())
		.then(async (data) => {
			let res = { 
				place: place,
				etat: data.current.condition.text,
				temperature: data.current.temp_c,
				temperatureRessentie: data.current.feelslike_c,
				urlTemps: "http:"+data.current.condition.icon,
				vitesseVent: data.current.wind_kph,
				humdite: data.current.humidity,
				sunrise: convertTo24HourFormat(data.forecast.forecastday[0].astro.sunrise),
				sunset: convertTo24HourFormat(data.forecast.forecastday[0].astro.sunset),
				days:[]
			}
			data.forecast.forecastday.map((day, index)=>{
				let temp = new Date(day.date)
				let dayName = temp.toLocaleDateString("fr-FR", { weekday: 'short' }).slice(0,-1)
				res.days.push({
					name:index === 0? "Auj":dayName,
					minTemperature:day.day.mintemp_c,
					maxTemperature:day.day.maxtemp_c,
					urlTemps:"http:"+day.day.condition.icon
				})
			})
			return res
		})
	} catch (error) {
		console.log("Error fetching data:", error.message);
		return null;
	}
};

export default getMeteo;