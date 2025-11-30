// ------- Smooth Scrolling for Navigation Links -------
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        const section = document.querySelector(this.getAttribute("href"));
        section.scrollIntoView({ behavior: "smooth" });
    });
});


// ------- Highlight Active Section in Navbar -------
const sections = document.querySelectorAll("main section");

window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY + 150;

    sections.forEach(sec => {
        if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${sec.id}`) {
                    link.classList.add("active");
                }
            });
        }
    });
});


// ------- Contact Form Validation -------
const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

form.addEventListener("submit", function (event) {
    event.preventDefault();  // Stop page reload

    let valid = true;

    // Validate Name
    if (nameInput.value.trim() === "") {
        alert("Please enter your name.");
        valid = false;
    }

    // Validate Email
    else if (!emailInput.value.includes("@") || !emailInput.value.includes(".")) {
        alert("Please enter a valid email address.");
        valid = false;
    }

    // Validate Message
    else if (messageInput.value.trim().length < 5) {
        alert("Message should be at least 5 characters.");
        valid = false;
    }

    // If all fields are valid
    if (valid) {
        alert("Thank you! Your message has been sent.");
        form.reset();
    }
});
