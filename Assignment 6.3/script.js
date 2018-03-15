var temperatureInCelsius = 40;
var formula = 'celsiusToFahrenheit';

//Formula for celsius to fahrenheit.
celsiusToFahrenheit = (temperatureInCelsius * 9) / 5 + 32;

console.log('Temperature of ' + temperatureInCelsius + ' celsius, will be ' + celsiusToFahrenheit + ' fahrenheit ');


var temperatureInFahrenheit = 104;
var formula = 'fahrenheitToCelsius';

//Formula for fahrenheit to celsius.
fahrenheitToCelsius = ((temperatureInFahrenheit - 32) * 5)/9;
console.log('Temperature of ' + temperatureInFahrenheit + ' fahrenheit, will be ' + fahrenheitToCelsius + ' celsius ');