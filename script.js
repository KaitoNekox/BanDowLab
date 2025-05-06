document.addEventListener('DOMContentLoaded', function() {
    // Splash screen animation
    const splash = document.getElementById('splash');
    const dashboard = document.getElementById('dashboard');
    
    setTimeout(() => {
        splash.style.opacity = '0';
        setTimeout(() => {
            splash.style.display = 'none';
            dashboard.classList.add('show');
            
            // Show cookie consent after 3 seconds
            setTimeout(() => {
                document.getElementById('cookieConsent').classList.add('show');
            }, 3000);
        }, 1000);
    }, 3000);
    
    // Cookie consent functionality
    const acceptCookies = document.getElementById('acceptCookies');
    const declineCookies = document.getElementById('declineCookies');
    const cookieConsent = document.getElementById('cookieConsent');
    
    acceptCookies.addEventListener('click', () => {
        cookieConsent.classList.remove('show');
        // Here you would typically set a cookie to remember the user's choice
        localStorage.setItem('cookiesAccepted', 'true');
    });
    
    declineCookies.addEventListener('click', () => {
        cookieConsent.classList.remove('show');
        // Here you would typically set a cookie to remember the user's choice
        localStorage.setItem('cookiesAccepted', 'false');
    });
    
    // Check if user has already made a choice
    if (localStorage.getItem('cookiesAccepted')) {
        cookieConsent.style.display = 'none';
    }
    
    // Contact form submission
    const supportForm = document.getElementById('supportForm');
    
    supportForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the data to your server
        // For this example, we'll just show an alert and log to console
        console.log(`Sending message to kaitonekox@outlook.com:
Name: ${name}
Email: ${email}
Message: ${message}`);
        
        alert('Thank you for your message! We will get back to you soon.');
        supportForm.reset();
        
        // Create a cool confirmation effect
        const submitButton = supportForm.querySelector('.submit-button');
        submitButton.textContent = 'Message Sent!';
        submitButton.style.background = 'linear-gradient(to right, var(--success-color), #00a884)';
        
        setTimeout(() => {
            submitButton.textContent = 'Send Message';
            submitButton.style.background = 'linear-gradient(to right, var(--primary-color), var(--accent-color))';
        }, 3000);
    });
    
    // Add hover effects to installation cards
    const installationCards = document.querySelectorAll('.installation-card');
    
    installationCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.card-icon');
            icon.style.transform = 'rotate(15deg) scale(1.1)';
        });
        
        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.card-icon');
            icon.style.transform = 'rotate(0) scale(1)';
        });
    });
    
    // Add scroll animations
    const sections = document.querySelectorAll('section');
    
    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Initial check
    checkScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', checkScroll);
    
    // Add floating particles animation
    createParticles();
});

function createParticles() {
    const colors = ['#6c5ce7', '#a29bfe', '#fd79a8', '#00b894', '#fdcb6e'];
    const container = document.body;
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random properties
        const size = Math.random() * 10 + 5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        // Apply styles
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = color;
        particle.style.left = `${posX}vw`;
        particle.style.top = `${posY}vh`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        
        container.appendChild(particle);
    }
}

// Add particles CSS dynamically
const style = document.createElement('style');
style.textContent = `
    .particle {
        position: fixed;
        border-radius: 50%;
        opacity: 0.3;
        z-index: -1;
        animation: float linear infinite;
    }
    
    @keyframes float {
        0% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.3;
        }
        50% {
            opacity: 0.8;
        }
        100% {
            transform: translate(20vw, -100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
