document.addEventListener("DOMContentLoaded", () => {
  const doctorList = document.getElementById("doctor-list");

  const doctors = [
    {
      name: "Dr. Anirban Ghosh",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGk7nLkEXiy0alEpcxoMBTZ6SzC33Nzp_x3g&s",
      specialization: "Cardiology",
      designation: "MD, DM – Cardiologist",
      consult: "Heart Failure, Angioplasty, Bypass Surgery Consultation",
      experience: "18 Years",
      clinic: "Apollo Clinic, Kolkata",
      contact: "9830022001",
      availability: "Mon–Sat, 10 AM – 2 PM"
    },
    {
      name: "Dr. S. Banerjee",
      image: "https://content3.jdmagicbox.com/comp/kolkata/57/033p9999757/catalogue/dr-sunip-banerjee-kolkata-cardiologists-4ir51hr.jpg",
      specialization: "Pediatric Cardiology",
      designation: "MD – Cardiologist",
      consult: "Hypertension, Chest Pain, Heart Rhythm Disorders",
      experience: "35 Years",
      clinic: "The Mission Hospital, Durgapur",
      contact: "9876543110",
      availability: "Mon–Fri, 11 AM – 4 PM"
    },
    {
      name: "Dr. Rituparna Saha",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOuX2yurFi2rQ_JlwFN5_TltC72bn9PyCLtw&s",
      specialization: "Electrocardiology",
      designation: "MD, DM – Interventional Cardiologist",
      consult: "Angiography, Pacemaker, Cardiac Emergency",
      experience: "22 Years",
      clinic: "AMRI Hospital, Salt Lake",
      contact: "9830099111",
      availability: "Tue–Sat, 9 AM – 1 PM"
    },
    {
      name: "Dr. Abhishek Mukherjee",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkZJZQ6RtZkJvG-iGpe1IokOX06DUx2es3uw&s",
      specialization: "Cardiology",
      designation: "MD – Cardiologist",
      consult: "Heart Checkup, Cholesterol, Preventive Cardiology",
      experience: "22 Years",
      clinic: "IQ City Medical College, Durgapur",
      contact: "9800123400",
      availability: "Mon–Sat, 10 AM – 3 PM"
    },
    {
      name: "Dr. T. Chakraborty",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6MFdYEzLsS6czDFY5nfSEoB3hv_JmFx9jIg&s",
      specialization: "Cardiology Consultant",
      designation: "MD, DM – Cardiologist",
      consult: "Heart Valve Disease, ECG, Echocardiography",
      experience: "20 Years",
      clinic: "Peerless Hospital, Kolkata",
      contact: "9830088222",
      availability: "Mon–Fri, 12 PM – 5 PM"
    },
    {
      name: "Dr. R. Sengupta",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR823nuXcLg-44wcXZH1m-vkHT23rZpi6ByvQ&s",
      specialization: "Cardiology",
      designation: "MD – Cardiologist",
      consult: "Cardiac Rehab, Diabetes & Heart Care",
      experience: "44 Years",
      clinic: "Medica Superspecialty Hospital, Kolkata",
      contact: "9830088333",
      availability: "Mon–Sat, 10 AM – 6 PM"
    }
  ];

  doctorList.innerHTML = "";

  doctors.forEach(doc => {
    const card = document.createElement("div");
    card.className = "doctor-card";
    card.innerHTML = `
      <div class="left-section">
        <img src="${doc.image}" alt="${doc.name}" class="doctor-photo">
        <p class="availability"><strong>Available:</strong> ${doc.availability}</p>
      </div>
      <div class="right-section">
        <h3>${doc.name.toUpperCase()} (${doc.specialization})</h3>
        <p><strong>Designation:</strong> ${doc.designation}</p>
        <p><strong>Experience:</strong> ${doc.experience}</p>
        <p><strong>Clinic:</strong> ${doc.clinic}</p>
        <p><strong>Contact:</strong> ${doc.contact}</p>
        <div class="button-group">
          <button class="book-btn"
             data-name="${doc.name}"
             data-specialization="${doc.specialization}"
             data-clinic="${doc.clinic}"
             data-contact="${doc.contact}">
             Book Appointment
          </button>
        </div>
      </div>
    `;

    doctorList.appendChild(card);
  });

  // ✅ Event listener for Book Appointment button
  document.querySelectorAll(".book-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const doctorDetails = {
        name: btn.dataset.name,
        specialization: btn.dataset.specialization,
        clinic: btn.dataset.clinic,
        contact: btn.dataset.contact
      };

      // Save to localStorage
      localStorage.setItem("selectedDoctor", JSON.stringify(doctorDetails));

      // Call bookAppointment()
      bookAppointment(doctorDetails);
    });
  });
});

// ✅ Function definition
function bookAppointment(doctorDetails) {
  alert(`Booking appointment with ${doctorDetails.name.toUpperCase()} (${doctorDetails.specialization}) at ${doctorDetails.clinic}`);
  // redirect to form page
  window.location.href = "../form.html";
}

