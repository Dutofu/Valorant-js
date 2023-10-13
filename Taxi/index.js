// Définition du personnage
const personnage = {
    prenom: "John",
    santeMentale: 10,
  };
  
  // Liste de musiques
  const musiques = [
    "Sensualité - Axelle Red",
    "Enjoy the Silence - Depeche Mode",
    "Paroles Paroles - Dalida",
    "Get Lucky - Daft Punk",
    "Anissa - Wejdene",
  ];
  
  // Définition du trajet
  const trajet = {
    feuxRouges: 30,
    changements: 0,
  };
  
  // Fonction pour générer une musique aléatoire
  function musiqueAleatoire() {
    const index = Math.floor(Math.random() * musiques.length);
    return musiques[index];
  }
  
  // Fonction pour simuler le trajet en taxi
  function trajetEnTaxi() {
    for (let i = 0; i < trajet.feuxRouges; i++) {
      const musiqueEnCours = musiqueAleatoire();
      console.log(`Musique: ${musiqueEnCours}, Feux restants: ${trajet.feuxRouges - i}`);
  
      if (musiqueEnCours === "Anissa - Wejdene") {
        personnage.santeMentale--;
        trajet.changements++;
  
        if (personnage.santeMentale === 0) {
          console.log("Explosion");
          return;
        }
  
        console.log(`Changement de taxi (${trajet.changements} changements)`);
      }
    }
  
    console.log(`Bien arrivé! (${trajet.changements} changements de taxi)`);
  }
  
  // Appel de la fonction pour simuler le trajet
  trajetEnTaxi();