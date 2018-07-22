const router = require("express").Router();
const soundsController = require("../../controllers/soundsController");

// /api/sounds/
router
  .route("/")
  .get(soundsController.findAll)
  .post(soundsController.querySpotify);

// /api/sounds/:category
router
  .route("/:category")
  .get(soundsController.findByCategory)
  // .put(soundsController.update)
  .delete(soundsController.remove);

module.exports = router;
