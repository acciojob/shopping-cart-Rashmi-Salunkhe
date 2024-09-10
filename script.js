//your code here
// Grab elements from the DOM
const itemNameInput = document.getElementById('item-name-input');
const itemPriceInput = document.getElementById('item-price-input');
const addButton = document.getElementById('add');
const shoppingList = document.getElementById('shopping-list');
const grandTotal = document.getElementById('total');

let total = 0;

// Function to add item to the list
function addItem() {
    const itemName = itemNameInput.value.trim();
    const itemPrice = parseFloat(itemPriceInput.value.trim());

    // Validate input: itemName must be a string, and itemPrice must be a positive number
    if (itemName === "" || isNaN(itemPrice) || itemPrice <= 0) {
        alert("Please enter a valid item name and price.");
        return;
    }

    // Create new row in the table
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${itemName}</td>
        <td>$${itemPrice.toFixed(2)}</td>
    `;
    shoppingList.appendChild(newRow);

    // Update total price
    total += itemPrice;
    grandTotal.innerText = `Grand Total: $${total.toFixed(2)}`;

    // Clear input fields
    itemNameInput.value = "";
    itemPriceInput.value = "";
}

// Add event listener to the "Add" button
addButton.addEventListener('click', addItem);

// Optional: Handle pressing 'Enter' to add the item
itemPriceInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addItem();
    }
});
