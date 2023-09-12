import './HistoryGame.css'
import { Character } from "../Character/Character";

const FEATURES_COLOR = {
    'hair': 'black',
    'shirt': 'white',
    'legs': '#2a5373',
    'shoes': 'white'
};

export const HistoryGame = () => {
    return (
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
    )
}