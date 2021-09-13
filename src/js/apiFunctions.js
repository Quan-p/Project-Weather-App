function getData() {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=44417ab558331b507b15ba59e307962f')
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        });
}

export default getData();
