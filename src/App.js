import './App.css';
import React, {useState, useEffect} from "react";
import Score from "./components/Score.js";
import Board from './components/Borad';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);


  return (
    <div className="App">
      <header>
        <h1>Naruto Memory Game</h1>
        <Score score={score} bestScore={bestScore}/>
        <Board
          score={score}
          bestScore={bestScore}
          setScore={setScore}
          setBestScore={setBestScore}
        />
      </header>
    </div>
  );
}

export default App;
