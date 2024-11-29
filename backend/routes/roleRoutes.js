const express = require("express");
const { assignRole } = require("../controllers/roleController");
const { protect } = require("../middlewares/authMiddleware");
const { allowRoles } = require("../middlewares/roleMiddleware");

const router = express.Router();

router.post("/assign-role", protect, allowRoles("Admin"), assignRole);

module.exports = router;
