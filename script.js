// ========================================
// CONFIGURATION EMAILJS
// ========================================

// Initialisation EmailJS avec votre clé publique
// IMPORTANT: Remplacez 'VOTRE_PUBLIC_KEY' par votre vraie clé publique EmailJS
(function() {
    emailjs.init({
        publicKey: 'selZhVqAAj4b9PUJG', // À remplacer
    });
})();

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

    // Interactions 3D sur cartes compétences (futuriste)
    setupSkillCards3D();

    // Cartes projets dépliantes
    setupProjectCards();

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
// FORMULAIRE DE CONTACT (MODERNE & INTERACTIF)
// ========================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    const messageTextarea = document.getElementById('message');
    const charCountSpan = document.getElementById('charCount');
    const submitBtn = contactForm.querySelector('.btn-submit');
    const submitIcon = submitBtn.querySelector('.btn-submit-icon');
    const submitText = submitBtn.querySelector('.btn-submit-text');
    const submitLoader = submitBtn.querySelector('.btn-submit-loader');
    const formSuccess = document.getElementById('formSuccess');
    const formError = document.getElementById('formError');

    // Compteur de caractères pour le message
    if (messageTextarea && charCountSpan) {
        messageTextarea.addEventListener('input', function() {
            const count = this.value.length;
            charCountSpan.textContent = count;
            
            // Animation du compteur
            charCountSpan.style.transform = 'scale(1.2)';
            setTimeout(() => {
                charCountSpan.style.transform = 'scale(1)';
            }, 150);
        });
    }

    // Effet de survol avec position de la souris sur les méthodes de contact
    const contactMethods = document.querySelectorAll('.contact-method');
    contactMethods.forEach(method => {
        method.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const mouseXPercent = (x / rect.width) * 100;
            const mouseYPercent = (y / rect.height) * 100;
            this.style.setProperty('--mouse-x', `${mouseXPercent}%`);
            this.style.setProperty('--mouse-y', `${mouseYPercent}%`);
        });

        method.addEventListener('mouseleave', function() {
            this.style.setProperty('--mouse-x', '50%');
            this.style.setProperty('--mouse-y', '50%');
        });
    });

    // Animation des champs du formulaire au focus et correction en direct
    const formInputs = contactForm.querySelectorAll('.form-input, .form-textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'translateY(-2px)';
        });

        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'translateY(0)';
        });

        // Clear aria-invalid en saisie si la valeur devient valide
        input.addEventListener('input', function() {
            if (this.getAttribute('aria-invalid') === 'true') {
                if (this.id === 'email') {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (emailRegex.test(this.value.trim())) {
                        this.removeAttribute('aria-invalid');
                    }
                } else if (this.id === 'message') {
                    if (this.value.trim().length >= 10) {
                        this.removeAttribute('aria-invalid');
                    }
                } else {
                    if (this.value.trim().length > 0) {
                        this.removeAttribute('aria-invalid');
                    }
                }
            }
        });
    });

    // Soumission du formulaire
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Masquer les messages précédents
        formSuccess.hidden = true;
        formError.hidden = true;

        // Récupération des données du formulaire
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validation simple (ne pas afficher les messages globaux ici)
        if (!name || !email || !subject || !message) {
            const firstInvalid = !name ? 'name' : (!email ? 'email' : (!subject ? 'subject' : 'message'));
            const el = document.getElementById(firstInvalid);
            if (el) {
                el.focus();
                el.setAttribute('aria-invalid', 'true');
            }
            return;
        }

        // Validation email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            const el = document.getElementById('email');
            if (el) {
                el.focus();
                el.setAttribute('aria-invalid', 'true');
            }
            return;
        }

        // Validation longueur du message
        if (message.length < 10) {
            const el = document.getElementById('message');
            if (el) {
                el.focus();
                el.setAttribute('aria-invalid', 'true');
            }
            return;
        }

        // Animation de chargement
        submitBtn.disabled = true;
        submitIcon.hidden = true;
        submitText.textContent = 'Envoi en cours...';
        submitLoader.hidden = false;

        // Envoi réel de l'email via EmailJS
        // IMPORTANT: Remplacez 'VOTRE_SERVICE_ID' et 'VOTRE_TEMPLATE_ID' par vos vraies valeurs
        const templateParams = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
            to_name: 'Mohamed ONIFADE', // Votre nom
        };

        emailjs.send('service_tnzikj8', 'template_x7q8oct', templateParams)
            .then(function(response) {
                console.log('Email envoyé avec succès!', response.status, response.text);
                
                // Succès
                submitBtn.disabled = false;
                submitIcon.hidden = false;
                submitText.textContent = 'Envoyer le message';
                submitLoader.hidden = true;

                // Afficher le message de succès
                showSuccess(`Merci ${name} ! Votre message a été envoyé avec succès. Je vous répondrai dans les plus brefs délais.`);

                // Réinitialiser le formulaire
                contactForm.reset();
                if (charCountSpan) charCountSpan.textContent = '0';
            }, function(error) {
                console.error('Erreur lors de l\'envoi:', error);
                
                // Erreur
                submitBtn.disabled = false;
                submitIcon.hidden = false;
                submitText.textContent = 'Envoyer le message';
                submitLoader.hidden = true;

                // Détection d'erreur OAuth Gmail expirée (EmailJS 412 Invalid grant)
                const messageText =
                    (typeof error === 'string' ? error : (error?.text || '')) +
                    ' ' + (error?.status || '');
                const isInvalidGrant = /Invalid grant/i.test(messageText) || error?.status === 412;

                if (isInvalidGrant) {
                    showError("Votre service Gmail EmailJS doit être reconnecté. Ouvrez EmailJS > Email Services > votre service Gmail > Reconnect. Ensuite réessayez. En cas de blocage, supprimez l'accès EmailJS dans votre Compte Google > Sécurité > Accès tiers et reconnectez.");
                } else {
                    showError("Une erreur est survenue lors de l'envoi. Veuillez réessayer ou me contacter directement par email à halidonfd13@gmail.com");
                }

                // Fallback pratique: ouvrir un mail pré-rempli pour ne pas perdre le message
                try {
                    const subjectEnc = encodeURIComponent(`[Portfolio] ${subject}`);
                    const bodyEnc = encodeURIComponent(
                        `De: ${name} <${email}>\nSujet: ${subject}\n\nMessage:\n${message}`
                    );
                    window.open(`mailto:halidonfd13@gmail.com?subject=${subjectEnc}&body=${bodyEnc}`, '_blank');
                } catch (e) {
                    // ignore fallback errors
                }
            });
    });

    function showSuccess(message) {
        formSuccess.querySelector('p').textContent = message;
        formSuccess.hidden = false;
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        // Animation d'entrée
        formSuccess.style.animation = 'none';
        void formSuccess.offsetHeight; // Force reflow
        formSuccess.style.animation = 'slideInUp 400ms cubic-bezier(0.4, 0, 0.2, 1)';

        // Masquer après 8 secondes
        setTimeout(() => {
            formSuccess.style.opacity = '0';
            formSuccess.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                formSuccess.hidden = true;
                formSuccess.style.opacity = '1';
                formSuccess.style.transform = 'translateY(0)';
            }, 300);
        }, 8000);
    }

    function showError(message) {
        formError.querySelector('p').textContent = message;
        formError.hidden = false;
        formError.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        // Animation d'entrée
        formError.style.animation = 'none';
        void formError.offsetHeight; // Force reflow
        formError.style.animation = 'slideInUp 400ms cubic-bezier(0.4, 0, 0.2, 1)';

        // Masquer après 6 secondes
        setTimeout(() => {
            formError.style.opacity = '0';
            formError.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                formError.hidden = true;
                formError.style.opacity = '1';
                formError.style.transform = 'translateY(0)';
            }, 300);
        }, 6000);
    }
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
document.querySelectorAll('.skill-card, .project-card, .proj-card, .info-item').forEach(el => {
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

// ========================================
// INTERACTIONS 3D CARTES COMPÉTENCES (FUTURISTE)
// ========================================

function setupSkillCards3D() {
    const cards = document.querySelectorAll('.skill-card');
    if (!cards.length) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return; // Respect accessibility

    cards.forEach(card => {
        const glow = card.querySelector('.sc-glow');

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const deltaX = (x - centerX) / centerX;
            const deltaY = (y - centerY) / centerY;

            // Rotation 3D (tilt) proportionnelle à la distance du centre
            const rotateY = deltaX * 12; // max ±12deg
            const rotateX = -deltaY * 12;

            card.style.transform = `
                perspective(1000px) 
                rotateX(${rotateX}deg) 
                rotateY(${rotateY}deg) 
                translateY(-8px) 
                scale(1.02)
            `;

            // Position du glow interne qui suit la souris
            if (glow) {
                const mouseXPercent = (x / rect.width) * 100;
                const mouseYPercent = (y / rect.height) * 100;
                card.style.setProperty('--mouse-x', `${mouseXPercent}%`);
                card.style.setProperty('--mouse-y', `${mouseYPercent}%`);
            }
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            if (glow) {
                card.style.setProperty('--mouse-x', '50%');
                card.style.setProperty('--mouse-y', '50%');
            }
        });
    });
}

