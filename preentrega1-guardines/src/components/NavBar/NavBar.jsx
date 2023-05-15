import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import logoZapato from '../../img/logoZapato.jpg'

const NavBar = () => {
  return (
    <header>
        <div className='logo'>
            <h1 className='titulo'>En tus Pies</h1>
            <img className='imgZapato' src={logoZapato} alt="Zapato" />
        </div>
        
        
        

        <nav>
            <ul>
                <li>Botas</li>
                <li>Sandalias</li>
                <li>Zapatos</li>
                <li>Chatitas</li>
            </ul>
        </nav>

        <CartWidget/>

    </header>
  )
}

export default NavBar
