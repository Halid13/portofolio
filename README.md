# Portfolio - Mohamed ONIFADE
## Master 2 - Administration Réseau et Système

---

## 📋 Description

Bienvenue sur le portfolio professionnel de Mohamed ONIFADE. Ce portfolio a été créé pour présenter les compétences, projets et expériences dans le domaine de l'Administration Réseau et Système.

---

## 📁 Structure du Projet

```
portfolio/
├── index.html          # Page HTML principale
├── styles.css          # Feuille de styles (CSS)
├── script.js           # Fichier JavaScript pour l'interactivité
└── README.md           # Ce fichier
```

---

## ✨ Fonctionnalités

### 🎨 Design Responsive
- Parfaitement adapté à tous les écrans (mobile, tablette, desktop)
- Navigation intuitive avec menu hamburger sur mobile
- Animations fluides et transitions élégantes

### 📑 Sections Principales

1. **Header (En-tête)**
   - Nom et prénom : Mohamed ONIFADE
   - Sous-titre : Master 2 - Administration Réseau et Système
   - Navigation sticky avec liens vers toutes les sections

2. **Accueil (Hero)**
   - Section d'accueil avec présentation professionnelle
   - Boutons d'appel à l'action vers Contact et Projets

3. **À propos**
   - Présentation personnelle et professionnelle
   - Informations structurées (Formation, Spécialité, Intérêts)
   - Cartes d'information avec icônes

4. **Compétences**
   - 6 catégories de compétences :
     - Administration Système
     - Administration Réseau
     - Cloud & Virtualisation
     - Outils & Technologies
     - Sécurité Informatique
     - Programmation
   - Cartes interactives avec hoover effect

5. **Projets**
   - Portfolio de 6 projets avec descriptions
   - Tags pour identifier les technologies utilisées
   - Cartes cliquables et animées

6. **Contact**
   - Informations de contact (Email, Téléphone, etc.)
   - Formulaire de contact fonctionnel
   - Liens vers les réseaux sociaux (LinkedIn, GitHub, Twitter)

7. **Footer**
   - Navigation rapide
   - Liens vers les réseaux sociaux
   - Copyright et informations

---

## 🚀 Comment Utiliser

### Installation

1. **Cloner le projet**
   ```bash
   git clone https://github.com/Halid13/portofolio.git
   cd portfolio
   ```

2. **Ouvrir le portfolio**
   - Ouvrez simplement le fichier `index.html` dans un navigateur web
   - Ou utilisez un serveur local (Python, Node.js, etc.)

### Avec Python (serveur local)
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Ensuite, ouvrez votre navigateur et allez à : `http://localhost:8000`

### Avec Node.js (http-server)
```bash
npm install -g http-server
http-server
```

---

## 🎨 Personnalisation

### Modifier les Couleurs
Ouvrez `styles.css` et modifiez les variables CSS au début du fichier :

```css
:root {
    --primary-color: #2c3e50;           /* Couleur primaire */
    --secondary-color: #3498db;         /* Couleur secondaire */
    --accent-color: #e74c3c;            /* Couleur d'accent */
    /* ... autres couleurs ... */
}
```

### Modifier les Informations Personnelles
Ouvrez `index.html` et mettez à jour :

1. **Header**
   - Nom et prénom dans `.logo h1`
   - Sous-titre dans `.subtitle`

2. **Section Contact**
   - Email : `your.email@example.com`
   - Téléphone : `+33 6 12 34 56 78`
   - Liens LinkedIn et GitHub

3. **Projets**
   - Modifiez les descriptions et technologies
   - Ajoutez ou supprimez des projets

### Ajouter des Projets Supplémentaires
Duplicate une section `.project-card` dans la section `#projets` et mettez à jour :

```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-[icon]"></i>
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

---

## 🔧 Technologies Utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Styling et animations
- **JavaScript** : Interactivité et fonctionnalités
- **Font Awesome** : Icônes professionnelles
- **Responsive Design** : Mobile-first approach

---

## 📱 Responsivité

Le portfolio est optimisé pour tous les appareils :

- 📱 **Mobile** : < 480px
- 📱 **Tablette** : 480px - 768px
- 🖥️ **Desktop** : > 768px

---

## 🔗 Fonctionnalités JavaScript

### Navigation Active
- Mise en évidence automatique du lien actif lors du scroll
- Smooth scroll vers les sections

### Menu Hamburger
- Apparaît automatiquement sur mobile (< 768px)
- Menu responsive et ergonomique

### Formulaire de Contact
- Validation des champs
- Validation du format email
- Message de confirmation

### Animations
- Animations au chargement (slideInUp, fadeIn)
- Intersection Observer pour animations au scroll
- Hoover effects sur les cartes

---

## 📞 Formulaire de Contact

Le formulaire de contact inclut :
- Validation côté client
- Vérification des champs obligatoires
- Vérification du format email

**Note** : Pour que le formulaire envoie réellement les emails, vous devez configurer :
- Un backend (Node.js, Python, PHP, etc.)
- Ou utiliser un service tiers comme :
  - EmailJS
  - Formspree
  - Netlify Forms
  - Firebase

Exemple avec Formspree :
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <!-- Votre formulaire -->
</form>
```

---

## 🌐 Déploiement

### Sur GitHub Pages
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

Puis allez dans les paramètres du dépôt, Section GitHub Pages, et sélectionnez "main branch".

### Sur Netlify
1. Connectez-vous à Netlify
2. Cliquez sur "New site from Git"
3. Connectez votre dépôt GitHub
4. Déploiement automatique à chaque push

### Sur Vercel
1. Connectez-vous à Vercel
2. Cliquez sur "New Project"
3. Importez votre dépôt GitHub
4. Déploiement instantané

---

## 📝 À Faire / Améliorations Possibles

- [ ] Ajouter plus de projets réels
- [ ] Intégrer un service d'envoi d'emails
- [ ] Ajouter des certifications
- [ ] Créer une page de blog
- [ ] Ajouter des statistiques/graphiques de compétences
- [ ] Mode sombre/clair
- [ ] Animations plus avancées
- [ ] Intégration avec des APIs externes

---

## 📄 Licence

Ce projet est sous licence libre. Vous êtes libre de l'utiliser, le modifier et le distribuer.

---

## 👤 Auteur

**Mohamed ONIFADE**
- Master 2 - Administration Réseau et Système
- Email : your.email@example.com
- LinkedIn : [Votre profil](https://linkedin.com)
- GitHub : [Votre profil](https://github.com)

---

## 📧 Support

Pour toute question ou suggestion concernant le portfolio, n'hésitez pas à me contacter via le formulaire de contact ou directement par email.

---

**Merci de visiter mon portfolio ! 🚀**
