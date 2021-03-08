import React, { Component } from 'react'
import '../Pages.css';
import '../../App.css';

export class Bags extends Component {
    render() {
        return (
            <div className='accessoriesPage'>
            <div className='customHeader'>
            <img src={process.env.PUBLIC_URL + '/images/a.jpg'} alt='#' />
            </div>
            <div className='featuredProducts'>
                <div>
                  <h1> BAGS </h1>
                </div>
                <div className='productsGrid'>
                <div className='item1'> 
              <img src={ process.env.PUBLIC_URL + '/images/B11.jpg'} alt='#' className='item1Img'/>
              <h3> Fanny pack</h3>
              <h3> Red & Black </h3>
              <p> From RMB100</p>
              </div>
              <div className='item2'>
              <img src={ process.env.PUBLIC_URL + '/images/B2.jpg'}alt='#' className='item2Img'/>
              <h3> Backpack</h3>
              <h3> Blue & White</h3>
              <p> From RMB200</p>
              </div>
              <div className='item3'>
              <img src={ process.env.PUBLIC_URL + '/images/B3.jpg'} alt='#' className='item3Img'/>
              <h3> Tote bag</h3>
              <h3> All colors available </h3>
              <p> From RMB150</p>
              </div>
              <div className='item4'>
              <img src={ process.env.PUBLIC_URL + '/images/B9.jpg'} alt='#' className='item4Img'/>
              <h3> Tote bag</h3>
              <h3> All colors available </h3>
              <p> From RMB150</p>
              </div>    
              <div className='item5'> 
              <img src={ process.env.PUBLIC_URL + '/images/B5.jpg'} alt='#' className='item5Img'/>
              <h3> Backpack</h3>
              <h3> Multi-Colored</h3>
              <p> From RMB150</p>
              </div>
              <div className='item6'>
              <img src={ process.env.PUBLIC_URL + '/images/B6.jpg'} alt='#' className='item6Img'/>
              <h3> Backpack</h3>
              <h3> Multi-colored</h3>
              <p> From RMB150</p>
              </div>
              <div className='item7'>
              <img src={ process.env.PUBLIC_URL + '/images/B7.jpg'} alt='#' className='item7Img'/>
              <h3> Kente Backpack</h3>
              <h3> Multi Colored </h3>
              <p> From RMB200</p>
              </div>
              <div className='item8'>
              <img src={ process.env.PUBLIC_URL + '/images/B8.jpg'} alt='#' className='item8Img'/>
              <h3> Tote bag</h3>
              <h3> Customizable</h3>
              <p> From RMB100</p>
              </div>           
                </div>
              </div>

            </div>
        )
    }
}

export default Bags
