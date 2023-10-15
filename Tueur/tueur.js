class Personnage {
  constructor(nom, caractéristique, probMourir, probInfligerDegats, probMourirDegats, pointsDeVie) {
      this.nom = nom;
      this.caracteristique = caractéristique;
      this.probMourir = probMourir;
      this.probInfligerDegats = probInfligerDegats;
      this.probMourirDegats = probMourirDegats;
      this.pointsDeVie = pointsDeVie;
  }

  attaquer(cible) {
      const action = Math.random();

      if (action < this.probMourir) {
          return `${this.nom} est mort.`;
      } else if (action < this.probMourir + this.probInfligerDegats) {
          cible.pointsDeVie -= 10;
          return `${this.nom} a infligé 10 points de dégâts à ${cible.nom}.`;
      } else if (action < this.probMourir + this.probInfligerDegats + this.probMourirDegats) {
          return `${this.nom} a infligé 15 points de dégâts à ${cible.nom}, mais est mort.`;
      }
  }
}

const noms = ["Alice", "Bob", "Charlie", "David", "Eve"];
const caracteristiques = ["nerd", "sportif", "blonde", "brun", "intelligent"];

const survivants = [];
for (let i = 0; i < 5; i++) {
  const nom = noms[Math.floor(Math.random() * noms.length)];
  const caract = caracteristiques[Math.floor(Math.random() * caracteristiques.length)];
  const survivant = new Personnage(nom, caract, 0.2, 0.3, 0.1, 100);
  survivants.push(survivant);
}

const jason = new Personnage("Jason", "tueur en série", 0.5, 0.4, 0.1, 100);

while (jason.pointsDeVie > 0 && survivants.some(s => s.pointsDeVie > 0)) {
  const attaquant = Math.random() < 0.5 ? jason : survivants[Math.floor(Math.random() * survivants.length)];
  const cible = attaquant === jason ? survivants[Math.floor(Math.random() * survivants.length)] : jason;

  console.log(attaquant.attaquer(cible));
}

console.log("Morts :");
survivants.filter(s => s.pointsDeVie <= 0).forEach(s => console.log(`${s.nom} (${s.caracteristique})`));
console.log(jason.pointsDeVie <= 0 ? "Jason est mort." : "Les survivants ont gagné.");
