import './ScoreBoard.css'

export const ScoreBoard = () => {
    return (
        <article className='score-board'>
            <span className='score-number'>2</span>
            <span className='score-description green'>Right color, correct Feature</span>
            <span className='score-number'>2</span>
            <span className='score-description red'>Right color, wrong feature</span>
            <span></span>
            <span className='score-attemps'>Attemps 0/12</span>
        </article>
    )
}