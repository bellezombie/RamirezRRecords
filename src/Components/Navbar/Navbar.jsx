import React from 'react'
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
    <nav className="navbar justify-content-end bg-dark mb-2">
 <ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Vinilos</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Contacto</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Nosotros</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">FAQ</a>
  </li>
</ul>
</nav>

    </div>
  )
}

export default Navbar