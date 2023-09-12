import './ScoreBoard.css'

export const ScoreBoard = ({ leads, attemps }) => {
    return (
        <article className='score-board'>
            {attemps === 0 ? <span className='score-number green'>-</span> : <span className='score-number green'>{leads?.fames}</span> }
            <span className='score-description green'>Right color, correct feature</span>
            {attemps === 0 ? <span className='score-number red'>-</span> : <span className='score-number red'>{leads?.points}</span> }
            <span className='score-description red'>Right color, wrong feature</span>
            <span></span>
            <span className='score-attemps'>Attemps {attemps}/12</span>
        </article>
    )
}