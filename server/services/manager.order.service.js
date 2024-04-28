"use strict";

const db = require("../models");
const { BadRequestError, NotFoundError } = require("../core/error.response");
const { getInfoData } = require("../utils");
const HotelManagerService = require("./hotel.manager.service");

class ManagerOrderService {
  static async getAllOrder(userId) {
    const hotelId = await HotelManagerService.getHotelIdForOwner(userId);

    const orderList = await db.Order.findAll({
      where: {
        id_hotel: hotelId,
      },
      include: [
        {
          model: db.RoomOrder,
          include: [db.Room],
        },
      ],
    });

    if (!orderList) {
      throw new NotFoundError("ERR: Can not get your orders");
    }

    if (orderList) {
      return {
        orders: orderList,
      };
    }
  }

  static async getOrderWithStatus(userId, status) {
    const hotelId = await HotelManagerService.getHotelIdForOwner(userId);

    const foundOrder = await db.Order.findAll({
      where: {
        id_hotel: hotelId,
        status: status,
      },
    });

    if (!foundOrder) {
      throw new BadRequestError("Error: Can not get order with status");
    }

    return {
      orders: foundOrder,
    };
  }

  static async updateOrder(userId, orderId, payload) {
    const hotelId = await HotelManagerService.getHotelIdForOwner(userId);

    const foundOrder = await db.Order.findOne({
      where: { _id: orderId, id_hotel: hotelId },
    });

    if (!foundOrder) {
      throw new NotFoundError("ERR: Can not find order for your hotel");
    }

    const updateedOrder = await foundOrder.update({
      status: payload.status,
      total_price: payload.total_price,
      start_day: payload.start_day,
      end_day: payload.end_day,
      total_person: payload.total_person,
      total_room: payload.total_room,
    });

    if (!foundOrder) {
      throw new BadRequestError("ERR: Can not update order for your hotel");
    }

    return {
      updateedOrder,
    };
  }

  static async addRoomToOrder(userId, orderId, payload) {
    const hotelId = await HotelManagerService.getHotelIdForOwner(userId);

    const foundOrder = await db.Order.findOne({
      where: { _id: orderId, id_hotel: hotelId },
    });

    if (!foundOrder) {
      throw new NotFoundError("ERR: Can not find order for your hotel");
    }

    const updateedOrder = await foundOrder.update({
      status: payload.status,
      total_price: payload.total_price,
      start_day: payload.start_day,
      end_day: payload.end_day,
      total_person: payload.total_person,
      total_room: payload.total_room,
    });

    if (!foundOrder) {
      throw new BadRequestError("ERR: Can not update order for your hotel");
    }

    return {
      updateedOrder,
    };
  }
}

module.exports = ManagerOrderService;