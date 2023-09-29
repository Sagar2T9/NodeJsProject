
const employeeService = require('../services/employee-service');

const getEmployeeDetails = (req, res, next) =>
  employeeService.getEmployeeDetails(req, res, next);

const addEmployee = (req, res, next) => employeeService.addEmployee(req, res, next);

const deleteEmployee = (req, res, next) => employeeService.deleteEmployee(req, res, next);

const updateEmployee = (req, res, next) => employeeService.updateEmployee(req, res, next);

module.exports = {
    getEmployeeDetails,
    addEmployee,
    deleteEmployee,
    updateEmployee
}