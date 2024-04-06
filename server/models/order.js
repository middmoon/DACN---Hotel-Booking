"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.Hotel, {
        foreignKey: "id_hotel",
      });
      Order.belongsTo(models.User, {
        foreignKey: "id_user",
      });
      Order.belongsTo(models.Room, {
        foreignKey: "id_room",
      });
    }
  }

  Order.init(
    {
      _id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_user: {
        type: DataTypes.INTEGER,
      },
      id_hotel: {
        type: DataTypes.INTEGER,
      },
      id_room: {
        type: DataTypes.INTEGER,
      },
      status: {
        type: DataTypes.ENUM("PRE_ORDER", "ON_ORDER", "DONE", "CANCEL"),
      },
      start_day: {
        type: DataTypes.DATE,
      },
      end_day: {
        type: DataTypes.DATE,
      },
      total_price: {
        type: DataTypes.BIGINT,
      },
    },
    {
      sequelize,
      modelName: "Order",
      tableName: "orders",
      timestamps: true,
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );

  return Order;
};