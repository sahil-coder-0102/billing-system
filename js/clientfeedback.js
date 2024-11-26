let feedbackItems = [];

function submitFeedback() {
    const customerName = document.getElementById("customerName").value;
    const customerFeedback = document.getElementById("customerFeedback").value;

    if (customerName && customerFeedback) {
        const feedbackItem = { customerName, customerFeedback };

        feedbackItems.push(feedbackItem);
        updateAdminFeedback(feedbackItem);  // Send to admin feedback
        updateFeedbackList();

        clearFeedbackFields();
    }
}

function updateFeedbackList() {
    const feedbackList = document.getElementById("feedbackList");
    feedbackList.innerHTML = '';
    feedbackItems.forEach(item => {
        const feedbackElement = document.createElement("li");
        feedbackElement.innerHTML = `<strong>${item.customerName}:</strong> ${item.customerFeedback}`;
        feedbackList.appendChild(feedbackElement);
    });
}

function clearFeedbackFields() {
    document.getElementById("customerName").value = '';
    document.getElementById("customerFeedback").value = '';
}

// Store the feedback into localStorage to simulate the server database
function updateAdminFeedback(feedbackItem) {
    let storedFeedback = JSON.parse(localStorage.getItem("feedbackItems")) || [];
    storedFeedback.push(feedbackItem);
    localStorage.setItem("feedbackItems", JSON.stringify(storedFeedback));
}
