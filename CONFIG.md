# Configuration du Portfolio

## Structure du Projet

Ce document explique l'organisation du projet portfolio de Mohamed ONIFADE.

### Fichiers

```
portfolio/
├── index.html          # Page principale (structure HTML)
├── styles.css          # Feuilles de styles (design & layout)
├── script.js           # Fonctionnalités interactives
├── README.md           # Guide d'utilisation
├── DEPLOYMENT.md       # Guide de déploiement
├── CUSTOMIZATION.md    # Guide de personnalisation
├── .gitignore          # Fichiers à ignorer dans Git
└── images/             # Dossier pour les images (optionnel)
```

## Détails des Fichiers

### index.html
- **Rôle** : Structure sémantique du site
- **Contient** : 
  - Header (navigation)
  - 6 sections : Accueil, À propos, Compétences, Projets, Contact
  - Footer
- **À personnaliser** : Textes, liens, informations personnelles

### styles.css
- **Rôle** : Mise en forme et design
- **Contient** :
  - Variables CSS (couleurs, ombres, transitions)
  - Styles pour chaque section
  - Media queries pour responsivité
  - Animations
- **À personnaliser** : Couleurs, polices, espacements

### script.js
- **Rôle** : Interactivité et fonctionnalités
- **Contient** :
  - Navigation active au scroll
  - Menu hamburger mobile
  - Formulaire de contact
  - Animations
  - Intersection Observer
- **À personnaliser** : Logique du formulaire, animations

## Sections Principales

### 1. Header/Navigation
- Nom et prénom
- Navigation sticky vers les sections
- Menu hamburger sur mobile

### 2. Accueil (Hero)
- Titre accrocheur
- Description courte
- Boutons d'appel à l'action

### 3. À Propos
- Présentation personnelle
- Cartes d'informations (Formation, Spécialité, Intérêts)

### 4. Compétences
- 6 catégories de compétences
- Cartes interactives avec listes

### 5. Projets
- Grille de 6 projets
- Descriptions et tags technologiques

### 6. Contact
- Coordonnées de contact
- Liens réseaux sociaux
- Formulaire de contact fonctionnel

### 7. Footer
- Navigation rapide
- Liens sociaux
- Copyright

## Variables CSS Principales

```css
--primary-color: #2c3e50      /* Couleur principale */
--secondary-color: #3498db    /* Couleur secondaire */
--accent-color: #e74c3c       /* Couleur d'accent */
--text-dark: #2c3e50          /* Texte foncé */
--text-light: #7f8c8d         /* Texte clair */
--bg-light: #ecf0f1           /* Fond clair */
--bg-white: #ffffff           /* Blanc */
```

## Breakpoints Responsive

```css
Desktop    : > 768px
Tablet     : 480px - 768px
Mobile     : < 480px
```

## Dépendances

### Font Awesome (icônes)
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

### Autres
- Aucune dépendance externe requise
- HTML5 pur, CSS3, JavaScript vanilla

## Performances

- 📊 **Temps de chargement** : ~1-2 secondes
- 🎨 **Taille CSS** : ~15 KB
- 📜 **Taille JS** : ~5 KB
- 🖼️ **Taille HTML** : ~8 KB

## Compatibilité Navigateurs

- ✅ Chrome (70+)
- ✅ Firefox (65+)
- ✅ Safari (12+)
- ✅ Edge (79+)
- ✅ Mobile browsers

## SEO Basics

- Structure HTML sémantique
- Titres et descriptions
- Meta tags (viewport, charset)
- Lien vers Font Awesome externe

## Accessibilité

- ✅ Contraste des couleurs adéquat
- ✅ Texte suffisamment grand
- ✅ Navigation au clavier
- ✅ Labels pour les formulaires
- ✅ Alt text sur les icônes

## Futures Améliorations Possibles

- [ ] Mode sombre
- [ ] Animations plus avancées
- [ ] Blog/Articles
- [ ] Certifications
- [ ] Téléchargement CV
- [ ] Intégration backend pour emails
- [ ] Analytics (Google Analytics)
- [ ] Service Worker (PWA)

## Commandes Utiles

### Tester localement
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js
npx http-server
```

### Commit Git
```bash
git add .
git commit -m "Message du commit"
git push origin main
```

### Déploiement
- GitHub Pages : Automatique via Git
- Netlify : Drag & drop ou GitHub integration
- Vercel : GitHub integration

## Support

Pour toute question :
1. Consultez README.md
2. Consultez CUSTOMIZATION.md
3. Consultez DEPLOYMENT.md
4. Ouvrez un issue sur GitHub
5. Contactez directement : your.email@example.com

---

**Portfolio de Mohamed ONIFADE - Master 2 Administration Réseau et Système**
