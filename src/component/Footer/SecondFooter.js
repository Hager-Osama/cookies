import React from 'react'
import footerImage1 from '../../images/LightiPhonew/footer.png'
import footerImage2 from '../../images/LightiPhonew/footerr.png'
import footerImage from '../../images/LightiPhonew/footerrr.png'
const SecondFooter = () => {
  return (
    <>
    <div className='Footer'>
        <div className='container'>
          <div className='borderLine'>
            <div className='row'>
                <div className=' col-lg-2 col-12 '>
                 <h4>Company</h4>
                 <ul>
                    <li className='nav-item'>
                        <a className='nav-link' href='/'>About us</a> 
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='/'>Team</a> 
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='/'>Careers</a> 
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='/'>Blog</a> 
                    </li>
                 </ul>
                </div>

                <div className='col-lg-2 col-12'>
                <h4>Contact</h4>
                 <ul>
                    <li className='nav-item'>
                        <a className='nav-link' href='/'>Help & Support</a> 
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='/'>Partner with us </a> 
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='/'>Ride with us</a> 
                    </li>
                 </ul>
                </div>

                <div className=' col-lg-5 col-12'>
                <h4>Legal</h4>
                <ul>
                    <li className='nav-item'>
                        <a className='nav-link' href='/'>Terms & Conditions</a> 
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='/'>Refund & Cancellation </a> 
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='/'>Privacy Policy</a> 
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='/'>Cookie Policy</a> 
                    </li>
                 </ul>
                </div>

                <div className=' col-lg-3 col-12 Second'>
                <h4>Follow Us</h4>
                 <div className='footer-icons'>
                  <img src={footerImage1}/><img src={footerImage2}/><img src={footerImage}/>
                </div>
                <h5 style={{color:'#B2B2B2'}}>Receive exclusive offers in your mailbox</h5>
                <form>
                <div class="form-group">
                  <input type="email" class="" id="example"
                  aria-describedby="emailHelp" placeholder="Enter email"/>
                  <button type="submit" class="btnn">Subscribe</button>
                </div>
               
                </form>
                </div>              
            </div>
        </div>
      </div>
    </div>
    <div className='CopyRight'>
    <div className='container '>
        <div className='d-flex justify-content-between ' style={{color:'white'}}>
            <h5>All rights Reserved  &copy; Your Company, 2021</h5>
            <h5>Made with <span> &hearts;</span>	 by Hager El-sha3er</h5>
        </div>
        </div>

    </div>
    </>
    
  )
}

export default SecondFooter
