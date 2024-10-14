// ---------------------- HW 5: ADD & DELETE FROM CART ON CART PAGE ------
// REFERENCES: https://www.w3schools.com/js/js_if_else.asp

// let cart = new Set();

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

// create Roll class
class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;

        this.totalPrice = calculatePrice(rollType, rollGlazing, packSize, rollPrice);

        this.element = null;
    }
}

function calculatePrice(rollType, rollGlazing, packSize, rollPrice) {
    let glazePriceAddition = glazingOptions[rollGlazing];
    let packSizePriceMultiplier = packSizeOptions[packSize];
    let totalPrice = ((rollPrice + glazePriceAddition) * packSizePriceMultiplier).toFixed(2);
    return totalPrice
}

// add to page
function createElement(roll) { 
    const template = document.querySelector('#cart-item-template');
    const clone = template.content.cloneNode(true);
    roll.element = clone.querySelector('.cart-item');

    const btnDelete = roll.element.querySelector('.remove-button');
    btnDelete.addEventListener('click', () => {
        deleteRoll(roll);
    });

    const rollListElement = document.querySelector('#cart-list');
    rollListElement.prepend(roll.element);
    updateElement(roll);

    calculateCartTotal();
}

function updateElement(roll) {
    // get elements
    const rollImageElement = roll.element.querySelector('.roll-thumbnail');
    const rollTitleElement = roll.element.querySelector('.roll-title');
    const rollGlazeElement = roll.element.querySelector('.roll-glaze');
    const rollPackSizeElement = roll.element.querySelector('.roll-pack-size');
    const rollPriceElement = roll.element.querySelector('.price');
    const totalPriceElement = document.querySelector('.total-price');

    // image
    let imageSrc = './assets/products/' + rolls[roll.type].imageFile;
    rollImageElement.src = imageSrc;
    
    // glazing
    
    if (roll.glazing === 'Keep original') {
        rollGlaze = 'Original';
    } else {
        rollGlaze = roll.glazing;
    }
    rollGlazeElement.innerText = 'Glazing: ' + rollGlaze;

    rollTitleElement.innerText = roll.type + ' Cinnamon Roll';
    rollPackSizeElement.innerText = 'Pack size: ' + roll.size;
    rollPriceElement.innerText = '$ ' + roll.totalPrice;
}

// delete roll
function deleteRoll(roll) {
    roll.element.remove();

    const index = cart.indexOf(roll);
    cart.splice(index, 1);
    
    saveToLocalStorage();
    calculateCartTotal();
}

// calculate total price
function calculateCartTotal() {
    let totalPrice = 0;
    console.log(cart)
    for (const roll of cart) {
        totalPrice += parseFloat(calculatePrice(roll.type, roll.glazing, roll.size, roll.basePrice));
    }
    const cartTotalElement = document.querySelector('.total-price');
    cartTotalElement.innerText = '$ ' + totalPrice.toFixed(2);
}

// -------------------------- HW 6: WEB STORAGE -------------------------
// REFERENCES: https://mariusschulz.com/blog/removing-elements-from-javascript-arrays

let cartData = localStorage.getItem('storedCart');
let cart;

if (cartData) {
    cart = JSON.parse(cartData);
} else {
    cart = [];
}

function saveToLocalStorage() {
    const cartArrayString = JSON.stringify(cart);
    localStorage.setItem('storedCart', cartArrayString);
}

function rebuildCartItem(cartItem) {
    return new Roll(cartItem.type, cartItem.glazing, cartItem.size, cartItem.basePrice);
}

function populatePage() {
    for (const cartItem of cart) {
        rebuiltCartItem = rebuildCartItem(cartItem);
        createElement(rebuiltCartItem);
      };
}

populatePage();