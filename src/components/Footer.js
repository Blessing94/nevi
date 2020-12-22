import React, { Component } from 'react'
import './Footer.css';
import { ImFacebook2 } from 'react-icons/im'
import { FaWhatsappSquare } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { IoLogoWechat } from 'react-icons/io5'
           
           
export class Footer extends Component {
  constructor(props) {
    super(props);
    
    this.state = {email:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) { 
    this.setState({email: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className='footerCover'>
       <div className='subscribeCover'>
         <h2> SUBSCRIBE</h2>
         <p> Sign up to get the latest on sales, new releases and more...</p>
       <form>
        <label className='SubscribeEmail'>
          <input className='subscribeEmail' type="email" value={this.state.value} onChange={this.handleChange} placeholder='Enter your email address' />
        </label>
        <input type="submit" value="SIGN UP" className='subscribeBtn'/>
        </form>
       </div>
       <div className='footerInfo'>
         <div className='footerAbout'>
           <h2> ABOUT</h2>
           <p> Learn more about NEVI</p>
         </div>
         <div className='footerContact'>
           <h2> CONTACT US</h2>
            <p> 123-456-789 </p>
            <p> Monday - Sunday </p>
            <p> 10:00am - 5:00pm</p>
            <p> 890 Tingyue Rd, Shanghai </p>
         </div>
         <div className='footerPolicies'>
           <h2> POLICIES</h2>
            <p> Terms & Conditions </p>
            <p> Returns & Exchanges </p>
            <p> Shipping Policy </p>
         </div>
       </div>
       <div className='footerBottom'>
         <div className='social'>
          <h3> FOLLOW NEVI ON SOCIAL MEDIA</h3>
          <div className='socialIcons'>
            <ImFacebook2 className='facebookIcon'/>
            <FaWhatsappSquare className='whatsappIcon'/>
            <IoLogoWechat className='wechatIcon'/>
            <FaTwitterSquare className='twitterIcon'/>
          </div>
         </div>
         <div className='footerEnding'>
           <p>2020 N.E.V.IMPRESSIONS Designed by Blessed Designs
             Powered by Netlify.
           </p>
         </div>
       </div>
      </div>
    )
  }
}

export default Footer;

