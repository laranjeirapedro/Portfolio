// Add a click event listener to each product button to display the payment form
const contactme = document.querySelectorAll(".contact-me");
const contact = document.querySelector(".contact");
const close = document.querySelector(".close");

// This code adds a click event listener to each button in the productButtons array.
// When a button is clicked, it sets the display style of the payment element at style.css to "flex".
// Show a payment form
contactme.forEach(button => {
  button.addEventListener("click", () => {
    contact.style.display = "flex";
  });
});

//Add a click event listener to close the payment form
close.addEventListener("click", () => {
    contact.style.display = "none";
});