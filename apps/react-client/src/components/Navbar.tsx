import { Link } from 'react-router-dom'
import './Navbar.css'

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">🚀 Fuzzy Winner</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/users" className="nav-link">Users</Link>
      </div>
    </nav>
  )
}
