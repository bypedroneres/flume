import React from 'react'
import "../components/Navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar_Content'>
        <div className='navbar_Logo'>

        </div>
        <div className='navbar_Items'>
            <p>Home</p>
            <p>Serviços</p>
            <p>Blog</p>
            <p>Contato</p>
            <p>Sobre nós</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
