document.addEventListener("DOMContentLoaded", function () {
    const addComplaintBtn = document.getElementById("add-complaint-btn");
    const complaintBox = document.getElementById("complaint-box");
    const submitComplaintBtn = document.getElementById("submit-complaint");
    const complaintText = document.getElementById("complaint-text");
    const complaintList = document.getElementById("complaint-list");

    // Show Complaint Box on Button Click
    addComplaintBtn.addEventListener("click", function () {
        complaintBox.style.display = "flex";
    });

    // Submit Complaint
    submitComplaintBtn.addEventListener("click", function () {
        const complaint = complaintText.value.trim();
        if (complaint) {
            // Add complaint to the notice board
            let newComplaint = document.createElement("li");
            newComplaint.textContent = complaint;
            complaintList.appendChild(newComplaint);

            // Remove "No complaints yet." if it's the first complaint
            if (complaintList.children[0].textContent === "No complaints yet.") {
                complaintList.removeChild(complaintList.children[0]);
            }

            // Alert and reset textarea
            alert("Your complaint has been submitted!");
            complaintText.value = ""; 
            complaintBox.style.display = "none"; // Hide complaint box after submission
        } else {
            alert("Please enter a complaint before submitting.");
        }
    });
});
function goBack() {
    window.location.href = "home.html";
}
