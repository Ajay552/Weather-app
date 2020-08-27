const API_KEY = "523679ce8ff4ebc5496bf5648f2ef408";
const place = "#place";
const form = document.querySelector(".form");


form.addEventListener("click", (event) => {
    event.preventDefault();
    const city = form.place.value;
    weather_city(city);
    form.reset();
    
});

const weather = async (city) => {
    const url = "https://api.openweathermap.org/data/2.5/weather"
    const query = `?q=${city}&appid=${API_KEY}`
    const responce = await fetch(url+query);
    const data = await responce.json();
    return data;
};

const weather_city = (city) => {
    weather(city)
        .then(data => console.log(data));
}


