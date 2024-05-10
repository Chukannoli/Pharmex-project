// form element
const formElement = document.querySelector(".app__form");
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
let allMedicine = JSON.parse(localStorage.getItem("allMedicine")) || [];
// list element
const dataList = document.querySelector(".app__list-data");

// Medicine class
class Medicine {
  constructor(
    productName,
    manufacturer,
    type,
    expirationDate,
    quantity,
    productID
  ) {
    this.productName = productName;
    this.manufacturer = manufacturer;
    this.type = type;
    this.expirationDate = expirationDate;
    this.quantity = quantity;
    this.productID = productID;
  }
  static createMedicine() {
    const newMedicine = new Medicine(
      productNameInput.value,
      manufacturerInput.value,
      typeInput.value,
      expirationDateInput.value,
      quantityInput.value,
      Date.now()
    );
    return newMedicine;
  }
}

class Tablet extends Medicine {
  constructor(
    productName,
    manufacturer,
    type,
    expirationDate,
    quantity,
    productID,
    gram
  ) {
    super(productName, manufacturer, type, expirationDate, quantity, productID);
    this.gram = gram;
  }
  static createTablet() {
    const newTablet = new Tablet(
      productNameInput.value,
      manufacturerInput.value,
      typeInput.value,
      expirationDateInput.value,
      quantityInput.value,
      Date.now(),
      ""
    );
    console.log("Tablet added");
    return newTablet;
  }
}

class Topical extends Medicine {
  constructor(
    productName,
    manufacturer,
    type,
    expirationDate,
    quantity,
    productID,
    ml
  ) {
    super(productName, manufacturer, type, expirationDate, quantity, productID);
    this.ml = ml;
  }
  static createTopical() {
    const newTopical = new Topical(
      productNameInput.value,
      manufacturerInput.value,
      typeInput.value,
      expirationDateInput.value,
      quantityInput.value,
      Date.now(),
      ""
    );
    console.log("Topical added");
    return newTopical;
  }
}
registerButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (typeInput.value === "tablet") {
    allMedicine.push(Tablet.createTablet());
    localStorage.setItem("allMedicine", JSON.stringify(allMedicine));
  } else if (typeInput.value === "topical") {
    allMedicine.push(Topical.createTopical());
    localStorage.setItem("allMedicine", JSON.stringify(allMedicine));
  } else {
    return;
  }
  formElement.reset();
  List.renderList();
  console.log(allMedicine);
});

class List {
  static renderList() {
    dataList.textContent = "";
    allMedicine.forEach((medicine) => {
      // creating rows
      const medicineRow = document.createElement("tr");
      const productIDData = document.createElement("td");
      const productNameData = document.createElement("td");
      const manufacturerData = document.createElement("td");
      const typeData = document.createElement("td");
      const expirationDateData = document.createElement("td");
      const quantityData = document.createElement("td");
      const deleteButtonContainer = document.createElement("td");
      const deleteButton = document.createElement("button");

      // appending elements
      dataList.append(medicineRow);
      medicineRow.append(
        productIDData,
        productNameData,
        manufacturerData,
        typeData,
        expirationDateData,
        quantityData,
        deleteButtonContainer
      );
      deleteButtonContainer.append(deleteButton);

      // adding content
      medicineRow.id = medicine.productID;
      productIDData.textContent = medicine.productID;
      productNameData.textContent = medicine.productName;
      manufacturerData.textContent = medicine.manufacturer;
      typeData.textContent = medicine.type;
      expirationDateData.textContent = medicine.expirationDate;
      quantityData.textContent = medicine.quantity;
      deleteButton.textContent = "x";

      // adding style
      medicineRow.classList.add("app__list-data-row");
      deleteButton.classList.add("row-delete-button");

      // deleting row
      deleteButton.addEventListener("click", (e) => {
        e.preventDefault();
        const rowToDelete = e.currentTarget.parentElement.parentElement.id;
        const index = allMedicine.findIndex(
          (medicine) => medicine.productID == rowToDelete
        );
        if (index > -1) {
          if (medicine.quantity > 1) {
            medicine.quantity--;
          } else {
            allMedicine.splice(index, 1);
          }
        }
        List.renderList();
        localStorage.setItem("allMedicine", JSON.stringify(allMedicine));
      });
    });
  }
}
List.renderList();
