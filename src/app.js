function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${minutes}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day}, ${hours}:${minutes}`;
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  let dayElement = document.querySelector("#day");
  let monthElement = document.querySelector("#month");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  let currentDay = new Date();
  dayElement.innerHTML = currentDay.getDate();
  if (
    dayElement.innerHTML === 1 ||
    dayElement.innerHTML === 11 ||
    dayElement.innerHTML === 21 ||
    dayElement.innerHTML === 31
  ) {
    dayElement.innerHTML = `${dayElement.innerHTML}st`;
  } else {
    if (
      dayElement.innerHTML === 2 ||
      dayElement.innerHTML === 12 ||
      dayElement.innerHTML === 22
    ) {
      dayElement.innerHTML = `${dayElement.innerHTML}nd`;
    }
    if (dayElement.innerHTML === 3 || dayElement.innerHTML === 13) {
      dayElement.innerHTML = `${dayElement.innerHTML}rd`;
    } else {
      dayElement.innerHTML = `${dayElement.innerHTML}th`;
    }
  }
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  monthElement.innerHTML = months[currentDay.getMonth()];
}

let apiKey = "09d782b670469e485d317871e7a35468";
let city = "Warsaw";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
