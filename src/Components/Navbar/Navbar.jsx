import React from 'react'
import "./Navbar.css"


const Navbar = () => {
  return (
    <div>
    <nav className="navbar  bg-dark mb-2">
    <a className='navbar-brand pt=4" href="#"'>RRecords</a>
 <ul className="nav justify-center">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">Vinilos</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Contacto</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Nosotros</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">FAQ</a>
  </li>
  
</ul>

{/* <div>
  <BsFillBasketFill/>
Cart</div> */}

</nav>

    </div>
  )
}

export default Navbar