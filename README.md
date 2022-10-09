# Weather-App-Fetch-APi-

# Code Quiz

## Purpose of this Project

The purpose of this project was to create a coding assessment to test the user's knowledge of basic javascript concepts. The format of this application is a timed quiz with multiple choice questions.

This application runs in the browser via JavaScript code and features dynamically updated HTML and CSS. Some interesting features included in this application are: a timer function that penalizes the user for incorrect answers by deducting time from the clock, automatically presenting the user the next question when an answer is submitted, and the ability for the user to save their highscores in local storage and view them on a leaderboard page that shows historical results.

## Application Demo

![Demo of code quiz application](./assets/demo.gif)

## Code Examples

This example displays my use of an a nested forloop as well as an if statement

```js
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
  
```

## Links

Deployed Application:
https://chiemekaanunkor.github.io/Weather-App-Fetch-APi-/

GitHub Repository:
https://github.com/ChiemekaAnunkor/Weather-App-Fetch-APi-
## Technologies Used

![JavaScript Badge](https://img.shields.io/badge/Language-JavaScript-orange)
![HTML Badge](https://img.shields.io/badge/Language-HTML-green)
![CSS Badge](https://img.shields.io/badge/Language-CSS-blue)

## License

MIT License
