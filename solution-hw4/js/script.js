// REFERENCES
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedIndex
// https://www.w3schools.com/jsref/jsref_tofixed.asp


// ------------------------------ HW 3 --------------------------------

// set up price adaptations objects
let glazingOptions = [
    {
      glaze: 'Keep original',
      priceAddition: 0,
    },
    {
        glaze: 'Sugar milk',
        priceAddition: 0,
    },
    {
        glaze: 'Vanilla milk',
        priceAddition: .5,
    },
    {
        glaze: 'Double chocolate',
        priceAddition: 1.5,
    },
  ];
  
  let packSizeOptions = [
    {
      packSize: 1,
      priceMultiplier: 1,
    },
    {
        packSize: 3,
        priceMultiplier: 3,
    },
    {
        packSize: 6,
        priceMultiplier: 5,
    },
    {
        packSize: 12,
        priceMultiplier: 10,
    },
  ];

// select elements
let selectGlazingElement = document.querySelector('#glazingOptions');
let selectPackSizeElement = document.querySelector('#packSizeOptions');

// populate dropdowns

for (let i = 0; i < glazingOptions.length; i++)
{
    let glazeOption = document.createElement("option");
    glazeOption.text = glazingOptions[i].glaze;
    glazeOption.value = glazingOptions[i].priceAddition;
    selectGlazingElement.add(glazeOption);
}

for (let i = 0; i < packSizeOptions.length; i++)
    {
        let packSizeOption = document.createElement("option");
        packSizeOption.text = packSizeOptions[i].packSize;
        packSizeOption.value = packSizeOptions[i].priceMultiplier;
        selectPackSizeElement.add(packSizeOption);
    }

// ----------- HW 4: UPDATING IMAGE, PRICE, TITLE BASED ON PARAM -----------
// REFERENCES:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors

// create empty cart array
let cart = [];

// get rollType from URL parameters
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

// update header based on param
let currHeader = document.querySelector('.page-title')
currHeader.innerText = rollType + ' Cinnamon Roll'

// update image based on param
let imageSrc = rolls[rollType].imageFile
let currImage = document.querySelector('.product-image')
currImage.src = './assets/products/' + imageSrc

// function to calculate and display total price (moved from above)

function displayPrice() {
    let basePrice = rolls[rollType].basePrice; // udpated to be based on param
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

// ---------------------- HW 4: ADD TO CART ------------------------

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;

        let addBtn = document.querySelector('.cart-button')
        addBtn.onclick = this.addToCart(this)
    }

    // addToCart() {
    //     const newItem = 
    // }

}

// const newItem = new Roll(
//     rollType,
    
// )

console.log(selectGlazingElement.text)
console.log(selectPackSizeElement.text)