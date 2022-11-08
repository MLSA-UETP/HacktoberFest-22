const moment = require('moment');
module.exports = (sequelize, DataTypes)=>{
const User = sequelize.define("users",{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        }
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {     // this is on sequelize level change
            isInt: true,
            len: [11],
        }
    },
    createdAt: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    updatedAt: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
    // Other model options go here
    // tableName: "users"
    // timestamps: false
})

User.beforeCreate(async(user) => {
    user.dataValues.createdAt = moment().unix();
    user.dataValues.updatedAt = moment().unix();
  });
  User.beforeUpdate(async(user) => {
    user.dataValues.updatedAt = moment().unix();
  });
return User;
}