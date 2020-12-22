import React, { Component } from 'react'
import '../../App.css';
import { GiRolledCloth } from 'react-icons/gi';
import { GiDress } from 'react-icons/gi';
import { FaTape} from 'react-icons/fa';
import { GiMagickTrick } from 'react-icons/gi';

export class CustomDesign extends Component {
  render() {
    return (
     
       



  <div className='customDisign'>
  <h2> About Custom Disign</h2>
  <h3> Here is how our custom design works</h3>

   <div className='cloth'>
     <div className='clothCircle'>
     <GiRolledCloth className='clothIcon'/> 
     </div>
   <h2> Pick a Cloth</h2>
   </div>
   <div className='style'>
     <div className='styleCircle'>
     <GiDress className='styleIcon'/>
     </div>
     <h2> Pick a Style</h2>
   </div>

  <div className='measurements'>
   <div className='measurementsCircle'>
   <FaTape className='measurementsIcon' />
   </div>
   <h2> Send in your Measurements</h2>
   </div>
   <div className='magick'>
   <div className='magickCircle'>
   <GiMagickTrick className='magickIcon'/>
   </div>
   <h2>Boom ! We Do The Magic</h2>
   </div>
</div>
     
    )
  }
}

export default CustomDesign

