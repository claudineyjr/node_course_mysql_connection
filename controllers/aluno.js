const HttpStatus = require('http-status-codes');
const service = require('./../services/aluno');
const { responseJson } = require('./../utils/controllers');

const get = (req, res) => {
  return service.get(req)
    .then((result) => {
      if (!result.length) {
        responseJson(res, null, HttpStatus.NO_CONTENT);
      }
      responseJson(res, result);
    })
    .catch((error) => error);
}

const getById = (req, res) => {
  return service.getById(req)
    .then((result) => {
      if (!result) {
        responseJson(res, null, HttpStatus.NO_CONTENT);
      }
      responseJson(res, result);
    })
    .catch((error) => error);
}

const post = (req, res) => {
  return service.post(req)
    .then((result) => {
      responseJson(res, result, HttpStatus.CREATED);
    })
    .catch((error) => error);
}

const deleteById = (req, res) => {
  return service.deleteById(req)
    .then((result) => {
      if (result) {
        responseJson(res, null, HttpStatus.OK)
      } else {
        responseJson(res, null, HttpStatus.NO_CONTENT);
      }
    })
    .catch((error) => console.log(error));
}

module.exports = {
  deleteById,
  get,
  getById,
  post,
}