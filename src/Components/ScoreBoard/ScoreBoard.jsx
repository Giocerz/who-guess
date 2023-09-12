import './ScoreBoard.css'

export const ScoreBoard = () => {
    return (
        <article className='score-board'>
            <span className='score-number green'>2</span>
            <span className='score-description green'>Right color, correct feature</span>
            <span className='score-number red'>2</span>
            <span className='score-description red'>Right color, wrong feature</span>
            <span></span>
            <span className='score-attemps'>Attemps 0/12</span>
        </article>
    )
}