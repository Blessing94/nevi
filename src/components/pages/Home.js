import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../App.css';
import { Link } from 'react-router-dom'



export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {name: ''};
    this.state = {email: ''};
    this.state = {messege: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({name: event.target.value});
    this.setState({email: event.target.value});
    this.setState({messege: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    var settings = {
        infinite: true,
        speed: 500,
        autoplay: true,
        initialSlide: 2,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
              
            }
          }
        ]
    };
    var config = {
      arrows: false,
      fade: true,
      infinite: true,
      speed: 2000,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      centerMode: true,
      centerPadding: '0px',
      focusOnSelect: true,
      slidesToScroll: 1
  };
  

   return (
     <>
   <div className='body'>
       
        <Slider {...settings} className='slider'>
          <div className='image1'>  
          <img src={process.env.PUBLIC_URL + '/images/img-1.jpg'} alt='#' />
          </div>
          <div className='image2'> 
          <img src={process.env.PUBLIC_URL + '/images/img-2.jpg'} alt='#' />
          </div>
          <div className='image3'> 
          <img src={process.env.PUBLIC_URL + '/images/img-3.jpg'} alt='#'/>
          </div>
          <div className='image4'> 
          <img src={process.env.PUBLIC_URL + '/images/img-4.jpg'} alt='#' />
          </div>
        </Slider>

       
          <div className='welcome'>
            <h1> Welcome To NeVI</h1>
            <p> NeVi designs and clothing arena is an all-inclusive store and
              Fashion hub for African print designs across diverse cultures.
              NeVI-Glow for the people.
            </p>
            <Link to='/About'>
            <button className='firstBtn'> Read More</button>
            </Link>
          </div>
          
          <div className='shopbyCollection'>
            <h1> Shop By Collection</h1>
            <div className='theCollection'>
             
              
              <div className='women'> 
              <Link to='/Women'>
             <img src={ process.env.PUBLIC_URL + '/images/edited-img-2.jpg'} alt='#' className='womenImg'/>
             </Link>
             </div>
            

            
              <div className='man'>
              <Link to='/Man'>
              <img src={ process.env.PUBLIC_URL + '/images/man-Img.jpg'} alt='#' className='manImg'/>
              </Link>
              </div>

             
              <div className='kids'>
              <Link to='/Kids'>
              <img src={ process.env.PUBLIC_URL + '/images/kids-Img.jpg'} alt='#' className='kidsImg'/>
              </Link>
              </div>
             

             
              <div className='accessories'>
              <Link to='./Accessories'>
              <img src={ process.env.PUBLIC_URL + '/images/accessories-Img.jpg'} alt='#' className='accesoriesImg'/>
              </Link>  
              </div>         
              
            </div>
            </div>
          
              <div className='featuredProducts'>
                <div>
                  <h1> Featured Products </h1>
                </div>
                <div className='productsGrid'>
                <div className='item1'> 
              <img src={ process.env.PUBLIC_URL + '/images/img-5.jpg'} alt='#' className='item1Img'/>
              <h3> Kente fabric</h3>
              <h3> Multi Colored </h3>
              <p> From RMB200</p>
              </div>
              <div className='item2'>
              <img src={ process.env.PUBLIC_URL + '/images/img-6.jpg'}alt='#' className='item2Img'/>
              <h3> Kente fabric</h3>
              <h3> Multi Colored </h3>
              <p> From RMB200</p>
              </div>
              <div className='item3'>
              <img src={ process.env.PUBLIC_URL + '/images/img-7.jpg'} alt='#' className='item3Img'/>
              <h3> Kente fabric</h3>
              <h3> Multi Colored </h3>
              <p> From RMB200</p>
              </div>
              <div className='item4'>
              <img src={ process.env.PUBLIC_URL + '/images/img-8.jpg'} alt='#' className='item4Img'/>
              <h3> Kente fabric</h3>
              <h3> Multi Colored </h3>
              <p> From RMB200</p>
              </div>    
              <div className='item5'> 
              <img src={ process.env.PUBLIC_URL + '/images/img-9.jpg'} alt='#' className='item5Img'/>
              <h3> Kente fabric</h3>
              <h3> Multi Colored </h3>
              <p> From RMB200</p>
              </div>
              <div className='item6'>
              <img src={ process.env.PUBLIC_URL + '/images/img-10.jpg'} alt='#' className='item6Img'/>
              <h3> Kente fabric</h3>
              <h3> Multi Colored </h3>
              <p> From RMB200</p>
              </div>
              <div className='item7'>
              <img src={ process.env.PUBLIC_URL + '/images/img-11.jpg'} alt='#' className='item7Img'/>
              <h3> Kente fabric</h3>
              <h3> Multi Colored </h3>
              <p> From RMB200</p>
              </div>
              <div className='item8'>
              <img src={ process.env.PUBLIC_URL + '/images/img-12.jpg'} alt='#' className='item8Img'/>
              <h3> Kente fabric</h3>
              <h3> Multi Colored </h3>
              <p> From RMB200</p>
              </div>           
                </div>
              </div>

              <div className='aboutCustomDesign'>
                <h1> ABOUT OUR CUSTOM DESIGNS</h1>
                <p> Most of our clothes are custom made to fit ypur specific
                  needs and designs. We cater for people of all sizes and shapes 
                  and work hand in hand with our customers to give them the design of their choice
                </p>
                <Link to='./custom-design'>
                <button className='aboutCustomDesignBtn'> Learn More</button>
                </Link>
                </div>

             <div className='winterCollection'>
               <div>
                 <h1>WINTER COLLECTION </h1>
               </div>
             <div className='productsGrid'>
                <div className='item1'> 
              <img src={ process.env.PUBLIC_URL + '/images/img-15.jpg'} alt='#' className='item1Img'/>
              <h3> Kente fabric</h3>
              <h3> Multi Colored </h3>
              <p> From RMB200</p>
              </div>
              <div className='item2'>
              <img src={ process.env.PUBLIC_URL + '/images/img-17.jpg'} alt='#' className='item2Img'/>
              <h3> Kente fabric</h3>
              <h3> Multi Colored </h3>
              <p> From RMB200</p>
              </div>
              <div className='item3'>
              <img src={ process.env.PUBLIC_URL + '/images/img-18.jpg'} alt='#' className='item3Img'/>
              <h3> Kente fabric</h3>
              <h3> Multi Colored </h3>
              <p> From RMB200</p>
              </div>
              <div className='item4'>
              <img src={ process.env.PUBLIC_URL + '/images/img-20.jpg'} alt='#' className='item4Img'/>
              <h3> Kente fabric</h3>
              <h3> Multi Colored </h3>
              <p> From RMB200</p>
              </div>    
              <div className='item5'> 
              <img src={ process.env.PUBLIC_URL + '/images/img-20.jpg'} alt='#' className='item5Img'/>
              <h3> Kente fabric</h3>
              <h3> Multi Colored </h3>
              <p> From RMB200</p>
              </div>
              <div className='item6'>
              <img src={ process.env.PUBLIC_URL + '/images/img-21.jpg'} alt='#' className='item6Img'/>
              <h3> Kente fabric</h3>
              <h3> Multi Colored </h3>
              <p> From RMB200</p>
              </div>
             
                </div>
             </div>
        <div className='customerReviews'>
           <h1> Customer Reviews</h1>
           <p>Hear what some of our customers had to say about our products</p>
        </div>
        <Slider {...config} className='secondSlider'>
          <div className='card1'>  
          <img src={ process.env.PUBLIC_URL + '/images/img-1.jpg'} alt='#' />
            <h3> Blessing</h3>
            <p><i> "Hi, i liked the pants very much, they fit fine and the fabric is amazing
              . im going to be wearing this evry single day, to Church, work, the bar you name import PropTypes from 'prop-types'
              thanks very much."</i></p>
          </div>
          <div className='card2'> 
          <img src={ process.env.PUBLIC_URL + '/images/img-2.jpg'} alt='#' />
          <h3> Christin</h3>
            <p><i> "Hi, i liked the pants very much, they fit fine and the fabric is amazing
              . im going to be wearing this evry single day, to Church, work, the bar you name import PropTypes from 'prop-types'
              thanks very much."</i></p>
          </div>
          <div className='card3'> 
          <img src={ process.env.PUBLIC_URL + '/images/img-3.jpg'} alt='#'/>
          <h3> Simba</h3>
            <p><i> "Hi, i liked the pants very much, they fit fine and the fabric is amazing
              . im going to be wearing this evry single day, to Church, work, the bar you name import PropTypes from 'prop-types'
              thanks very much."</i></p>
          </div>
          <div className='card4'> 
          <img src={ process.env.PUBLIC_URL + '/images/img-4.jpg'} alt='#' />
          <h3> Dru</h3>
            <p><i> "Hi, i liked the pants very much, they fit fine and the fabric is amazing
              . im going to be wearing this evry single day, to Church, work, the bar you name import PropTypes from 'prop-types'
              thanks very much."</i></p>
          </div>
        </Slider>
       <div className='contactNeviCover'>
          <div className='contactNevih1'>
            <h1> CONTACT NEVI</h1>
          </div>
         <div className='contactNevi'>
         <h3> FOR BOOKINGS AND APPOINTMENTS</h3>
         <form className='contactForm' onSubmit={this.handleSubmit}>
           <div>
        <label className='nameLabel'>
          <h4>NAME*</h4>
          <input className='nameInput' type="text" value={this.state.value} onChange={this.handleChange} placeholder='Name' />
        </label>
        </div>
        <div>
        <label className='emailLabel'>
          <h4>EMAIL*</h4>
          <input className='emailInput' type="email" value={this.state.value} onChange={this.handleChange} placeholder='Email' />
        </label>
        </div>
        <div>
        <label className='massegeLabel'>
          <h4>MESSEGE*</h4>
          <textarea className='messegeInput' type='text' value={this.state.value} onChange={this.handleChange} placeholder='Messege' />
        </label>
        </div>
        <input type="submit" value="SEND" className='contactBtn'/>
      </form>
         </div>
       </div>
    </div>
 </>
 )
    
    
  }
}

export default Home

