// all hmtl variables
let userInput = document.getElementById("userinput");
let SearchButton = document.getElementById("searchbutton");
let searchBox = document.querySelector(".searchbox");
let userSearch = document.querySelectorAll(".usersearch");
let rightCol = document.querySelector(".r-col");
let WeatherToday = document.querySelector(".today");
let weekWeather = document.querySelector(".week");
let weatherBox = document.querySelectorAll(".box");
let loadingMessage = document.querySelector(".loading");
// all variables
const userInputArray = ["", "", "", "", ""];
let searchCount = 0;

//create e

function renderSearch(e) {
  e.preventDefault();
  // left search button function to keet track of all search terms and save it for later
  let userEntered = userInput.value;
  userInputArray.unshift(userEntered);
  userInputArray.pop();
  if (userEntered) {
    for (let i = 0; i < userSearch.length; i++) {
      for (let j = 0; j < userInputArray.length; j++) {
        if (i === j) {
          userSearch[i].textContent = userInputArray[j];
          if (searchCount == i) {
            userSearch[i].style.display = "block";
          }
        }
      }
    }
  } else {
    alert("Please Enter Something");
    window.location.reload();
  }

  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${userEntered}&appid=81d3542515cce3a6b52f72f7f5fb9bf7`,
    {
      method: "GET",
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let incr = 6;
      let weatherData = [];
      for (let i = 0; i < incr; i++) {
        let date = data.list[i].dt_txt.split(" ");
        console.log(date);
        date = date[0].split("-");
        let date1 = date[0];
        let date2 = date[1];
        let date3 = date[2];

        date = [...date2, "/", ...date3, "/", ...date1];

        let newd = date.join("");
        weatherData.push(newd);
        weatherData.push(data.list[i].weather[0].icon);
        weatherData.push(data.list[i].main.temp);
        weatherData.push(data.list[i].wind.speed);
        weatherData.push(data.list[i].main.humidity);
      }
      //store into local storage to be used latter
      localStorage.setItem(userEntered, JSON.stringify(weatherData));
    });

  //increment after the function
  searchCount++;
  loadingMessage.style.display = "block";
  setTimeout(() => {
    loadingMessage.style.display = "none";
  }, 2000);

  setTimeout(() => {
    let retrievedWeatherData = JSON.parse(localStorage.getItem(userEntered));

    //left display date/details main weather info
    rightCol.style.display = "block";
    WeatherToday.children[0].textContent =
      userEntered + " " + retrievedWeatherData[0];
    // http://openweathermap.org/img/w/01n.png
    let icon = retrievedWeatherData[1];
    WeatherToday.children[1].setAttribute(
      "src",
      `http://openweathermap.org/img/w/${icon}.png`
    );
    WeatherToday.children[2].textContent = "Temp: " + retrievedWeatherData[2];
    WeatherToday.children[3].textContent = "Wind: " + retrievedWeatherData[3];
    WeatherToday.children[4].textContent =
      "Humidity: " + retrievedWeatherData[4];
    let objectNum = 0;
    /// box sections
    //use a map?? if i can figure it out

    for (let i = 0; i < weatherBox.length; i++) {
      let arr = weatherBox[i].children;
      for (let j = 0; j < arr.length; j++) {
        if (
          j === 1 ||
          j === 6 ||
          j === 11 ||
          j === 16 ||
          j === 21 ||
          j === 26
        ) {
          arr[j].setAttribute(
            "src",
            `http://openweathermap.org/img/w/${icon}.png`
          );
        } else if (
          j === 2 ||
          j === 7 ||
          j === 12 ||
          j === 17 ||
          j === 22 ||
          j === 27
        ) {
          arr[j].textContent =
            "Temp: " + retrievedWeatherData[objectNum] + " ℉";
        } else if (
          j === 3 ||
          j === 8 ||
          j === 13 ||
          j === 18 ||
          j === 23 ||
          j === 28
        ) {
          arr[j].textContent =
            "Wind: " + retrievedWeatherData[objectNum] + " MPH";
        } else if (
          j === 4 ||
          j === 9 ||
          j === 14 ||
          j === 19 ||
          j === 24 ||
          j === 29
        ) {
          arr[j].textContent =
            "Humidity: " + retrievedWeatherData[objectNum] + " %";
        }

        objectNum++;
      }
    }
  }, 2000);

  document.addEventListener("click", function (e) {
    for (let i = 0; i < localStorage.length; i++) {
      if (e.target.textContent === localStorage.key(i)) {
        retrievedWeatherData = JSON.parse(
          localStorage.getItem(localStorage.key(i))
        );
        if (retrievedWeatherData) {
          //left display date/details main weather info
          rightCol.style.display = "block";
          WeatherToday.children[0].textContent =
            e.target.textContent + " " + retrievedWeatherData[0];
          // http://openweathermap.org/img/w/01n.png
          let icon = retrievedWeatherData[1];
          WeatherToday.children[1].setAttribute(
            "src",
            `http://openweathermap.org/img/w/${icon}.png`
          );
          WeatherToday.children[2].textContent = retrievedWeatherData[2];
          WeatherToday.children[3].textContent = retrievedWeatherData[3];
          WeatherToday.children[4].textContent = retrievedWeatherData[4];
          let objectNum = 0;
          /// box sections
          //use a map?? if i can figure it out

          for (let i = 0; i < weatherBox.length; i++) {
            let arr = weatherBox[i].children;
            for (let j = 0; j < arr.length; j++) {
              if (
                j === 1 ||
                j === 6 ||
                j === 11 ||
                j === 16 ||
                j === 21 ||
                j === 26
              ) {
                arr[j].setAttribute(
                  "src",
                  `http://openweathermap.org/img/w/${icon}.png`
                );
              } else if (
                j === 2 ||
                j === 7 ||
                j === 12 ||
                j === 17 ||
                j === 22 ||
                j === 27
              ) {
                arr[j].textContent =
                  "Temp: " + retrievedWeatherData[objectNum] + " ℉";
              } else if (
                j === 3 ||
                j === 8 ||
                j === 13 ||
                j === 18 ||
                j === 23 ||
                j === 28
              ) {
                arr[j].textContent =
                  "Wind: " + retrievedWeatherData[objectNum] + " MPH";
              } else if (
                j === 4 ||
                j === 9 ||
                j === 14 ||
                j === 19 ||
                j === 24 ||
                j === 29
              ) {
                arr[j].textContent =
                  "Humidity: " + retrievedWeatherData[objectNum] + " %";
              }

              objectNum++;
            }
          }
        }
      } else {
      }
    }
  });
}

//all event listeners
SearchButton.addEventListener("click", renderSearch);

setTimeout(() => {}, 1000);
