const loadPhones = async (searchText) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data);
}

const displayPhones = phones =>{
    console.log(phones)
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';
    phones = phones.slice(0, 10);

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
          <p class="card-text">${phone.slug}</p>
        </div>
        `;
        phoneContainer.appendChild(phoneDiv);
    })
    // Stop loader
    toggleSpinner(false);
}

document.getElementById('btn-search').addEventListener('click', function(){
    // Start loader
    toggleSpinner(true);
    const searchFiled = document.getElementById('search-field');
    const searchText = searchFiled.value;
    loadPhones(searchText);
    searchFiled.value = '';
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
//loadPhones()