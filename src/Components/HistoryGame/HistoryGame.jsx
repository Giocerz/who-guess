import './HistoryGame.css'
import { Character } from "../Character/Character";

const FEATURES_COLOR = {
    'hair': 'black',
    'shirt': 'white',
    'legs': '#2a5373',
    'shoes': 'white'
};

export const HistoryGame = ({ historical }) => {
    return (
        <div className='history-container'>
            {historical && historical.map((values, index) => {
                if (values === 0) {
                    return (
                        <article key={`card-${index}`} className='history-card'>
                        </article>
                    )
                } else {
                    return (
                        <article key={`card-${index}`} className='history-card'>
                            <div className='history-card-character-container'>
                                <Character colors={values?.features} anim='no-anim' />
                            </div>
                            <aside className='correct-stats-card'><span className='correct-span green'>{values?.fames}</span><span className='correct-span red'>{values?.points}</span></aside>
                        </article>
                    )
                }
            })}
        </div>
    )
}