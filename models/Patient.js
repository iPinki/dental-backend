const mongoose = require("mongoose");
const { Schema } = mongoose;

const PatientSchema = new Schema(
  {
    id: String,
    fullname: String,
    phone: String
  },
  {
    timestamps: true
  }
);

PatientSchema.virtual("appointments", {
  ref: "Appointment",
  localField: "_id",
  foreignField: "patient",
  justOne: false
});

const Patient = mongoose.model("Patient", PatientSchema);

module.exports = Patient;
