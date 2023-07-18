async function buscaEndereco(cep) {
  try {
    var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    var consultaCEPConvertida = await consultaCEP.json();
    if (consultaCEPConvertida.erro) {
      throw Error('CEP inválido!')
    }
    var cidade = document.getElementById('cidade');
    var bairro = document.getElementById('bairro');
    var logradouro = document.getElementById('endereco');
    var estado = document.getElementById('estado');

    cidade.value = consultaCEPConvertida.localidade;
    bairro.value = consultaCEPConvertida.bairro;
    logradouro.value = consultaCEPConvertida.logradouro;
    estado.value = consultaCEPConvertida.uf;


    console.log(consultaCEPConvertida); 
    return consultaCEPConvertida;
  } catch (erro) {
    console.log(erro);
  }
}

var cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscaEndereco(cep.value));


