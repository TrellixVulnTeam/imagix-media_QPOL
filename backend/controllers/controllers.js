const User = require("../models/Users");
const jwt = require("jsonwebtoken");

//middleware for verification of jwt
module.exports.verifyJwt = (req, res, next) => {
  const token = req.body.headers["x-access-token"];
  if (!token) {
    res.send("Token not provided");
  } else {
    jwt.verify(token, process.env.TOKEN_SECRET, (error, decoded) => {
      if (error) {
        res.json({ auth: false, msg: "Authentication failed" });
      } else {
        req.userId = decoded.id;
        res.json({ auth: true, msg: "Authentication Success" });
        next();
      }
    });
  }
};

module.exports.login = (req, res) => {
  const { username, password } = req.body;

  User.find({ userName: username, password: password }, (error, result) => {
    console.log(result);
    if (error) {
      return console.log(error);
    } else {
      if (result.length > 0) {
        const id = result[0].id;
        const token = jwt.sign({ id }, process.env.TOKEN_SECRET, {
          expiresIn: 60 * 60 * 24,
        });
        res.json({ auth: true, token: token, result: result });
      } else {
        res.send({ msg: "Wrong Username and Password Combinations" });
      }
    }
  });
};