// ========================================
// CARTES PROJETS DÉPLIANTES
// ========================================

function setupProjectCards() {
    const cards = document.querySelectorAll('.proj-card');
    if (!cards.length) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Store all expand/collapse functions
    const cardControls = [];

    cards.forEach((card, cardIndex) => {
        const toggle = card.querySelector('.proj-toggle');
        const details = card.querySelector('.proj-details');
        if (!toggle || !details) return;

        const chevron = toggle.querySelector('i');

        function expand() {
            card.classList.add('open');
            toggle.setAttribute('aria-expanded', 'true');
            details.hidden = false;
            if (!reduceMotion) {
                // Transition via max-height
                details.style.maxHeight = details.scrollHeight + 'px';
            } else {
                details.style.maxHeight = 'none';
            }
        }

        function collapse() {
            card.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
            if (!reduceMotion) {
                // Set to current height then to 0 for smooth collapse
                details.style.maxHeight = details.scrollHeight + 'px';
                // force reflow
                void details.offsetHeight;
                details.style.maxHeight = '0px';
                const onEnd = (e) => {
                    if (e.target !== details) return;
                    details.hidden = true;
                    details.removeEventListener('transitionend', onEnd);
                };
                details.addEventListener('transitionend', onEnd);
            } else {
                details.hidden = true;
                details.style.maxHeight = '0px';
            }
        }

        // Store controls for this card
        cardControls.push({ expand, collapse, toggle });

        toggle.addEventListener('click', () => {
            const expanded = toggle.getAttribute('aria-expanded') === 'true';
            
            if (expanded) {
                // Just collapse this card
                collapse();
            } else {
                // Accordion: close all other cards first
                cardControls.forEach((ctrl, idx) => {
                    if (idx !== cardIndex && ctrl.toggle.getAttribute('aria-expanded') === 'true') {
                        ctrl.collapse();
                    }
                });
                // Then expand this card
                expand();
            }
        });

        // Mouse move glow effect
        if (!reduceMotion) {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const mouseXPercent = (x / rect.width) * 100;
                const mouseYPercent = (y / rect.height) * 100;
                card.style.setProperty('--mouse-x', `${mouseXPercent}%`);
                card.style.setProperty('--mouse-y', `${mouseYPercent}%`);
            });

            card.addEventListener('mouseleave', () => {
                card.style.setProperty('--mouse-x', '50%');
                card.style.setProperty('--mouse-y', '50%');
            });
        }

        // Optional: close on Escape when focused inside
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                collapse();
                toggle.focus();
            }
        });
    });
}

