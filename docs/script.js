document.addEventListener("DOMContentLoaded", () => {
    console.log("Resume website loaded successfully");
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add hover effect to contact links
    document.querySelectorAll('.contact-info a').forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.2s ease';
        });
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});
