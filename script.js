document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
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

    // === Background Particle Animation ===
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");

    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.zIndex = "-1"; // Send it behind other elements

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles = [];
    const numParticles = 100;

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 4 + 1; // Size of the particle
            this.speedX = Math.random() * 1.5 - 0.75; // Horizontal speed
            this.speedY = Math.random() * 1.5 - 0.75; // Vertical speed
            this.color = `rgb(${Math.random() * 255}, ${Math.random() * 140 + 50}, ${Math.random() * 100 + 50})`; // Warm color tone
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Bounce off the edges
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    function createParticles() {
        for (let i = 0; i < numParticles; i++) {
            particles.push(new Particle());
        }
    }

    createParticles();

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update and draw each particle
        particles.forEach((particle) => {
            particle.update();
            particle.draw();
        });

        requestAnimationFrame(animate);
    }
    animate();
});
