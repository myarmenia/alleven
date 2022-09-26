import React from 'react'
import logo from "../logo.svg";
import content from './content.css'
function Content() {
  return (
    <div className="Content">
      <img src={logo} className="App-logo" alt="logo" />
      <p>APP</p>
      <p className="p">React</p>
      <ul>
        <li><a>Home</a></li>
        <li><a>Products</a></li>
        <li><a>About</a></li>
        <li><a>Contact</a></li>
        <li><a>Services</a></li>
      </ul>
      <ul>
        <li><a>Socials</a></li>
        <li><a>Facebook</a></li>
        <li><a>Twitter</a></li>
        <li><a>Instagram</a></li>
        <li><a>Youtube</a></li>
      </ul>
  </div>
  )
}

export default Content