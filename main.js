// constant variable was used to keep the value of kelvin constant
const kelvin = 0;

// constant was used again for the variable celsius, to keep it constant, in terms of it will always be less 273 degrees.
const celsius = kelvin - 273;

// fahrenheit is calculated with the below formula using celsius and the equation, following the PENDAS rule.
var fahrenheit = celsius * (9/5) + 32;

// fahrenheit is now rounded down using the math.floor object, with the result from the fahrenheit equation. 
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees in Fahrenheit.`);


// The below code has been commented out, as part of the extra practice - happy to say it worked!

// var newton = celsius * (33/100);

// newton = Math.floor(newton);

// console.log(`The temperature is ${newton} degrees in Newton.`)
