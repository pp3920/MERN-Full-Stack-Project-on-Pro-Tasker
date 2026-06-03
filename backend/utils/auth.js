const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET;

const expiration = "1d";

const signToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      username: user.username,
      email: user.email,
    },
    secret,
    {
      expiresIn: expiration,
    }
  );
};

const authMiddleware = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "You must be logged in",
    });
  }

  token = token.split(" ").pop().trim();

  try {
    const decoded = jwt.verify(token, secret);

    req.user = decoded;

    next();
  } catch (err) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
};

module.exports = {
  signToken,
  authMiddleware,
};