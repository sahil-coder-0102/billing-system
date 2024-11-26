let billItems = [];
let totalAmount = 0;

function addProduct() {
    const customerName = document.getElementById("customerName").value.trim();
    const customerPhone = document.getElementById("customerPhone").value.trim();
    const productName = document.getElementById("productName").value.trim();
    const productPrice = parseFloat(document.getElementById("productPrice").value);
    const productQuantity = parseInt(document.getElementById("productQuantity").value);

    
    if (!customerName || !customerPhone || !productName || isNaN(productPrice) || isNaN(productQuantity) || productQuantity <= 0) {
        alert("Please fill in all fields correctly.");
        return;
    }

    
    const total = productPrice * productQuantity;
    const billItem = {
        customerName,
        customerPhone,
        productName,
        quantity: productQuantity,
        price: productPrice,
        total
    };

    billItems.push(billItem);
    updateAdminBill(billItem); 
    updateBillList();
    clearProductFields();

    totalAmount += total;
    document.getElementById("totalAmount").innerText = totalAmount.toFixed(2);

    
    storeBillInLocalStorage(billItem);
}

function clearProductFields() {
    document.getElementById("productName").value = '';
    document.getElementById("productPrice").value = '';
    document.getElementById("productQuantity").value = '';
}

function applyDiscount() {
    const discount = parseFloat(document.getElementById("discount").value);
    const discountType = document.getElementById("discountType").value;

    if (discountType === "percentage") {
        totalAmount -= (totalAmount * (discount / 100));
    } else {
        totalAmount -= discount;
    }

    
    totalAmount = Math.max(totalAmount, 0);
    document.getElementById("totalAmount").innerText = totalAmount.toFixed(2);
}

function generateReceipt() {
    const receiptContainer = document.getElementById("receiptContainer");
    receiptContainer.innerHTML = `<h3>Receipt</h3>`;

    billItems.forEach(item => {
        receiptContainer.innerHTML += `
            <p>${item.productName} (x${item.quantity}): $${item.total.toFixed(2)}</p>
        `;
    });

    receiptContainer.innerHTML += `<p><strong>Total: $${totalAmount.toFixed(2)}</strong></p>`;
}

function updateBillList() {
    const billList = document.getElementById("billList");
    billList.innerHTML = '';
    billItems.forEach(item => {
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${item.productName}</td>
            <td>${item.quantity}</td>
            <td>${item.price.toFixed(2)}</td>
            <td>${item.total.toFixed(2)}</td>
        `;
        billList.appendChild(newRow);
    });
}

function updateAdminBill(billItem) {
   
    const existingItems = JSON.parse(localStorage.getItem('adminBillItems')) || [];
    existingItems.push(billItem);
    localStorage.setItem('adminBillItems', JSON.stringify(existingItems));
}

function storeBillInLocalStorage(billItem) {
    
    const currentBillItems = JSON.parse(localStorage.getItem('currentBillItems')) || [];
    currentBillItems.push(billItem);
    localStorage.setItem('currentBillItems', JSON.stringify(currentBillItems));
}
