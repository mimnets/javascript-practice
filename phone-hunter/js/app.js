/*const loadPhones = async (searchText) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data);
}

const displayPhones = phones =>{
    console.log(phones)
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';
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
}

document.getElementById('btn-search').addEventListener('click', function(){
    const searchFiled = document.getElementById('search-field');
    const searchText = searchFiled.value;
    loadPhones(searchText);
})


loadPhones()
*/

function chunkArrayInGroups(arr, size) {
    let output = [];
    let subarray = [];
    let subctr = 0;
  
    for(let i = 0; i < arr.length; i++){
      if(subctr === size){
        subctr = 0;
      }
      else if(arr.length >= size){
        console.log(arr)
      }
      subctr++;
    }
  
    //return subarray;
  }
  
  let result = chunkArrayInGroups(["a", "b", "c", "d"], 2);
  
  console.log(result);