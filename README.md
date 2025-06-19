# 🤖 Chatbot IA - Assistant Intelligent

Une Progressive Web App (PWA) moderne qui implémente un chatbot intelligent avec mémoire conversationnelle, connecté à n8n pour l'orchestration des workflows d'IA.

## ✨ Fonctionnalités

- **Interface Moderne** : Design responsive avec dégradés et animations fluides
- **PWA Complète** : Installation possible sur mobile et desktop
- **Mémoire Conversationnelle** : Sessions persistantes avec gestion de l'historique
- **Connexion n8n** : Intégration webhook pour traitement IA avancé
- **Gestion d'Erreurs** : Système de retry automatique et reconnexion
- **Indicateurs Visuels** : Status de connexion et indicateurs de frappe

## 🚀 Installation & Utilisation

### Méthode 1 : Utilisation directe

1. Ouvrez `chatbot.html` dans votre navigateur
2. L'application se connecte automatiquement au webhook n8n configuré
3. Commencez à converser avec l'assistant IA

### Méthode 2 : Serveur local

```bash
# Avec Python
python -m http.server 8000

# Avec Node.js (si http-server est installé)
npx http-server

# Avec PHP
php -S localhost:8000
```

Puis accédez à `http://localhost:8000/chatbot.html`

## ⚙️ Configuration

### Webhook n8n

Modifiez l'URL du webhook dans `chatbot.html` :

```javascript
const WEBHOOK_URL = "https://votre-domaine.com/webhook/chatbot-ai";
```

### Structure des données attendues

```json
{
  "message": "Question utilisateur",
  "timestamp": "2024-01-01T12:00:00.000Z",
  "user_id": "user_1234567890",
  "session_id": "session_1234567890_abcdef"
}
```

### Réponse attendue de n8n

```json
{
  "response": "Réponse de l'IA",
  "session_id": "session_1234567890_abcdef"
}
```

## 🏗️ Architecture

```
chatbot/
├── chatbot.html      # Application principale PWA
├── manifest.json     # Configuration PWA
├── sw.js            # Service Worker pour cache
├── .gitignore       # Exclusions Git
└── README.md        # Documentation
```

## 📱 Fonctionnalités PWA

- **Installation** : Ajout à l'écran d'accueil
- **Mode Hors-ligne** : Cache des ressources statiques
- **Design Responsive** : Optimisé mobile et desktop
- **Icônes Adaptatives** : Support des différentes tailles d'écran

## 🔧 Développement

### Structure du Code

- **HTML/CSS** : Interface utilisateur moderne avec Flexbox
- **JavaScript Vanilla** : Logique côté client sans framework
- **Service Worker** : Gestion du cache et mode hors-ligne
- **Manifest PWA** : Configuration de l'application progressive

### Fonctionnalités Techniques

- Gestion de sessions avec IDs uniques
- Timeout de requêtes configurables (30s)
- Reconnexion automatique toutes les 30s
- Nettoyage automatique des réponses JSON
- Animation CSS fluides et modernes

## 🌐 Déploiement

### GitHub Pages

1. Activez GitHub Pages dans les paramètres du repository
2. Sélectionnez la branche `main` comme source
3. L'application sera accessible via `https://username.github.io/chatbotia/chatbot.html`

### Autres Plateformes

- **Netlify** : Glissez-déposez le dossier
- **Vercel** : Connexion directe avec GitHub
- **Firebase Hosting** : `firebase deploy`

## 🔗 Intégration n8n

### Configuration Webhook

1. Créez un nouveau workflow n8n
2. Ajoutez un nœud Webhook avec l'URL configurée
3. Connectez votre service d'IA (OpenAI, Claude, etc.)
4. Assurez-vous de retourner la structure JSON attendue

### Exemple de Workflow n8n

```
Webhook → IA Service → Format Response → Return
```

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📞 Support

Pour toute question ou problème, ouvrez une issue sur GitHub.

---

Made with ❤️ by [16ze](https://github.com/16ze)
