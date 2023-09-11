import './SelectionButtons.css'

const COLOR_CLASS = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

export const SelectionButtons = ({ handleButton, rows, cols }) => {

    const buttonGenerate = () => {
        const buttons = [];
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                buttons.push(
                    <button key={`btn-${row}-${col}`} className={`btn ${COLOR_CLASS[row]}`} onClick={() => handleButton(row, col)}></button>
                )
            }
        }
        return buttons;
    }

    return (
        <div className='selection'>
            <span>Hair</span>
            <span>Shirt</span>
            <span>Pants</span>
            <span>Shoes</span>

            {buttonGenerate()}

        </div>
    )
}