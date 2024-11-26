function addProduct() {
    // Retrieve existing products from localStorage
    let products = JSON.parse(localStorage.getItem("inventory")) || [];

    // Get values from form inputs
    const productName = document.getElementById("productName").value;
    const marketPrice = parseFloat(document.getElementById("marketPrice").value);
    const sellingPrice = parseFloat(document.getElementById("sellingPrice").value);
    const stockIn = parseInt(document.getElementById("productQuantity").value);
    const stockOut = parseInt(document.getElementById("stockOut").value);
    
    // Calculate the total available stock
    const totalStock = stockIn - stockOut;

    // Create new product object
    const newProduct = {
        productName,
        marketPrice,
        sellingPrice,
        stockIn,
        stockOut,
        totalStock
    };

    // Add new product to the list
    products.push(newProduct);

    // Save updated products back to localStorage
    localStorage.setItem("inventory", JSON.stringify(products));

    // Clear the input fields
    document.getElementById("productName").value = '';
    document.getElementById("marketPrice").value = '';
    document.getElementById("sellingPrice").value = '';
    document.getElementById("productQuantity").value = '';
    document.getElementById("stockOut").value = '';

    alert("Product added successfully!");
}

function viewInventory() {
    window.location.href = "inventory.html";  // Navigate to inventory page
}
