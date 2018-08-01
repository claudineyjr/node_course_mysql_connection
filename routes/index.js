const router = require('express').Router();

router.use('/', (req, res) => {
  res.send('Bem vindo ao cadastro de alunos');
});