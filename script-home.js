document.addEventListener("DOMContentLoaded", function () {
    console.log("Hostel Management System Loaded!");

    const profilePic = document.getElementById("profile-pic");
    const dropdownMenu = document.getElementById("dropdown-menu");
    const body = document.body;
    const welcomeMessage = document.getElementById("welcome-message");
    const background = document.getElementById("blurred-background");

    // === Welcome Message Logic (Using sessionStorage) ===
    if (sessionStorage.getItem("welcomeShown")) {
        // If already shown in this session, hide immediately
        if (welcomeMessage) welcomeMessage.style.display = "none";
        if (background) background.classList.remove("translucent");
    } else {
        // First-time visit in session → Show typewriter effect
        if (welcomeMessage) {
            welcomeMessage.style.display = "block"; // Ensure visibility
            typeWriterEffect();
            sessionStorage.setItem("welcomeShown", "true"); // Store in session
        }
    }

    function typeWriterEffect() {
        let text = "Welcome to the Hostel Management System";
        let i = 0;
        welcomeMessage.innerHTML = ""; // Reset text content

        function type() {
            if (i < text.length) {
                welcomeMessage.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, 100); // Typing speed
            } else {
                setTimeout(() => {
                    if (welcomeMessage) welcomeMessage.style.display = "none";
                    if (background) background.classList.remove("translucent");
                }, 2000);
            }
        }
        type();
    }

    // === Profile Dropdown Logic ===
    profilePic.addEventListener("click", function () {
        dropdownMenu.classList.toggle("active");

        // Toggle background translucency
        if (dropdownMenu.classList.contains("active")) {
            body.classList.add("translucent");
        } else {
            body.classList.remove("translucent");
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!profilePic.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove("active");
            body.classList.remove("translucent");
        }
    });

    // === Welcome Overlay Timeout ===
    setTimeout(() => {
        const welcomeOverlay = document.querySelector(".welcome-overlay");
        if (welcomeOverlay) {
            welcomeOverlay.classList.add("hide-overlay");
        }
    }, 5000); // Hide after 5 seconds
});
