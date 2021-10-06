import React, { useEffect, useRef, useState } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {

    const [open, setOpen] = useState(false) // to open or close the dropdown
    const ref = useRef()

    useEffect(() => {
        document.body.addEventListener('click', 
            () => { setOpen(false) },
            { capture: true }
        )
    }, [])

    const renderedOptions = options.map((option) => {
        
        if (option.value === selected.value) {
            return null
        }

        return(
            <div 
                key={option.value} 
                className="item"
                onClick={() => onSelectedChange(option)}
            >
                {option.label}
            </div>
        )
    })


    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="lable">Select a Color</label>
                <div 
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`} 
                    onClick={() => setOpen(!open)}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Dropdown