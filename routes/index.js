const router = require("express").Router();
const soundRoutes = require("./sounds");

// Book routes
router.use("/api", soundRoutes);

module.exports = router;
