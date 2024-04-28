"use strict";

const { OK } = require("../core/success.response");
const AddressService = require("../services/address.service");

class AddressController {
  getProvinces = async (req, res, next) => {
    new OK({
      message: "get provinces OK",
      metadata: await AddressService.getProvinces(),
    }).send(res);
  };

  getDistrictsByProvinceCode = async (req, res, next) => {
    new OK({
      message: "get provinces OK",
      metadata: await AddressService.getDistrictsByProvinceCode(
        req.params.province_code
      ),
    }).send(res);
  };

  getWardsByDistrictCode = async (req, res, next) => {
    new OK({
      message: "get provinces OK",
      metadata: await AddressService.getWardsByDistrictCode(
        req.params.district_code
      ),
    }).send(res);
  };
}

module.exports = new AddressController();
