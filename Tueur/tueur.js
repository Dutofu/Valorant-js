class Personnage {
  constructor(nom, caracteristique, probMourir, probInfligerDommages, probMourirInfligeantDommages) {
    this.nom = nom;
    this.caracteristique = caracteristique;
    this.probMourir = probMourir;
    this.probInfligerDommages = probInfligerDommages;
    this.probMourirInfligeantDommages = probMourirInfligeantDommages;
    this.pointsDeVie = 100;
  }

  attaquer() {
    const random = Math.random();

    if (random < this.probMourir) {
      return `${this.nom} est mort.`;
    } else if (random < this.probMourir + this.probInfligerDommages) {
      return `${this.nom} a infligé 10 points de dégâts.`;
    } else if (random < this.probMourir + this.probInfligerDommages + this.probMourirInfligeantDommages) {
      this.pointsDeVie -= 15;
      return `${this.nom} a infligé 15 points de dégâts mais est mort en le faisant.`;
    } else {
      return `${this.nom} a esquivé l'attaque.`;
    }
  }
}

const prenoms = ['Alice', 'Bob', 'Charlie', 'David', 'Eva'];

function genererSurvivant() {
  const nom = prenoms[Math.floor(Math.random() * prenoms.length)];
  const caracteristique = caracteristiques[Math.floor(Math.random() * caracteristiques.length)];
  return new Personnage(nom, caracteristique.nom, caracteristique.probMourir, caracteristique.probInfligerDommages, caracteristique.probMourirInfligeantDommages);
}

const caracteristiques = [
  { nom: 'Nerd', probMourir: 0.2, probInfligerDommages: 0.5, probMourirInfligeantDommages: 0.3 },
  { nom: 'Sportif', probMourir: 0.3, probInfligerDommages: 0.4, probMourirInfligeantDommages: 0.3 },
  { nom: 'Blonde', probMourir: 0.4, probInfligerDommages: 0.3, probMourirInfligeantDommages: 0.3 },
];

const jason = new Personnage('Jason', 'Tueur en série', 0.5, 0.6, 0.2);
const survivants = Array.from({ length: 5 }, genererSurvivant);

while (jason.pointsDeVie > 0 && survivants.some(survivant => survivant.pointsDeVie > 0)) {
  for (const survivant of survivants) {
    const resultat = jason.attaquer();
    console.log(resultat);
    if (resultat.includes('mort')) {
      break;
    } else {
      const survResultat = survivant.attaquer();
      console.log(survResultat);
      if (survResultat.includes('mort')) {
        console.log(`${survivant.nom} est décédé.`);
      }
    }
  }
}

console.log('\n--- Résultats finaux ---\n');
console.log(`Points de vie de Jason : ${jason.pointsDeVie}`);
for (const survivant of survivants) {
  console.log(`${survivant.nom} - Points de vie : ${survivant.pointsDeVie}`);
}