const router = require("express").Router();
const { login, verifyJwt } = require("../controllers/controllers");

router.post("/sign-in", verifyJwt, login);

module.exports = router;
