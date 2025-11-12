// ========================================
// CONSTELLATION SIMPLE (points + lignes)
// ========================================

class Constellation {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');

        // Paramètres simplifiés et doux
        this.numParticles = 70;         // Moins de particules
        this.maxDistance = 110;         // Connexions plus courtes
        this.mouse = { x: null, y: null, radius: 120 }; // Zone d'influence réduite

        this.particles = [];

        this.init();
        this.setupEventListeners();
        this.animate();
    }

    init() {
        this.resizeCanvas();
        this.createParticles();
    }

    resizeCanvas() {
        // Utiliser les dimensions réelles de l’élément pour s’adapter au layout
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
    }

    createParticles() {
        this.particles = [];
        for (let i = 0; i < this.numParticles; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.3, // Mouvement lent et fluide
                vy: (Math.random() - 0.5) * 0.3,
                radius: 1 + Math.random() * 1.5, // Petits points discrets
                opacity: 0.55 + Math.random() * 0.35 // Légère variation d’opacité
            });
        }
    }

    setupEventListeners() {
        window.addEventListener('resize', () => {
            this.resizeCanvas();
            this.createParticles();
        });

        this.canvas.addEventListener('mousemove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            this.mouse.x = e.clientX - rect.left;
            this.mouse.y = e.clientY - rect.top;
        });

        this.canvas.addEventListener('mouseleave', () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });
    }

    updateParticles() {
        for (const p of this.particles) {
            // Déplacement de base
            p.x += p.vx;
            p.y += p.vy;

            // Rebond sur les bords
            if (p.x <= 0 || p.x >= this.canvas.width) p.vx *= -1;
            if (p.y <= 0 || p.y >= this.canvas.height) p.vy *= -1;

            // Interaction souris légère (répulsion douce)
            if (this.mouse.x !== null && this.mouse.y !== null) {
                const dx = this.mouse.x - p.x;
                const dy = this.mouse.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < this.mouse.radius) {
                    const force = (this.mouse.radius - dist) / this.mouse.radius; // 0..1
                    const angle = Math.atan2(dy, dx);
                    p.vx -= Math.cos(angle) * force * 0.4;
                    p.vy -= Math.sin(angle) * force * 0.4;
                }
            }

            // Légère friction pour lisser les mouvements
            p.vx *= 0.99;
            p.vy *= 0.99;
        }
    }

    drawParticles() {
        for (const p of this.particles) {
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            // Couleur en accord avec l’accent (#3D5A80) mais adoucie par l’opacité
            this.ctx.fillStyle = `rgba(61, 90, 128, ${p.opacity})`;
            this.ctx.fill();
        }
    }

    connectParticles() {
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const a = this.particles[i];
                const b = this.particles[j];
                const dx = a.x - b.x;
                const dy = a.y - b.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < this.maxDistance) {
                    const opacity = (1 - dist / this.maxDistance) * 0.35; // Lignes discrètes
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = `rgba(63, 108, 168, ${opacity})`; // proche de #3F6CA8
                    this.ctx.lineWidth = 0.7;
                    this.ctx.moveTo(a.x, a.y);
                    this.ctx.lineTo(b.x, b.y);
                    this.ctx.stroke();
                }
            }
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.updateParticles();
        this.connectParticles();
        this.drawParticles();

        requestAnimationFrame(() => this.animate());
    }
}

// Initialisation au chargement
document.addEventListener('DOMContentLoaded', () => {
    new Constellation('constellation-canvas');
});
// ========================================
// CONSTELLATION INTERACTIVE AVEC ICÔNES TECH
// ========================================

class Constellation {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
    this.mouse = { x: null, y: null, radius: 150 };
    this.numParticles = 60;
    this.maxDistance = 120;
        this.scrollY = 0;
        
        // Icônes tech/réseau en Unicode
        this.techIcons = [
            '🖥️', '🌐', '☁️', '💾', '🔒', '⚙️', 
            '📡', '🛡️', '🔗', '💻', '🖧', '📊'
        ];
        
