import React from 'react'
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
    <nav className="navbar  bg-dark mb-2">
    <a class="navbar-brand" href="#">RRecords</a>
 <ul class="nav justify-content-end">
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