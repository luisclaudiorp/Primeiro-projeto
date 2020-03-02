const botao = document.querySelector('button')

botao.addEventListener('click', function () {
  const id = document.querySelector('#id').value

  const api = `https://jsonplaceholder.typicode.com/posts/${id}`

  axios.get(api).then(function (resposta) {
    const idUser = resposta.data
    const title = document.querySelector('#title')
    title.innerHTML = 'Titulo: '+ '<p>' + idUser.title + '</p>'  + 'Mensagem: ' + idUser.body

  }).catch(function (error) {
    if (error) {
      console.log(error)
    }
  })
})

botao.addEventListener('click', function () {
  const postId = document.querySelector('#id').value
  const api = 'https://jsonplaceholder.typicode.com/comments'

  axios.get(api).then(function (resposta) {
    const idPostId = resposta.data

    filtro = f => f.postId == `${postId}`
    const filtrados = idPostId.filter(filtro)

    function passarComents(filtrados) {
      let env = ''
      for (i = 0; i < filtrados.length; i++) {
        env += 'Nome :' + '<p class="text-primary">' + filtrados[i].name + '</p>'
        env += 'Email :' + '<p class="text-primary">' + filtrados[i].email + '</p>'
        env += '<p class="text-primary">' + filtrados[i].body + '</p>'
      }
      document.querySelector('#postId').innerHTML = env
    }
    passarComents(filtrados)

  }).catch(function (error) {
    if (error) {
      console.log(error)
    }
  })
})