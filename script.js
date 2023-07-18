var consultaCEP = fetch('https://viacep.com.br/ws/01001000/json/')
  .then(response => response.json())
  .then(r => console.log(r));

console.log(consultaCEP);