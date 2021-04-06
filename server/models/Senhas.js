module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define("senha", {
      senha: {
        type: DataTypes.INT,
        allowNull: false,
      },
      local: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tipo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return Posts;
  };