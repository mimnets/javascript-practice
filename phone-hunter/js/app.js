const loadPhones = async (searchText, dataLimit) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data, dataLimit);
}

const displayPhones = (phones, dataLimit) =>{
    //console.log(phones)
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';
        // Display 5 phone only.
    const showAll = document.getElementById('show-all');
    if(dataLimit && phones.length > 5){
        phones = phones.slice(0, 5);
        showAll.classList.remove('d-none');
    }
    else{
        showAll.classList.add('d-none');
    }
    

    const noPhone = document.getElementById('no-found-message');
    if(phones.length === 0){
        
        noPhone.classList.remove('d-none');
    }
    else{
        noPhone.classList.add('d-none');
    }
    phones.forEach(phone =>{
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card p-4">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${phone.phone_name}</h5>
          <p class="card-text">Description of the product.</p>
          <button onclick="loadPhoneDetails('${phone.slug}')" class="btn btn-primary">Show Details</button>
        </div>
        `;
        phoneContainer.appendChild(phoneDiv);
    });
    // Stop loader
    toggleSpinner(false);
}

const processSearch = (dataLimit) =>{
    toggleSpinner(true);
    const searchFiled = document.getElementById('search-field');
    const searchText = searchFiled.value;
    loadPhones(searchText, dataLimit);
    //searchFiled.value = '';
}
// Handle search button click
document.getElementById('btn-search').addEventListener('click', function(){
    // Start loader
    // toggleSpinner(true);
    // const searchFiled = document.getElementById('search-field');
    // const searchText = searchFiled.value;
    // loadPhones(searchText);
    // searchFiled.value = '';
    processSearch(5);
})

// Search input field enter key handler
document.getElementById('search-field').addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
    processSearch(5);        
    }
})


const toggleSpinner = isLoading =>{
    const loaderSection = document.getElementById('loader');
    if(isLoading){
        loaderSection.classList.remove('d-none');

    }
    else{
        loaderSection.classList.add('d-none');
    }
}

// Not the best way to load show all
document.getElementById('btn-show-all').addEventListener('click', function(){
    processSearch();
})

const loadPhoneDetails = async id =>{
    const url =`https://openapi.programming-hero.com/api/phone/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.data);
}

//loadPhones()