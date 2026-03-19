import"./assets/styles-7i1_pgpJ.js";import{a as s}from"./assets/vendor-78j7T53y.js";function i(){const e=parseInt(Math.random()*100);return new Promise((t,r)=>{e>=50?t({code:e,message:"Успіх!"}):r({code:e,message:"Помилка!"})})}i().then(e=>console.log(`✅ ${e.code}% - ${e.message}`)).catch(e=>console.log(`❌ ${e.code}% - ${e.message}`));const a=document.querySelector(".weather-wrapper"),c=document.querySelector(".inputCity");async function n(e){const t=`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=117bcd5592950f9f701a11f5ab982de0&units=metric`;try{return(await s(t)).data}catch(r){console.log(r)}}n("lviv").then(e=>o(e)).catch(e=>console.log(e));function o(e){const t=`
    <div class="weather-card">
        <div>
            <h2>${e.name}</h2>
                <img src="http://openweathermap.org/img/w/${e.weather[0].icon}.png" width="80px"><p>${e.weather[0].description}</p>
        </div>
        <div>
            <p>Temperature: ${e.main.temp}</p>
            <p>Feels like: ${e.main.feels_like}</p>
            <p>Humidity: ${e.humidity}%</p>
            <p>Pressure: ${e.main.pressure}</p>
        </div>
    `;a.innerHTML=t}c.addEventListener("blur",e=>{const t=e.target.value.trim();if(t===""){alert("Enter city name");return}n(t).then(r=>o(r)).catch(r=>console.log(r))});
//# sourceMappingURL=index.js.map
