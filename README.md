# Carambar Jokes API

Bienvenue dans l'API Carambar Jokes! Cette API permet de gérer les blagues Carambar, incluant des fonctionnalités pour ajouter, afficher, rechercher et obtenir des blagues aléatoires.

## Déploiement

L'API est déployée sur Render. Vous pouvez accéder à l'API via le lien suivant : [Carambar Jokes API sur Render](https://carambarbackend.onrender.com)

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- Node.js (version 12 ou supérieure)
- npm (version 6 ou supérieure)
- PostgreSQL (version 12 ou supérieure)

## Installation

Suivez ces étapes pour installer et exécuter l'API localement :

1. Clonez le dépôt :
    ```sh
    git clone https://github.com/votre-utilisateur/CarambarBackend.git
    cd CarambarBackend
    ```

2. Installez les dépendances :
    ```sh
    npm install
    ```

3. Créez un fichier `.env` à la racine du projet et configurez les variables d'environnement comme suit :
    ```plaintext
    DB_USER=votre_utilisateur
    DB_PASS=votre_mot_de_passe
    DB_NAME=nom_de_votre_base_de_donnees
    DB_HOST=adresse_de_votre_hote
    DB_PORT=5432
    PORT=4000
    ```

4. Exécutez les migrations et les seeds pour initialiser la base de données :
    ```sh
    npx sequelize-cli db:migrate
    node backend/seeders/seedJokes.js
    ```

5. Démarrez le serveur :
    ```sh
    npm start
    ```

L'API sera disponible à l'adresse [http://localhost:4000](http://localhost:4000).

## Endpoints de l'API

L'API dispose des endpoints suivants :

### Ajouter une blague

- **URL** : `/api/addjokes`
- **Méthode** : `POST`
- **Description** : Ajoute une nouvelle blague.
- **Exemple de requête** :
    ```json
    {
      "question": "Pourquoi le football c'est rigolo ?",
      "answer": "Parce que Thierry en rit"
    }
    ```

### Afficher toutes les blagues

- **URL** : `/api/jokes`
- **Méthode** : `GET`
- **Description** : Affiche toutes les blagues.

### Afficher une blague par ID

- **URL** : `/api/jokes/:id`
- **Méthode** : `GET`
- **Description** : Affiche une blague spécifique par son ID.
- **Paramètres** :
    - `id` : ID de la blague

### Afficher une blague aléatoire

- **URL** : `/api/randomjokes`
- **Méthode** : `GET`
- **Description** : Affiche une blague aléatoire.

## Documentation Swagger

La documentation de l'API est disponible via Swagger à l'URL suivante : [Swagger UI](https://carambarbackend.onrender.com/api-docs)

## Contribuer

Les contributions sont les bienvenues ! Veuillez soumettre une issue ou une pull request pour toute amélioration ou fonctionnalité.

## Licence

Ce projet a été réalisé dans le cadre éducatif et est libre de droit. Vous pouvez utiliser, modifier et distribuer ce projet sans restriction.

---

Profitez de vos blagues Carambar ! 😄
