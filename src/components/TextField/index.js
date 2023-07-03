import { useState, useRef } from 'react'
import Send from '../../icons/Send'
import './style.css'

const TextField = ({ setQuestion }) => {
  const inputRef = useRef();
  return (
    <div className="text-field">
      <input ref={inputRef} onChange={(e) => {
        console.log(e.target.value);
      }}/>
      <Send onClick={() => {
        setQuestion(inputRef.current.value);
      }} />
    </div>
  )
}

export default TextField;
