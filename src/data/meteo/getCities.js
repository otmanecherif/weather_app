const getCities = async (term) => {
	const username = "kode"; // Replace with your GeoNames username
	const baseUrl = "http://api.geonames.org/searchJSON";

	const url = new URL(baseUrl);
	url.searchParams.append("q", encodeURIComponent(term));
	url.searchParams.append("country", "FR");
	url.searchParams.append("maxRows", 7);
	url.searchParams.append("username", username);

	try {
		return await fetch(url.toString())
			.then((res) => res.json())
			.then(async (data) => {
				let results = [];
				let temp = data.geonames || [];
				temp.forEach((city) => {
					results.push({
						latitude:city.lat,
						longitude:city.lng,
						nom: city.name,
					});
				});
				return results ;
			});
	} catch (error) {
		console.error("Error fetching data:", error.message);
		return [];
	}
};

export default getCities;
