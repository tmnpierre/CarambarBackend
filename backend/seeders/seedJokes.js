// Importer le modèle Joke depuis le répertoire des modèles
const { Joke } = require('../models');

// Définir un tableau de blagues à insérer dans la base de données
const jokes = [
  { question: 'Quelle est la femelle du hamster ?', answer: 'L’Amsterdam' },
  { question: 'Que dit un oignon quand il se cogne ?', answer: 'Aïe' },
  { question: 'Quel est l\'animal le plus heureux ?', answer: 'Le hibou, parce que sa femme est chouette.' },
  { question: 'Pourquoi le football c\'est rigolo ?', answer: 'Parce que Thierry en rit' },
  { question: 'Quel est le sport le plus fruité ?', answer: 'La boxe, parce que tu te prends des pêches dans la poire et tu tombes dans les pommes.' },
  { question: 'Que se fait un Schtroumpf quand il tombe ?', answer: 'Un Bleu' },
  { question: 'Quel est le comble pour un marin ?', answer: 'Avoir le nez qui coule' },
  { question: 'Qu\'est ce que les enfants usent le plus à l\'école ?', answer: 'Le professeur' },
  { question: 'Quel est le sport le plus silencieux ?', answer: 'Le para-chuuuut' },
  { question: 'Quel est le comble pour un joueur de bowling ?', answer: 'C’est de perdre la boule' }
];

// Définir une fonction asynchrone pour insérer les blagues dans la base de données
const seedJokes = async () => {
  // Utiliser la méthode bulkCreate de Sequelize pour insérer plusieurs blagues en une seule opération
  await Joke.bulkCreate(jokes);
};

// Appeler la fonction seedJokes et gérer la promesse retournée
seedJokes().then(() => {
  // Afficher un message dans la console une fois les blagues ajoutées
  console.log('Blagues ajoutées');
  // Terminer le processus Node.js
  process.exit();
});
