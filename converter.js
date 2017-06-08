function toCelsius (input) {
	return (input - 32) * (5/9);
}

function toFahrenheit (input) {
	return (input * (9/5)) + 32;
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");
var clear = document.getElementById("clear");
var celsiusRadio = document.getElementById("celsius-radio");
var fahrenheitRadio = document.getElementById("fahrenheit-radio");
var inputValue = document.getElementById("temperature-input");
var output = document.getElementById("output");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  console.log("event", clickEvent);
  if (celsiusRadio.checked) {
    var tempConvertedToCelsius = toCelsius(parseInt(inputValue.value));
  	output.innerHTML = tempConvertedToCelsius;
    if (tempConvertedToCelsius > 32) {
      output.className = "red";
    } else if (tempConvertedToCelsius < 0) {
      output.className = "blue";
    } else {
      output.className = "green";
    }
  } else if (fahrenheitRadio.checked) {
    var tempConvertedToFahrenheit = toFahrenheit(parseInt(inputValue.value));
  	output.innerHTML = tempConvertedToFahrenheit;
    if (tempConvertedToFahrenheit > 90) {
      output.className = "red";
    } else if (tempConvertedToFahrenheit < 32) {
      output.className = "blue";
    } else {
      output.className = "green";
    }
  } else {
  	console.log("please check a radio button");
  }
}

function clearInput (clearEvent) {
  console.log("event", clearEvent);
  inputValue.value = "";
  output.innerHTML = "";
}

function enterKeyPressHandler (keyPressEvent) {
  console.log("keypress event", keyPressEvent);
  if (keyPressEvent.key === "Enter" && celsiusRadio.checked) {
    var tempConvertedToCelsius = toCelsius(parseInt(inputValue.value));
    output.innerHTML = tempConvertedToCelsius;
    if (tempConvertedToCelsius > 32) {
      output.className = "red";
    } else if (tempConvertedToCelsius < 0) {
      output.className = "blue";
    } else {
      output.className = "green";
    }
  } else if (keyPressEvent.key === "Enter" && fahrenheitRadio.checked) {
    var tempConvertedToFahrenheit = toFahrenheit(parseInt(inputValue.value));
    output.innerHTML = tempConvertedToFahrenheit;
    if (tempConvertedToFahrenheit > 90) {
      output.className = "red";
    } else if (tempConvertedToFahrenheit < 32) {
      output.className = "blue";
    } else {
      output.className = "green";
    }
  }
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
inputValue.addEventListener("keydown", enterKeyPressHandler);
clear.addEventListener("click", clearInput);
