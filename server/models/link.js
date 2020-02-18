module.exports = function(sequelize, DataTypes) {
    var Link = sequelize.define("Link", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      service: {
        type: DataTypes.STRING,
        allowNull: false
      },
      link: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
  
    Link.associate = function (models) {
      Link.belongsTo(models.User);
    }
    
    return Link;
  };
  