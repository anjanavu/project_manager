const User = require("../model/user");
const bcrypt = require("bcrypt");
const profile = async (req, res) => {
  try {
    const userId = req.authUser.id;
    const user = await User.findById(userId);

    if (user) return res.json(user);

    throw new Error("User not found");
  } catch (error) {
    console.error("Error occurred while fetching data:", error);
    res.status(500).json({ message: error.message });
  }
};
const profileUpdate = async (req, res) => {
  try {
    const userId = req.authUser.id;
    const user = await User.findById(userId);

    if (!user) {
      throw new Error("User not found");
    }
    if (req.body.fullname) {
      user.fullname = req.body.fullname;
    }
    if (req.body.phoneNumber) {
      user.phoneNumber = req.body.phoneNumber;
    }
    if (req.body.email) {
      user.email = req.body.email;
    }

    if (req.file && req.file.buffer) {
      user.profilePicture = req.file.buffer;
    }

    await user.save();
    res.json({ message: "Profile updated successfully" });
  } catch (error) {
    console.error("Error occurred while updating profile:", error);
    res.status(500).json({ message: error.message });
  }
};

const passwordupdate = async (req, res) => {
  const { currentPassword, newPassword, confirmPassword } = req.body;

  if (newPassword !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  const userId = req.authUser.id;
  const user = await User.findById(userId);
  const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid current password" });
  }

  // Hash the new password
  const hashedPassword = await bcrypt.hash(newPassword, 10);

  user.password = hashedPassword;
  await user.save();

  res.status(200).json({ message: "Password updated successfully" });
};

module.exports = { profile, profileUpdate, passwordupdate };
