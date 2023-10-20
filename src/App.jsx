import { useState, useEffect } from 'react'
import { Character } from './Components/Character/Character'
import './App.css'
import { SelectionButtons } from './Components/SelectionButtons/SelectionButtons';
import { ScoreBoard } from './Components/ScoreBoard/ScoreBoard';
import { FinishGameModal } from './Components/FinishGameModal/FinishGameModal';
import { HistoryGame } from './Components/HistoryGame/HistoryGame';
import { MAX_ATTEMPS } from './logic/constants';
import { useCompareGame } from './hooks/useCompareGame';
import { generateRandomGame } from './logic/generateRandomGame';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { generateRandomColors } from './logic/generateRandomColors';
import { saveGameToStorage, resetGameStorage } from './logic/storage';

const INITIAL_FEATURES_COLOR = {
  'hair': 'black',
  'shirt': 'white',
  'legs': '#2a5373',
  'shoes': 'white'
};

function App() {
  const [featuresColor, setFeaturesColor] = useState(() => {
    const featuresColorFromStorage = window.localStorage.getItem('featuresColor');
    return featuresColorFromStorage ? JSON.parse(featuresColorFromStorage)
      : INITIAL_FEATURES_COLOR;
  });

  const [currentRandomColorsList, setCurrentRandomColorsList] = useState(() => {
    const currentRandomColorsListFromStorage = window.localStorage.getItem('currentRandomColorsList');
    return currentRandomColorsListFromStorage ? JSON.parse(currentRandomColorsListFromStorage)
      : generateRandomColors();
  });
  const [actualAttemp, setActualAttemp] = useState(() => {
    const actualAttempFromStorage = window.localStorage.getItem('actualAttemp');
    return actualAttempFromStorage ? JSON.parse(actualAttempFromStorage)
      : [0, 0, 0, 0];
  });
  const [gameAttemps, setGameAttemps] = useState(() => {
    const gameAttempsFromStorage = window.localStorage.getItem('gameAttemps');
    return gameAttempsFromStorage ? parseInt(gameAttempsFromStorage)
      : 0;
  });
  const [historyAttemps, setHistoryAttemps] = useState(() => {
    const historyAttempsFromStorage = window.localStorage.getItem('historyAttemps');
    return historyAttempsFromStorage ? JSON.parse(historyAttempsFromStorage)
      : new Array(MAX_ATTEMPS).fill(0);
  });
  const [correctRandomArr, setCorrectRandomArr] = useState(() => {
    const correctRandomArrFromStorage = window.localStorage.getItem('correctRandomArr');
    return correctRandomArrFromStorage ? JSON.parse(correctRandomArrFromStorage)
      : generateRandomGame();
  });
  const { guessLeads, finishGame, setGuessLeads, setFinishGame } = useCompareGame(actualAttemp, gameAttemps, correctRandomArr);

  useEffect(() => {
    if (gameAttemps > 0 && gameAttemps < MAX_ATTEMPS + 1) {
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

      saveGameToStorage({
        featuresColor,
        currentRandomColorsList,
        actualAttemp,
        gameAttemps,
        historyAttemps,
        correctRandomArr
      });

    }
  }, [guessLeads])

  const handleSelectionBtn = (row, col) => {
    const actual = [...actualAttemp];
    actual[col] = row + 1;
    const colorActually = { ...featuresColor }
    if (col === 0) {
      colorActually.hair = currentRandomColorsList[row];
    } else if (col === 1) {
      colorActually.shirt = currentRandomColorsList[row];
    } else if (col === 2) {
      colorActually.legs = currentRandomColorsList[row];
    } else {
      colorActually.shoes = currentRandomColorsList[row];
    }
    setFeaturesColor(colorActually);
    setActualAttemp(actual);
  }

  const repeatNumberInArray = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) return true;
      }
    }
    return false
  }

  const checkAttemp = () => {
    if (actualAttemp.some((value) => value === 0)) {
      if (!toast.isActive('select_new_colors')) {
        toast.warning('Please set color each feature', {
          toastId: 'select_new_colors',
          icon: '😇'
        });
      }
      return
    }

    if (repeatNumberInArray(actualAttemp)) {
      if (!toast.isActive('select_new_colors')) {
        toast.warning("Don't repeat colors", {
          toastId: 'repeat_colors',
          icon: '🤬'
        });
      }
      return
    }

    if (gameAttemps + 1 === MAX_ATTEMPS - 3) {
      toast.warning("Last 3 attempts", {
        icon: '😰'
      });
    }
    if (gameAttemps + 1 === MAX_ATTEMPS - 1) {
      toast.warning("Last attempt", {
        icon: '😱'
      });
    }

    setGameAttemps(gameAttemps + 1)
    console.log('Hola2');
  }

  const resetGame = () => {
    setFeaturesColor(INITIAL_FEATURES_COLOR);
    setCurrentRandomColorsList(generateRandomColors());
    setGameAttemps(0);
    setGuessLeads(null);
    setActualAttemp([0, 0, 0, 0]);
    setHistoryAttemps(new Array(MAX_ATTEMPS).fill(0));
    setCorrectRandomArr(generateRandomGame());
    setFinishGame(null);
    resetGameStorage();
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
          <article className='main-character-container'>
            <Character colors={featuresColor} />
          </article>

          <section className='mid-container'>
            <ScoreBoard attemps={gameAttemps} leads={guessLeads} />
            <button className='check-turn-btn' onClick={checkAttemp}>Check</button>
            <button className='reset-game-btn' onClick={(resetGame)}>Reset game</button>
          </section>
          {finishGame === null ? <SelectionButtons handleButton={handleSelectionBtn} rows={10} cols={4} color_list={currentRandomColorsList} /> : null}
        </div>
        {finishGame === null ? <HistoryGame historical={historyAttemps} /> : null}
        {finishGame === null ? null : <FinishGameModal finishGame={finishGame} correct={correctRandomArr} historical={historyAttemps} colors_list={currentRandomColorsList} resetGame={resetGame} />}
        <ToastContainer
          position='bottom-center'
          autoClose={2000}
          theme='dark'
          limit={3}
        >
        </ToastContainer>
      </main>
    </>
  )
}

export default App
