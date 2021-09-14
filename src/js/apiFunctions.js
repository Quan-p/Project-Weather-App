/* eslint-disable prefer-template */

function fetchWeather(location) {
    const key = '44417ab558331b507b15ba59e307962f';
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + location + '&APPID=' + key)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch(() => {
            console.log('error');
        });
}

export {fetchWeather};
