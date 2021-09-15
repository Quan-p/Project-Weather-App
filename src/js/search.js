function getLocation() {
    const form = document.getElementById('locationInput');
    const input = document.getElementById('location');
    let inputVal;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        inputVal = input.value;
    });
    return inputVal;
}

export default getLocation;
