const apiKey = "ad6c177b4bf5ed12e1245e8fa056ac9e";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon= document.querySelector(".weather-icon");

async function checkweather(city){
  const response = await fetch(apiurl+city+`&appid=${apiKey}`);
  
  
  if(response.status == 404)
  {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }
  else{
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"; 
    document.querySelector(".wind").innerHTML = data.wind.speed +"km/h";

    if(data.weather[0].main == "clouds"){
      weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "clear"){
      weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "rain"){
     weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
     weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
      weatherIcon.src = "images/mist.png";
    }

   document.querySelector(".weather").style.display = "block";
   document.querySelector(".error").style.display = "none";
  }

}

searchBtn.addEventListener("click",()=>{
  checkweather(searchBox.value);
})






















// const apiKey = '0a0050338f027b718a306e1a90403cf6';
// const searchInput = document.getElementById('search');
// const locationElement = document.getElementById('location');
// const temperatureElement = document.getElementById('temperature');
// const descriptionElement = document.getElementById('description');

// function getWeather() {
//   const cityName = searchInput.value;
//   if (cityName.trim() === '') {
//     alert('Please enter a valid city name.');
//     return;
//   }

// //   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
//   fetch(`https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={0a0050338f027b718a306e1a90403cf6}`)
//     .then(response => response.json())
//     .then(data => {
//       if (data.cod === '404') {
//         alert('City not found. Please enter a valid city name.');
//       } else {
//         const location = `${data.name}, ${data.sys.country}`;
//         const temperature = `${data.main.temp}°C`;
//         const description = data.weather[0].description;

//         locationElement.textContent = location;
//         temperatureElement.textContent = temperature;
//         descriptionElement.textContent = description;
//       }
//     })
//     .catch(error => {
//       console.error('Error fetching weather data:', error);
//     });
// }
