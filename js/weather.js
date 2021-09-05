const weather = document.querySelector("#weather span:first-child");
const API_KEY = "21957e9bf7539fd8e8ddf6a9a38b0810";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      weather.innerText = `${Math.ceil(data.main.temp)}°C`;
    });
}
function onGeoError() {
  alert("날씨 액세스가 허용되어 있는지 확인해 주세요.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
