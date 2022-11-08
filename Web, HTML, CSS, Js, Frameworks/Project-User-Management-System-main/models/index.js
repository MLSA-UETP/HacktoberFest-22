const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('ums','root','',{
    host: 'localhost',
    dialect: 'mysql'
})

try{
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
}
catch(error){
    console.erro('sequelize not authenticated',error);
}

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('./user')(sequelize,DataTypes);

module.exports = db;
