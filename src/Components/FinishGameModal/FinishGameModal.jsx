import { Character } from "../Character/Character";
import { COLORS_LIST } from "../../logic/constants";
import "./FinishGameModal.css"
import { HistoryGame } from "../HistoryGame/HistoryGame";

export const FinishGameModal = ({ finishGame, correct, historical, resetGame }) => {
    if (finishGame === null) return;

    return (
        <section className='finishGame-modal'>
            <div className="finishGame-container">

            </div>
            {finishGame ? <h2>You won 🤓</h2> : <h2>You lose 🥺</h2>}
            <header className='finishGame-stats'>
                <div className="correct-character-container">
                    <Character 
                        colors={{
                            hair: COLORS_LIST[correct[0]],
                            shirt: COLORS_LIST[correct[1]],
                            legs: COLORS_LIST[correct[2]],
                            shoes: COLORS_LIST[correct[3]]
                        }} 
                        anim='no-anim' />
                </div>
            </header>
            <footer className="finishGame-footer">
                <button className='reset-game-btn new-game' onClick={resetGame}>
                    New game
                </button>
                <h2>Your attemps history in this match:</h2>
                <HistoryGame historical={historical} viewOnlyAttemps={true} truncLastAttempCard={false}/>
            </footer>
        </section>
    )
}