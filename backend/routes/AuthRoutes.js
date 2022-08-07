const router = require("express").Router();
const { login, verifyJwt } = require("../controllers/controllers");

router.post("/sign-in", login);

router.post("/verify", verifyJwt);

module.exports = router;
