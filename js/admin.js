document.addEventListener('DOMContentLoaded', function () {
    loadAdminBills();
});

function loadAdminBills() {
    const adminBillList = document.getElementById("adminBillList");
    const existingItems = JSON.parse(localStorage.getItem('adminBillItems')) || [];

    // Clear the list first
    adminBillList.innerHTML = '';
    
    existingItems.forEach((item, index) => {
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td><input type="text" id="name-${index}" value="${item.customerName}" disabled></td>
            <td><input type="text" id="phone-${index}" value="${item.customerPhone}" disabled></td>
            <td><input type="text" id="product-${index}" value="${item.productName}"></td>
            <td><input type="number" id="quantity-${index}" value="${item.quantity}" min="1"></td>
            <td><input type="number" id="price-${index}" value="${item.price.toFixed(2)}" step="0.01"></td>
            <td id="total-${index}">${item.total.toFixed(2)}</td>
            <td>
                <button onclick="saveChanges(${index})">Save</button>
                <button onclick="deleteItem(${index})">Delete</button>
            </td>
        `;
        adminBillList.appendChild(newRow);
    });
}

function saveChanges(index) {
    // Get updated values from the input fields
    const updatedProductName = document.getElementById(`product-${index}`).value;
    const updatedQuantity = parseInt(document.getElementById(`quantity-${index}`).value);
    const updatedPrice = parseFloat(document.getElementById(`price-${index}`).value);

    // Recalculate the total
    const updatedTotal = updatedPrice * updatedQuantity;
    
    // Update the total in the UI
    document.getElementById(`total-${index}`).innerText = updatedTotal.toFixed(2);

    // Retrieve existing data from local storage
    const existingItems = JSON.parse(localStorage.getItem('adminBillItems')) || [];

    // Update the specific item in the array
    existingItems[index].productName = updatedProductName;
    existingItems[index].quantity = updatedQuantity;
    existingItems[index].price = updatedPrice;
    existingItems[index].total = updatedTotal;

    // Store the updated data back to local storage
    localStorage.setItem('adminBillItems', JSON.stringify(existingItems));
}

function deleteItem(index) {
    // Retrieve existing data from local storage
    const existingItems = JSON.parse(localStorage.getItem('adminBillItems')) || [];

    // Remove the selected item
    existingItems.splice(index, 1);

    // Store the updated list back in local storage
    localStorage.setItem('adminBillItems', JSON.stringify(existingItems));

    // Reload the bill list
    loadAdminBills();
}
