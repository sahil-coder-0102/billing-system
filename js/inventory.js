
function loadInventory() {
    const inventoryList = document.getElementById("inventoryList");
    inventoryList.innerHTML = '';  

   
    let products = JSON.parse(localStorage.getItem("inventory")) || [];

    // Loop through products and create table rows
    products.forEach((product, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td><input type="text" value="${product.productName}" id="productName-${index}"></td>
            <td><input type="number" value="${product.marketPrice}" id="marketPrice-${index}" step="0.01"></td>
            <td><input type="number" value="${product.sellingPrice}" id="sellingPrice-${index}" step="0.01"></td>
            <td><input type="number" value="${product.stockIn}" id="stockIn-${index}" min="0"></td>
            <td><input type="number" value="${product.stockOut}" id="stockOut-${index}" min="0"></td>
            <td>${product.totalStock}</td>
            <td>
                <button class="save-btn" onclick="saveProduct(${index})">Save</button>
                <button class="delete-btn" onclick="deleteProduct(${index})">Delete</button>
            </td>
        `;

        inventoryList.appendChild(row);
    });
}

// Save updated product details
function saveProduct(index) {
    // Get updated product details from input fields
    let products = JSON.parse(localStorage.getItem("inventory")) || [];
    
    const productName = document.getElementById(`productName-${index}`).value;
    const marketPrice = parseFloat(document.getElementById(`marketPrice-${index}`).value);
    const sellingPrice = parseFloat(document.getElementById(`sellingPrice-${index}`).value);
    const stockIn = parseInt(document.getElementById(`stockIn-${index}`).value);
    const stockOut = parseInt(document.getElementById(`stockOut-${index}`).value);
    
    const totalStock = stockIn - stockOut;

    // Update the product in the array
    products[index] = { productName, marketPrice, sellingPrice, stockIn, stockOut, totalStock };

    // Save the updated products back to localStorage
    localStorage.setItem("inventory", JSON.stringify(products));

    alert("Product updated successfully!");

    // Reload the inventory to reflect the changes
    loadInventory();
}

// Delete a product from the inventory
function deleteProduct(index) {
    let products = JSON.parse(localStorage.getItem("inventory")) || [];

    // Remove the product at the specified index
    products.splice(index, 1);

    // Save the updated products back to localStorage
    localStorage.setItem("inventory", JSON.stringify(products));

    alert("Product deleted successfully!");

    // Reload the inventory to reflect the changes
    loadInventory();
}

// Load inventory when the page is loaded
document.addEventListener('DOMContentLoaded', loadInventory);
