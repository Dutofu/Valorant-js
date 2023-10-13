class Player {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }

    takeAction() {
        console.log(`${this.name} (${this.role}) prend une action.`);
        return Math.random() < 0.5; // 50% de chance de réussite pour une action générique
    }
}

class Game {
    constructor() {
        this.attackers = [
            new Player("Omen", "smoker"),
            new Player("Fade", ""),
            new Player("Phoenix", "flasher"),
            new Player("Chamber", ""),
            new Player("Jett", "killer")
        ];

        this.defenders = [
            new Player("Omen", "smoker"),
            new Player("Fade", ""),
            new Player("Phoenix", "flasher"),
            new Player("Chamber", ""),
            new Player("Jett", "killer")
        ];

        this.roundsPlayed = 0;
        this.attackersWonRounds = 0;
        this.defendersWonRounds = 0;
    }

    startRound() {
        console.log(`\n--- Round ${this.roundsPlayed + 1} ---`);

        // Sélection aléatoire d'un joueur de chaque équipe
        const attacker = this.attackers[Math.floor(Math.random() * this.attackers.length)];
        const defender = this.defenders[Math.floor(Math.random() * this.defenders.length)];

        // Action du joueur attaquant
        const isAttackSuccessful = attacker.takeAction();

        if (isAttackSuccessful) {
            console.log(`${attacker.name} a réussi son action.`);
            // Si le joueur attaquant a réussi, il a une chance de 70% de gagner un duel
            const duelOutcome = Math.random() < 0.7 ? "attaquants" : "défenseurs";
            console.log(`${duelOutcome} remportent le duel.`);
            // Si les attaquants remportent le duel, ils ont une chance de 60% d'amorcer le spike
            if (duelOutcome === "attaquants" && Math.random() < 0.6) {
                console.log("Les attaquants amorcent le spike.");
                this.attackersWonRounds++;
            }
        } else {
            console.log(`${attacker.name} a échoué dans son action.`);
            // Si le joueur attaquant échoue, il y a une chance de 40% que les défenseurs amorcent le spike
            if (Math.random() < 0.4) {
                console.log("Les défenseurs amorcent le spike.");
                this.defendersWonRounds++;
            }
        }

        // Vérification de la fin de la manche
        if (this.attackersWonRounds === 13 || this.defendersWonRounds === 13) {
            console.log(`La partie est terminée. ${this.attackersWonRounds === 13 ? 'Attaquants' : 'Défenseurs'} remportent la partie.`);
        } else {
            this.roundsPlayed++;
        }
    }

    play() {
        while (this.attackersWonRounds < 13 && this.defendersWonRounds < 13) {
            this.startRound();
        }
    }
}

// Création d'une instance du jeu et démarrage
const game = new Game();
game.play();
