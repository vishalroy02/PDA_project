document.addEventListener("DOMContentLoaded", () => {
  const doctorList = document.getElementById("doctor-list");

  const doctors = [
    {
      name: "Dr. Arindam Chatterjee",
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=690,fit=crop/Yan99NwD4jfn3z5D/20230519_100227-YBg4rLZJn7uM22RP.jpg",
      specialization: "Dentistry",
      designation: "BDS, MDS – Dental Surgeon",
      consult: "Root Canal, Dental Implants, Gum Diseases, Tooth Extraction",
      experience: "18 Years",
      clinic: "Smile Dental Care, Kolkata",
      contact: "9830012345",
      availability: "Mon–Sat, 10 AM – 2 PM"
    },
    {
      name: "Dr. Priya Mukherjee",
      image: "https://dentistchannel-online.s3.ap-south-1.amazonaws.com/photos/ogLWZMhKr3GrVSwH2y3nGBtBy4vBiHTrM5NNg9PD.jpg",
      specialization: "Cosmetic Dentistry",
      designation: "BDS – Cosmetic & Restorative Dentist",
      consult: "Braces, Teeth Whitening, Smile Designing, Fillings",
      experience: "12 Years",
      clinic: "Bright Smile Clinic, Durgapur",
      contact: "9876543211",
      availability: "Mon–Fri, 11 AM – 4 PM"
    },
    {
      name: "Dr. Soumen Ghosh",
      image: "https://content.jdmagicbox.com/comp/kolkata/c6/033pxx33.xx33.170622103920.n8c6/catalogue/dr-somen-ghosh-kothari-medical-centre-alipore-kolkata-ophthalmologists-9j0i4ubq2d-250.jpg",
      specialization: "Prosthodontics",
      designation: "BDS, MDS – Prosthodontist",
      consult: "Dentures, Dental Crowns, Bridges, Jaw Correction",
      experience: "20 Years",
      clinic: "Ghosh Dental & Maxillofacial Centre, Siliguri",
      contact: "9830098765",
      availability: "Tue–Sat, 9 AM – 1 PM"
    },
    {
      name: "Dr. Nandini Roy",
      image: "https://cdn.hexahealth.com/Image/webp/480x480/51624bc5-da64-44cc-b23e-985aad5929c1.webp",
      specialization: "Pediatric Dentistry",
      designation: "BDS – Pediatric Dentist",
      consult: "Child Dentistry, Fluoride Treatment, Tooth Decay in Kids, Habit Counseling",
      experience: "09 Years",
      clinic: "Little Smiles Dental Care, Asansol",
      contact: "9876509876",
      availability: "Mon–Sat, 10 AM – 3 PM"
    },
    {
      name: "Dr. S. Banerjee",
      image: "https://www.doctorsgallery.com/doctor_images/11744180863.jpg",
      specialization: "Orthodontics",
      designation: "BDS, MDS – Orthodontist",
      consult: "Braces, Invisalign, Jaw Alignment, Dental Implants",
      experience: "15 Years",
      clinic: "Banerjee Dental Solutions, Howrah",
      contact: "9800123456",
      availability: "Mon–Fri, 12 PM – 5 PM"
    },
    {
      name: "Dr. Rituparna Das",
      image: "https://yt3.googleusercontent.com/w8jzfGh-4B41DLOWS_nLdMDcRYxEw2JrTlCfywrvCBFyyTy5vpEYRuKwp0eeGRnGvYO3n_9dvw=s900-c-k-c0x00ffffff-no-rj",
      specialization: "General & Cosmetic Dentistry",
      designation: "BDS – General & Cosmetic Dentist",
      consult: "Scaling & Polishing, Tooth Sensitivity, Cavity Fillings, Smile Designing",
      experience: "11 Years",
      clinic: "Dental World, Salt Lake, Kolkata",
      contact: "9830088888",
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
