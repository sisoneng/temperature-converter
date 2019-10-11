/*
TODO : add tooltip showing formulas
TODO : publish to webhosting site
TODO : analyze DOM
TODO : improve code if possible
*/
(function initialize() {
  let userInput = document.querySelector('#user-input')
  let celsius = document.querySelector('#celsius-out')
  let fahrenheit = document.querySelector('#fahrenheit-out')
  let kelvin = document.querySelector('#kelvin-out')
  let celciusType = document.querySelector('#celsiusType')
  let fahrenheitType = document.querySelector('#fahrenheitType')
  let kelvinType = document.querySelector('#kelvinType')

  var celsiusToKelvin = val => {
    return (val + 273.15).toPrecision(5)
  }
  var celsiusToFahrenheit = val => {
    return ((val * (9 / 5)) + 32).toPrecision(5)
  }
  var fahrenheitToCelsius = val => {
    return ((val - 32) * (5 / 9)).toPrecision(5)
  }
  var fahrenheitToKelvin = val => {
    return (((val - 32) * (5 / 9)) + 273.15).toPrecision(5)
  }
  var kelvinToCelsius = val => {
    return (val - 273.15).toPrecision(5)
  }
  var kelvinToFahrenheit = val => {
    return ((val - 273.15) * (9 / 5) + 32).toPrecision(5)
  }

  userInput.addEventListener('input', updateValue)
  celciusType.addEventListener('click', updateValue)
  fahrenheitType.addEventListener('click', updateValue)
  kelvinType.addEventListener('click', updateValue)
  document.querySelector('#clear-btn').addEventListener('click', clear)

  function updateValue() {
    let temperatures = document.querySelector('input[name=temperatures]:checked').id
    if (userInput.value == "") {
      clear()
    } else {
      switch (temperatures) {
        case "celsiusType":
          celsius.innerHTML = userInput.value + String.fromCharCode(176) + "C"
          let celciusValue = parseFloat(celsius.innerHTML)
          fahrenheit.innerHTML = celsiusToFahrenheit(celciusValue) + String.fromCharCode(176) + "F"
          kelvin.innerHTML = celsiusToKelvin(celciusValue) + "K"
          break
        case "fahrenheitType":
          fahrenheit.innerHTML = userInput.value + String.fromCharCode(176) + "F"
          let fahrenheitValue = parseFloat(fahrenheit.innerHTML)
          celsius.innerHTML = fahrenheitToCelsius(fahrenheitValue) + String.fromCharCode(176) + "C"
          kelvin.innerHTML = fahrenheitToKelvin(fahrenheitValue) + "K"
          break
        case "kelvinType":
          kelvin.innerHTML = userInput.value + "K"
          let kelvinValue = parseFloat(kelvin.innerHTML)
          celsius.innerHTML = kelvinToCelsius(kelvinValue) + String.fromCharCode(176) + "C"
          fahrenheit.innerHTML = kelvinToFahrenheit(kelvinValue) + String.fromCharCode(176) + "F"
          break
        default:
          alert("What the fuck?!")
          break
      }
    }
  }

  function clear(){
      userInput.value = ""
      celsius.innerHTML = "0" + String.fromCharCode(176) + "C"
      fahrenheit.innerHTML = "0" + String.fromCharCode(176) + "F"
      kelvin.innerHTML = "0 K"
      userInput.focus()
      document.querySelector('#celsiusType').checked = true
  }
}());