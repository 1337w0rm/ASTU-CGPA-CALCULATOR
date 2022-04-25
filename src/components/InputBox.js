import React from 'react'
import Input from './Input'
import '../styles/Home.css'

function InputBox({sem1, sem2, name1, name2}) {
    return (
        <div>
            <div className="flex-container" >
                <Input semester={sem1} name={name1}/>
                <span className="gap"></span>
                <Input semester={sem2} name={name2}/>
            </div>
        </div>
    )
}

export default InputBox
