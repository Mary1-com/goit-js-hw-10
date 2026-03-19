// Створи функцію randomTask(), яка повертає проміс. З ймовірністю 50% вона виконується з рядком "Успіх!", інакше — відхиляється з "Помилка!".
// * Проміс має повертати не рядок, а обʼєкт з властивостями code (відсоток) і message (сам текст)
// Приклади відповіді:
// ✅ 73% - Успіх!
// ❌ 7% - Помилка!

import  axios from "axios";

function randomTask() {
    const randomNum = parseInt(Math.random() * 100);

    return new Promise((resolve, reject) => {
        if (randomNum >= 50) {
            resolve({
                code: randomNum,
                message: 'Успіх!'
            })
        } else {
            reject ({
                code: randomNum,
                message: 'Помилка!'
            })
        }
    }) 
};

// console.log(randomTask());
randomTask()
    .then(
        data => console.log(`✅ ${data.code}% - ${data.message}`)
    )
    .catch(
        error => console.log(`❌ ${error.code}% - ${error.message}`)
);

// 1. Створи застосунок для пошуку погоди в своєму місті
// Використовуй API https://openweathermap.org/api
// (Current Weather Data -> Built-in API request by city name)

const weatherWrapper = document.querySelector('.weather-wrapper');
const inputCity = document.querySelector('.inputCity');

async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=117bcd5592950f9f701a11f5ab982de0&units=metric`;

    try {
        const response = await axios(url);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

getWeather('lviv')
    .then(
        data => createMarkup(data)
    )
    .catch(
        error => console.log(error)
    );

function createMarkup(data) {
    const markup = `
    <div class="weather-card">
        <div>
            <h2>${data.name}</h2>
                <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" width="80px"><p>${data.weather[0].description}</p>
        </div>
        <div>
            <p>Temperature: ${data.main.temp}</p>
            <p>Feels like: ${data.main.feels_like}</p>
            <p>Humidity: ${data.humidity}%</p>
            <p>Pressure: ${data.main.pressure}</p>
        </div>
    `;
    
    weatherWrapper.innerHTML = markup;
};

inputCity.addEventListener('blur', (e) => {
    const query = e.target.value.trim();

    if (query === "") {
        alert('Enter city name')
        return;
    };

    getWeather(query)
    .then(
        data => createMarkup(data)
    )
    .catch(
        error => console.log(error)
    );

});
