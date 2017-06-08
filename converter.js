function toCelsius (input) {
	return (input - 32) * (5/9);
}

function toFahrenheit (input) {
	return (input * (9/5)) + 32;
}

function setOutputColor () {
  if (( celsiusRadio.checked && Number(output.innerHTML) > 32 )||( fahrenheitRadio.checked && Number(output.innerHTML) > 90 )) {
    output.className = "red";
  } else if ((celsiusRadio.checked && Number(output.innerHTML) < 0 )||( fahrenheitRadio.checked && Number(output.innerHTML) < 32)) {
    output.className = "blue";
  } else {
    output.className = "green";
  }
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
    setOutputColor();
  } else if (fahrenheitRadio.checked) {
    var tempConvertedToFahrenheit = toFahrenheit(parseInt(inputValue.value));
  	output.innerHTML = tempConvertedToFahrenheit;
    setOutputColor();
  } else {
  	console.log("please check a radio button");
  }
}

function clearInput (clearEvent) {
  console.log("event", clearEvent);
  inputValue.value = "";
  output.innerHTML = "";
  celsiusRadio.checked = false;
  fahrenheitRadio.checked = false;
}

function enterKeyPressHandler (keyPressEvent) {
  console.log("keypress event", keyPressEvent);
  if (keyPressEvent.key === "Enter" && celsiusRadio.checked) {
    var tempConvertedToCelsius = toCelsius(parseInt(inputValue.value));
    output.innerHTML = tempConvertedToCelsius;
    setOutputColor();
  } else if (keyPressEvent.key === "Enter" && fahrenheitRadio.checked) {
    var tempConvertedToFahrenheit = toFahrenheit(parseInt(inputValue.value));
    output.innerHTML = tempConvertedToFahrenheit;
    setOutputColor();
  } else {
    console.log("please check a radio button");
  }
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
window.addEventListener("keydown", enterKeyPressHandler);
clear.addEventListener("click", clearInput);