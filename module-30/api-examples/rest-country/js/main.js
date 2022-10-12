const loadCountry = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountry(data))
}

const displayCountry = countries =>{
    const getCountry = document.getElementById('country-container');
    for(const country of countries){
        const countryDetails = country.name;
        console.log(country.name)
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h4>Country Name:${countryDetails.common} </h4>
        <h5>Official Name:${countryDetails.official} </h5>
        `;
    getCountry.appendChild(countryDiv);
    }
    
}
loadCountry()