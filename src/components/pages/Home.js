import React, { Component } from 'react'
import emailjs from 'emailjs-com';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../App.css';
import { Link } from 'react-router-dom'
import{ init } from 'emailjs-com';
init("user_2eKXjak4hBUoPQ4KYCpmr");



export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {name: ''};
    this.state = {email: ''};
    this.state = {messege: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   
  }
  git
  

  handleChange(event) {
    this.setState({name: event.target.value});
    this.setState({email: event.target.value});
    this.setState({messege: event.target.value});
  }
  handleSubmit(event) {
  event.preventDefault();
  } 
  
  render() {

    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('service_wpctv7p', 'template_9by1yjq', e.target, 'user_2eKXjak4hBUoPQ4KYCpmr')
        .then((result) => {
            console.log(result.text);
            alert("message sent")
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
   
   
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
          <img src={process.env.PUBLIC_URL + '/images/slider-img1.jpg'} alt='#' />
          </div>
          <div className='image2'> 
          <img src={process.env.PUBLIC_URL + '/images/slider-img2.jpg'} alt='#' />
          </div>
          <div className='image3'> 
          <img src={process.env.PUBLIC_URL + '/images/slider-img3.jpg'} alt='#'/>
          </div>
          <div className='image4'> 
          <img src={process.env.PUBLIC_URL + '/images/slider-img4.jpg'} alt='#' />
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
              <h3> Women's Vest</h3>
              <h3> Multi Colored</h3>
              <p> From RMB350</p>
              </div>
              <div className='item2'>
              <img src={ process.env.PUBLIC_URL + '/images/img-6.jpg'}alt='#' className='item2Img'/>
              <h3> Matching bed set</h3>
              <h3> Bannet & Slippers </h3>
              <p> From RMB200</p>
              </div>
              <div className='item3'>
              <img src={ process.env.PUBLIC_URL + '/images/img-7.jpg'} alt='#' className='item3Img'/>
              <h3> Infinity dress</h3>
              <h3> Kente Cloth </h3>
              <p> From RMB350</p>
              </div>
              <div className='item4'>
              <img src={ process.env.PUBLIC_URL + '/images/img-8.jpg'} alt='#' className='item4Img'/>
              <h3> 2 Piece set</h3>
              <h3> Multi Colored </h3>
              <p> From RMB250</p>
              </div>    
              <div className='item5'> 
              <img src={ process.env.PUBLIC_URL + '/images/img-9.jpg'} alt='#' className='item5Img'/>
              <h3> Matching shorts</h3>
              <h3> Mom & Baby </h3>
              <p> From RMB150</p>
              </div>
              <div className='item6'>
              <img src={ process.env.PUBLIC_URL + '/images/img-10.jpg'} alt='#' className='item6Img'/>
              <h3> Printed Airforce 1</h3>
              <h3> Love the culture </h3>
              <p> From RMB250</p>
              </div>
              <div className='item7'>
              <img src={ process.env.PUBLIC_URL + '/images/img-11.jpg'} alt='#' className='item7Img'/>
              <h3> 3 Way dress</h3>
              <h3> Versitile style </h3>
              <p> From RMB200</p>
              </div>
              <div className='item8'>
              <img src={ process.env.PUBLIC_URL + '/images/img-12.jpg'} alt='#' className='item8Img'/>
              <h3> 3 Piece Bikini</h3>
              <h3> Kente cloth </h3>
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
              <h3> Nevi Hoodie</h3>
              <h3> Black & Orange</h3>
              <p> From RMB150</p>
              </div>
              <div className='item2'>
              <img src={ process.env.PUBLIC_URL + '/images/img-17.jpg'} alt='#' className='item2Img'/>
              <h3> Winter Coat</h3>
              <h3> Kente strip</h3>
              <p> From RMB200</p>
              </div>
              <div className='item3'>
              <img src={ process.env.PUBLIC_URL + '/images/img-18.jpg'} alt='#' className='item3Img'/>
              <h3> Nevi Fair Wrap</h3>
              <h3> Multi Colored </h3>
              <p> From RMB150</p>
              </div>
              <div className='item4'>
              <img src={ process.env.PUBLIC_URL + '/images/img-19.jpg'} alt='#' className='item4Img'/>
              <h3> Lapel Kimono</h3>
              <h3> Multi Colored </h3>
              <p> From RMB250</p>
              </div>    
              <div className='item5'> 
              <img src={ process.env.PUBLIC_URL + '/images/img-20.jpg'} alt='#' className='item5Img'/>
              <h3> Nevi Beanies</h3>
              <h3> Multi Colored </h3>
              <p> From RMB100</p>
              </div>
              <div className='item6'>
              <img src={ process.env.PUBLIC_URL + '/images/img-21.jpg'} alt='#' className='item6Img'/>
              <h3> Nevi Fair Wrap</h3>
              <h3> Multi Colored </h3>
              <p> From RMB150</p>
              </div>
             
                </div>
             </div>
        <div className='customerReviews'>
           <h1> Customer Reviews</h1>
           <p>Hear what some of our customers had to say about our products</p>
        </div>
        <Slider {...config} className='secondSlider'>
          <div className='card1'>  
          <img src={ process.env.PUBLIC_URL + '/images/client2.jpg'} alt='#' />
            <h3> Khay</h3>
            <p><i> "Hi, i liked the pants very much, they fit fine and the fabric is amazing
              . im going to be wearing this evry single day, to Church, work, the bar you name it.
              thanks very much."</i></p>
          </div>
          <div className='card2'> 
          <img src={ process.env.PUBLIC_URL + '/images/client6.jpg'} alt='#' />
          <h3> Noslei</h3>
            <p><i> "thanks NeVI. My pants are wow, everyone loves it
            even my dad's cats lol. Keep making us look good."</i></p>
          </div>
          <div className='card3'> 
          <img src={ process.env.PUBLIC_URL + '/images/client9.jpg'} alt='#'/>
          <h3> Latoya</h3>
            <p><i> Girl my outfit, im speechless, i love them. Thank you so much Nevi.
              </i></p>
          </div>
          <div className='card4'> 
          <img src={ process.env.PUBLIC_URL + '/images/client3.jpg'} alt='#' />
          <h3> Sere </h3>
            <p><i> 
            "I absolutely love shopping with Nevi, the customer service
              is amazing and dont get me started on the quality. Impressive. Thanks Nevi. "
              </i></p>
          </div>
          <div className='card1'>  
          <img src={ process.env.PUBLIC_URL + '/images/client8.jpg'} alt='#' />
            <h3> Lungile </h3>
            <p><i> "Heyy Ahoufe i really hope you are doing well. i just wanted to
              show you how great i looked in one of the dresses you gave me, i mean i was
              stealing attention haha and getting so many compliments on the dress!
              You do some really great work."</i></p>
          </div>
          <div className='card2'> 
          <img src={ process.env.PUBLIC_URL + '/images/client7.jpg'} alt='#' />
          <h3> Kiki</h3>
            <p><i> "Thank you so much the kimono is gorgeous. 
              Will wear it everyday 😂. Telling my friends about you now .."</i></p>
          </div>
          <div className='card3'> 
          <img src={ process.env.PUBLIC_URL + '/images/client4.jpg'} alt='#'/>
          <h3> Julie</h3>
            <p><i>"Hi NeVI my friend got my birthday dress from you and I must say you are talented. 
              Thank you so so much. 
              I was the highlight of the day. You made this birthday a memorable one. ❤️ " </i></p>
          </div>
          <div className='card4'> 
          <img src={ process.env.PUBLIC_URL + '/images/client5.jpg'} alt='#' />
          <h3> Corey</h3>
            <p><i> "My Kimono at school was lit. The kids kept commenting on how cool it looked
              and got the loudest wow i have ever heard from my Principal. He realy adored it.
              i cannot wait for my next one."</i></p>
          </div>
          <div className='card4'> 
          <img src={ process.env.PUBLIC_URL + '/images/client1.jpg'} alt='#' />
          <h3> Osmex</h3>
            <p><i> "Thank you so much NeVI for making my birthday a beautiful one.
               My dress is so pretty and fits so well. You are an angel."</i></p>
          </div>
        </Slider>
       <div className='contactNeviCover'>
          <div className='contactNevih1'>
            <h1> CONTACT NEVI</h1>
          </div>
         <div className='contactNevi'>
         <h3> FOR BOOKINGS AND APPOINTMENTS</h3>
         <form className='contactForm' onSubmit={sendEmail}>
           <div>
        <label className='nameLabel'>
          <h4>NAME*</h4>
          <input className='nameInput' type="text" value={this.state.value} onChange={this.handleChange} placeholder='Name' name='name'/>
        </label>
        </div>
        <div>
        <label className='emailLabel'>
          <h4>EMAIL*</h4>
          <input className='emailInput' type="email" value={this.state.value} onChange={this.handleChange} placeholder='Email' name='email' />
        </label>
        </div>
        <div>
        <label className='massegeLabel'>
          <h4>MESSEGE*</h4>
          <textarea className='messegeInput' type='text' value={this.state.value} onChange={this.handleChange} placeholder='Messege' name='message'/>
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

