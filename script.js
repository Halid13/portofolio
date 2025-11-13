// ========================================
// NAVIGATION ACTIVE
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    // Animation du nom (hero) - plus rapide
    const heroNameEl = document.getElementById('hero-name');
    if (heroNameEl) {
        typeWriter(heroNameEl, 'Mohamed ONIFADE', 45);
    }
    
    // Effet parallax souris sur hero-content
    setupParallax();
    
    // Rotation 3D au scroll
    setup3DScroll();

    // Frise chronologique "Mon parcours"
    setupJourneyTimelineReveal();

    // Carrousel "Certifications" (défilement continu)
    setupCertsCarousel();

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

// ========================================
// ROTATION 3D AU SCROLL
// ========================================

function setup3DScroll() {
    const hero = document.querySelector('.hero');
    const heroImage = document.querySelector('.profile-hero');
    const heroName = document.querySelector('.hero-name');
    
    if (!hero || !heroImage) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const heroHeight = hero.offsetHeight;
        const scrollPercent = Math.min(scrolled / heroHeight, 1);
        
        // Rotation 3D de l'image au scroll
        const rotateX = scrollPercent * 15;
        const rotateY = scrollPercent * 10;
        const scale = 1 - scrollPercent * 0.15;
        
        heroImage.style.transform = `
            rotateX(${rotateX}deg) 
            rotateY(${rotateY}deg) 
            scale(${scale})
        `;
        
        // Blur progressif au scroll
        const blurAmount = scrollPercent * 5;
        heroImage.style.filter = `blur(${blurAmount}px)`;
        
        // Fade out du nom
        if (heroName) {
            heroName.style.opacity = 1 - scrollPercent * 0.8;
            heroName.style.transform = `translateY(${scrollPercent * -30}px)`;
        }
    });
}

// ========================================
// PARALLAX MOUSE EFFECT
// ========================================

function setupParallax() {
    const hero = document.querySelector('.hero');
    const heroImage = document.querySelector('.profile-hero');
    const heroContent = document.querySelector('.hero-content');
    const heroMetaItems = document.querySelectorAll('.hero-meta-item');
    
    if (!hero || !heroImage) return;
    
    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;
        
        // Effet parallax plus prononcé sur l'image
        const moveX = deltaX * 25;
        const moveY = deltaY * 25;
        
        // Rotation 3D sur l'image
        const rotateY = deltaX * 8;
        const rotateX = -deltaY * 8;
        
        heroImage.style.transform = `
            translate(${moveX}px, ${moveY}px) 
            rotateY(${rotateY}deg) 
            rotateX(${rotateX}deg)
            scale(1)
        `;
        
        // Effet parallax inverse sur le contenu
        if (heroContent) {
            const contentMoveX = deltaX * -8;
            const contentMoveY = deltaY * -8;
            heroContent.style.transform = `translate(${contentMoveX}px, ${contentMoveY}px)`;
        }
        
        // Effet sur les badges (rotation légère)
        heroMetaItems.forEach((item, index) => {
            const itemRotate = deltaX * (index % 2 === 0 ? 3 : -3);
            const itemMove = deltaY * 5;
            item.style.transform = `translateY(${itemMove}px) rotate(${itemRotate}deg)`;
        });
    });
    
    hero.addEventListener('mouseleave', () => {
        heroImage.style.transform = 'translate(0, 0) rotateY(0) rotateX(0) scale(1)';
        if (heroContent) {
            heroContent.style.transform = 'translate(0, 0)';
        }
        heroMetaItems.forEach(item => {
            item.style.transform = 'translateY(0) rotate(0)';
        });
    });
}

// ========================================
// CARROUSEL "MON PARCOURS"
// ========================================

function setupJourneyTimelineReveal() {
    const items = document.querySelectorAll('.jt-item');
    if (!items.length) return;

    // Stagger initial delays for a smoother, elegant reveal
    items.forEach((item, index) => {
        item.style.transitionDelay = `${Math.min(index * 90, 360)}ms`;
    });

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    items.forEach(item => observer.observe(item));
}

// ========================================
// CARROUSEL "CERTIFICATIONS" (défilement continu)
// ========================================

function setupCertsCarousel() {
    const carousel = document.getElementById('certs-carousel');
    if (!carousel) return;

    const track = carousel.querySelector('.certs-track');
    if (!track) return;
    // Dupliquer les éléments pour remplir > 200% largeur (pour animation CSS)
    const items = Array.from(track.children);
    items.forEach(item => track.appendChild(item.cloneNode(true)));

    // Pause au survol (toggle classe)
    carousel.addEventListener('mouseenter', () => carousel.classList.add('paused'));
    carousel.addEventListener('mouseleave', () => carousel.classList.remove('paused'));
}
