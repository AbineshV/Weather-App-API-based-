// const url = 'https://open-weather13.p.rapidapi.com/city/landon';
// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '5f85bbe0f3mshb2d09565b67b63cp1865a0jsn4c71a61a377b',
//         'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
//     }
// };

// try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log(result);
// } catch (error) {
//     console.error(error);
// }


let weather = {
    apikey: "a6d1400b59f055396b0cd84451db5f0c",
    fetchWeather: function (city) {
        fetch
            ("https://api.openweathermap.org/data/2.5/weather?q="
                + city
                + "&units=metric&appid="
                + this.apikey
            )
            .then((Response) => Response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity : " + humidity + "%";
        document.querySelector(".wind").innerText = "Windspeed : " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }


};

document
    .querySelector(".search-btn")
    .addEventListener("click", function () {
        weather.search();
    });

document
    .querySelector("search-bar")
    .addEventListener("keypress", function (event) {
        if (event.key == "Enter") {
            weather.search();
        }
    });


weather.fetchWeather("Chennai");