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
    });
}

const getById = (req, res) => {
  return service.getById(req)
    .then((result) => {
      if (!result) {
        responseJson(res, result, HttpStatus.NO_CONTENT);
      }
      responseJson(res, result);
    })
}

const post = (req, res) => {
  return service.post(req)
    .then((result) => {
      responseJson(res, result, HttpStatus.CREATED);
    })
}

module.exports = {
  get,
  getById,
  post,
}