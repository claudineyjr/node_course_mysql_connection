connection = require('../database/mariadb');
const { INTEGER, STRING, DATE } = connection.Sequelize;

const schema = {
  id: {
    type: INTEGER,
    allowNull: false,
    field: 'id',
    primaryKey: true
  },
  name: {
    type: STRING,
    allowNull: false,
    field: 'name'
  },
  birthday: {
    type: DATE,
    allowNull: false,
    field: 'birthday'
  }
};

const Aluno = connection.define('aluno', schema, { tableName: 'aluno'});

module.exports = exports = Aluno;