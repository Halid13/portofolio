# 🎨 Guide de Personnalisation - Portfolio

## Table des matières
1. [Changer les couleurs](#couleurs)
2. [Modifier le contenu](#contenu)
3. [Ajouter des sections](#sections)
4. [Personnaliser la typographie](#typographie)
5. [Ajouter des icônes](#icones)
6. [Configurer le formulaire](#formulaire)
7. [Thème personnalisé](#theme)

---

## 🎨 Changer les Couleurs {#couleurs}

### Variables CSS principales

Ouvrez `styles.css` et modifiez les variables au début :

```css
:root {
    /* Couleurs principales */
    --primary-color: #2c3e50;        /* Bleu-gris foncé (header, footer) */
    --secondary-color: #3498db;      /* Bleu ciel (boutons, accents) */
    --accent-color: #e74c3c;         /* Rouge (highlights) */
    --success-color: #27ae60;        /* Vert (success messages) */
    
    /* Textes et fond */
    --text-dark: #2c3e50;            /* Texte foncé */
    --text-light: #7f8c8d;           /* Texte clair */
    --bg-light: #ecf0f1;             /* Fond clair */
    --bg-white: #ffffff;             /* Blanc */
    --border-color: #bdc3c7;         /* Couleur des bordures */
    
    /* Ombres et transitions */
    --shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    --shadow-hover: 0 5px 20px rgba(0, 0, 0, 0.15);
    --transition: all 0.3s ease;
}
```

### Palettes de couleurs pré-faites

#### Palette 1 : Professional Blue
```css
--primary-color: #1e3a8a;
--secondary-color: #3b82f6;
--accent-color: #f59e0b;
```

#### Palette 2 : Dark Modern
```css
--primary-color: #1a1a2e;
--secondary-color: #16213e;
--accent-color: #0f3460;
```

#### Palette 3 : Vibrant Green
```css
--primary-color: #134e5e;
--secondary-color: #28a745;
--accent-color: #ffc107;
```

#### Palette 4 : Purple Tech
```css
--primary-color: #6c3483;
--secondary-color: #9b59b6;
--accent-color: #3498db;
```

---

## ✏️ Modifier le Contenu {#contenu}

### Votre Nom et Titre

Ouvrez `index.html` et cherchez :

```html
<div class="logo">
    <h1>Mohamed ONIFADE</h1>
    <p class="subtitle">Master 2 - Administration Réseau et Système</p>
</div>
```

Modifiez avec vos informations.

### Section Héro (Accueil)

```html
<section id="accueil" class="hero">
    <div class="container">
        <div class="hero-content">
            <h2>Bienvenue sur mon Portfolio</h2>
            <p>Je suis Mohamed ONIFADE, étudiant en Master 2 Administration...</p>
            <!-- Modifiez ce texte -->
        </div>
    </div>
</section>
```

### Section À Propos

```html
<section id="apropos" class="about">
    <!-- Modifiez le texte de description -->
    <p>Je suis actuellement en Master 2...</p>
    
    <!-- Modifiez les cartes d'info -->
    <div class="info-item">
        <i class="fas fa-graduation-cap"></i>
        <h3>Formation</h3>
        <p>Master 2 Administration Réseau et Système</p>
    </div>
</section>
```

### Ajouter/Modifier les Compétences

```html
<div class="skill-card">
    <i class="fas fa-server"></i>  <!-- Changez l'icône -->
    <h3>Administration Système</h3>  <!-- Titre -->
    <ul>
        <li>Linux (Ubuntu, CentOS, Debian)</li>
        <li>Windows Server</li>
        <!-- Ajoutez/modifiez les compétences -->
    </ul>
</div>
```

### Modifier/Ajouter des Projets

```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-server"></i>  <!-- Icône du projet -->
    </div>
    <div class="project-content">
        <h3>Titre du Projet</h3>
        <p>Description du projet...</p>
        <div class="project-tags">
            <span class="tag">Tag1</span>
            <span class="tag">Tag2</span>
        </div>
    </div>
</div>
```

### Informations de Contact

```html
<!-- Email -->
<a href="mailto:your.email@example.com">your.email@example.com</a>

<!-- Téléphone -->
<a href="tel:+33612345678">+33 6 12 34 56 78</a>

<!-- LinkedIn -->
<a href="https://linkedin.com/in/votre-profil" target="_blank">Mon profil LinkedIn</a>

<!-- GitHub -->
<a href="https://github.com/Halid13" target="_blank">Mon GitHub</a>
```

---

## ➕ Ajouter des Sections {#sections}

### Template d'une nouvelle section

```html
<!-- Section Template -->
<section id="section-id" class="section-name">
    <div class="container">
        <h2 class="section-title">Titre de la Section</h2>
        <!-- Contenu ici -->
    </div>
</section>
```

### CSS pour la section

```css
.section-name {
    padding: 100px 0;
    background-color: white;
}

.section-name h3 {
    color: var(--primary-color);
}
```

### Ajouter au menu de navigation

Modifiez `index.html` :

```html
<nav class="nav">
    <a href="#accueil" class="nav-link">Accueil</a>
    <a href="#nouvelle-section" class="nav-link">Nouvelle Section</a>
    <!-- ... autres liens ... -->
</nav>
```

---

## 🔤 Personnaliser la Typographie {#typographie}

### Changer la police

Ouvrez `styles.css` :

```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    /* Changez avec */
    font-family: 'Arial', sans-serif;
    font-family: 'Georgia', serif;
    font-family: 'Comic Sans MS', cursive;
}
```

### Utiliser Google Fonts

1. Allez sur https://fonts.google.com
2. Sélectionnez une police
3. Copiez le lien d'import
4. Ajoutez dans `<head>` du HTML :

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
```

5. Utilisez dans le CSS :

```css
body {
    font-family: 'Poppins', sans-serif;
}
```

### Tailles de police

Modifiez dans `styles.css` :

```css
h1 {
    font-size: 28px;  /* Changez cette valeur */
}

h2 {
    font-size: 42px;  /* Titres des sections */
}

p {
    font-size: 16px;  /* Paragraphes */
}
```

---

## 🎯 Ajouter des Icônes {#icones}

### Bibliothèque : Font Awesome

Les icônes utilisées proviennent de Font Awesome (déjà inclus dans `index.html`).

### Comment utiliser les icônes

```html
<i class="fas fa-server"></i>        <!-- Icône pleine -->
<i class="far fa-heart"></i>         <!-- Icône vide -->
<i class="fab fa-github"></i>        <!-- Logo de marque -->
```

### Trouver des icônes

1. Allez sur https://fontawesome.com/icons
2. Cherchez l'icône que vous voulez
3. Copiez le code HTML
4. Collez dans votre portfolio

### Exemples d'icônes utiles pour votre domaine

```html
<!-- Système -->
<i class="fas fa-server"></i>           <!-- Serveur -->
<i class="fas fa-laptop"></i>           <!-- Ordinateur -->
<i class="fas fa-network-wired"></i>   <!-- Réseau -->
<i class="fas fa-database"></i>        <!-- Base de données -->

<!-- Cloud & DevOps -->
<i class="fas fa-cloud"></i>           <!-- Cloud -->
<i class="fas fa-docker"></i>          <!-- Docker (logo) -->
<i class="fab fa-docker"></i>          <!-- Docker (logo de marque) -->

<!-- Sécurité -->
<i class="fas fa-lock"></i>            <!-- Verrou -->
<i class="fas fa-shield-alt"></i>      <!-- Bouclier -->

<!-- Programmation -->
<i class="fas fa-code"></i>            <!-- Code -->
<i class="fab fa-linux"></i>           <!-- Linux -->
<i class="fab fa-python"></i>          <!-- Python -->

<!-- Général -->
<i class="fas fa-check"></i>           <!-- Checkmark -->
<i class="fas fa-rocket"></i>          <!-- Fusée -->
<i class="fas fa-star"></i>            <!-- Étoile -->
<i class="fas fa-heart"></i>           <!-- Cœur -->
```

---

## 📧 Configurer le Formulaire {#formulaire}

### Validator les emails avec Formspree

1. Allez sur https://formspree.io
2. Inscrivez-vous
3. Créez un formulaire
4. Copiez l'action du formulaire
5. Modifiez `index.html` :

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <!-- Vos champs -->
</form>
```

### Avec EmailJS

1. Allez sur https://www.emailjs.com
2. Inscrivez-vous
3. Configurez votre email
4. Copiez le script dans `script.js` :

```javascript
// Configuration EmailJS
emailjs.init("PUBLIC_KEY");

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', this)
        .then(() => {
            alert("Message envoyé avec succès!");
            this.reset();
        });
});
```

### Avec Firebase

Consultez : https://firebase.google.com

---

## 🎨 Créer un Thème Personnalisé {#theme}

### Exemple : Thème Dark Mode

Ajoutez au CSS :

```css
@media (prefers-color-scheme: dark) {
    :root {
        --primary-color: #f0f0f0;
        --secondary-color: #4fc3f7;
        --text-dark: #ffffff;
        --bg-white: #1e1e1e;
        --bg-light: #2d2d2d;
    }
}
```

### Exemple : Thème Tech Minimal

```css
:root {
    --primary-color: #0a0e27;
    --secondary-color: #00d4ff;
    --accent-color: #ff006e;
    --text-dark: #f0f0f0;
    --bg-light: #0f1419;
}
```

### Exemple : Thème Startup Coloré

```css
:root {
    --primary-color: #ff6b6b;
    --secondary-color: #4ecdc4;
    --accent-color: #45b7d1;
    --text-dark: #2d3436;
    --bg-light: #f8f9fa;
}
```

---

## 🖼️ Ajouter une Photo de Profil

### Créer un dossier images

```
portfolio/
├── index.html
├── styles.css
├── script.js
└── images/
    └── profile.jpg
```

### Ajouter la photo

Modifiez le header :

```html
<div class="logo">
    <img src="images/profile.jpg" alt="Mohamed ONIFADE" class="profile-img">
    <h1>Mohamed ONIFADE</h1>
    <p class="subtitle">Master 2 - Administration Réseau et Système</p>
</div>
```

### CSS pour la photo

```css
.profile-img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
    border: 3px solid var(--secondary-color);
}
```

---

## 🎯 Conseils de Personnalisation

✅ **À faire :**
- Soyez cohérent dans le design
- Utilisez max 3 couleurs principales
- Gardez la lisibilité
- Testez sur mobile
- Mettez à jour régulièrement

❌ **À éviter :**
- Trop de couleurs différentes
- Polices non lisibles
- Animations trop lentes
- Contenu mal structuré
- Informations dépassées

---

## 📞 Besoin d'aide ?

- Consultez la documentation Font Awesome : https://fontawesome.com/docs
- MDN Web Docs : https://developer.mozilla.org
- Créez un issue sur GitHub

**Amusez-vous à personnaliser ! 🎨**
