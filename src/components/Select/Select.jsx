/* eslint-disable no-unused-vars */
import './Select.scss'

// eslint-disable-next-line react/prop-types
const Select = ({ option1, option2, option3, option4 }) => {
    return (
        <div>

            <div className="select">
                <select id="standard-select">
                    <option value={option1}>{option1}</option>
                    <option value={option2}>{option2}</option>
                    <option value={option3}>{option3}</option>
                    <option value={option4}>{option4}</option>
                </select>
                <span className="focus"></span>
            </div>
        </div>
    );
};

export default Select;