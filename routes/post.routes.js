const express = require("express");
const router = express.Router();

const postController = require("../controllers/post.controller");
router.route("/").get(postController.getAll);
router.route("/:id?").get(postController.getById);
router.route("/").post(postController.create);
router.route("/:id?").put(postController.updateById);
router.route("/:id?").delete(postController.deleteById);

module.exports = router;