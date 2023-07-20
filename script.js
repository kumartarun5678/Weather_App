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
      weatherIcon.src = "clouds.png";
    }
    else if(data.weather[0].main == "clear"){
      weatherIcon.src = "clear.png";
    }
    else if(data.weather[0].main == "rain"){
     weatherIcon.src = "rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
     weatherIcon.src = "drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
      weatherIcon.src = "mist.png";
    }

   document.querySelector(".weather").style.display = "block";
   document.querySelector(".error").style.display = "none";
  }

}

searchBtn.addEventListener("click",()=>{
  checkweather(searchBox.value);
})

