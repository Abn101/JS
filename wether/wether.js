const apiKey = "1a6ed1618cb0487f88d181910252008";
export async function getWether(cityName) {
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`;
    const fetchUrl = await fetch(url);
    if (fetchUrl.ok) {
        const data = await fetchUrl.json();
        return data;
    }
    else {
        throw new Error("City not Found");
    }
}