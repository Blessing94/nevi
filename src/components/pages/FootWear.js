import React, { Component } from 'react'
import '../../App.css';
import '../Pages.css';

export class FootWear extends Component {
    render() {
        return (
            <div className='accessoriesPage'> 
            <div className='customHeader'>
            <img src={process.env.PUBLIC_URL + '/images/sewingMachine-img.jpg'} alt='#' />
            </div>
            <div className='featuredProducts'>
                <div>
                  <h1> FOOTWEAR </h1>
                </div>
                <div className='productsGrid'>
                <div className='item1'> 
              <img src={ process.env.PUBLIC_URL + '/images/F1.jpg'} alt='#' className='item1Img'/>
              <h3> Slippers</h3>
              <h3> In all colores </h3>
              <p> From RMB150</p>
              </div>
              <div className='item2'>
              <img src={ process.env.PUBLIC_URL + '/images/F2.jpg'}alt='#' className='item2Img'/>
              <h3> Kente Slippers</h3>
              <h3> Multi Colored </h3>
              <p> From RMB150</p>
              </div>
              <div className='item3'>
              <img src={ process.env.PUBLIC_URL + '/images/F3.jpg'} alt='#' className='item3Img'/>
              <h3> Black AirForce1</h3>
              <h3> Customizable</h3>
              <p> From RMB250</p>
              </div>
              <div className='item4'>
              <img src={ process.env.PUBLIC_URL + '/images/F4.jpg'} alt='#' className='item4Img'/>
              <h3> Slippers</h3>
              <h3> Multi Colored </h3>
              <p> From RMB150</p>
              </div>    
              <div className='item5'> 
              <img src={ process.env.PUBLIC_URL + '/images/F5.jpg'} alt='#' className='item5Img'/>
              <h3> Slippers</h3>
              <h3> Multi Colored </h3>
              <p> From RMB150</p>
              </div>
              <div className='item6'>
              <img src={ process.env.PUBLIC_URL + '/images/img-10.jpg'} alt='#' className='item6Img'/>
              <h3> White AirForce1</h3>
              <h3> Customizable</h3>
              <p> From RMB250</p>
              </div>
              
                </div>
              </div>

            </div>
        )
    }
}

export default FootWear
