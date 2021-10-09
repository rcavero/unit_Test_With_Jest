// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

// declaramos una funcion con el mismo nombre "formDollarToYen"
const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a yenes
    let valueInYen = valueInDollar * 106.58333;
    // retornamos el valor
    return valueInYen;
}

// declaramos una funcion con el mismo nombre "formYenToPound"
const fromYenToPound = function(valueInYen){
    // convertimos el valor a pounds
    let valueInPound = valueInYen * 0.00625;
    // retornamos el valor
    return parseFloat(valueInPound.toFixed(6)); //Importante tener en cuenta el número de decimales que devulve, porque si es superior o inferior, nos dará error.
}

// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };