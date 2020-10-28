// const yargs = require('yargs/yargs')
// const { hideBin } = require('yargs/helpers')
// const argv = yargs(hideBin(process.argv)).argv
const { argv } = require('yargs')

class Player{
    constructor(name='Player 1', move){
        this.name = name;
        this.move = move;
    }
    set name(name){
        this._name = name;
    }
    get name(){
        return this._name;
    }
    set move(move){
        switch(move){
            case 'rock':
            case 'scissors':
            case 'paper':
              this._move = move;  
              break;
            default:
                throw new Error('"move" must be either "rock", "paper" or "scissors"');
                break;
        }
        
    }
    get move(){
        return this._move;
    }
}

class RPSGame {
    static play(player1,player2){
        console.log(`${player1.name} plays ${player1.move}!`)
        console.log(`${player2.name} plays ${player2.move}!`)
        if(player1.move === player2.move){
            console.log(`DRAW!`) 
        }
        else if(
            (player1.move === 'rock' && player2.move === 'scissors') || 
            (player1.move === 'paper' && player2.move === 'rock') || 
            (player1.move === 'scissors' && player2.move === 'paper')
            ){ console.log(`~${player1.name} WINS!~`)}
        else if(
            (player2.move === 'rock' && player1.move === 'scissors') || 
            (player2.move === 'paper' && player1.move === 'rock') || 
            (player2.move === 'scissors' && player1.move === 'paper') 
            ){ console.log(`~${player2.name} WINS!~`)}
        }
    static randomMove(){
        let move = (Math.ceil(Math.random()*3));
        switch (move){
            case 1:
                move = 'rock';
                break;
            case 2:
                move = 'paper';
                break;
            case 3:
                move = 'scissors';
                break;
            default:
                move = 'fail';
        }
        return move;

    }
}
let player1 = new Player(argv.name,argv.move);
let player2 = new Player('Computer', RPSGame.randomMove())
RPSGame.play(player1,player2);