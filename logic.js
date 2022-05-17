let players = ['x', 'o'];
let activePlayer = 0;

let score;
let arr = [];

function playersChanges() {
  activePlayer == players[0] ? activePlayer = players[1] : activePlayer = players[0];
}

function startGame() {
  score = 0;
    let flag = 0;
    arr = [];
    flech = [];
    if (flag == 0) {
      
    for (let i = 0; i < 3; i++) {
       arr.push(['']);
      
       for (let j = 0; j < 2; j++) {
          arr[i].push('');
       }
      }
      flag = 1;
      renderBoard(arr);
      
    }
  activePlayer = players[Math.floor(players.length * Math.random())]; 
  alert ('Игрок №1 играет за : ' + activePlayer);
}

function click(row, column) {
  arr[row][column] = activePlayer;
  renderBoard(arr); 
  checkPlayer();
  playersChanges();
  score++;
}

function checkPlayer() {

  score % 2 == 0 ? obj = 0 : obj = 1;

  for (let i = 0; i < arr.length; i++) {
     for (let j =0 ; j < arr[i].length; j++) {
     if(arr[0][0] == activePlayer && arr[0][1] == activePlayer && arr[0][2] == activePlayer) {showWinner(obj)};
     if(arr[1][0] == activePlayer && arr[1][1] == activePlayer && arr[1][2] == activePlayer) {showWinner(obj)};
     if(arr[2][0] == activePlayer && arr[2][1] == activePlayer && arr[2][2] == activePlayer) {showWinner(obj)};
     if(arr[0][0] == activePlayer && arr[1][1] == activePlayer && arr[2][2] == activePlayer) {showWinner(obj)};
     if(arr[2][0] == activePlayer && arr[1][1] == activePlayer && arr[0][2] == activePlayer) {showWinner(obj)};
     if(arr[0][0] == activePlayer && arr[1][0] == activePlayer && arr[2][0] == activePlayer) {showWinner(obj)};
     if(arr[0][1] == activePlayer && arr[1][1] == activePlayer && arr[2][1] == activePlayer) {showWinner(obj)};
     if(arr[0][2] == activePlayer && arr[1][2] == activePlayer && arr[2][2] == activePlayer) {showWinner(obj)};
     } 
  }
}
