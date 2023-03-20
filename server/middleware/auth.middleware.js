const jwt = require("jsonwebtoken");
const config = require("config");

const auth = (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }

  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Auth error" });
    }
    const secretKey = config.get("secretKey");
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (e) {
    return res.status(401).json({ message: "Auth error" });
  }
};

module.exports = auth;
