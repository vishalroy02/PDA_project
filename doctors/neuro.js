document.addEventListener("DOMContentLoaded", () => {
  const doctorList = document.getElementById("doctor-list");

  const doctors = [
    {
      name: "Dr. Anirban Dutta",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ4I75ysDxncb_6K5t4q5xr2wM5dpzo905xw&s",
      specialization: "Neurology",
      designation: "MBBS, MD – Neurology",
      consult: "Stroke, Epilepsy, Headache, Neurocritical Care",
      experience: "20 Years",
      clinic: "Apollo Gleneagles Hospitals, Kolkata",
      contact: "9830011122",
      availability: "Mon–Sat, 10 AM – 2 PM"
    },
    {
      name: "Dr. Shreya Banerjee",
      image: "https://media.licdn.com/dms/image/v2/D5603AQE_DsNGdc_e6A/profile-displayphoto-scale_200_200/B56ZhTzFClHQCU-/0/1753752556701?e=2147483647&v=beta&t=JX4NNFMlvS75Sdtjl0yoCDWbp28PD2YwIlFT6u8yMgY",
      specialization: "Neurology",
      designation: "MBBS, DM – Neurology",
      consult: "Migraine, Multiple Sclerosis, Neuromuscular Disorders",
      experience: "15 Years",
      clinic: "Belle Vue Clinic, Kolkata",
      contact: "9876543210",
      availability: "Mon–Fri, 11 AM – 4 PM"
    },
    {
      name: "Dr. Subhendu Roy",
      image: "https://www.alafiyameditour.com/wp-content/uploads/2024/10/Dr.-Shuvendu-Prosad-Roy-257x300.jpg",
      specialization: "Neurology",
      designation: "MBBS, MD, DM – Neurology",
      consult: "Parkinson’s Disease, Dementia, Epilepsy Surgery Evaluation",
      experience: "22 Years",
      clinic: "AMRI Hospitals, Salt Lake",
      contact: "9830022233",
      availability: "Tue–Sat, 9 AM – 1 PM"
    },
    {
      name: "Dr. Nivedita Chatterjee",
      image: "https://content3.jdmagicbox.com/comp/kolkata/q9/033pxx33.xx33.170615090806.u9q9/catalogue/dr-nibedita-chatterjee-narayana-multispeciality-hospital-hridaypur-kolkata-microbiologist-doctors-187b6p4.jpg",
      specialization: "Neurology",
      designation: "MBBS, DM – Neurologist",
      consult: "Pediatric Neurology, Neurodevelopmental Disorders, Seizures",
      experience: "12 Years",
      clinic: "Institute of Neurosciences, Kolkata",
      contact: "9876509870",
      availability: "Mon–Sat, 10 AM – 3 PM"
    },
    {
      name: "Dr. Rajesh Ghosh",
      image: "https://content.jdmagicbox.com/comp/kolkata/r9/033pxx33.xx33.170124213536.q8r9/catalogue/dr-subhasish-ghosh-the-apollo-clinic-salt-lake-kolkata-hdg43.jpg",
      specialization: "Neurology",
      designation: "MBBS, MD, DM – Neurology",
      consult: "Spinal Disorders, Neuropathies, Neurorehabilitation",
      experience: "28 Years",
      clinic: "Peerless Hospital, Kolkata",
      contact: "9800123400",
      availability: "Mon–Fri, 12 PM – 5 PM"
    },
    {
      name: "Dr. Sudipta Sen",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV-pSMIA5r3ZeoQ2cji41kT2gshSXLCkwgkg&s",
      specialization: "Neurology",
      designation: "MBBS, DM – Neurologist",
      consult: "Neuro ICU, Head Injury, Brain Infections",
      experience: "35 Years",
      clinic: "Medica Superspecialty Hospital, Kolkata",
      contact: "9830088899",
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
