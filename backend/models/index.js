// Charger les variables d'environnement définies dans le fichier .env
require('dotenv').config();

// Importer Sequelize, un ORM pour interagir avec la base de données
const Sequelize = require('sequelize');
// Importer la configuration de la base de données en fonction de l'environnement (développement, production, etc.)
const config = require('../config/config')[process.env.NODE_ENV || 'development'];

// Créer une nouvelle instance de Sequelize avec la configuration chargée
const sequelize = new Sequelize(config);

// Importer le modèle Joke en passant l'instance sequelize et le type de données Sequelize
const Joke = require('./joke')(sequelize, Sequelize.DataTypes);

// Regrouper tous les modèles et l'instance sequelize dans un objet pour les exporter
const db = {
  // L'instance sequelize pour l'interaction avec la base de données
  sequelize,
  // Le constructeur Sequelize pour créer de nouvelles instances ou définir de nouveaux modèles
  Sequelize,
  // Le modèle Joke représentant la table des blagues dans la base de données
  Joke
};

// Exporter l'objet db contenant sequelize, Sequelize et tous les modèles pour les utiliser dans d'autres parties de l'application
module.exports = db;
