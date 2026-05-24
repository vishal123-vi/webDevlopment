const API_KEY = "431b764dba8e8e971b9ff6def7da1a4a";
async function getWeather() {
  const cityName = document.getElementById("cityName").value.trim();
  const { Lattitude, Longitude } = await getGeoLocation(cityName);

  const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?lat=${Lattitude}&lon=${Longitude}&appid=${API_KEY}`;

  const response = await fetch(WEATHER_API);
  const data = await response.json();

  const temperature = data.main.temp - 273.15;

  document.getElementById("Temperature").innerText = temperature.toFixed(2);
}

async function getGeoLocation(city) {
  const GEO_LOC_API = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;

  const response = await fetch(GEO_LOC_API);
  const data = await response.json();

  //   console.log(data);

  const Lattitude = data[0].lat;
  const Longitude = data[0].lon;

  return { Lattitude, Longitude };
}

// wire the button to call getWeather (keeps your logic intact)
const btn = document.getElementById('getWeatherBtn');
if (btn) btn.addEventListener('click', getWeather);
