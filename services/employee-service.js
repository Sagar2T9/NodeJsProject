const getEmployeeDetails = (req, res, next) => {
  res.send("Employee Details");
}

const addEmployee = (req, res, next) => {
  res.send("Employee Added");
}

const deleteEmployee = (req, res, next) => {  
  res.send("Employee Deleted");
}

const updateEmployee = (req, res, next) => {
  res.send("Employee Updated");
}

module.exports = {
    getEmployeeDetails,
    addEmployee,  
    deleteEmployee,
    updateEmployee
}