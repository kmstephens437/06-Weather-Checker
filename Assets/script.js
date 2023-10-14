const city = document.querySelector("#city");
const previousCitiesArea = document.querySelector("#recentSearches");
const currentWeatherArea = document.querySelector("#current");
const currentConditions = ("#weather")
const fiveDayArea = document.querySelector("#fiveDay");
const searchButton = document.querySelector("#search")
const key = '95e06141d1fb08f0e5b62af9d1d67ed1'


function getCoords(cityName) {

    const latLonUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=95e06141d1fb08f0e5b62af9d1d67ed1';
    
    fetch(latLonUrl)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            latLon(data)
            //console.log(data);
        })
        return;
}

function latLon(data) {
        var lat = data[0].lat;
        var lon = data[0].lon;
        console.log('Latitude: ${lat}, Longitude: ${lon}')

}

getCoords('chicago')
latLon();




/*
function weatherCall(cityName) {

    const latLonUrl = "https://api.openweathermap.org/geo/1.0/direct?q=${"cityName"}&appid=95e06141d1fb08f0e5b62af9d1d67ed1";


        fetch(latLonUrl)
            .then (function (response) {
                response.json();
            .then (function (data) {
                const cityName = data.name
                const oneCallUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=data.lat&lon=data.lon&appid=95e06141d1fb08f0e5b62af9d1d67ed1"});
         
                fetch(oneCallUrl)
                    .then (function(response) {
                        response.json()
                    .then (function(data) {

                        const displayWeather = ("<img src='https://openweathermap.org/img/w/' + data.current.weather[0].icon + '.png' alt = 'Weather icon'> ");

                        currentConditions.innerHTML = cityName + displayWeather;

                    })
                })
            )}
            }

            
function weatherCall(city) {

        const latLonUrl = "https://api.openweathermap.org/geo/1.0/direct?q=city&appid=95e06141d1fb08f0e5b62af9d1d67ed1";

        fetch(latLonUrl)
            .then (function(response) {
                response.json();
            .then (function(data) {
                const oneCallUrl = "https://api.openweather,ap.org/data/2.5/forecast? lat=data.lat&lon=data.lon&appid=95e06141d1fb08f0e5b62af9d1d67ed1";

                fetch(oneCallUrl)
                    .then(function(response) {
                        response.json()
                    .then (function(data) {

"                        const displayWeather = "<img src='https://openweathermap.org/img/w/' + data.current.weather[0].icon + '.png' alt = 'Weather icon'>"
                    })    
                    })
            })
            })
}



searchForm.addEventListener("submit",(event) => {
    event.preventDefault();
    weatherCall();

})


weatherCall(Kansas City); */
