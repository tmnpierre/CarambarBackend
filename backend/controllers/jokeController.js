// Importation des modèles Joke et sequelize depuis le répertoire des modèles
const { Joke, sequelize } = require('../models');

// Fonction pour ajouter une nouvelle blague dans la base de données
const addJoke = async (req, res) => {
  try {
    // Création d'une nouvelle blague avec les données envoyées dans le corps de la requête
    const joke = await Joke.create(req.body);
    // Envoi de la blague créée en réponse avec le code de statut 201 (Created)
    res.status(201).json(joke);
  } catch (error) {
    // En cas d'erreur, envoi d'une réponse avec le code de statut 500 (Internal Server Error) et le message d'erreur
    res.status(500).json({ error: error.message });
  }
};

// Fonction pour récupérer toutes les blagues de la base de données
const getAllJokes = async (req, res) => {
  try {
    // Récupération de toutes les blagues
    const jokes = await Joke.findAll();
    // Envoi de la liste des blagues en réponse avec le code de statut 200 (OK)
    res.status(200).json(jokes);
  } catch (error) {
    // En cas d'erreur, envoi d'une réponse avec le code de statut 500 (Internal Server Error) et le message d'erreur
    res.status(500).json({ error: error.message });
  }
};

// Fonction pour récupérer une blague spécifique par son ID
const getJokeById = async (req, res) => {
  try {
    // Récupération de la blague par son ID
    const joke = await Joke.findByPk(req.params.id);
    if (joke) {
      // Si la blague est trouvée, envoi de la blague en réponse avec le code de statut 200 (OK)
      res.status(200).json(joke);
    } else {
      // Si la blague n'est pas trouvée, envoi d'une réponse avec le code de statut 404 (Not Found) et un message d'erreur
      res.status(404).json({ error: 'Joke not found' });
    }
  } catch (error) {
    // En cas d'erreur, envoi d'une réponse avec le code de statut 500 (Internal Server Error) et le message d'erreur
    res.status(500).json({ error: error.message });
  }
};

// Fonction pour récupérer une blague aléatoire
const getRandomJoke = async (req, res) => {
  try {
    // Récupération d'une blague aléatoire en utilisant la fonction random() de Sequelize
    const joke = await Joke.findOne({ order: sequelize.random() });
    // Envoi de la blague en réponse avec le code de statut 200 (OK)
    res.status(200).json(joke);
  } catch (error) {
    // En cas d'erreur, envoi d'une réponse avec le code de statut 500 (Internal Server Error) et le message d'erreur
    res.status(500).json({ error: error.message });
  }
};

// Exportation des fonctions pour pouvoir les utiliser dans d'autres parties de l'application
module.exports = {
  addJoke,
  getAllJokes,
  getJokeById,
  getRandomJoke
};
