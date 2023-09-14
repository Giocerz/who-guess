import { useEffect, useState } from 'react'
import { MAX_ATTEMPS } from '../../logic/constants'
import './ScoreBoard.css'

export const ScoreBoard = ({ leads, attemps }) => {
    const [keyScoreNumber, setKeyScoreNumber] = useState(0);

    useEffect(() => {
        setKeyScoreNumber(keyScoreNumber + 1);
    }, [attemps]);

    const changeKeyScoreNumber = (name) => {
        return `score-${name}-${keyScoreNumber}`;
    }

    return (
        <article className='score-board'>
            {attemps === 0 ? <span className='score-number green'>-</span> : <span key={changeKeyScoreNumber('fame')} className='score-number green'>{leads?.fames}</span> }
            <span className='score-description green'>Right color, correct feature</span>
            {attemps === 0 ? <span className='score-number red'>-</span> : <span key={changeKeyScoreNumber('point')} className='score-number red'>{leads?.points}</span> }
            <span className='score-description red'>Right color, wrong feature</span>
            <span></span>
            <span className='score-attemps'>Attemps {attemps}/{MAX_ATTEMPS}</span>
        </article>
    )
}