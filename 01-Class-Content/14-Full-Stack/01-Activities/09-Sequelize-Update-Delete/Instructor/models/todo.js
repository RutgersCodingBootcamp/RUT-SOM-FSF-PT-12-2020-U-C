module.exports = function(sequelize, DataTypes) {
  // id
  // updatedAt
  // createdAt
  // text
  // complete
  var Todo = sequelize.define("Todo", {
    text: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  });
  return Todo;
};
