let cityInput = document.getElementById("cityInput")
let form = document.getElementById("form")
let APIKEY = "e174f8824a4134f35f28252dbc89726e"
let weatherResultContainer = document.getElementById("timezone-speed")
let weatherInputContainer = document.getElementById("weatherInput")
let currentWeather = document.getElementById("weather-container")

form.addEventListener("submit", function(event){
    event.preventDefault()
    let city = cityInput.value
    collectWeatherReport(city)
    form.reset()
})

function collectWeatherReport(city){
    let weatherRequest = new XMLHttpRequest()
    weatherRequest.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`)

    weatherRequest.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            let data = JSON.parse(this.responseText)
            printWeatherOnUI(data)
            console.log(data)
        }
    }
    weatherRequest.send()
}

function printWeatherOnUI(data){
    
    let temperature = data.main.temp
    let showTempTitle = data.main.temp
    let humidity = data.main.humidity
    let nameOfCity = data.name 
    let timeZone = data.timezone
    let visibility = data.visibility
    let weather = data.weather[0].description
    let windSpeed = data.wind.speed
    let pressure = data.main.pressure
    let feelsLike = data.main.feels_like
    

    let locationContainer = document.createElement("div")
    locationContainer.classList.add("location-container")

    let nameOfCityContainer = document.createElement("div")
    nameOfCityContainer.classList.add("location")

    let nameOfCityText = document.createElement("h2")
    nameOfCityText.textContent = nameOfCity

    let currentTempContainer = document.createElement("div")
    currentTempContainer.classList.add("weather-in-celcius")

    let displayTempTitle = document.createElement("h3")
    displayTempTitle.textContent = `${(showTempTitle - 273.15).toFixed()}°C`

    let timeZoneAndWeather = document.createElement("div")
    timeZoneAndWeather.classList.add("timezone-speed")

    let timeZoneContainer = document.createElement("div")
    timeZoneContainer.classList.add("timezone")

    let timeText = document.createElement("div")
    timeText.classList.add("time-text")

    let timezone = document.createElement("p")
    timezone.textContent = "Timezone"

    let timeZoneResult = document.createElement("div")
    timeZoneResult.classList.add("timezone-result")

    let timezoneresultText = document.createElement("h3")
    timezoneresultText.textContent = timeZone

    let weatherContainer = document.createElement("div")
    weatherContainer.classList.add("timezone1")

    let weatherDiv = document.createElement("div")
    weatherDiv.classList.add("weather")

    let weatherText = document.createElement("p")
    weatherText.textContent = "Weather"

    let weatherResultDiv = document.createElement("div")
    weatherResultDiv.classList.add("weather-result")

    let weatherTextResult = document.createElement("h3")
    weatherTextResult.textContent = weather

    let speedContainer = document.createElement("div")
    speedContainer.classList.add("speed-container")

    let speedAndPressureContainer = document.createElement("div")
    speedAndPressureContainer.classList.add("speed-and-pressure")

    let windSpeedContainer = document.createElement("div")
    windSpeedContainer.classList.add("timezone2")

    let windSpeedDiv = document.createElement("div")
    windSpeedDiv.classList.add("weedspeed")

    let windSpeedText = document.createElement("p")
    windSpeedText.textContent = "Wind Speed"

    let windSpeedResultDiv = document.createElement("div")
    windSpeedResultDiv.classList.add("windspeed-result")

    let windSpeedResult = document.createElement("h3")
    windSpeedResult.textContent = windSpeed

    let humidityContainer = document.createElement("div")
    humidityContainer.classList.add("timezone3")

    let humidityDiv = document.createElement("div")
    humidityDiv.classList.add("humidity-text")

    let humidityText = document.createElement("p")
    humidityText.textContent = "Humidity"

    let humidityResultDiv = document.createElement("div")
    humidityResultDiv.classList.add("humidity-result")

    let humidityResult = document.createElement("h3")
    humidityResult.textContent = humidity

    let visibilityContainer = document.createElement("div")
    visibilityContainer.classList.add("timezone4")

    let visibilityDiv = document.createElement("div")
    visibilityDiv.classList.add("visibility-text")

    let visibilityText = document.createElement("p")
    visibilityText.textContent = "Visibility"

    let visibilityResultDiv = document.createElement("div")
    visibilityResultDiv.classList.add("visibility-result")

    let visibilityResult = document.createElement("h3")
    visibilityResult.textContent = visibility

    let speedAndPressure2Container = document.createElement("div")
    speedAndPressure2Container.classList.add("speed-and-pressure2")

    let pressureContainer = document.createElement("div")
    pressureContainer.classList.add("timezone5")

    let pressureDiv = document.createElement("div")
    pressureDiv.classList.add("pressure-text")

    let pressureText = document.createElement("p")
    pressureText.textContent = "Pressure"

    let pressureResultDiv = document.createElement("div")
    pressureResultDiv.classList.add("pressure-result")

    let pressureResult = document.createElement("h3")
    pressureResult.textContent = pressure

    let temperatureContainer = document.createElement("div")
    temperatureContainer.classList.add("timezone6")

    let temperatureDiv = document.createElement("div")
    temperatureDiv.classList.add("temperature-text")

    let temperatureText = document.createElement("p")
    temperatureText.textContent = "Temperature"

    let temperatureResultDiv = document.createElement("div")
    temperatureResultDiv.classList.add("temperature-result")

    let temperatureResult = document.createElement("h3")
    temperatureResult.textContent = `${(temperature - 273.15).toFixed()}°C`

    let feelsLikeContainer = document.createElement("div")
    feelsLikeContainer.classList.add("timezone7")

    let feelsLikeDiv = document.createElement("div")
    feelsLikeDiv.classList.add("feelslike-text")

    let feelsLikeText = document.createElement("p")
    feelsLikeText.textContent = "Feels Like"

    let feelsLikeResultDiv = document.createElement("div")
    feelsLikeResultDiv.classList.add("feelslike-result")

    let feelsLikeResult = document.createElement("h3")
    feelsLikeResult.textContent = feelsLike

    let timeZoneSpeed = document.createElement("div")
    timeZoneSpeed.classList.add("timezone-speed")

    nameOfCityContainer.append(nameOfCityText)
    currentTempContainer.append(displayTempTitle)
    locationContainer.append(nameOfCityContainer, currentTempContainer)
    timeText.append(timezone)
    timeZoneResult.append(timezoneresultText)
    timeZoneContainer.append(timeText, timeZoneResult)
    weatherDiv.append(weatherText)
    weatherResultDiv.append(weatherTextResult)
    weatherContainer.append(weatherDiv, weatherResultDiv)
    windSpeedDiv.append(windSpeedText)
    windSpeedResultDiv.append(windSpeedResult)
    windSpeedContainer.append(windSpeedDiv, windSpeedResultDiv)
    humidityDiv.append(humidityText)
    humidityResultDiv.append(humidityResult)
    humidityContainer.append(humidityDiv, humidityResultDiv)
    visibilityDiv.append(visibilityText)
    visibilityResultDiv.append(visibilityResult)
    visibilityContainer.append(visibilityDiv, visibilityResultDiv)
    speedAndPressureContainer.append(windSpeedContainer, humidityContainer, visibilityContainer)
    pressureDiv.append(pressureText)
    pressureResultDiv.append(pressureResult)
    pressureContainer.append(pressureDiv, pressureResultDiv)
    temperatureDiv.append(temperatureText)
    temperatureResultDiv.append(temperatureResult)
    temperatureContainer.append(temperatureDiv, temperatureResultDiv)
    feelsLikeDiv.append(feelsLikeText)
    feelsLikeResultDiv.append(feelsLikeResult)
    feelsLikeContainer.append(feelsLikeDiv, feelsLikeResultDiv)
    speedAndPressure2Container.append(pressureContainer, temperatureContainer, feelsLikeContainer)
    speedContainer.append(speedAndPressureContainer, speedAndPressure2Container)
    timeZoneSpeed.append(timeZoneContainer, weatherContainer, speedContainer)
    timeZoneAndWeather.append(weatherInputContainer, timeZoneSpeed)
    currentWeather.append(locationContainer, timeZoneAndWeather)

    weatherResultContainer.innerHTML = ``
    weatherResultContainer.append(currentWeather)

    changeWeatherBackground()
    
}

// function changeWeatherBackground() {
//     if (Weather === "overcast clouds" || Weather === "broken clouds") {
//         currentWeather.style.backgroundImage = `url('./images/cloudy.jpeg')`;
//     } else if (Weather === "rain" || Weather === "stormy" || Weather === "thunderstorm") {
//         currentWeather.style.backgroundImage = `url('./images/background-rain-drops-close-up.jpg')`;
//     }
// }