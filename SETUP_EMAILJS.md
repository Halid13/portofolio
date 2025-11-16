# 📧 Configuration EmailJS pour le Formulaire de Contact

## Étapes de Configuration

### 1️⃣ Créer un compte EmailJS (GRATUIT)

1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Cliquez sur **"Sign Up"** (Inscription gratuite)
3. Créez votre compte avec votre email
4. Confirmez votre email

---

### 2️⃣ Ajouter un Service Email

1. Une fois connecté, allez dans **"Email Services"**
2. Cliquez sur **"Add New Service"**
3. Choisissez votre fournisseur d'email :
   - **Gmail** (recommandé si vous avez Gmail)
   - Outlook
   - Yahoo
   - Ou autre

4. Pour **Gmail** :
   - Connectez votre compte Gmail : `halidonfd13@gmail.com`
   - Autorisez EmailJS à envoyer des emails
   - Notez le **Service ID** (exemple: `service_abc123`)

---

### 3️⃣ Créer un Template Email

1. Allez dans **"Email Templates"**
2. Cliquez sur **"Create New Template"**
3. Configurez votre template :

```
Sujet: Nouveau message de {{from_name}} - {{subject}}

Contenu:
Bonjour Mohamed,

Vous avez reçu un nouveau message depuis votre portfolio :

------------------------------
De : {{from_name}}
Email : {{from_email}}
Sujet : {{subject}}

Message :
{{message}}
------------------------------

Cordialement,
Système de contact du portfolio
```

4. Dans les **Settings** :
   - **To Email** : `halidonfd13@gmail.com` (votre email de réception)
   - **From Name** : `Portfolio Contact`
   - **Reply To** : `{{from_email}}`

5. Sauvegardez et notez le **Template ID** (exemple: `template_xyz789`)

---

### 4️⃣ Obtenir votre Clé Publique

1. Allez dans **"Account"** > **"General"**
2. Copiez votre **Public Key** (exemple: `abcd1234efgh5678`)

---

### 5️⃣ Configurer le Code

Ouvrez le fichier **`script.js`** et remplacez les valeurs suivantes :

```javascript
// Ligne 7 - Remplacez par votre Public Key
emailjs.init({
    publicKey: 'abcd1234efgh5678', // ⬅️ VOTRE PUBLIC KEY ICI
});

// Ligne 109 - Remplacez par votre Service ID et Template ID
emailjs.send('service_abc123', 'template_xyz789', templateParams)
           // ⬆️ SERVICE_ID    ⬆️ TEMPLATE_ID
```

**Exemple concret :**
```javascript
emailjs.init({
    publicKey: 'Xm8kL9pQ2rT5vY7w', // Votre vraie clé
});

emailjs.send('service_gmail_123', 'template_contact_456', templateParams)
```

---

### 6️⃣ Tester le Formulaire

1. Ouvrez votre portfolio dans un navigateur
2. Remplissez le formulaire de contact
3. Cliquez sur **"Envoyer le message"**
4. Vérifiez votre email `halidonfd13@gmail.com`
5. Vous devriez recevoir le message !

---

## 🎯 Configuration Avancée (Optionnel)

### Auto-réponse au visiteur

Créez un 2ème template pour envoyer une confirmation au visiteur :

```javascript
// Après l'envoi réussi, envoyez une auto-réponse
emailjs.send('VOTRE_SERVICE_ID', 'template_autoreponse', {
    to_email: email,
    to_name: name
}).then(function(response) {
    console.log('Auto-réponse envoyée', response);
});
```

Template d'auto-réponse :
```
Sujet: Message bien reçu - Mohamed ONIFADE

Bonjour {{to_name}},

Merci pour votre message ! Je l'ai bien reçu et je vous répondrai dans les plus brefs délais.

Cordialement,
Mohamed ONIFADE
Administrateur Réseau et Système
```

---

## 📊 Limite du Plan Gratuit

- **200 emails/mois** gratuits
- Largement suffisant pour un portfolio personnel
- Passez au plan payant si besoin de plus

---

## 🔒 Sécurité

✅ **EmailJS est sécurisé** :
- Votre mot de passe Gmail n'est JAMAIS exposé
- La clé publique peut être visible (elle est publique)
- Les emails sont envoyés via les serveurs EmailJS
- Protection anti-spam intégrée

---

## ❓ Problèmes Courants

### Le formulaire ne s'envoie pas ?
1. Vérifiez la console du navigateur (F12)
2. Assurez-vous d'avoir remplacé TOUTES les clés
3. Vérifiez que EmailJS est bien initialisé
4. Testez avec un email différent

### Je ne reçois pas les emails ?
1. Vérifiez vos **spams**
2. Vérifiez que l'email de destination est correct dans le template
3. Vérifiez que le service Gmail est bien connecté

### Erreur CORS ?
- EmailJS gère automatiquement CORS, pas de problème normalement
- Si erreur, vérifiez que le domaine est autorisé dans EmailJS

---

## 📞 Support

- Documentation : [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- Support : [https://www.emailjs.com/support/](https://www.emailjs.com/support/)

---

## ✅ Checklist Finale

- [ ] Compte EmailJS créé
- [ ] Service Gmail connecté
- [ ] Template email créé
- [ ] Public Key récupérée
- [ ] Service ID noté
- [ ] Template ID noté
- [ ] `script.js` mis à jour avec les 3 valeurs
- [ ] Test réussi : email reçu ✉️

---

**Bon courage ! Une fois configuré, votre formulaire enverra de vrais emails automatiquement ! 🚀**
