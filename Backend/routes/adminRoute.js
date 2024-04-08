const express = require("express");
const { addAdmin, getAdmin, updateAdmin, deleteAdmin} = require('../controllers/adminController');
const router = express.Router();
router.post("/add",addAdmin)
router.get("/get/:id",getAdmin)
router.put("/update/:id",updateAdmin)
router.delete("/delete/:id",deleteAdmin)
module.exports = router;
