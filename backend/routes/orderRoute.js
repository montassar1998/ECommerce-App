const router = require("express").Router();

const { createOrder } = require("../controllers/oerderController");

router.post("/", createOrder);

module.exports = router;
