class Pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }  

    isLucky() {
        return Math.random() < this.luck
    }

    attackPokemon(target) {
        if (this.isLucky()) {
          const damage = this.attack - target.defense;
          target.hp -= damage;
          console.log(`${this.name} attaque ${target.name} et lui inflige ${damage} points de dégâts.`);
        } else {
          console.log(`${this.name} attaque ${target.name} mais rate son attaque.`);
        }
      }
}

let groudon = new Pokemon("Groudon", 135, 115, 120, 0.6)
let kyogre = new Pokemon("Kyogre", 125, 125, 100, 0.7)


while (groudon.hp > 0 && kyogre.hp > 0) {
    groudon.attackPokemon(kyogre)
    console.log('Vie restante de ${kyogre.name}: ${kyogre.hp}')
    if (kyogre.hp <= 0) {break}
    kyogre.attackPokemon(groudon)
    console.log('Vie restante de ${groudon.name}: ${groudon.hp}')
    

}

if (groudon.hp <= 0) {
    console.log('${groudon.name} est mort. ${kyogre.name} a gagné !')
}

if (kyogre.hp <= 0) {
    console.log('${kyogre.name} est mort. ${groudon.name} a gagné !')
}
