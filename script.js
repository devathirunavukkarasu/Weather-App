const apiKey = "f62bc84924c4b0eeeffe9c6c6255099f";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox=document.getElementById('searchbar');
const searchBtn=document.getElementById('sbtn');
const weatherIcon=document.querySelector('.weatheremoji');
const locIcon=document.querySelector('.fa-solid');

async function weather(city) {
    const response=await fetch(apiUrl +city +  `&appid=${apiKey}`);

    const data= await response.json();
    // console.log(data);

    if(response.status===404){
        document.querySelector('.error').style.display="block";

        document.getElementById('day').innerHTML="--";
        document.getElementById('date').innerHTML="--"; 
        document.querySelector('.location').innerHTML="--";
        document.getElementById('degree').innerHTML="--" + "°C";
        document.getElementById('climate').innerHTML="--";
        document.getElementById('cityname').innerHTML="--";
        document.getElementById('temp').innerHTML="--";
        document.getElementById('humidity').innerHTML="--";
        document.getElementById('windspeed').innerHTML="--";
    }
    
    else{
      document.querySelector('.error').style.display="none";
        const weekday= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        var date=new Date();
    

        document.getElementById('day').innerHTML=weekday[date.getDay()];
        document.getElementById('date').innerHTML=`${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`; 
        document.querySelector('.location').innerHTML=data.name;
        document.getElementById('degree').innerHTML=Math.round(data.main.temp) + "°C";
        document.getElementById('climate').innerHTML=data.weather[0].main;
        document.getElementById('cityname').innerHTML=data.name;
        document.getElementById('temp').innerHTML=Math.round(data.main.temp) + "°C";
        document.getElementById('humidity').innerHTML=data.main.humidity + " %";
        document.getElementById('windspeed').innerHTML=data.wind.speed +" km/h";

        if(data.weather[0].main==="Clouds"){
            weatherIcon.src="images/clouds.png";
        }else if (data.weather[0].main === "Clear") {
            weatherIcon.src = "images/clear.png";
          } else if (data.weather[0].main === "Rain") {
            weatherIcon.src = "images/rain.png";
          } else if (data.weather[0].main === "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
          } else if (data.weather[0].main === "Mist") {
            weatherIcon.src = "images/mist.png";
          }
        }
    searchBox.value="";
}
searchBtn.addEventListener("click", (e) => {
  e.preventDefault(); 
  if (searchBox.value.trim()) {  
    weather(searchBox.value);
} else {
    document.querySelector('.error').style.display = "block";
    document.getElementById('day').innerHTML = "--";
    document.getElementById('date').innerHTML = "--";
    document.querySelector('.location').innerHTML = "--";
    document.getElementById('degree').innerHTML = "--" + "°C";
    document.getElementById('climate').innerHTML = "--";
    document.getElementById('cityname').innerHTML = "--";
    document.getElementById('temp').innerHTML = "--";
    document.getElementById('humidity').innerHTML = "--";
    document.getElementById('windspeed').innerHTML = "--";
}
});
searchBox.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
  if (searchBox.value.trim()) {  
    weather(searchBox.value);
} else {
    document.querySelector('.error').style.display = "block";
    document.getElementById('day').innerHTML = "--";
    document.getElementById('date').innerHTML = "--";
    document.querySelector('.location').innerHTML = "--";
    document.getElementById('degree').innerHTML = "--" + "°C";
    document.getElementById('climate').innerHTML = "--";
    document.getElementById('cityname').innerHTML = "--";
    document.getElementById('temp').innerHTML = "--";
    document.getElementById('humidity').innerHTML = "--";
    document.getElementById('windspeed').innerHTML = "--";
}
}}
);