import React from 'react'
import AboutUs from'../images/ecommerce marketing.webp'
const About = () => {
  return (
    <div>
    <div className="about-banner" style={{"marginTop":"150px"}}> </div>
    <div className="container-fluid about-container">
        <div className="container">
            <div className="content row">
                <div className="about-text col-md-6">
                    <h2 className="text-white">About Us</h2>
                    <p className="text-white">
                    That's not all. Not to be outdone, individual sellers have increasingly
                     engaged in ecommerce transactions via their own personal websites.
                      And digital marketplaces such as eBay or Etsy serve as exchanges where
                       multitudes of buyers and sellers come together to conduct business.
                    </p>
                    <p className="text-white">Electronic commerce ecommerce refers to companies and individuals 
                      that buy and sell goods and services over the Internet. Ecommerce 
                      operates in different types of market segments and can be conducted
                       over computers, tablets, smartphones, and other smart devices. 
                       Nearly every imaginable product and service is available through 
                       ecommerce transactions, including books, music, plane tickets,
                        and financial services such as stock investing and online banking. 
                        As such, it is considered a very disruptive technology.</p>
                    <button className="btn btn-primary">Contact</button>
                </div>
                <img
                    src={AboutUs}
                    alt="about-us"
                    className="img-fluid img-rounded col-md-6"
                />
            </div>
        </div>
    </div>
    <br></br>
    <br></br>
    <br></br>
    </div>
  )
}

export default About