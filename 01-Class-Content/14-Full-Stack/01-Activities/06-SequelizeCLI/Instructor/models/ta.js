'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Ta.init({
    name: DataTypes.STRING,
    attitude: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ta',
  });
  return Ta;
};