// ========================================
// FOOTER ANIMATIONS & INTERACTIONS
// ========================================

// Animated Counter for Footer Stats
function animateFooterStats() {
    const stats = document.querySelectorAll('.stat-number');
    if (!stats.length) return;

    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px'
    };

    const animateCount = (element) => {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;

        const updateCount = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.floor(current);
                requestAnimationFrame(updateCount);
            } else {
                element.textContent = target;
            }
        };

        updateCount();
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Small delay to ensure visibility
                setTimeout(() => {
                    animateCount(entry.target);
                }, 300);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    stats.forEach(stat => observer.observe(stat));
}

// Scroll to Top Button
function setupScrollToTop() {
    const scrollBtn = document.getElementById('scrollToTop');
    if (!scrollBtn) return;

    // Initial state
    scrollBtn.style.display = 'none';
    scrollBtn.style.opacity = '0';

    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollBtn.style.display = 'flex';
            setTimeout(() => {
                scrollBtn.style.opacity = '1';
                scrollBtn.style.transform = 'translateY(0)';
            }, 10);
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.transform = 'translateY(10px)';
            setTimeout(() => {
                if (window.scrollY <= 500) {
                    scrollBtn.style.display = 'none';
                }
            }, 300);
        }
    });

    // Smooth scroll to top
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Update current year dynamically
function updateCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Footer Links Smooth Scroll
function setupFooterLinksScroll() {
    const footerLinks = document.querySelectorAll('.footer-link[href^="#"]');
    
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Social Links - Ripple Effect on Click
function setupSocialLinksRipple() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.className = 'ripple-effect';
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// Footer Reveal Animation on Scroll
function setupFooterReveal() {
    const footer = document.querySelector('.footer');
    if (!footer) return;

    const observerOptions = {
        threshold: 0.05,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.animation = 'fadeInUp 1s ease-out forwards';
            }
        });
    }, observerOptions);

    // Observe footer sections
    const sections = footer.querySelectorAll('.footer-main, .footer-social, .footer-bottom');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.animationDelay = `${index * 0.15}s`;
        section.style.animationFillMode = 'forwards';
        observer.observe(section);
    });
}

// Parallax Effect on Footer Background
function setupFooterParallax() {
    const footer = document.querySelector('.footer');
    const footerBg = document.querySelector('.footer-bg-gradient');
    
    if (!footer || !footerBg) return;

    window.addEventListener('scroll', () => {
        const footerTop = footer.offsetTop;
        const scrollPos = window.scrollY;
        
        if (scrollPos > footerTop - window.innerHeight) {
            const offset = (scrollPos - (footerTop - window.innerHeight)) * 0.3;
            footerBg.style.transform = `translateY(${offset}px)`;
        }
    });
}

// Initialize all footer animations
document.addEventListener('DOMContentLoaded', () => {
    animateFooterStats();
    setupScrollToTop();
    updateCurrentYear();
    setupFooterLinksScroll();
    setupSocialLinksRipple();
    setupFooterReveal();
    setupFooterParallax();
});

// Add CSS for ripple effect dynamically
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .ripple-effect {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    @keyframes fadeInUp {
        0% {
            opacity: 0;
            transform: translateY(30px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes fadeOutDown {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(10px);
        }
    }
`;
document.head.appendChild(rippleStyle);

