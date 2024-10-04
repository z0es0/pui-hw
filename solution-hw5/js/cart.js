// ---------------------- HW 5: ADD & DELETE FROM CART ON CART PAGE ------

let cart = [];

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

        this.totalPrice = this.calculatePrice(rollType, rollGlazing, packSize, rollPrice);

        this.element = null;
    }

    calculatePrice(rollType, rollGlazing, packSize, rollPrice) {
        let glazePriceAddition = glazingOptions[rollGlazing];
        // console.log(glazePriceAddition);

        let packSizePriceMultiplier = packSizeOptions[packSize];
        // console.log(packSizePriceMultiplier);

        let totalPrice = (rollPrice + glazePriceAddition) * packSizePriceMultiplier;
        // console.log(totalPrice); 
        return totalPrice
    }
}

// add items to cart array
function addCartItem(rollType, rollGlazing, packSize, rollPrice) {
    let cartItem = new Roll(rollType, rollGlazing, packSize, rollPrice);
    cart.push(cartItem);
    console.log(cart);
    return cart;
}

// create roll objects in cart
const rollOne = addCartItem('Original', 'Sugar milk', '1', 2.49);
const rollTwo = addCartItem('Walnut', 'Vanilla milk', '12', 3.49);
const rollThree = addCartItem('Raisin', 'Sugar milk', '3', 2.99);
const rollFour = addCartItem('Apple', 'Keep original', '3', 3.49);

console.log(cart)

// put all roll objects on page
for (const roll of cart) {
    createElement(roll);
  }

// add to page
function createElement(roll) { 
    const template = document.querySelector('#cart-item-template');
    const clone = template.content.cloneNode(true);
    roll.element = clone.querySelector('.cart-item');

    // const btnDelete = roll.element.querySelector('.remove-button');
    // btnDelete.addEventListener('click', () => {
    //     deleteRoll(roll);
    // };

    const rollListElement = document.querySelector('#cart-list');
    rollListElement.prepend(roll.element);
    updateElement(roll)
}

function updateElement(roll) {
    const rollImageElement = roll.element.querySelector('.roll-thumbnail');
    const rollTitleElement = roll.element.querySelector('.roll-title');
    const rollGlazeElement = roll.element.querySelector('.note-body');

    let imageSrc = rolls[roll.type].imageFile;
    rollImageElement.src = imageSrc;
    
    rollTitleElement.innerText = roll.type + ' Cinnamon Roll';
    noteBodyElement.innerText = notecard.noteBody;
}