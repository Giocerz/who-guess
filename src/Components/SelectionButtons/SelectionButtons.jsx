import './SelectionButtons.css'
import { COLORS_LIST } from '../../logic/constants';

export const SelectionButtons = ({ handleButton, rows, cols, color_list }) => {

    const buttonGenerate = () => {
        const buttons = [];
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                buttons.push(
                    <button key={`btn-selection-${row}-${col}`} title={`btn-selection-${row}-${col}`} className='btn' style={{ backgroundColor: color_list[row] }} onClick={() => handleButton(row, col)}></button>
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