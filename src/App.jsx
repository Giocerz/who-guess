import { useState } from 'react'
import { Character } from './Components/Character/Character'
import './App.css'
import { SelectionButtons } from './Components/SelectionButtons/SelectionButtons';
import { ScoreBoard } from './Components/ScoreBoard/ScoreBoard';

const COLORS_LIST = [
  "#6f2dbd",
  "#800e13",
  "#fe7f2d",
  "#00509d",
  "#7ae582",
  "#f15bb5",
  "#636940",
  "#f7e8a4",
  "#9e6240"
];

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
  const [historyAttemps, setHistoryAttemps] = useState(0);

  const handle = (row, col) => {
    const actual = [...actualAttemp];
    actual[col] = row + 1;
    const colorActually = { ...featuresColor}
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

  return (
    <>
      <header>
        <div className='title-container'>
          <h1><span className='title-one'>Guess</span> <span className='title-two'>Who?</span></h1>
        </div>
      </header>
      <main>
        <div className='container'>
          <div className='help-modal'></div>
          <div className='main-character-container'>
            <Character colors={featuresColor} />
          </div>
          <ScoreBoard />
          <SelectionButtons handleButton={handle} rows={9} cols={4} />
        </div>
        <div className='history-container'>
          <article className='history-card'>
            <div className='history-card-character-container'>
              <Character colors={FEATURES_COLOR} />
            </div>
            <aside className='correct-stats-card'><span className='correct-span green'>2</span><span className='correct-span red'>0</span></aside>
          </article>
          <article className='history-card'>
          </article>
          <article className='history-card'>
          </article>
          <article className='history-card'>
          </article>
          <article className='history-card'>
          </article>
          <article className='history-card'>
          </article>
          <article className='history-card'>
          </article>
          <article className='history-card'>
          </article>
          <article className='history-card'>
          </article>
          <article className='history-card'>
          </article>
          <article className='history-card'>
          </article>
          <article className='history-card'>
          </article>
        </div>
      </main>
    </>
  )
}

export default App
