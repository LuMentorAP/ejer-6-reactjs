import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to='/'>Te-Chomerce</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">ContactanosPricing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/all">Todos los Productos</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="/" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</Link>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="/">Action</Link>
                  <Link className="dropdown-item" to="/">Another action</Link>
                  <Link className="dropdown-item" to="/">Something else here</Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="/">Separated link</Link>
                </div>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-sm-2" type="search" placeholder="Search"/>
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    
    )
}