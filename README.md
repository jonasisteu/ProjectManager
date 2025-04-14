# 🗂️ Project Manager

Bienvenue dans **Project Manager**, une application API REST complète (full-stack) qui permet une interaction fluide entre les **projets** et les **catégories**.

## ✨ Fonctionnalités

- **Création et Gestion de Projets** : Ajoutez de nouveaux projets et assignez-les à plusieurs catégories.
- **Gestion des Catégories** : Créez et modifiez des catégories, avec une visibilité sur tous les projets associés.
- **Fonctionnalités CRUD** : Effectuez les opérations de Création, Lecture (Read), Mise à jour (Update) et Suppression (Delete) pour les deux entités.

---

## 🛠️ Installation

### 1. Cloner ou Télécharger le Projet
- Clonez ce dépôt :
  ```bash
  git clone [https://github.com/jonasisteu/ProjectManager.git](https://github.com/jonasisteu/ProjectManager.git)
  ```
  **OU**
- Téléchargez le fichier `.zip` et extrayez-le dans le dossier de votre choix.

### 2. Installer les Dépendances
- Ouvrez votre terminal et naviguez jusqu'au dossier **ProjectManager**.
- Assurez-vous que **Node.js** est installé sur votre ordinateur, puis installez les dépendances du back-end :
  ```bash
  npm install
  ```
- Naviguez vers le dossier `client` et installez les dépendances du front-end :
  ```bash
  cd client
  npm install
  ```

### 3. Configurer la Base de Données
- Assurez-vous que **Docker** est installé (par exemple, Docker Desktop).
- Naviguez vers le dossier `api/database` et démarrez le conteneur de la base de données :
  ```bash
  docker compose up -d
  ```
- Appliquez les migrations Prisma en naviguant vers le dossier `api/database/prisma` :
  ```bash
  npx prisma migrate dev
  ```

### 4. Lancer l'Application
- Démarrez le serveur back-end après avoir navigué vers le dossier `api` :
  ```bash
  cd api
  npm run dev
  ```
- Démarrez le serveur front-end dans un terminal séparé après avoir navigué vers le dossier `client` :
  ```bash
  cd client
  npm run dev
  ```

---

## 🧪 Utilisation

Une fois que les deux serveurs sont en cours d'exécution, vous pouvez :
1. Accéder au front-end via votre navigateur.
2. Créer, afficher et modifier des projets et des catégories de manière interactive.

### 💡 Astuce
Si vous souhaitez consulter la base de données, vous pouvez également naviguer vers le dossier `api/database/prisma` et exécuter la commande suivante :
  ```bash
  npx prisma studio
  ```

---

## 📚 Technologies Utilisées

- **Back-end** : Node.js, ExpressJS, Prisma, Docker
- **Front-end** : ReactJS, TypeScript
```
