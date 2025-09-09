document.addEventListener("DOMContentLoaded", () => {
  const doctorList = document.getElementById("doctor-list");

  const doctors = [
    {
      name: "Dr. Aryan Verma",
      specialization: "Gynaecologist",
      designation: "Senior Consultant",
      experience: "12 years",
      clinic: "Apollo Clinic, Durgapur",
      image: "https://healthworldhospitals.com/wp-content/uploads/2019/09/Dr.-Debraj-Mondal-1.jpg",
      availability: "Mon-Fri, 10AM - 2PM",
      contact: "9876543210"
    },
    {
      name: "Dr. Ritu Roy",
      specialization: "Consultant",
      designation: "Consultant Gynaecologist",
      experience: "9 years",
      clinic: "Durgapur Care Centre",
      image: "https://assets.lybrate.com/img/documents/doctor/dp/b805b1126a2c1f6d1b5c9803edb4e916/Gynaecology-SayaniDolui-Kolkata-b87d11.jpg",
      availability: "Tue, Thu, Sat – 11AM - 3PM",
      contact: "9833322110"
    },
    {
      name: "Dr. Sneha Saha",
      specialization: "Senior Consultant",
      designation: "Senior Gynaecologist",
      experience: "15 years",
      clinic: "Kolkata Women's Hospital",
      image: "https://www.drsudeshnasaha.in/wp-content/uploads/2025/01/dr.Sudeshna-Saha.jpeg",
      availability: "Mon-Fri, 9AM - 12PM",
      contact: "9900223344"
    },
    {
      name: "Dr. Anuradha Das",
      specialization: "OB-GYN",
      designation: "Consultant",
      experience: "11 years",
      clinic: "Howrah City Clinic",
      image: "https://threebestrated.in/images/DrPreetiVijayMBBSDNBHEALCARESUPERSPECIALITYPRIVATELIMITED-Howrah-WB.jpeg",
      availability: "Mon, Wed – 2PM - 5PM",
      contact: "9844112233"
    },
    {
      name: "Dr. Ishita Banerjee",
      specialization: "Obstetrics & Gynecology",
      designation: "Assistant Professor",
      experience: "8 years",
      clinic: "Kalyani Health Hub",
      image: "https://assets.lybrate.com/img/documents/doctor/dp/768560d9a5c068a272fd8e9bb0c3afba/Gynaecology-HimaniSharma-Jaipur-6f0c40",
      availability: "Tue-Fri, 10AM - 12PM",
      contact: "9123456780"
    },
    {
      name: "Dr. Pooja Sinha",
      specialization: "Obstetrics & Gynecology",
      designation: "Consultant Gynaecologist",
      experience: "10 years",
      clinic: "Asansol Mother & Child Clinic",
      image: "https://media.curofy.com/665d78001c0794802fad46ce551efbc1_1.jpg",
      availability: "Mon, Tue, Fri – 1PM - 4PM",
      contact: "9988776655"
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
