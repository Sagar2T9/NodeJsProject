const router = require('express').Router();
const employeeController = require('../controllers/employee-controller');

router.get(`/getDetails`, employeeController.getEmployeeDetails);
router.post(`/addEmployee`, employeeController.addEmployee);
router.delete(`/deleteEmployee/:id`, employeeController.deleteEmployee);
router.put(`/updateEmployee/:id`, employeeController.updateEmployee);

module.exports = router;