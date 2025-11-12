// ========================================
// NAVIGATION ACTIVE
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');

    // Gestion du scroll pour activer les liens de navigation
    window.addEventListener('scroll', function() {
        let currentSection = '';

        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentSection) {
                link.classList.add('active');
            }
        });
    });

    // Gestion des clics sur les liens de navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// ========================================
// MENU HAMBURGER (MOBILE)
// ========================================

const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.nav');

if (hamburger) {
    hamburger.addEventListener('click', function() {
        this.style.display = nav.style.display === 'flex' ? 'flex' : 'none';
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });
}

// ========================================
// FORMULAIRE DE CONTACT
// ========================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Récupération des données du formulaire
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Validation simple
        if (!name || !email || !subject || !message) {
            alert('Veuillez remplir tous les champs du formulaire.');
            return;
        }

        // Validation email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Veuillez entrer une adresse email valide.');
            return;
        }

        // Affichage du message de confirmation
        alert(`Merci ${name}! Votre message a été reçu. Je vous répondrai dès que possible.`);

        // Réinitialisation du formulaire
        contactForm.reset();

        // Note: Pour envoyer vraiment le message, vous devez configurer un backend
        // ou utiliser un service comme EmailJS, Formspree, etc.
        console.log({
            name: name,
            email: email,
            subject: subject,
            message: message
        });
    });
}

// ========================================
// OBSERVER POUR LES ANIMATIONS À L'ARRIVÉE
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInUp 0.8s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observer tous les skill cards et project cards
document.querySelectorAll('.skill-card, .project-card, .info-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ========================================
// SCROLL SMOOTH POUR LES LIENS INTERNES
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// MODAL OU DÉTAILS POUR LES PROJETS (OPTIONNEL)
// ========================================

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.cursor = 'pointer';
    });

    card.addEventListener('click', function() {
        const projectTitle = this.querySelector('h3').textContent;
        const projectDesc = this.querySelector('p').textContent;
        
        // Vous pouvez afficher plus de détails ou ouvrir une modal ici
        console.log('Projet cliqué:', {
            title: projectTitle,
            description: projectDesc
        });
    });
});

// ========================================
// COMPTEUR D'ANIMATIONS LORS DU CHARGEMENT
// ========================================

window.addEventListener('load', function() {
    // Tous les éléments sont chargés
    console.log('Portfolio complètement chargé!');
});

// ========================================
// MODE RESPONSIVE - AJUSTEMENT DU MENU
// ========================================

function adjustMenuForScreenSize() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('.nav');

    if (window.innerWidth <= 768) {
        hamburger.style.display = 'flex';
    } else {
        hamburger.style.display = 'none';
        if (nav) {
            nav.style.display = 'flex';
        }
    }
}

// Appel initial et lors du redimensionnement
adjustMenuForScreenSize();
window.addEventListener('resize', adjustMenuForScreenSize);

// ========================================
// EFFECT DE TYPAGE OPTIONNEL (AVANCÉ)
// ========================================

function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Utilisation : typeWriter(document.querySelector('.hero-content h2'), 'Bienvenue sur mon Portfolio');
