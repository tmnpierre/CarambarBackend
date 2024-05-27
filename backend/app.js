// Charger les variables d'environnement définies dans le fichier .env
require('dotenv').config();

// Importer le module express pour créer le serveur web
const express = require('express');
// Importer le module body-parser pour analyser les requêtes JSON
const bodyParser = require('body-parser');
// Importer l'instance sequelize depuis les modèles
const { sequelize } = require('./models');
// Importer les routes pour les blagues
const jokeRoutes = require('./routes/jokeRoutes');
// Importer les modules swagger-ui-express et le fichier de configuration swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

// Créer une application Express
const app = express();

// Utiliser body-parser pour analyser les requêtes avec un corps JSON
app.use(bodyParser.json());

// Utiliser les routes des blagues avec le préfixe /api
app.use('/api', jokeRoutes);

// Configurer Swagger pour servir la documentation de l'API à l'endpoint /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Définir le port sur lequel le serveur va écouter, en utilisant la variable d'environnement PORT ou 4000 par défaut
const PORT = process.env.PORT || 4000;

// Démarrer le serveur et écouter les requêtes sur le port défini
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  try {
    // Synchroniser les modèles avec la base de données sans forcer la recréation des tables
    await sequelize.sync({ force: false });
    console.log('Database synchronized');
  } catch (error) {
    // Afficher une erreur si la synchronisation de la base de données échoue
    console.error('Unable to synchronize the database:', error);
  }
});
