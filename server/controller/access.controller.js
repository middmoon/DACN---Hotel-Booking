"use strict";
const { CREATED, OK } = require("../core/success.response");
const AccessService = require("../services/access.service");

class AccessController {
  signUp = async (req, res, next) => {
    new CREATED({
      message: "Registered OK",
      metadata: await AccessService.signUp(req.body),
      options: {
        limit: 10,
      },
    }).send(res);
  };

  login = async (req, res, next) => {
    const loginResponse = await AccessService.login(req.body);
    const { accessToken, refreshToken, user } = loginResponse.metadata;

    res.cookie("accessToken", accessToken, {
      maxAge: 100 * 60 * 1000,
      httpOnly: true,
      secure: false,
      path: "/",
      sameSite: "strict",
    });

    res.cookie("refreshToken", refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: false,
      path: "/",
      sameSite: "strict",
    });

    new OK({
      message: "Login OK",
      metadata: {
        user,
        accessToken,
      },
    }).send(res);
  };

  refresh = async (req, res, next) => {
    const refresh = await AccessService.refresh({
      refreshToken: req.cookies.refreshToken,
      userInfo: req.user,
    });

    res.cookie("refreshToken", refresh.refreshToken, {
      httpOnly: true,
      secure: false,
      path: "/",
      sameSite: "strict",
    });

    new OK({
      message: "handlerRefreshToken OK",
      metadata: {
        user: req.user,
        accessToken: refresh.accessToken,
      },
    }).send(res);
  };

  logout = async (req, res, next) => {
    res.clearCookie("refreshToken");
    res.clearCookie("accessToken");
    new OK({
      message: "Logout OK",
      metadata: await AccessService.logout(req.user),
    }).send(res);
  };
}

module.exports = new AccessController();
