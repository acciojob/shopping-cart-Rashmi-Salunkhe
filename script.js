document.getElementById('add').addEventListener('click', function() {
    const itemName = document.getElementById('item-name-input').value;
    const itemQty = parseInt(document.getElementById('item-qty-input').value);
    const itemPrice = parseInt(document.getElementById('item-price-input').value);

    if (itemName && itemQty > 0 && itemPrice > 0) {
        const totalPerItem = itemQty * itemPrice;

        const table = document.getElementById('cart-items');
        const row = document.createElement('tr');

        // Create columns for item, quantity, price, and total
        const itemCol = document.createElement('td');
        itemCol.textContent = itemName;

        const qtyCol = document.createElement('td');
        qtyCol.textContent = itemQty;

        const priceCol = document.createElement('td');
        priceCol.textContent = itemPrice;

        const totalCol = document.createElement('td');
        totalCol.textContent = totalPerItem; // New column for total

        row.appendChild(itemCol);
        row.appendChild(qtyCol);
        row.appendChild(priceCol);
        row.appendChild(totalCol);
        
        // Insert row before the last row (which displays the grand total)
        table.insertBefore(row, table.lastElementChild);

        // Update grand total
        const currentTotal = parseFloat(document.getElementById('total').textContent);
        const newTotal = currentTotal + totalPerItem;
        document.getElementById('total').textContent = newTotal;

        // Clear input fields
        document.getElementById('item-name-input').value = '';
        document.getElementById('item-qty-input').value = '';
        document.getElementById('item-price-input').value = '';
    } else {
        alert('Please enter valid item details.');
    }
});
