// ---------------------- HW 5: ADD & DELETE FROM CART ON CART PAGE ------

let cart = [];

class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;

        this.element = null;
    }
}

function addCartItem(rollType, rollGlazing, packSize, rollPrice) {
    const cartItem = new Roll(rollType, rollGlazing, packSize, rollPrice);
    cart.push(cartItem);
    return cart;
}

// add rolls to cart 
const rollOne = addCartItem('Original', 'Sugar milk', '1', 2.49);
const rollTwo = addCartItem('Walnut', 'Vanilla milk', '12', 3.49);
const rollThree = addCartItem('Raisin', 'Sugar milk', '3', 2.99);
const rollFour = addCartItem('Apple', 'Original', '3', 3.49);



// from hw4

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

// put all notecards on page
// for (const notecard of notecardSet) {
//     createElement(notecard);
//   }

// // add to page
// function createElement(notecard) { 
//     const template = document.querySelector('#notecard-template');
//     const clone = template.content.cloneNode(true);
//     notecard.element = clone.querySelector('.notecard');

//     const btnDelete = notecard.element.querySelector('.icon-delete');
//     btnDelete.addEventListener('click', () => {
//         deleteNote(notecard);
//     });

//     const notecardListElement = document.querySelector('#notecard-list');
//     notecardListElement.prepend(notecard.element);
//     updateElement(notecard)
// }

// function updateElement(notecard) {
//     const noteImageElement = notecard.element.querySelector('.notecard-thumbnail');
//     const noteTitleElement = notecard.element.querySelector('.note-title');
//     const noteBodyElement = notecard.element.querySelector('.note-body');

//     noteImageElement.src = notecard.noteImageURL;
//     noteTitleElement.innerText = notecard.noteTitle;
//     noteBodyElement.innerText = notecard.noteBody;
// }