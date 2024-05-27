// Exporter une fonction qui définit le modèle Joke
// Cette fonction prend deux arguments : sequelize (instance de Sequelize) et DataTypes (types de données Sequelize)
module.exports = (sequelize, DataTypes) => {
  // Définir le modèle Joke
  // Le modèle est défini avec deux champs : question et answer
  const Joke = sequelize.define('Joke', {
    // Champ 'question' de type STRING (chaîne de caractères) qui ne peut pas être nul
    question: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Champ 'answer' de type STRING (chaîne de caractères) qui ne peut pas être nul
    answer: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  // Retourner le modèle Joke pour qu'il puisse être utilisé dans d'autres parties de l'application
  return Joke;
};
