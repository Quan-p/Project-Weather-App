import fetchWeather from './apiFunctions';
import getLocation from './search';

window.onload = () => {
    fetchWeather('Austin');
};

function storeLocation() {
    document.getElementById('locationInput').addEventListener('submit', (e) => {
        e.preventDefault();
        const location = document.getElementById('inputVal').value;
        fetchWeather(location);
    });
}

storeLocation();
