document.addEventListener("DOMContentLoaded", () => {
  const doctorList = document.getElementById("doctor-list");

  const doctors = [
    {
      name: "Dr. Abhijit Sen",
      image: "https://content.jdmagicbox.com/comp/kolkata/e1/033pxx33.xx33.220602103829.g9e1/catalogue/dr-abhijit-sen-jadavpur-university-kolkata-orthopaedic-doctors-1p5mrd7xjh.jpg",
      specialization: "Pediatric Physiotherapy",
      designation: "BPT, MPT – Senior Physiotherapist",
      consult: "Orthopedic Rehab, Sports Injury, Post-Surgery Therapy",
      experience: "16 Years",
      clinic: "Apollo Clinic, Kolkata",
      contact: "9830011001",
      availability: "Mon–Sat, 10 AM – 2 PM"
    },
    {
      name: "Dr. Shalini Roy",
      image: "https://media.licdn.com/dms/image/v2/D5603AQGHbrQ3R7BeUQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1706325331881?e=2147483647&v=beta&t=ahHcP6yNH8cHLUlKf6NA0-iVN1PuG6c_1-iAIkvzx_U",
      specialization: "Orthopedic Physiotherapy",
      designation: "BPT – Physiotherapist",
      consult: "Back Pain, Frozen Shoulder, Neck Pain, Postnatal Exercises",
      experience: "10 Years",
      clinic: "Roy’s Physio Care, Durgapur",
      contact: "9876543000",
      availability: "Mon–Fri, 11 AM – 4 PM"
    },
    {
      name: "Dr. Ashish Jain",
      image: "https://cdn-aa.apollohospitals.com/live/images/doctors/physiotherapy/dr-ashish-jain-physiotherapy-in-bangalore.png",
      specialization: "Physiotherapy",
      designation: "BPT, MPT – Neuro Physiotherapist",
      consult: "Stroke Rehab, Cerebral Palsy, Neurological Disorders",
      experience: "34 Years",
      clinic: "AMRI Hospital, Salt Lake",
      contact: "9830099009",
      availability: "Tue–Sat, 9 AM – 1 PM"
    },
    {
      name: "Dr. Neha Dey",
      image: "https://drsinghphysiocare.com/wp-content/uploads/2022/04/Dr-Tanushree-e1683732073598.jpg",
      specialization: "Physiotherapy",
      designation: "BPT – Pediatric Physiotherapist",
      consult: "Child Physiotherapy, Developmental Delay, Cerebral Palsy",
      experience: "08 Years",
      clinic: "Little Steps Physio Clinic, Asansol",
      contact: "9876509000",
      availability: "Mon–Sat, 10 AM – 3 PM"
    },
    {
      name: "Dr. S. Mukherjee",
      image: "https://www.nuffieldhealth.com/_image/thumbnail/240x250%5E/?url=https://www.nuffieldhealth.com/local/1d/94/2fd2c87f4b84977a3af1d10c3d12/photo-dr-s-mukherjee.jpg",
      specialization: "Physiotherapy consultant",
      designation: "BPT, MPT – Sports Physiotherapist",
      consult: "Sports Injury, ACL Rehab, Muscle Strengthening",
      experience: "42 Years",
      clinic: "Medica Superspecialty Hospital, Kolkata",
      contact: "9800123200",
      availability: "Mon–Fri, 12 PM – 5 PM"
    },
    {
      name: "Dr. Rupa Banik",
      image: "https://sdpl8ic8website8blob8stg.blob.core.windows.net/doctorsdata/1746819530.png?v=1",
      specialization: "Physiotherapy",
      designation: "BPT – Physiotherapist",
      consult: "Chronic Pain, Post-Fracture Rehab, Arthritis Care",
      experience: "51 Years",
      clinic: "Peerless Hospital, Kolkata",
      contact: "9830088080",
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
