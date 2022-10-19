import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'
import Logo from './../images/logo.webp'

const Login = () => {
  return (
    <section className="vh-70" style={{"marginTop":"80px"}} id="login">
    <div className="container py-5 h-70">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-xl-10">
          <div className="card" style={{"borderRadius": "1rem"}}>
            <div className="row g-0">
              <div className="col-md-6 col-lg-5 d-none d-md-block">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                  alt="login form" className="img-fluid" style={{"borderRadius": "1rem 0 0 1rem"}} />
              </div>
              <div className="col-md-6 col-lg-7 d-flex align-items-center">
                <div className="card-body p-4 p-lg-5 text-black">
  
                  <form >
  
                    <div className="d-flex align-items-center mb-3 pb-1">                     
                      <img src={Logo} alt="logo of website" id="logo"/>
                    </div>
  
                    <h5 className="fw-normal mb-3 pb-3" style={{"letterSpacing": "1px","color":"black" }}>Sign into your account</h5>
  
                    <div className="form-outline mb-4">
                      <input type="email" id="form2Example17" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form2Example17">Email address</label>
                    </div>
  
                    <div className="form-outline mb-4">
                      <input type="password" id="form2Example27" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form2Example27">Password</label>
                    </div>
  
                    <div className="pt-1 mb-4">
                      <button className="btn btn-dark btn-lg btn-block" type="button">Login</button>
                    </div>

                    <p className="mb-5 pb-lg-2" style={{"color": "#393f81"}}>Don't have an account? <Link to="/register"
                        style={{"color": "#393f81"}}>Register here</Link></p>
                    <Link to="#!" className="small text-muted">Terms of use.</Link>
                    <Link to="#!" className="small text-muted">Privacy policy</Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Login