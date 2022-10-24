'use strict';
const {DataTypes} = require('sequelize');
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("users",{    // queryInterface helps while changing something in database
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
        unique: true,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    createdAt: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    updatedAt: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})
},

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  }
};
