/* eslint-disable no-unused-vars */
/* eslint-disable prefer-template */

function addWeather(data) {
    const fahrenheit = Math.round(((parseFloat(data.main.temp) - 273.15) * 1.8) + 32);

    document.getElementById('description').innerHTML = data.weather[0].description;
    document.getElementById('temp').innerHTML = fahrenheit + '&degF';
    document.getElementById('location').innerHTML = data.name;
}

function weatherType(data) {
    const iconCode = data.weather[0].icon;
    const iconUrl = 'http://openweathermap.org/img/wn/' + iconCode + '@2x.png';

    document.getElementById('icon').setAttribute('src', iconUrl);
}

async function fetchWeather(location) {
    const key = '44417ab558331b507b15ba59e307962f';
    let skyInfo;
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + location + '&APPID=' + key, { mode: 'cors' })
        .then((response) => response.json())
        .then((data) => {
            addWeather(data);
            weatherType(data);
        })
        .catch(() => {
            console.log('error');
        });
}

export default fetchWeather;
