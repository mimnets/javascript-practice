function milesToKm(miles){
    const km = miles * 1.609;
    return km;
}
const totalMiles = 100;
const kilo = milesToKm(totalMiles);
console.log(kilo);