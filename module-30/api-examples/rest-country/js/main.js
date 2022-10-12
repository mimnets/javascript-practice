const loadCountry = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountry(data))
}

const displayCountry = countries =>{
    const getCountry = document.getElementById('country-container');
    // With For loop
    // for(const country of countries){
    //     console.log(country.name)
    //     const countryDiv = document.createElement('div');
    //     countryDiv.classList.add('country');
    //     countryDiv.innerHTML = `
    //     <h4>Country Name:${countryDetails.common} </h4>
    //     <h5>Official Name:${countryDetails.official} </h5>
    //     `;
    // getCountry.appendChild(countryDiv);
    // }
    // With forEach method
    countries.forEach(country => {
        console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h1>Country Common Name:${country.name.common}</h1>
        <h2>Country Offical Name: ${country.name.official}</h2>
        `;
        getCountry.appendChild(countryDiv);
    })
}
loadCountry()