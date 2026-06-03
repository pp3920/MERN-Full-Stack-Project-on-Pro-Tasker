const router =
require("express").Router();

const User =
require("../../models/User");

const {
  signToken,
} = require("../../utils/auth");

router.post(
"/register",
async (req, res) => {

  try {

    const user =
    await User.create(req.body);

    res.status(201).json({
      message:
      "User registered",
    });

  } catch (err) {

    res.status(500).json({
      message:
      err.message,
    });

  }

});

router.post(
"/login",
async (req, res) => {

  try {

    const {
      email,
      password,
    } = req.body;

    const user =
    await User.findOne({
      email,
    });

    if (!user) {

      return res.status(400)
      .json({
        message:
        "Invalid credentials",
      });

    }

    const correct =
    await user
    .isCorrectPassword(
      password
    );

    if (!correct) {

      return res.status(400)
      .json({
        message:
        "Invalid credentials",
      });

    }

    const token =
    signToken(user);

    res.json({
      token,
      user,
    });

  } catch (err) {

    res.status(500).json({
      message:
      err.message,
    });

  }

});

module.exports = router;