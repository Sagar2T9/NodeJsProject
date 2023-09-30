const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, " Please add the employee name"],
  },
  email: {
    type: String,
    required: [true, " Please add the email address"],
  },
});

module.exports=employeeSchema
