import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white">
  <div className="container-fluid">
    <Link to="/">
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOOhGZGdtW7UfZdBnvykM8af0hwe1eFQUH0g&usqp=CAU' width="70" height="70"/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">Inicio</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/catalogo">Catalogo</Link>
        </li>
        <li className="nav-item dropdown">
    <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="/categoria" role="button" aria-expanded="false">Categorias</Link>
    <ul className="dropdown-menu">
      <li><Link className="dropdown-item" to="/categoria/accion">Accion</Link></li>
      <li><Link className="dropdown-item" to="/categoria/aventura">Aventura</Link></li>
      <li><Link className="dropdown-item" to="/categoria/deporte">Deportes</Link></li>
    </ul>
  </li>
        
      </ul>
    </div>
    <CartWidget/>
  </div>
</nav>

  )
}

export default NavBar