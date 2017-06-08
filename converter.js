// converts a fahrenheit number to celsius
function toCelsius (input) {
	return (input - 32) * (5/9);
}

// converts a celsius number to fahrenheit
function toFahrenheit (input) {
	return (input * (9/5)) + 32;
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// Get a reference to the clear button in the DOM
var clear = document.getElementById("clear");

// Get a reference to the Celsius radio button in the DOM
var celsiusRadio = document.getElementById("celsius-radio");

// Get a reference to the Fahrenheit radio button in the DOM
var fahrenheitRadio = document.getElementById("fahrenheit-radio");

// Get a reference to the Input in the DOM
var inputValue = document.getElementById("temperature-input");

// Get a reference to the Output in the DOM
var output = document.getElementById("output");

// Convert button handler that calls the conversion function and text color function
function converButtonHandler (clickEvent) {
  console.log("event", clickEvent);
  convertOutputText();
  setOutputColor();
}

// function that takes the input value, converts it, and injects it into the outpul element
function convertOutputText () {
  if (celsiusRadio.checked) {
    output.innerHTML = toCelsius(parseInt(inputValue.value));
  } else if (fahrenheitRadio.checked) {
    output.innerHTML = toFahrenheit(parseInt(inputValue.value));
  } else {
    console.log("please check a radio button");
  }
}

// function that sets the class/color of the output based on the current number
function setOutputColor () {
  if (( celsiusRadio.checked && Number(output.innerHTML) > 32 )||( fahrenheitRadio.checked && Number(output.innerHTML) > 90 )) {
    output.className = "red";
  } else if ((celsiusRadio.checked && Number(output.innerHTML) < 0 )||( fahrenheitRadio.checked && Number(output.innerHTML) < 32)) {
    output.className = "blue";
  } else {
    output.className = "green";
  }
}

// clears the input, output and radio buttons
function clearInput (clearEvent) {
  console.log("event", clearEvent);
  inputValue.value = "";
  output.innerHTML = "";
  celsiusRadio.checked = false;
  fahrenheitRadio.checked = false;
}

// handler to convert and color the output text after hitting the enter key
function enterKeyPressHandler (keyPressEvent) {
  console.log("keypress event", keyPressEvent);
  if (keyPressEvent.key === "Enter") {
    convertOutputText();
    setOutputColor();
  } else {
    console.log("that wasn't the enter key");
  }
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", converButtonHandler);
window.addEventListener("keydown", enterKeyPressHandler);
clear.addEventListener("click", clearInput);