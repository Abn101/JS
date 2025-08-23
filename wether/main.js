import { getWether } from "./wether.js";
const cityInput = document.getElementById('cityName');
const searchBtn = document.getElementById('search');
const reuslt = document.getElementById('result');
const histoory = document.getElementById('history');
let history = [];
searchBtn.addEventListener('click', async () => {
    const city = cityInput.value.trim();
    if (city === "") {

        document.getElementById('error').textContent = " City Name must not be empty";
    }
    else {
        try {
            const data = await getWether(city);
            const { country } = data.location;
            const { temp_c } = data.current;
            const { current: { condition: { text } } } = data;
            const { current: { condition: { icon } } } = data;
            const iconUrl = "https:" + icon;
            console.log(iconUrl)
            reuslt.innerHTML = `
            <h2>
                 Name: ${country}
            </h2>
            <p>
                Temparature: ${temp_c}
            </p>
            <p>
                Condition: ${text}
            </p>
            <img src="${iconUrl}" alt="Weather Icon">
            `
                ;
        }
        catch (err) {
            document.getElementById('error').textContent = err.message;
        }
        history = [... new Set([city,...history])];
        renderHistory();
    }    
});
function renderHistory()
{
    histoory.innerHTML = ""
    history.forEach(city => {
    const li = document.createElement("li");
    li.textContent = city;
    histoory.appendChild(li);
  });
}