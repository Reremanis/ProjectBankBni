document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("contactForm").style.display = "none";
  const confirmation = document.getElementById("confirmationMessage");
  confirmation.classList.add("active");
  confirmation.scrollIntoView({ behavior: "smooth" });
});
