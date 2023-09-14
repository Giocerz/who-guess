import './HistoryGame.css'
import { Character } from "../Character/Character";
import { MAX_ATTEMPS } from '../../logic/constants';

export const HistoryGame = ({ historical, viewOnlyAttemps = false, truncLastAttempCard = true }) => {
    return (
        <div className='history-container'>
            {historical && historical.map((values, index) => {
                if(truncLastAttempCard && index === MAX_ATTEMPS - 1 ) return;
                if (values === 0) {
                    if(viewOnlyAttemps) return;
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