import React from 'react';
import './App.css';

export default function App() {
    const [player1, setPlayer1] = React.useState(null);
     const [player2, setPlayer2] = React.useState(null);


const choices = {
  rock: 3,
  scissors: 2,
  paper: 1
}

function handleSetPlayer1(input) {
  if (input === 3) {
    setPlayer1(choices.rock)
  } else if (input === 2) {
    setPlayer1(choices.scissors)
  } else {
    setPlayer1(choices.paper)
}
};

function handleSetPlayer2(input) {
  if (input === 3) {
    setPlayer2(choices.rock)
  } else if (input === 2) {
    setPlayer2(choices.scissors)
  } else  {
    setPlayer2(choices.paper)
  }
  
};


function getWinner () {
  console.log(player1)
  console.log(player2) 
  if (player1 === player2) {
alert("Its a draw... Refresh to settle this yella belly Btard");
  } else if (player1 === 3 && player2 === 2) {
    alert("Player 1 Wins! Refresh to play again.");
} else if (player1 === 3 && player2 === 1) {
  alert("Player 2 wins! Refresh to play again.");
} else if (player1 === 2 && player2 === 3) {
  alert("Player 2 wins! Refresh to play again.");
} else if (player1 === 2 && player2 === 1) {
  alert("Player 1 Wins! Refresh to play again.");
} else if (player1 === 1 && player2 === 3){
  alert("Player 1 Wins! Refresh to play again.");
} else if (player1 === 1 && player2 ===2) {
  alert("Player 2 wins! Refresh to play again.");}
};


return (
  <div>
    <title>The Ultimate Rock Paper Scissors Showdown</title>
    <h1>
      <center>
      The Ultimate Rock Paper Scissors Showdown
      <br></br>
      Player 1:<br></br>
    <button onClick={() => handleSetPlayer1(3)}>
        <img src="https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-640x514.jpg" width="150" height="150" />
      </button>
      <button onClick={() => handleSetPlayer1(2)}>
        <img src="https://i.seadn.io/gae/JViOHuOPByeRUgDlVMFzlxbUD48bP9AT0f_kg_PQBu5q5VQUAJCHG4l-Kpx3AzzmH3oLODXfZWQ_VZsOYhWi9MT16Vk-77aK_OnA?auto=format&w=1000" width="150" height="150" />
      </button>
      <button onClick={() => handleSetPlayer1(1)}>
        <img src="https://content.instructables.com/FQ1/093L/IJAEI4D3/FQ1093LIJAEI4D3.jpg?auto=webp" width="150" height="150" />
      </button>
      </center><br></br>
    <center>Player 2:<br></br>
    <button onClick={() => handleSetPlayer2(3)}>
        <img src="https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-640x514.jpg" width="150" height="150" />
      </button>
      <button onClick={() => handleSetPlayer2(2)}>
        <img src="https://i.seadn.io/gae/JViOHuOPByeRUgDlVMFzlxbUD48bP9AT0f_kg_PQBu5q5VQUAJCHG4l-Kpx3AzzmH3oLODXfZWQ_VZsOYhWi9MT16Vk-77aK_OnA?auto=format&w=1000" width="150" height="150" />
      </button>
      <button onClick={() => handleSetPlayer2(1)}>
        <img src="https://content.instructables.com/FQ1/093L/IJAEI4D3/FQ1093LIJAEI4D3.jpg?auto=webp" width="150" height="150" />
      </button><br></br><center>
      <button type="button" onClick={getWinner}>Fight!</button></center>
      </center>
      </h1>

  </div>
);
};