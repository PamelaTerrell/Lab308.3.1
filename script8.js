let p1hp = 100;
let p2hp = 100;
let rounds = 0
while(true){
    rounds++
    let atk1 = Math.round(Math.random() * 25)
    p2hp -= atk1;
    if(p2hp <= 0){
        console.log(`Player 1 wins`)
        console.log(rounds, `: Rounds`)
        break
    }
    let atk2 = Math.round(Math.random() * 25)
    p1hp -= atk2;
    if(p1hp <= 0){
        console.log(`Player 2 wins`)
        console.log(rounds, `: Rounds`)
        break
    }
}