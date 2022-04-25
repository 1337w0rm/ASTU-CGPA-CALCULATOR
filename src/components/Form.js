import React from 'react'
import InputBox from './InputBox'

const Form = () => {
  return (
    <div>
        <InputBox sem1="one" sem2="two" name1="1st" name2="2nd"/>
        <InputBox sem1="three" sem2="four" name1="3rd" name2="4th"/>
        <InputBox sem1="five" sem2="six" name1="5th" name2="6th"/>
        <InputBox sem1="seven" sem2="eight" name1="7th" name2="8th"/>
        <button type="text" className="submit" >Submit</button>
    </div>
  )
}

export default Form