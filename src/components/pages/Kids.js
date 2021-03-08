import React, { Component } from 'react';
import '../../App.css';
import '../Pages.css';

export class Kids extends Component {
    render() {
        return (
            <div className='accessoriesPage'>
            <div className='customHeader'>
            <img src={process.env.PUBLIC_URL + '/images/nevi-img.jpg'} alt='#' />
            </div>
            <div className='featuredProducts'>
                <div>
                  <h1> KIDS </h1>
                </div>
                <div className='productsGrid'> 
                <div className='item1'> 
              <img src={ process.env.PUBLIC_URL + '/images/K1.jpg'} alt='#' className='item1Img'/>
              <h3> Baby shorts</h3>
              <h3> Available for all ages </h3>
              <p> From RMB150</p>
              </div>
              <div className='item2'>
              <img src={ process.env.PUBLIC_URL + '/images/K2.jpg'}alt='#' className='item2Img'/>
              <h3> Baby Jumpsiut</h3>
              <h3> Available for all ages</h3>
              <p> From RMB150</p>
              </div>
              <div className='item3'>
              <img src={ process.env.PUBLIC_URL + '/images/K5.jpg'} alt='#' className='item3Img'/>
              <h3> Pull up Diaper</h3>
              <h3> With matching T-shirt </h3>
              <p> From RMB150</p>
              </div>
              <div className='item2'>
              <img src={ process.env.PUBLIC_URL + '/images/K4.jpg'}alt='#' className='item2Img'/>
              <h3> Baby skirt</h3>
              <h3> With matching T-shirt </h3>
              <p> From RMB150</p>
              </div>
              <div className='item3'>
              <img src={ process.env.PUBLIC_URL + '/images/K3.jpg'} alt='#' className='item3Img'/>
              <h3> Long pants</h3>
              <h3> Available for all ages</h3>
              <p> From RMB150</p>
              </div>
                </div>
              </div>

            </div>
        )
    }
}

export default Kids
