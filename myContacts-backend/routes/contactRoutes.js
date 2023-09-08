const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).json({ msg: "get all contacts" });
});

router.route("/:id").get((req, res) => {
  res.status(200).json({ msg: `get individual contact ${req.params.id}` });
});

router.route("/").post((req, res) => {
  res.status(200).json({ msg: "create contact " });
});

router.route("/:id").put((req, res) => {
  res.status(200).json({ msg: `updated contact for ${req.params.id}` });
});

router.route("/:id").delete((req, res) => {
  res.status(200).json({ msg: `deleted contact for ${req.params.id}` });
});

module.exports = router;
