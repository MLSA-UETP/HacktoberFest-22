import React from 'react'
import { BrowserRouter as Router , Routes , Route, Link } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import LogOut from './LogOut'
import Product from './Product'
import Products from './Products'
import About from './About'
import "./app.css"
import Error from './Error'
import { Navbar, Nav, Container} from 'react-bootstrap'
import { NotificationContainer } from 'react-notifications'

const App = () => {
  return (
        <div>
    <Router>
      <NotificationContainer/>
    <Navbar className="mb-5 fixed-top" variant="dark" bg="dark">
<Container>
<Nav className="me-auto">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link m-3" to="/home">Home</Link>
        <Link className="nav-link m-3" to="/product">Product</Link>
        <Link className="nav-link m-3" to="/products">Products</Link>
        <Link className="nav-link m-3" to="/about">About</Link>
        <Link className="nav-link m-3 btn btn-outline-success btn-sm" to="/login">Login</Link>
	    <Link className="nav-link m-3 btn btn-outline-info btn-sm" to="/register">Register</Link>      
	    <Link className="nav-link m-3 btn btn-outline-danger btn-sm" to="/logout">LogOut</Link>
    </div>
    </div>
  </div>
</Nav>
</Container>
</Navbar>

        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/logout" element={<LogOut/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
      
    </Router>       
    </div>
  )
}

export default App