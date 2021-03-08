import React, { Component } from 'react'
import '../Pages.css';
import { GiRolledCloth } from 'react-icons/gi';
import { GiDress } from 'react-icons/gi';
import { FaTape} from 'react-icons/fa';
import { GiMagickTrick } from 'react-icons/gi';
import { CgArrowLongDownE } from 'react-icons/cg';

export class CustomDesign extends Component {
  render() {
    return (
     
  <div className='customDesign'>
  <div className='customHeader'>
  <img src={process.env.PUBLIC_URL + '/images/custom-img.jpg'} alt='#' />
  </div>
  <div className='designPath'>
  <h2> About Custom Design</h2>
  <h3> Here is how our custom design works</h3>

   <div className='cloth'>
     <div className='clothCircle'>
     <GiRolledCloth className='clothIcon'/> 
     </div>
   <h2> Pick a Cloth</h2>
   </div>

   <CgArrowLongDownE className='downArrow'/>

   <div className='style'>
     <div className='styleCircle'>
     <GiDress className='styleIcon'/>
     </div>
     <h2> Pick a Style</h2>
   </div>
   <CgArrowLongDownE className='downArrow'/>
  <div className='measurements'>
   <div className='measurementsCircle'>
   <FaTape className='measurementsIcon' />
   </div>
   <h2> Send in your Measurements</h2>
   </div>
   <CgArrowLongDownE className='downArrow'/>
   <div className='magick'>
   <div className='magickCircle'>
   <GiMagickTrick className='magickIcon'/>
   </div>
   <h2>Boom ! We Do The Magic</h2>
   </div>
   
</div>
<div className="customCards">
  <div className='whyWeRock'>
  <h1> WHY WE ROCK</h1>
  <p> Here is why our custom design rocks and our clients are alwasy satisfied</p>
  </div>
<div className='firstCustomCard'>
  <h2>Unique</h2>
  <p> All our merch is hand made to your specific design and 
    needs to give you that Unique look. With that you are garanteed to be the only person with that piece in the intire world.</p>
  <img src={process.env.PUBLIC_URL + '/images/c.jpg'} alt='#' />
  </div>

  <div className='secondCustomCard'>
  <h2>Customizable Designs</h2>
  <p> If you are finding it hard to come find the perfect design for 
    yourself, dont even worry, we have tones of customizable designs for you to choose from.
    </p>
  <img src={process.env.PUBLIC_URL + '/images/customizable-img.jpg'} alt='#' />
  </div>

  <div className='thirdCustomCard'>
  <h2>Perfect Sizes</h2>
  <p> Tired of buying clothes and they dont fit quite right ? We Got You.
    We make sure that every inch (length and width) fits your body shape.
  </p>
  <img src={process.env.PUBLIC_URL + '/images/perfectSize-img.jpg'} alt='#' />
  </div>

  <div className='fourthCustomCard'> 
  <h2>Service</h2>
  <p> Our pieces are made within reasonable time and are deliverd to your door 
    step the fastest way possible.
  </p>
  <img src={process.env.PUBLIC_URL + '/images/service-img.jpg'} alt='#' />
  </div>
</div>
</div>
     
    )
  }
}

export default CustomDesign

