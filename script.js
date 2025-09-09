function login() {
  alert("Redirecting to Login Page...");
}

function register() {
  alert("Redirecting to Register Page...");
}


function searchSite() {
  const query = document.getElementById("search").value;
  alert("Searching for: " + query);
}

function changeLanguage() {
  const lang = document.getElementById("languageSelector").value;
  alert("Language changed to: " + lang);
}

// Sidebar Toggle
document.getElementById("hamburger").addEventListener("click", function () {
  document.getElementById("sidebar").style.width = "250px";
  document.getElementById("overlay").style.display = "block";
});

function closeSidebar() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("overlay").style.display = "none";
}

// Show Doctors Function
function showDoctors(specialization) {
  if (specialization === 'gynaecologist') {
    window.location.href = 'doctors/gynaec.html';
  } 
  else if (specialization === 'dentist') {
    window.location.href = 'doctors/dentist.html';
  }
  else if (specialization === 'neurologist') {
    window.location.href = 'doctors/neuro.html';
  }
  else if (specialization === 'physiotherapist') {
    window.location.href = 'doctors/physio.html';
  }
  else if (specialization === 'cardiologist') {
    window.location.href = 'doctors/cardio.html';
  }
}

function openMedicalRecords() {
  window.location.href = "records/medrecord.html";
}

window.onload = function() {
  const headerRight = document.querySelector('.header-right .nav-buttons');
  const userName = localStorage.getItem('userName');
  if (userName) {
    headerRight.innerHTML = `<span class="user-name">👤 ${userName}</span>
      <button onclick="logout()">Logout</button>`;
  }
};

function logout() {
  localStorage.removeItem('userName');
  alert("Logout successful");
  window.location.reload();
}
