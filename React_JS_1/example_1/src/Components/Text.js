import React, {useState} from 'react'
import "./text.css";
function Text(props) {
   const [isText, setText] = useState(true)
    const text = props.text
    let max = 200
  return (
 
    <span>
      
    <p className="text">{isText ? `${text.substring(0,max)}...`: text}</p>
    <button onClick={()=>setText(!isText)}>Click</button>
    </span>
    
  )
}

export default Text