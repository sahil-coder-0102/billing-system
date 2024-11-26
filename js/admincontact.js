window.onload = function() {
    const contactData = JSON.parse(localStorage.getItem('contactData'));
    if (contactData) {
        const tableBody = document.querySelector('#contactsTable tbody');
        const newRow = tableBody.insertRow();
        newRow.insertCell(0).innerText = contactData.username;
        newRow.insertCell(1).innerText = contactData.mobile;
        newRow.insertCell(2).innerText = contactData.email;
    }
}
