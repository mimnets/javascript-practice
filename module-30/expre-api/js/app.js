function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data))

}

function displayUsers(bata){
    const ul = document.getElementById('users-list');
    for(const user of bata){
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}