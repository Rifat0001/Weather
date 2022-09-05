// it is the api key
const key = `46ad7457603b9b0104e633e78cd60e16`;

// set function for set temp that is called by search button
const searchTemp = () =>{
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayWeater(data));
}

// set  common function
const setValueById = (Id,text) =>{
    const temp = document.getElementById(Id);
    temp.innerText = text;
}

// set function to display 

const displayWeater = temperature =>{
    console.log(temperature);
    setValueById('city',temperature.name);
    setValueById('temperature',temperature.main.temp);
    setValueById('condition',temperature.weather[0].main);
    // set for icon
    // set weather icon
    const url = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}
