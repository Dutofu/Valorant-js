const players = ["Omen", "Jett", "Phoenix", "Breach", "Sage"];

let roundNumber = 1;
let scoreAttackers = 0;
let scoreDefenders = 0;

while (scoreAttackers < 13 && scoreDefenders < 13) {
    console.log(`\nRound ${roundNumber}`);

    const attackers = [];
    const defenders = [];

    for (let i = 0; i < players.length; i++) {
        attackers.push({ name: players[i], side: "Attaquant" });
        defenders.push({ name: players[i], side: "Defenseur" });
    }

    let spikePlanted = false;
    let probability = 0.5;

    while (attackers.length > 0 && defenders.length > 0) {
        if (Math.random() < probability) {
            const randomIndex = Math.floor(Math.random() * defenders.length);
            const eliminatedPlayer = defenders.splice(randomIndex, 1)[0];
            console.log(`${eliminatedPlayer.side} ${eliminatedPlayer.name} est mort !`);
            
            if (Math.random() < 0.6 && !spikePlanted) {
                spikePlanted = true;
                console.log("Le Spike est planté");
            }
        } else {
            const randomIndex = Math.floor(Math.random() * attackers.length);
            const eliminatedPlayer = attackers.splice(randomIndex, 1)[0];
            console.log(`${eliminatedPlayer.side} ${eliminatedPlayer.name} est mort !`);
            
            if (Math.random() < 0.4 && !spikePlanted) {
                spikePlanted = true;
                console.log("Le Spike est planté");
            }
        }

        if (spikePlanted) {
            probability = 0.7;
        }

        if (attackers.length <= 0) {
            console.log("Les défenseurs ont gagné la manche");
            scoreDefenders += 1;
        } else if (defenders.length <= 0) {
            console.log("Les attaquants ont gagné la manche");
            scoreAttackers += 1;
        }
    }

    console.log(`Score:`);
    console.log(`Attaquants ${scoreAttackers}/ Défenseurs ${scoreDefenders}`);

    if (scoreAttackers >= 13) {
        console.log("Les attaquants ont gagné la partie");
    } else if (scoreDefenders >= 13) {
        console.log("Les défenseurs ont gagné la partie");
    }
    roundNumber++;
}