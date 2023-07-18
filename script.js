var consultaCEP = fetch('https://viacep.com.br/ws/01001000/json/')
  .then(response => response.json())
  .then(r => {
    if (r.erro) {
      throw Error('CEP inválido')
    } else {
      console.log(r)
    }
  })
  .catch(erro => console.log(erro));

console.log(consultaCEP);