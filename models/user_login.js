module.exports = function(sequelize, DataTypes) {
    var User_Login = sequelize.define("User_Login", {
        user_email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pin: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    });
    return User_Login;
};
  