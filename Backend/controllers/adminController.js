const bcrypt = require("bcryptjs"); // Import bcryptjs library
const Admin = require("../model/admin");

const addAdmin = async (req, res) => {
  try {
    const { name, category, userType, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = new Admin({
      name,
      category,
      userType,
      email,
      password: hashedPassword,
    });

    const data = await newAdmin.save();
    res.status(201).json({ message: "Admin added successfully", data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAdmin = async (req, res) => {
  try {
    const adminId = req.params.id;
    const admin = await Admin.findById(adminId);
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }
    res.json(admin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateAdmin = async (req, res) => {
  try {
    const adminId = req.params.id;
    const admin = await Admin.findById(adminId);

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }
    if (req.body.name) admin.name = req.body.name;
    if (req.body.category) admin.category = req.body.category;
    if (req.body.userType) admin.userType = req.body.userType;
    if (req.body.email) admin.email = req.body.email;
    if (req.body.password) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      admin.password = hashedPassword;
    }
    const updatedAdmin = await admin.save();

    res.json({ message: "updated successfully", updatedAdmin });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const deleteAdmin = async (req, res) => {
    try {
        const adminId = req.params.id;
        const deletedAdmin = await Admin.findByIdAndDelete(adminId);

        if (!deletedAdmin) {
            return res.status(404).json({ message: "Admin not found" });
        }

        res.json({ message: "Admin deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
  addAdmin,
  getAdmin,
  updateAdmin,
  deleteAdmin
};
