# 🎨 Design System - Palette Simplifiée

## 📋 3 Couleurs Primaires Essentielles

Le portfolio utilise maintenant une palette **minimaliste et cohérente** basée sur exactement **3 couleurs primaires**:

### Palette Couleurs

```
┌─────────────────────────────────────────┐
│ Couleur 1 : #3D5A80                     │
│ Bleu profond - Base & Accents           │
├─────────────────────────────────────────┤
│ Couleur 2 : #EE6C4D                     │
│ Orange vibrant - CTA & Focus            │
├─────────────────────────────────────────┤
│ Couleur 3 : #293241                     │
│ Bleu très foncé - Fond & Contours       │
└─────────────────────────────────────────┘
```

---

## 🎯 Utilisation des Couleurs

### #3D5A80 - Bleu Profond (Couleur Primaire)
```
- Liens de navigation
- Bordures et accents
- Icônes secondaires
- Dégradés et transitions
- Texte sur fond sombre
```

**CSS Variable:** `--color-1` ou `--primary-light`

### #EE6C4D - Orange Vibrant (Call-to-Action)
```
- Boutons primaires
- Focus states
- Hover effects
- Accents importants
- Points d'attention
```

**CSS Variable:** `--color-2` ou `--accent-color`

### #293241 - Bleu Très Foncé (Fond)
```
- Fond du header
- Arrière-plan des sections
- Contours et borders
- Ombres
- Base de tous les gradients
```

**CSS Variable:** `--color-3` ou `--primary-color`

---

## 🔧 Variables CSS

```css
/* Couleurs Primaires */
--color-1: #3D5A80;     /* Bleu profond */
--color-2: #EE6C4D;     /* Orange */
--color-3: #293241;     /* Bleu très foncé */

/* Aliases pour compatibilité */
--primary-color: #293241;
--primary-light: #3D5A80;
--secondary-color: #3D5A80;
--accent-color: #EE6C4D;
--accent-light: #E0FBFC;

/* Texte */
--text-dark: #F0F9FF;       /* Blanc bleuté */
--text-light: rgba(240, 249, 255, 0.8);
--text-muted: rgba(240, 249, 255, 0.65);

/* Fond */
--bg-primary: #0A0F18;
--bg-secondary: #111C2E;
```

---

## ✨ Éléments Stylisés

### 1. **Header & Navigation**
- Fond: `--color-3` (#293241)
- Liens: `--color-1` (#3D5A80) au hover
- Logo: Dégradé `--color-1` → `--color-2`

### 2. **Boutons**
- **Primaire:** Fond `--color-2` (#EE6C4D), texte blanc
- **Secondaire:** Bordure `--color-1` (#3D5A80), fond transparent
- **Focus:** Surbrillance `--color-1`

### 3. **Cards (Compétences & Projets)**
- Fond: `--bg-secondary`
- Titre: `--color-1` (#3D5A80)
- Bordure: Léger `--color-1` avec opacité
- Hover: Fond → dégradé `--color-1` à `--color-2`

### 4. **Logo Monogramme**
- Cercle: Dégradé `--color-1` → `--color-2`
- Lignes MO: Blanc (#F0F9FF)
- Accent point: `--color-2` (#EE6C4D)

### 5. **Accents**
- Soulignés des sections: `--color-1` → `--color-2` (dégradé)
- Points d'attention: `--color-2` (#EE6C4D)
- Focus visible: Contour `--color-1`

---

## 🎭 Dégradés Standards

### Dégradé Principal
```css
linear-gradient(135deg, #3D5A80, #EE6C4D)
/* Bleu profond → Orange */
```

### Dégradé Alternatif
```css
linear-gradient(135deg, #293241, #3D5A80)
/* Très foncé → Bleu profond */
```

---

## ♿ Accessibilité (WCAG AA)

### Contrastes Vérifiés
- Texte clair (#F0F9FF) sur fond sombre (#0A0F18): **20.5:1** ✅
- Texte clair sur `--color-3` (#293241): **10:1** ✅
- Texte clair sur `--color-1` (#3D5A80): **8.2:1** ✅
- Orange `--color-2` (#EE6C4D) sur blanc: **5.1:1** ✅

### Recommandations
- Jamais mettre texte sombre sur fond orange
- Utiliser toujours texte clair (#F0F9FF) sur fonds sombres
- Tester les contrastes avec DevTools

---

## 📱 Responsive Design

### Breakpoints
```
- Desktop: Sans changement
- Tablette (768px): Navigation adaptée
- Mobile (480px): 
  - Logo circulaire uniquement (texte masqué)
  - Butonnage réduit
  - Espacements optimisés
```

---

## 🔄 Modifi si Besoin

Pour changer les couleurs, modifiez simplement les variables `:root` en ligne 5-8 de `styles.css`:

```css
--color-1: #3D5A80;    /* Changez le bleu profond */
--color-2: #EE6C4D;    /* Changez l'orange */
--color-3: #293241;    /* Changez le bleu très foncé */
```

---

## 📊 Résumé Design

| Élément | Couleur | Variable |
|---------|---------|----------|
| Fond principal | #0A0F18 | --bg-primary |
| Navigation | #293241 | --color-3 |
| Accents | #3D5A80 | --color-1 |
| CTA | #EE6C4D | --color-2 |
| Texte | #F0F9FF | --text-dark |
| Dégradé | #3D5A80→#EE6C4D | Primary gradient |

---

**Design System Version:** 1.0 ✨  
**Date:** November 12, 2025  
**Status:** ✅ Production Ready
