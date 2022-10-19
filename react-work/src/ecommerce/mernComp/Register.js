import React, { useState } from 'react'
import Logo from './../images/logo.webp';
import 'react-notifications/lib/notifications.css';
import {NotificationManager} from "react-notifications"
import axios from 'axios'
const Register = () => {
  const [name, setName]= useState("");
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const [address, setAddress] = useState("");

  const signUp=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3001/api/user/register", {
    name: name,
    email: email, 
    password: password,
    address: address
  }).then(res=>{
      if(name=== "" || email=== "" || password=== "" || address=== ""){
    NotificationManager.error(`${res.data} `, "", 3000);
    }
    else if(res.data.message){ 
      NotificationManager.error(`${res.data} `, "error", 3000);
    }else{
      NotificationManager.success(`${res.data.email} is successfully registerd`, "", 3000)
      
      console.log(res.data.email);}
      
    //   NotificationManager.success("User registered successfully", "Success", 3000);
    // }
     //NotificationManager.success(`User ${email} is successfully register`, "", 5000)
   // console.log(res);
  }).catch(err=>{
     NotificationManager.error(err.response.data, "",3000)
    console.log(err.response.data);
  })
  }
  return (

  <section className="vh-80" style={{"marginTop":"80px"}} id="login">
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
          {/* 1. Add a form with a submit handler */}
                <form onSubmit={(e)=> signUp(e)}>

                  <div className="d-flex align-items-center mb-3 pb-1">                     
                    <img src={Logo} alt="logo of website" id="logo"/>
                  </div>

                  <h5 className="fw-normal mb-3 pb-3" style={{"letterSpacing": "1px","color":"black" }}>Register Here !!</h5>
                  
                  <div className="form-outline mb-4">
                    <input type="text" id="form2Example17" placeholder='Enter your full name' onChange={(e)=>setName(e.target.value)} value={name} className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form2Example17">Full Name</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="email" id="form3Example17" placeholder='Your email' onChange={(e)=> setEmail(e.target.value)} value={email} className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form3Example17">Email address</label>
                  </div>


                  <div className="form-outline mb-4">
                    <input type="password" id="form4Example27" onChange={(e)=> setPassword(e.target.value)} value={password} className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form4Example27">Password</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="text" id="form5Example17" placeholder='Your Address ' onChange={(e)=>setAddress(e.target.value)} value={address} className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form5Example17">Address</label>
                  </div>

                  <div className="pt-1 mb-4">
                    <button className="btn btn-dark btn-lg btn-block" id="btn" type="submit">SignUp</button>
                  </div>

                 
        
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

export default Register