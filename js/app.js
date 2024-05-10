// input elements
const productNameInput = document.getElementById("product-name");
const manufacturerInput = document.getElementById("manufacturer");
const typeInput = document.getElementById("type");
const expirationDateInput = document.getElementById("expiration-date");
const quantityInput = document.getElementById("quantity");
// error elements
const productNameError = document.querySelector(".product-name-error");
const manufacturerError = document.querySelector(".manufacturer-error");
const expirationDateError = document.querySelector(".expiration-date-error");
const quantityError = document.querySelector(".quantity-error");
const typeError = document.querySelector(".type-error");
// button
const registerButton = document.querySelector(".add-button");
let allMedicine = JSON.parse(localStorage.getItem("All medicine")) || [];

console.log(allMedicine);
