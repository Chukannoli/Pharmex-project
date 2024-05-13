export default class FormValidation {
  static handleValidation(
    productName,
    manufacturer,
    type,
    expirationDate,
    quantity,
    productNameError,
    manufacturerError,
    typeError,
    expirationDateError,
    quantityError
  ) {
    const errors = {
      errorStatus: false,
      productNameErrorMessage: "",
      manufacturerErrorMessage: "",
      typeErrorMessage: "",
      expirationDateErrorMessage: "",
      quantityErrorMessage: "",
    };

    if (
      !productName &&
      !manufacturer &&
      type === "-" &&
      !expirationDate &&
      !quantity
    ) {
      errors.errorStatus = true;
      errors.productNameErrorMessage = "Product name is required*";
      errors.manufacturerErrorMessage = "Manufacturer is required*";
      errors.typeErrorMessage = "Type is required*";
      errors.expirationDateErrorMessage = "Expiration date is required*";
      errors.quantityErrorMessage = "Quantity is required*";

      productNameError.style.visibility = "visible";
      manufacturerError.style.visibility = "visible";
      typeError.style.visibility = "visible";
      expirationDateError.style.visibility = "visible";
      quantityError.style.visibility = "visible";

      productNameError.textContent = errors.productNameErrorMessage;
      manufacturerError.textContent = errors.manufacturerErrorMessage;
      typeError.textContent = errors.typeErrorMessage;
      expirationDateError.textContent = errors.expirationDateErrorMessage;
      quantityError.textContent = errors.quantityErrorMessage;
    } else if (!productName) {
      errors.errorStatus = true;
      errors.productNameErrorMessage = "Product name is required*";
      errors.manufacturerErrorMessage = "";
      errors.typeErrorMessage = "";
      errors.expirationDateErrorMessage = "";
      errors.quantityErrorMessage = "";

      productNameError.style.visibility = "visible";
      manufacturerError.style.visibility = "hidden";
      typeError.style.visibility = "hidden";
      expirationDateError.style.visibility = "hidden";
      quantityError.style.visibility = "hidden";

      productNameError.textContent = errors.productNameErrorMessage;
      manufacturerError.textContent = errors.manufacturerErrorMessage;
      typeError.textContent = errors.typeErrorMessage;
      expirationDateError.textContent = errors.expirationDateErrorMessage;
      quantityError.textContent = errors.quantityErrorMessage;
    } else if (!manufacturer) {
      errors.errorStatus = true;
      errors.productNameErrorMessage = "";
      errors.manufacturerErrorMessage = "Manufacturer is required*";
      errors.typeErrorMessage = "";
      errors.expirationDateErrorMessage = "";
      errors.quantityErrorMessage = "";

      productNameError.style.visibility = "hidden";
      manufacturerError.style.visibility = "visible";
      typeError.style.visibility = "hidden";
      expirationDateError.style.visibility = "hidden";
      quantityError.style.visibility = "hidden";

      productNameError.textContent = errors.productNameErrorMessage;
      manufacturerError.textContent = errors.manufacturerErrorMessage;
      typeError.textContent = errors.typeErrorMessage;
      expirationDateError.textContent = errors.expirationDateErrorMessage;
      quantityError.textContent = errors.quantityErrorMessage;
    } else if (!type) {
      errors.errorStatus = true;
      errors.productNameErrorMessage = "";
      errors.manufacturerErrorMessage = "";
      errors.typeErrorMessage = "Type is required*";
      errors.expirationDateErrorMessage = "";
      errors.quantityErrorMessage = "";

      productNameError.style.visibility = "hidden";
      manufacturerError.style.visibility = "hidden";
      typeError.style.visibility = "visible";
      expirationDateError.style.visibility = "hidden";
      quantityError.style.visibility = "hidden";

      productNameError.textContent = errors.productNameErrorMessage;
      manufacturerError.textContent = errors.manufacturerErrorMessage;
      typeError.textContent = errors.typeErrorMessage;
      expirationDateError.textContent = errors.expirationDateErrorMessage;
      quantityError.textContent = errors.quantityErrorMessage;
    } else if (!expirationDate) {
      errors.errorStatus = true;
      errors.productNameErrorMessage = "";
      errors.manufacturerErrorMessage = "";
      errors.typeErrorMessage = "";
      errors.expirationDateErrorMessage = "Expiration date is required*";
      errors.quantityErrorMessage = "";

      productNameError.style.visibility = "hidden";
      manufacturerError.style.visibility = "hidden";
      typeError.style.visibility = "hidden";
      expirationDateError.style.visibility = "visible";
      quantityError.style.visibility = "hidden";

      productNameError.textContent = errors.productNameErrorMessage;
      manufacturerError.textContent = errors.manufacturerErrorMessage;
      typeError.textContent = errors.typeErrorMessage;
      expirationDateError.textContent = errors.expirationDateErrorMessage;
      quantityError.textContent = errors.quantityErrorMessage;
    } else if (!quantity) {
      errors.errorStatus = true;
      errors.productNameErrorMessage = "";
      errors.manufacturerErrorMessage = "";
      errors.typeErrorMessage = "";
      errors.expirationDateErrorMessage = "";
      errors.quantityErrorMessage = "Quantity is required*";

      productNameError.style.visibility = "hidden";
      manufacturerError.style.visibility = "hidden";
      typeError.style.visibility = "hidden";
      expirationDateError.style.visibility = "hidden";
      quantityError.style.visibility = "visible";

      productNameError.textContent = errors.productNameErrorMessage;
      manufacturerError.textContent = errors.manufacturerErrorMessage;
      typeError.textContent = errors.typeErrorMessage;
      expirationDateError.textContent = errors.expirationDateErrorMessage;
      quantityError.textContent = errors.quantityErrorMessage;
    }

    console.log(errors.errorStatus);
  }
}
