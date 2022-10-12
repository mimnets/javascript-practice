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
        //console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h5>Country Common Name:${country.name.common}</h5>
        <button onclick="countryDetails('${country.cca3}')">Get Country Details</button>
        `;
        getCountry.appendChild(countryDiv);
    })
}

const countryDetails = (countryCode) =>{
    //console.log("clicked", countryCode);
    // https://restcountries.com/v3.1/alpha{code}
    const url = `https://restcountries.com/v3.1/alpha/${countryCode}`
        fetch(url)
        .then(res => res.json())
        .then(cDetails => displayCountryDetails(cDetails[0]))
}

const displayCountryDetails = country =>{
    console.log(country);
    const countryDetail = document.getElementById('country-detail');
    countryDetail.innerHTML = `
        <h3>Capital Name: ${country.capital}</h3>
        <img src="${country.flags.png}"/>
    `
}
loadCountry()