function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";   

    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("current-time").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
    let today = new Date().toLocaleDateString()
    document.getElementById('date').innerText = today
  }
  currentTime();
  const city = "kathmandu"
//   const city = "kathmandu"
const weatherdata = `https://api.openweathermap.org/data/2.5/weather?q=${city}&&units=metric&&appid=56c1079fe82c3bc62d84c63ae1821c0e`

fetch(weatherdata).then((api)=>{
    
    return api.json()
}).then((weatherapi)=>{
    const currentTemp = Math.round(weatherapi.main.temp)
    const cityName = weatherapi.name
    const currentWeather = weatherapi.weather[0].description
    const currentIcon = weatherapi.weather[0].icon  
    const country = weatherapi.sys.country
    const iconImg = `http://openweathermap.org/img/w/${currentIcon}.png`

    document.getElementById('current-temp').innerText  = `${currentTemp}`
    document.getElementById('current-weather').innerText  = `${currentWeather}`
    document.getElementById('city-name').innerText  = `${cityName}, ${country}`
    document.getElementById('icon').innerText  = `<img src='${iconImg}>`
    document.getElementById("icon").innerHTML =`<img src="${iconImg}" title="icon" alt="Loading...">`

}).catch((err)=>{
        console.log(err)
})



