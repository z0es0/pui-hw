// REFERENCES
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedIndex
// https://www.w3schools.com/jsref/jsref_tofixed.asp
// https://www.w3schools.com/JS/js_loop_forin.asp

// ------------------------------ HW 3 --------------------------------

// create glazing and pack size option object
let glazingOptions = {
    'Keep original': 0,
    'Sugar milk': 0,
    'Vanilla milk': .5,
    'Double chocolate': 1.5
};
  
let packSizeOptions = {
    '1': 1,
    '3': 3,
    '6': 5,
    '12': 10
};

// select elements
let selectGlazingElement = document.querySelector('#glazingOptions');
let selectPackSizeElement = document.querySelector('#packSizeOptions');

// populate dropdowns
for (key in glazingOptions)
    {
        let glazingOption = document.createElement("option");
        glazingOption.value = glazingOptions[key];
        glazingOption.text = key;
        selectGlazingElement.add(glazingOption);
    }

for (key in packSizeOptions)
    {
        let packSizeOption = document.createElement("option");
        packSizeOption.value = packSizeOptions[key];
        packSizeOption.text = key;
        selectPackSizeElement.add(packSizeOption);
    }

// ----------- HW 4: UPDATING IMAGE, PRICE, TITLE BASED ON PARAM ON PRODUCT PAGE -----------
// REFERENCES:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors

// create empty cart array
// let cart = [];

// get rollFlavor from URL parameters
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollFlavor = params.get('roll');

// update header based on param
let currHeader = document.querySelector('.page-title');
currHeader.innerText = rollFlavor + ' Cinnamon Roll';

// update image based on param
let imageSrc = rolls[rollFlavor].imageFile;
let currImage = document.querySelector('.product-image');
currImage.src = './assets/products/' + imageSrc;

// function to calculate and display total price (moved from above)
let basePrice = rolls[rollFlavor].basePrice; // updated to be based on param

function displayPrice() {
    let glazePriceAddition = parseFloat(selectGlazingElement.value);
    let packSizePriceMultiplier = parseFloat(selectPackSizeElement.value);

    let totalPrice = (basePrice + glazePriceAddition) * packSizePriceMultiplier; 

    let totalPriceElement = document.querySelector('#total-price');
    totalPriceElement.innerText = "$ " + totalPrice.toFixed(2);
}

// display price on load
displayPrice();

// call displayPrice on change
selectGlazingElement.addEventListener('change', displayPrice)
selectPackSizeElement.addEventListener('change', displayPrice)

// ---------------------- HW 4: ADD TO CART FROM PRODUCT PAGE ------------------------
// REFERENCES: https://stackoverflow.com/questions/5913/getting-the-text-from-a-drop-down-box
// https://www.shecodes.io/athena/122089-how-to-add-an-object-to-an-array-in-javascript#google_vignette
// https://www.w3schools.com/jsref/event_onclick.asp

class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
    }
}

// -------------------------- HW 6: WEB STORAGE -------------------------

let cartData = localStorage.getItem('storedCart');
let cart;

if (cartData) {
    cart = JSON.parse(cartData);
} else {
    cart = [];
}

function saveToLocalStorage() {
    // convert the array into a string of text
    const cartArrayString = JSON.stringify(cart);
  
    // use localStorage to save the text using the key storedNotes
    localStorage.setItem('storedCart', cartArrayString);
}
  
function addToCart() {
    let selectedRollGlazing = selectGlazingElement.options[selectGlazingElement.selectedIndex].text;
    let selectedPackSize = selectPackSizeElement.options[selectPackSizeElement.selectedIndex].text;
    
    const newItem = new Roll(rollFlavor, selectedRollGlazing, selectedPackSize, basePrice);

    cart.push(newItem);

    saveToLocalStorage();
}

document.querySelector(".cart-button").addEventListener('click', addToCart);