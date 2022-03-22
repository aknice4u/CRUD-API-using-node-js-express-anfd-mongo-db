const emp = require("../controllers/EmployeesController.js");
var router = require("express").Router();

router.get("/get/all", emp.findAll);
router.post("/add/staff", emp.addEmployee);

module.exports = router