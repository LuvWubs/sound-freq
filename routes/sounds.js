const router = require("express").Router();
const soundsController = require("../controllers/soundsController");

router.route("/sounds")
  .get(soundsController.findAll)
  .post(soundsController.create);

// "/api/sounds/:id"
router
  .route("/:id")
  .get(soundsController.findById)
  .put(soundsController.update)
  .delete(soundsController.remove);

module.exports = router;
