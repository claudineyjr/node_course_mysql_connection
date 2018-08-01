const app = require('express')();
const port = process.env.PORT  || 3000;
const bodyParser = require('body-parser');
app.listen(port, (req, res) => {
  console.log(`Servidor rodando na porta ${port}`);
});

app.use(bodyParser.json());
app.use('/alunos', require('./routes/aluno'));