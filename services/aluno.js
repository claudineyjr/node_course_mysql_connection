const { Aluno } = require('./../models/index');

const get = (req) => {
  return Aluno.findAll()
    .then((result) => {
      return result;
    });
};

const getById = (req) => {
  const options = parseFindOptions(req);
  return Aluno.findOne(options)
    .then((result) => {
      return result;
    })
}

const deleteById = (req) => {
  const options = parseFindOptions(req);
  return Aluno.destroy(options)
    .then((result) => {
      return result;
    });
}

const parseFindOptions = (req) => {
  const { id } = req.params;
  const result = {
    where: { id: id }
  }
  return result;
}

const post = (req) => {
  const { body } = req;
  return Aluno.create(body)
    .then((result) => {
      console.log(result);
      return result;
    })
}


module.exports = {
  deleteById,
  get,
  getById,
  post,
}