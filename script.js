document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const collegeId = document.getElementById("collegeId").value.trim();
        const password = document.getElementById("password").value.trim();
        
        if (collegeId === "" || password === "") {
            alert("Please fill in both fields.");
            return;
        }

        // Simulate login validation (Replace with actual authentication logic)
        if (collegeId === "admin" && password === "password123") {
            alert("Login successful!");
            window.location.href = "dashboard.html"; // Redirect to dashboard
        } else {
            alert("Invalid College ID or Password. Please try again.");
        }
    });
});
