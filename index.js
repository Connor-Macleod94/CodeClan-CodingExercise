/*
*Connor Macleod
*14/01/2021
*CodeClan Exercise
*Version 1.
*/

const  getWeather = function (country, weatherType) {
  return 'The weather in ' + country +' is '+ weatherType +'.';
} 
// End of getWeather function.

var getScotlandWeather = getWeather("Scotland", "sunny")
var getItalyWeather = getWeather("Italy", "rainy")
var getCanadaWeather = getWeather("Canada", "snowing")
// variables declaring countries and weathertypes

console.log("\n",getScotlandWeather,"\n",getItalyWeather,"\n",getCanadaWeather);
//output "The weather in _____ is ______" with new line entrys to seperate the outputs. x3


//end