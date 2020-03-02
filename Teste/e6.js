const url = 'https://viacep.com.br/ws/96080620/json/'
const axios = require('axios')

axios.get(url).then(response => {
    const cep = response.data
    const meuEndereco = cep.logradouro + ', ' + 342 + ', ' + cep.localidade + '/' + cep.uf
    console.log(meuEndereco)
})

