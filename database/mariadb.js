const Sequelize = require('sequelize');
const sequelize = new Sequelize('nodeangular', 'nodeangular', '', {
  host: 'nodeangular.mysql.dbaas.com.br',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 1,
    acquire: 30000,
    idle: 10000
  },
  operatorsAliases: false,
  define: { timestamps: false }
});

sequelize.query("SELECT * FROM aluno").then(myTableRows => {
  console.log(myTableRows)
});

module.exports = exports = sequelize;