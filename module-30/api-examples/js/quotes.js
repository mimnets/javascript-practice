const loadQuote = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data))
    
}

const displayQuote = quote =>{
    const bockQuote = document.getElementById('quote');
    bockQuote.innerText = quote.quote;
}