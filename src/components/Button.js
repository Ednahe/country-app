import React, { useContext } from 'react'
import moonSvg from '../images/moon-regular.svg'
import whiteMoonSvg from '../images/moon-solid.svg'
import { ThemeContext } from '../context/ThemeContext'

export default function Button() {

    const {toggleTheme, theme} = useContext(ThemeContext)

    const main = document.getElementById('root')

    const mainDark = () => {
        main.style.backgroundColor = "rgb(32, 44, 54)"
        main.style.transition = "0.2s all ease-in-out"
    }

    const mainLight = () => {
        main.style.backgroundColor = "rgb(255, 255, 255)"
        main.style.transition = "0.2s all ease-in-out"
    }

  return (
    <span className="contain-img">
      <span onClick={toggleTheme}>
        <img className={theme ? "white-moon block" : "white-moon none"} onClick={mainDark} id="white-moon" src={moonSvg} alt="croissant de lune"/>
        <img className={theme ? "dark-moon none" : "dark-moon block"} onClick={mainLight} id="dark-moon" src={whiteMoonSvg} alt="croissant de lune"/>
      </span>
        <p className={theme ? 'color-light' : 'color-dark'}>Dark Mode</p>
    </span>
  )
}
