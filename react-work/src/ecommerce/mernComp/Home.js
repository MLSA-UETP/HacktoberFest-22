import React from 'react'
import { Link } from 'react-router-dom'
import Home1 from './../images/home1.png'
import Home3 from './../images/home3.jpeg'
import "./Home.css"
import mainLogo from './../images/logo.webp'
const Home = () => {
  return (
    <React.Fragment>
      <div className="d-flex text-center mb-3 pb-1">                     
         <img src={mainLogo} alt="logo of website" id="mainLogo1"/>
      </div>
    <div className="text-center mb-5" style={{"paddingTop":"60px", "marginTop":"30px"}}>
      
      <h1 className="text-white">Easily build and run your ecommerce website</h1>
      <p className="display-6 text-white">Everything you need to manage your beautiful,<br></br> fully-featured store.</p>
      <br></br>
      <br></br>
      <img src={Home1} alt="home page" id="img1"/>
      <br></br>
      <br></br>
      <div className="container-fluid" style={{ "width":"700px","textAlign":"center" }}>
      <h2 className="text-white">Your currency, tax rates and language</h2>
      <p className="text-white">
        Your store's online shopping cart is set 
        up to use your local currency.It automatically 
         calculates <br></br>tax rates based on where your business
          and buyers are located.You can also customize the 
          checkout page into <br></br>one of 50+ languages, or translate 
          the shopping cart checkout page yourself. Existing shopping
           cart checkout languages include:<br></br> Danish, Dutch, Spanish,
            French, German, Greek, Italian, Japanese, Portuguese,
             Chinese, Swedish, and others.
             </p>
             </div><br></br>
             <img src={Home3} alt="another home" id="img2"/>
    </div>
    <footer className="page-footer font-small mt-auto bg-dark ">
      <div className="footer-copyright text-center py-3 text-white">© 2022 Copyright:<br></br>
    <Link to="https://mail.google.com"> awaissaddiqui143@gamil.com</Link>
    
  </div>
      </footer>
    </React.Fragment>
  )
}

export default Home