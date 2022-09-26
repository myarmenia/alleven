import React, {useState} from 'react'
import logo from "../logo.svg";
import header from './header.css';

function Header() {
    const [name, setName] = useState('projects') 
  return (
    <div className="Header">
        <header><p>Motorcycle</p></header> 
      <span>
        <img src={logo} className="App-logo" alt="logo" />
        <p className="Span-text">React App - {name}</p>
        <ul>
          <li><a onClick={(evt) => {
            setName(evt.target.innerHTML)
          }}>Home</a></li> 
          <li><a onClick={(evt) => {
            setName(evt.target.innerHTML)
          }}>News</a></li>
          <li><a onClick={(evt) => {
            setName(evt.target.innerHTML)
          }}>Contact</a></li>
        </ul>
      </span>
    </div>
  )
}

export default Header