import { useState, useEffect } from 'react'
import { Character } from './Components/Character/Character'
import './App.css'
import { SelectionButtons } from './Components/SelectionButtons/SelectionButtons';
import { ScoreBoard } from './Components/ScoreBoard/ScoreBoard';
import { COLORS_LIST } from './logic/constants';
import { HistoryGame } from './Components/HistoryGame/HistoryGame';
import { useCompareGame } from './hooks/useCompareGame';
import { useGenerateRandomGame } from './hooks/useGenerateRandomGame';

const FEATURES_COLOR = {
  'hair': 'black',
  'shirt': 'white',
  'legs': '#2a5373',
  'shoes': 'white'
};

function App() {
  const [featuresColor, setFeaturesColor] = useState(FEATURES_COLOR);
  const [actualAttemp, setActualAttemp] = useState([0, 0, 0, 0]);
  const [gameAttemps, setGameAttemps] = useState(0);
  const [historyAttemps, setHistoryAttemps] = useState(new Array(12).fill(0));
  const { correctRandomArr } = useGenerateRandomGame();
  const { guessLeads, setGuessLeads } = useCompareGame(actualAttemp, gameAttemps, correctRandomArr);
  
  console.log({correctRandomArr})
  useEffect(() => {
    if (gameAttemps > 0 && gameAttemps < 13) {
      const arrHistory = [...historyAttemps];
      arrHistory[gameAttemps - 1] = {
        features: {
          hair: featuresColor.hair,
          shirt: featuresColor.shirt,
          legs: featuresColor.legs,
          shoes: featuresColor.shoes
        },
        fames: guessLeads?.fames,
        points: guessLeads?.points
      }
      setHistoryAttemps(arrHistory);
    }
  }, [guessLeads])

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
    setGuessLeads(null);
    setActualAttemp([0, 0, 0, 0]);
    setHistoryAttemps(new Array(12).fill(0))
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
            <ScoreBoard attemps={gameAttemps} leads={guessLeads} />
            <button className='check-turn-btn' onClick={() => setGameAttemps(gameAttemps + 1)}>Check</button>
            <button className='reset-game-btn' onClick={resetGame}>Reset game</button>
          </div>
          <SelectionButtons handleButton={handle} rows={9} cols={4} />
        </div>
        <HistoryGame historical={historyAttemps} />
      </main>
    </>
  )
}

export default App
