const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Temporary storage (replace later with DB)
let appointments = [];

// ✅ POST: Save appointment
app.post("/appointments", (req, res) => {
  console.log("📩 Incoming Data:", req.body); // Debug log

  const {
    doctor = "N/A",
    specialization = "N/A",
    clinic = "N/A",
    patientName = "N/A",
    age = "N/A",
    bloodGroup = "N/A",
    issue = "N/A",
    appointmentDate,   // ✅ add appointmentDate
    bookingTime        // ✅ add bookingTime
  } = req.body;

  const newAppointment = {
    id: Date.now().toString(), // ✅ unique ID (better than length+1)
    doctor: doctor.toUpperCase(), // ✅ Store doctor in CAPS
    specialization,
    clinic,
    patientName,
    age,
    bloodGroup,
    issue,
    appointmentDate: appointmentDate || "Not provided", // ✅ save calendar date
    bookingTime: bookingTime || new Date().toLocaleString() // ✅ save system booking time
  };

  appointments.push(newAppointment);
  console.log("✅ Appointment Saved:", newAppointment);

  res.status(201).json({
    message: "Appointment booked successfully",
    appointment: newAppointment
  });
});

// ✅ GET: Fetch all appointments
app.get("/appointments", (req, res) => {
  res.json(appointments);
});

// ✅ DELETE: Cancel appointment by ID
app.delete("/appointments/:id", (req, res) => {
  const { id } = req.params;
  const initialLength = appointments.length;

  appointments = appointments.filter(appt => appt.id !== id);

  if (appointments.length === initialLength) {
    return res.status(404).json({ success: false, message: "Appointment not found" });
  }

  console.log(`❌ Appointment with ID ${id} cancelled`);
  res.json({ success: true, message: "Appointment cancelled" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
