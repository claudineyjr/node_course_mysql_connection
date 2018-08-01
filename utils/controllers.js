const HttpStatus = require('http-status-codes');

const responseJson = (res, data, code = HttpStatus.OK) => {
  res.status(code);
  return res.send(data);
}

module.exports = exports =  {
  responseJson
};