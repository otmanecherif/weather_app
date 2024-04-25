import convertTo24HourFormat from "../convertTo24HourFormat";
const apiKey = "d3455c3a345a4a43953191226240103"

const getTemperature = async (lat,lng) => {
	const baseUrl = "http://api.weatherapi.com/v1/current.json";
	const url = new URL(baseUrl);
	url.searchParams.append("key", apiKey);
	url.searchParams.append("q", `${lat},${lng}`);
	try {
		return await fetch(url.toString())
		.then((res) => res.json())
		.then(async (data) => {
            return data.current.temp_c
		})
	} catch (error) {
		console.log("Error fetching data:", error.message);
		return null;
	}
};

export default getTemperature;