        this.init();
        this.setupEventListeners();
        this.animate();
    }
    
    init() {
        this.resizeCanvas();
        this.createParticles();
    }
    
    resizeCanvas() {
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
    }
    
    createParticles() {
        this.particles = [];
        for (let i = 0; i < this.numParticles; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 12 + 16,
                icon: this.techIcons[Math.floor(Math.random() * this.techIcons.length)],
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 0.8,
                scale: 1,
                opacity: 0.6 + Math.random() * 0.3,
                originalX: 0,
                originalY: 0,
                hue: Math.random() * 60 + 200 // Bleu/cyan
            });
            this.particles[i].originalX = this.particles[i].x;
            this.particles[i].originalY = this.particles[i].y;
        }
    }
    
    setupEventListeners() {
        window.addEventListener('resize', () => {
            this.resizeCanvas();
            this.createParticles();
        });
        
        // Suivi de la souris
        this.canvas.addEventListener('mousemove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            this.mouse.x = e.clientX - rect.left;
            this.mouse.y = e.clientY - rect.top;
        });
        
        this.canvas.addEventListener('mouseleave', () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });
        
        // Parallax au scroll
        window.addEventListener('scroll', () => {
            this.scrollY = window.scrollY;
        });
    }
    
    drawParticle(particle) {
        this.ctx.save();
        
        // Position et rotation
        this.ctx.translate(particle.x, particle.y);
        this.ctx.rotate((particle.rotation * Math.PI) / 180);
        this.ctx.scale(particle.scale, particle.scale);
        
        // Effet blur si proche de la souris
        if (this.mouse.x !== null) {
            const dx = this.mouse.x - particle.x;
            const dy = this.mouse.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < this.mouse.radius) {
                const blurAmount = ((this.mouse.radius - distance) / this.mouse.radius) * 3;
                this.ctx.filter = `blur(${blurAmount}px)`;
            }
        }
        
        // Dessiner l'icône
        this.ctx.font = `${particle.size}px Arial`;
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.globalAlpha = particle.opacity;
        
        // Ombre portée
        this.ctx.shadowBlur = 8;
        this.ctx.shadowColor = `hsla(${particle.hue}, 70%, 50%, 0.5)`;
        this.ctx.shadowOffsetX = 2;
        this.ctx.shadowOffsetY = 2;
        
        this.ctx.fillText(particle.icon, 0, 0);
        
        this.ctx.restore();
    }
    
    connectParticles() {
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < this.maxDistance) {
                    const opacity = (1 - distance / this.maxDistance) * 0.3;
                    
                    // Gradient de ligne
                    const gradient = this.ctx.createLinearGradient(
                        this.particles[i].x, this.particles[i].y,
                        this.particles[j].x, this.particles[j].y
                    );
                    gradient.addColorStop(0, `hsla(${this.particles[i].hue}, 70%, 50%, ${opacity})`);
                    gradient.addColorStop(1, `hsla(${this.particles[j].hue}, 70%, 50%, ${opacity})`);
                    
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = gradient;
                    this.ctx.lineWidth = 0.8;
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                }
            }
        }
    }
    
    updateParticles() {
        this.particles.forEach(particle => {
            // Rotation continue
            particle.rotation += particle.rotationSpeed;
            
            // Mouvement de base
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Rebond sur les bords
            if (particle.x < 0 || particle.x > this.canvas.width) {
                particle.vx *= -1;
            }
            if (particle.y < 0 || particle.y > this.canvas.height) {
                particle.vy *= -1;
            }
            
            // Interaction avec la souris (plus forte et réactive)
            if (this.mouse.x !== null && this.mouse.y !== null) {
                const dx = this.mouse.x - particle.x;
                const dy = this.mouse.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < this.mouse.radius) {
                    const force = (this.mouse.radius - distance) / this.mouse.radius;
                    const angle = Math.atan2(dy, dx);
                    
                    // Repousser les particules plus fort
                    particle.x -= Math.cos(angle) * force * 3.5;
                    particle.y -= Math.sin(angle) * force * 3.5;
                    
                    // Rotation rapide au survol
                    particle.rotationSpeed += force * 1.2;
                    
                    // Scale up au survol
                    particle.scale = 1 + force * 0.35;
                    
                    // Augmenter opacité
                    particle.opacity = Math.min(1, 0.6 + force * 0.25);
                } else {
                    // Retour à la normale
                    particle.scale += (1 - particle.scale) * 0.15;
                    particle.opacity += (0.7 - particle.opacity) * 0.08;
                    particle.rotationSpeed *= 0.97;
                }
            }
            
            // Effet parallax 3D au scroll
            const parallaxFactor = 0.05;
            const scrollOffset = this.scrollY * parallaxFactor;
            particle.y -= scrollOffset * 0.02;
            
            // Effet 3D: scale basé sur la profondeur simulée
            const depthFactor = (particle.originalY / this.canvas.height) * 0.3;
            const baseScale = 0.8 + depthFactor;
            
            // Retour doux vers position d'origine
            const returnSpeed = 0.03;
            particle.x += (particle.originalX - particle.x) * returnSpeed;
            particle.y += (particle.originalY - particle.y) * returnSpeed;
        });
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.updateParticles();
        this.connectParticles();
        
        this.particles.forEach(particle => {
            this.drawParticle(particle);
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Initialisation au chargement
document.addEventListener('DOMContentLoaded', () => {
    new Constellation('constellation-canvas');
});
