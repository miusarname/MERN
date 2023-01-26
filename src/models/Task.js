const mongoose = require("mongoose");
const { Schema } = mongoose;

//Esquema de tareas
const TaskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model("Task", TaskSchema);
