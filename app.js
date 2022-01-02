const API_KEY = "ce980fc1c54cfa777cbcaa9de4acbbee";
const place = "#place";
const form = document.querySelector(".form");
const icon_m = document.querySelector(".center-icon")


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const city = form.place.value;
    weather_city(city);
    form.reset();
    
});

const weather = async (city) => {
    const url = "https://api.openweathermap.org/data/2.5/weather"
    const query = `?q=${city}&units=metric&appid=${API_KEY}`
    const responce = await fetch(url+query);
    const data = await responce.json();
    return data;
};

const weather_city = (city) => {
    weather(city)
        .then(data => {
            console.log(data)
            const min = data.main.temp_min ;
            const max = data.main.temp_max;
            const wind = data.wind.speed + " meter/sec";
            const humidity = data.main.humidity + " %";
            const city_name = data.name;
            const icon = data.weather[0].icon;
            const weather = data.weather[0].description;
            const main_descreption = data.weather[0].main;
            const temp = data.main.temp;
            // console.log(city_name)
            // console.log(icon);
            // console.log(main_descreption);
            
            console.log(weather);

            // display weather
            document.querySelector(".max-temp").textContent = max;
            document.querySelector(".min-temp").textContent = min;
            document.querySelector(".wind-speed").textContent = wind;
            document.querySelector(".humidity").textContent = humidity;
            document.querySelector(".temp").textContent = temp;
            document.querySelector(".weather").textContent = weather;

            // check day or night
            let d_n;
            if(icon.includes("d")){
                d_n = "day";
            }else {
                d_n = "night"; 
            }
            console.log(d_n);

            // changing weather icon

            if(main_descreption.includes("Clear")){
                if(d_n === "day"){
                    icon_m.setAttribute("src","icons/clear-sky-day.png");
                }else{
                    icon_m.setAttribute("src","icons/clear-sky-night.png");
                }
            }else if(main_descreption.includes("Rain")){
                if(d_n === "day"){
                    icon_m.setAttribute("src","icons/rain-day.png");
                }else{
                    icon_m.setAttribute("src","icons/rain-night.png");
                }
            }else if(main_descreption.includes("Thunderstorm")){

                icon_m.setAttribute("src","icons/thunderstorm.png");

            }else if(main_descreption.includes("Snow")){

                icon_m.setAttribute("src","icons/snow.png");

            }else if(main_descreption.includes("Clouds")){

                icon_m.setAttribute("src","icons/clouds.png");

            }else if(main_descreption.includes("Drizzle")){

                icon_m.setAttribute("src","icons/drizzle.png");

            }else{

                icon_m.setAttribute("src","icons/mist.png");

            }

        })
        .catch(err => {
            console.log(err);
            alert("please enter a valid place");
        });
}


