import fetchWeather from './apiFunctions';
import getLocation from './search';

function storeLocation() {
    getLocation();
    const location = inputVal;
}

window.onload = () => {
    fetchWeather('Austin');
};
