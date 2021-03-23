module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  // Add a belongsTo association to Authors here
  // Example: https://github.com/sequelize/express-example/blob/3fca27909b3ec9d72874ebe3317ffd8e5842b17e/models/task.js
  Post.associate = function (models) {
    models.Post.belongsTo(models.Author, {
      // will delete a post if you delete the author
      onDelete: 'CASCADE',
      // only allows you to create a post if it has an author
      foreignKey: {
        allowNull: false
      }
    });
  }
  
  return Post;
};
