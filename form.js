document.addEventListener("DOMContentLoaded", () => {
  const dateInput = document.getElementById("appointment_date");
  if (dateInput) {
    dateInput.addEventListener("input", function () {
      const selectedDate = new Date(this.value);
      // Sunday is 0
      if (selectedDate.getDay() === 0) {
        alert("Doctor not available on Sundays. Please select another date.");
        this.value = ""; // Clear the invalid date
      }
    });
  }
});

async function handleSubmit(event) {
  event.preventDefault();

  // ✅ Get patient details
  const patientName = document.getElementById("patientName").value.trim();
  const age = document.getElementById("age").value.trim();
  const bloodGroup = document.getElementById("bloodGroup").value.trim();
  const issue = document.getElementById("issue").value.trim();
  const appointmentDate = document.getElementById("appointment_date").value; // ✅ chosen date

  // ✅ Fetch doctor details from localStorage (if available)
  const selectedDoctor = JSON.parse(localStorage.getItem("selectedDoctor")) || {
    name: "UNKNOWN",
    specialization: "UNKNOWN",
    clinic: "UNKNOWN"
  };

  // ✅ Create appointment record
  const record = {
    doctor: selectedDoctor.name || "UNKNOWN",
    specialization: selectedDoctor.specialization || "UNKNOWN",
    clinic: selectedDoctor.clinic || "UNKNOWN",
    patientName,
    age,
    bloodGroup,
    issue,
    appointmentDate,                          // ✅ from calendar input
    bookingTime: new Date().toLocaleString()  // ✅ system timestamp
  };

  try {
    const response = await fetch("http://localhost:5000/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(record),
    });

    const data = await response.json();

    if (response.ok) {
      alert(`✅ Appointment Confirmed with ${record.doctor} at ${record.clinic} on ${appointmentDate}`);

      // ✅ Reset form
      document.getElementById("appointmentForm").reset();

      // ✅ Redirect back to homepage after 2 seconds
      setTimeout(() => {
        window.location.href = "index.html";
      }, 2000);
    } else {
      alert("❌ Failed to book appointment: " + (data.message || "Unknown error"));
    }
  } catch (error) {
    console.error("⚠️ Error submitting appointment:", error);
    alert("⚠️ Error connecting to server.");
  }
}
