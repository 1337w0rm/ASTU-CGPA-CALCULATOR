import React from 'react'
import '../styles/Home.css'

function Input({semester, name}) {
    return (
        <div>
            <div className="input-container ic1 flex-child">
                <input 
                    id={semester} 
                    className="input" 
                    type="number" 
                    max="10" 
                    min="0" 
                    step=".01" 
                    name={semester}
                />
                <div className="cut cut-short"></div>
                <label className="placeholder">{name} Semester</label>
            </div>
        </div>
    )
}

export default Input
