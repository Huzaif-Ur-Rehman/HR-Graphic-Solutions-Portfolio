// Simple form interaction
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for contacting HR Graphic Solutions! We’ll get back to you soon.");
  this.reset();
});
