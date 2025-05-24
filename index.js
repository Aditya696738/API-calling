//console.log("hello index.html")
//http://api.weatherapi.com/v1/current.json?key=19c917d6b7e74368b6f90427252205&q=${cityName}&aqi=yes
let input = document.querySelector("#input");
let btn = document.querySelector("#btn");
let city = document.querySelector("#city");
let time = document.querySelector("#time");
let temp = document.querySelector("#temp");
let cond = document.querySelector("#cond");

async function weatherData(cityName){
    let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=19c917d6b7e74368b6f90427252205&q=${cityName}&aqi=yes`)
    return await response.json();
}
btn.addEventListener("click" , async()=>{
    const data = input.value;
    const result = await weatherData(data);
    city.innerHTML = `city name: ${result.location.name}, region: ${result.location.region} - ${result.location.country}`;
    time.innerHTML = `local time : ${result.location.localtime}`;
    temp.innerHTML = `Temerature in deg C : ${result.current.temp_c}`
    cond.innerHTML = `Condition is ${result.current.condition.text}`
})