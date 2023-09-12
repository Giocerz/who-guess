import './Character.css'

export const Character = ({ colors}) => {
    return (
        <div className="character-container">
            <div className="head">
                <div className="hair" style={{ backgroundColor: colors['hair'] }}>
                </div>
                <div className="face">
                    <div className="eyes"></div>
                    <div className="eyes"></div>
                </div>
            </div>
            <div className="trunk">
                <div className="neck">

                </div>
                <div className="shirt" style={{ backgroundColor: colors['shirt'] }}>

                </div>
            </div>
            <div className="legs">
                <div className="leg left" style={{ backgroundColor: colors['legs'] }}></div>
                <div className="leg right" style={{ backgroundColor: colors['legs'] }}></div>
            </div>
            <div className='shoes'>
                <div className='shoe' style={{ backgroundColor: colors['shoes'] }}></div>
                <div className='shoe' style={{ backgroundColor: colors['shoes'] }}></div>
            </div>
        </div>
    )
}