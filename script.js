//  Button Click Event
document.getElementById("magicBtn").addEventListener("click", () => {
  alert("You clicked the magic button! ");
  // Change background color on click
  document.body.style.backgroundColor = "#d1e7dd";
});

// Double Click Event (Bonus Feature)
document.getElementById("magicBtn").addEventListener("dblclick", () => {
  alert("Secret double-click activated!");
});

//  Keypress Detection
document.getElementById("keyInput").addEventListener("keyup", (e) => {
  // Show the key typed by the user
  document.getElementById("keyResult").textContent = `You typed: ${e.key}`;
});

// Image Gallery Functionality
const images = [
  "https://via.placeholder.com/200?text=Image+1",
  "https://via.placeholder.com/200?text=Image+2",
  "https://via.placeholder.com/200?text=Image+3"
];
let imgIndex = 0;

// Function to switch to next image
function nextImage() {
  imgIndex = (imgIndex + 1) % images.length;
  document.getElementById("galleryImg").src = images[imgIndex];
}

// Tab Switching Function
function openTab(tabId) {
  // Hide all tabs
  const tabs = document.querySelectorAll(".tab-content");
  tabs.forEach(tab => tab.style.display = "none");

  // Show selected tab
  document.getElementById(tabId).style.display = "block";
}

// Form Validation Setup
const form = document.getElementById("signupForm");
const passwordField = document.getElementById("password");
const passwordFeedback = document.getElementById("passwordFeedback");

// Real-time password feedback
passwordField.addEventListener("input", () => {
  if (passwordField.value.length < 8) {
    passwordFeedback.textContent = "Password must be at least 8 characters.";
    passwordFeedback.style.color = "red";
  } else {
    passwordFeedback.textContent = " Password looks good!";
    passwordFeedback.style.color = "green";
  }
});

//  Form Submit Validation
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission

  const email = document.getElementById("email").value;
  const password = passwordField.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validate email format
  if (!emailRegex.test(email)) {
    document.getElementById("formMessage").textContent = "Invalid email format.";
    return;
  }

  // Validate password length
  if (password.length < 8) {
    document.getElementById("formMessage").textContent = "Password too short.";
    return;
  }

  // If all validations pass
  document.getElementById("formMessage").textContent = "Form submitted successfully! 🎉";
});
