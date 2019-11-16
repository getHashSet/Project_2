module.exports = function(sequelize, DataTypes) {
  var user_logins = sequelize.define("User_Login", {
    // user_email: {
    //   type: DataTypes.STRING,
    //   allowNull: false
    // },
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  });
  return user_logins;
};
