document.addEventListener("DOMContentLoaded", function () {
    console.log("Hostel Management System Loaded!");

    const profilePic = document.getElementById("profile-pic");
    const dropdownMenu = document.getElementById("dropdown-menu");
    const body = document.body;

    profilePic.addEventListener("click", function () {
        // Toggle dropdown menu
        dropdownMenu.classList.toggle("active");

        // Toggle background translucency
        if (dropdownMenu.classList.contains("active")) {
            body.classList.add("translucent");
        } else {
            body.classList.remove("translucent");
        }
    });

    // Example: Alert when a navigation link is clicked
        });

        document.addEventListener("DOMContentLoaded", function () {
            setTimeout(() => {
                document.querySelector(".welcome-overlay").classList.add("hide-overlay");
            }, 5000); // Hide after 5 seconds
        });
        
