// CHANGE NAVBAR COLOR ON SCROLL
window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// MOBILE MENU TOGGLE
function toggleMenu() {
    const nav = document.querySelector(".nav-links");
    nav.style.display = nav.style.display === "block" ? "none" : "block";
}

// CONTACT FORM VALIDATION AND SUBMISSION
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('formMessage');

    // Clear previous messages
    formMessage.textContent = '';
    formMessage.className = '';

    // Validation
    if (!name) {
        formMessage.textContent = 'Please enter your name.';
        formMessage.className = 'error';
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        formMessage.textContent = 'Please enter a valid email address.';
        formMessage.className = 'error';
        return;
    }

    if (!message) {
        formMessage.textContent = 'Please enter your message.';
        formMessage.className = 'error';
        return;
    }

    // Simulate form submission (since this is a static site)
    formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
    formMessage.className = 'success';

    // Clear form
    document.getElementById('contactForm').reset();
});
