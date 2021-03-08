import React from 'react';
import '../../App.css';
import '../Pages.css';

export default function Pants() {
  return  <div className='accessoriesPage'>
  <div className='customHeader'>
  <img src={process.env.PUBLIC_URL + '/images/custom-img.jpg'} alt='#' />
  </div>
  <div className='featuredProducts'>
      <div>
        <h1> PANTS </h1>
      </div>
      <div className='productsGrid'>
      <div className='item1'> 
    <img src={ process.env.PUBLIC_URL + '/images/P8.jpg'} alt='#' className='item1Img'/>
    <h3> Jogger Pants</h3>
    <h3> Black & Kente strip</h3>
    <p> From RMB250</p>
    </div>
    <div className='item2'>
    <img src={ process.env.PUBLIC_URL + '/images/P3.jpg'}alt='#' className='item2Img'/>
    <h3> Women Pants</h3>
    <h3> Multi Colored </h3>
    <p> From RMB200</p>
    </div>
    <div className='item3'>
    <img src={ process.env.PUBLIC_URL + '/images/P4.jpg'} alt='#' className='item3Img'/>
    <h3> Jogger Pants</h3>
    <h3> White & Kente cloth</h3>
    <p> From RMB250</p>
    </div>
    <div className='item4'>
    <img src={ process.env.PUBLIC_URL + '/images/P5.jpg'} alt='#' className='item4Img'/>
    <h3> Formal pants</h3>
    <h3> Multi Colored </h3>
    <p> From RMB250</p>
    </div>    
    <div className='item5'> 
    <img src={ process.env.PUBLIC_URL + '/images/P6.jpg'} alt='#' className='item5Img'/>
    <h3> Women Pants</h3>
    <h3> Multi Colored </h3>
    <p> From RMB200</p>
    </div>
    <div className='item6'>
    <img src={ process.env.PUBLIC_URL + '/images/P7.jpg'} alt='#' className='item6Img'/>
    <h3> Pants </h3>
    <h3> Multi Colored </h3>
    <p> From RMB250</p>
    </div>
    <div className='item7'>
    <img src={ process.env.PUBLIC_URL + '/images/P1.jpg'} alt='#' className='item7Img'/>
    <h3> Women Pants </h3>
    <h3> Customizable </h3>
    <p> From RMB200</p>
    </div>
    <div className='item8'>
    <img src={ process.env.PUBLIC_URL + '/images/P2.jpg'} alt='#' className='item8Img'/>
    <h3> Women Pants</h3>
    <h3> Multi Colored </h3>
    <p> From RMB200</p>
    </div>           
      </div>
    </div>

  </div>
}
