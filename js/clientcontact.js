document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const mobile = document.getElementById("mobile").value;
    const email = document.getElementById("email").value;

    const contactData = { username, mobile, email };
    localStorage.setItem('contactData', JSON.stringify(contactData));

    alert("Contact information submitted successfully!");
    this.reset();
});
