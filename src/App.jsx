import { useState, useEffect } from 'react'
import { Character } from './Components/Character/Character'
import './App.css'
import { SelectionButtons } from './Components/SelectionButtons/SelectionButtons';
import { ScoreBoard } from './Components/ScoreBoard/ScoreBoard';
import { COLORS_LIST } from './logic/constants';
import { HistoryGame } from './Components/HistoryGame/HistoryGame';

const FEATURES_COLOR = {
  'hair': 'black',
  'shirt': 'white',
  'legs': '#2a5373',
  'shoes': 'white'
};

const POSITIONS = [0, 0, 0, 0];


function App() {
  const [featuresColor, setFeaturesColor] = useState(FEATURES_COLOR);
  const [actualAttemp, setActualAttemp] = useState(POSITIONS);
  const [gameAttemps, setGameAttemps] = useState(0);
  const [historyAttemps, setHistoryAttemps] = useState(new Array(12).fill(0));
  const [guessLeads, setGuessLeads] = useState(null);

  useEffect(() => {
    if (gameAttemps === 0) return;

    const comparativeGame = () => {
      const CORRECT = [1,2,3,4];
      let fameIndexes = [];
      let fame = 0;
      let point = 0;
      for(let i = 0; i < actualAttemp.length; i++) {
        for(let j = 0; j < CORRECT.length; j++) {
          if(actualAttemp[i] === CORRECT[j]) {
            if(i === j) {
              fame++;
              fameIndexes.push(j);
            }
          }
        }
      }
      if(fameIndexes !== 4){for(let i = 0; i < actualAttemp.length; i++) {
        for(let j = 0; j < CORRECT.length; j++) {
          if(actualAttemp[i] === CORRECT[j] && !fameIndexes.some((value) => j===value)) {
            point++;
          }
        }
      }}
      
      setGuessLeads({ fames: fame, points: point})
    }
    comparativeGame();
  } ,[gameAttemps])

  const handle = (row, col) => {
    const actual = [...actualAttemp];
    actual[col] = row + 1;
    const colorActually = { ...featuresColor }
    if (col === 0) {
      colorActually.hair = COLORS_LIST[row];
    } else if (col === 1) {
      colorActually.shirt = COLORS_LIST[row];
    } else if (col === 2) {
      colorActually.legs = COLORS_LIST[row];
    } else {
      colorActually.shoes = COLORS_LIST[row];
    }
    setFeaturesColor(colorActually);
    setActualAttemp(actual);
    console.log(actual)
  }

  const resetGame = () => {
    setFeaturesColor(FEATURES_COLOR);
    setGameAttemps(0);
  }

  return (
    <>
      <header>
        <div className='title-container'>
          <h1><span className='title-one'>Guess</span> <span className='title-two'>Who?</span></h1>
        </div>
      </header>
      <main>
        <div className='container'>
          <div className='main-character-container'>
            <Character colors={featuresColor} />
          </div>

          <div className='mid-container'>
            <ScoreBoard attemps={gameAttemps} leads={guessLeads}/>
            <button className='check-turn-btn' onClick={() =>  setGameAttemps(gameAttemps + 1)}>Check</button>
          </div>
          <SelectionButtons handleButton={handle} rows={9} cols={4} />
        </div>
        <HistoryGame />
      </main>
    </>
  )
}

export default App
