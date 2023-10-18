import './Checkbox.scss'

const Checkbox = () => {
    return (
        <div>
            <label className="mcui-checkbox">
                <input type="checkbox" />
                <div>
                    <svg className="mcui-check" viewBox="-2 -2 35 35" aria-hidden="true">
                        <title>checkmark-circle</title>
                        <polyline points="7.57 15.87 12.62 21.07 23.43 9.93" />
                    </svg>
                </div>
                <div>Unchecked</div>
            </label>
        </div>
    );
};

export default Checkbox;