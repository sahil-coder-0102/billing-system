function loadFeedback() {
    const feedbackList = document.getElementById("adminFeedbackList");
    feedbackList.innerHTML = '';

    let storedFeedback = JSON.parse(localStorage.getItem("feedbackItems")) || [];

    storedFeedback.forEach(item => {
        const feedbackElement = document.createElement("li");
        feedbackElement.innerHTML = `<strong>${item.customerName}:</strong> ${item.customerFeedback}`;
        feedbackList.appendChild(feedbackElement);
    });
}

// Load feedback when the page loads
window.onload = loadFeedback;
