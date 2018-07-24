const Aluno = require('./models/aluno');

Aluno.findAll()
  .then((teste) => {
    console.log(teste)
  })