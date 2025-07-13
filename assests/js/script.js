// Smooth scrolling for nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            e.preventDefault();
            targetSection.scrollIntoView({ behavior: 'smooth' });
            // Close mobile nav after click
            document.getElementById('navLinks').classList.remove('open');
        }
    });
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Optional: Prevent form submission (for demo)
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! (Form submission is not connected yet.)');
});

// Add New Project button functionality
function addNewProject() {
    alert('Feature coming soon: You will be able to add a new project here!');
}