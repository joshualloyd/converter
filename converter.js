function toCelsius (input) {
	return (input - 32) * (5/9);
}

function toFahrenheit (input) {
	return (input * (9/5)) + 32;
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");
var celsiusRadio = document.getElementById("celsius-radio");
var farenheitRadio = document.getElementById("farenheit-radio");
var inputValue = document.getElementById("temperature-input");
var output = document.getElementById("output");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  console.log("event", clickEvent);
  if (celsiusRadio.checked) {
  	output.innerHTML = toCelsius(parseInt(inputValue.value));
  } else if (farenheitRadio.checked) {
  	output.innerHTML = toFahrenheit(parseInt(inputValue.value));
  } else {
  	console.log("please check a radio button");
  }
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
