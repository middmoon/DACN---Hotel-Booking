"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class RoomType extends Model {
    static associate(models) {
      // Define associations here if needed
      RoomType.belongsTo(models.Room, { foreignKey: "id_room" });
    }
  }

  RoomType.init(
    {
      _id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_room: {
        type: DataTypes.INTEGER,
        // references: {
        //   model: "Room",
        //   key: "_id",
        // },
      },
      price: {
        type: DataTypes.BIGINT.UNSIGNED,
      },
      type_name: {
        type: DataTypes.ENUM("STD", "VIP"),
      },
    },
    {
      sequelize,
      modelName: "RoomType",
      tableName: "room_type",
      timestamps: true,
    }
  );

  return RoomType;
};
