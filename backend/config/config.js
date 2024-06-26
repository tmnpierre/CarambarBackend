// Charge les variables d'environnement définies dans le fichier .env
require('dotenv').config();

// Exportation des configurations de base de données pour les différents environnements (développement et production)
module.exports = {
  // Configuration pour l'environnement de développement
  development: {
    // Nom d'utilisateur pour la base de données, récupéré depuis les variables d'environnement
    username: process.env.DB_USER,
    // Mot de passe pour la base de données, récupéré depuis les variables d'environnement
    password: process.env.DB_PASS,
    // Nom de la base de données, récupéré depuis les variables d'environnement
    database: process.env.DB_NAME,
    // Hôte de la base de données, récupéré depuis les variables d'environnement ou 'localhost' par défaut
    host: process.env.DB_HOST || 'localhost',
    // Port de la base de données, récupéré depuis les variables d'environnement ou 5432 par défaut
    port: process.env.DB_PORT || 5432,
    // Dialecte utilisé par Sequelize pour interagir avec la base de données (ici, PostgreSQL)
    dialect: 'postgres',
    // Options de dialecte pour utiliser SSL/TLS
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  },
  // Configuration pour l'environnement de production
  production: {
    // Nom d'utilisateur pour la base de données, récupéré depuis les variables d'environnement
    username: process.env.DB_USER,
    // Mot de passe pour la base de données, récupéré depuis les variables d'environnement
    password: process.env.DB_PASS,
    // Nom de la base de données, récupéré depuis les variables d'environnement
    database: process.env.DB_NAME,
    // Hôte de la base de données, récupéré depuis les variables d'environnement ou 'localhost' par défaut
    host: process.env.DB_HOST || 'localhost',
    // Port de la base de données, récupéré depuis les variables d'environnement ou 5432 par défaut
    port: process.env.DB_PORT || 5432,
    // Dialecte utilisé par Sequelize pour interagir avec la base de données (ici, PostgreSQL)
    dialect: 'postgres',
    // Options de dialecte pour utiliser SSL/TLS
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
};
