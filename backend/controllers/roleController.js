const User = require("../models/userModel");

exports.assignRole = async (req, res) => {
  const { userId, role } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.role = role;
    await user.save();

    res.status(200).json({ message: "Role assigned successfully", user });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
