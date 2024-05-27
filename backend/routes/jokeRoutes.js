// Importer le module express pour créer des routes
const express = require('express');
// Importer les fonctions de contrôleur pour les blagues
const { addJoke, getAllJokes, getJokeById, getRandomJoke } = require('../controllers/jokeController');
// Créer un routeur Express
const router = express.Router();

// Définir une route POST pour ajouter une nouvelle blague
// Cette route utilise la fonction addJoke du contrôleur des blagues
router.post('/addjokes', addJoke);

// Définir une route GET pour récupérer toutes les blagues
// Cette route utilise la fonction getAllJokes du contrôleur des blagues
router.get('/jokes', getAllJokes);

// Définir une route GET pour récupérer une blague par son ID
// Cette route utilise la fonction getJokeById du contrôleur des blagues
router.get('/jokes/:id', getJokeById);

// Définir une route GET pour récupérer une blague aléatoire
// Cette route utilise la fonction getRandomJoke du contrôleur des blagues
router.get('/randomjokes', getRandomJoke);

// Exporter le routeur pour qu'il puisse être utilisé dans d'autres parties de l'application
module.exports = router;
