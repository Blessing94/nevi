import React, { Component } from 'react'
import '../Pages.css';
import '../../App.css';

export class Accessories extends Component {
    render() {
        return (
            <div className='accessoriesPage'>
            <div className='customHeader'>
            <img src={process.env.PUBLIC_URL + '/images/custom-img.jpg'} alt='#' />
            </div>
            <div className='featuredProducts'>
                <div>
                  <h1> ACCESSORIES</h1>
                </div>
                <div className='productsGrid'>
                <div className='item1'> 
              <img src={ process.env.PUBLIC_URL + '/images/A17.jpg'} alt='#' className='item1Img'/>
              <h3> Tassel Earings</h3>
              <h3> Pearls & Kente </h3>
              <p> From RMB200</p>
              </div>
              <div className='item2'>
              <img src={ process.env.PUBLIC_URL + '/images/A16.jpg'}alt='#' className='item2Img'/>
              <h3> Tassel Necklace </h3>
              <h3> Pearls & Kente </h3>
              <p> From RMB200</p>
              </div>
              <div className='item3'>
              <img src={ process.env.PUBLIC_URL + '/images/A18.jpg'} alt='#' className='item3Img'/>
              <h3> Headband </h3>
              <h3> Matching Earings </h3>
              <p> From RMB200</p>
              </div>
              <div className='item4'>
              <img src={ process.env.PUBLIC_URL + '/images/A6.jpg'} alt='#' className='item4Img'/>
              <h3> Earmuffs</h3>
              <h3> Black & Kente </h3>
              <p> From RMB200</p>
              </div>    
              <div className='item5'> 
              <img src={ process.env.PUBLIC_URL + '/images/A5.jpg'} alt='#' className='item5Img'/>
              <h3> Glass Clutch</h3>
              <h3> Blue & Gold </h3>
              <p> From RMB200</p>
              </div>
              <div className='item6'>
              <img src={ process.env.PUBLIC_URL + '/images/A19.jpg'} alt='#' className='item6Img'/>
              <h3> Chocker & Earings</h3>
              <h3> Black & Blue</h3>
              <p> From RMB200</p>
              </div>
              <div className='item7'>
              <img src={ process.env.PUBLIC_URL + '/images/A8.jpg'} alt='#' className='item7Img'/>
              <h3> African Necklace</h3>
              <h3> Kente Fabric </h3>
              <p> From RMB200</p>
              </div>
              <div className='item8'>
              <img src={ process.env.PUBLIC_URL + '/images/A15.jpg'} alt='#' className='item8Img'/>
              <h3> Face Masks</h3>
              <h3> More instore</h3>
              <p> From RMB100</p>
              </div>
              <div className='item3'> 
              <img src={ process.env.PUBLIC_URL + '/images/A11.jpg'} alt='#' className='item1Img'/>
              <h3> Headband</h3>
              <h3> Customizable</h3>
              <p> From RMB100</p>
              </div>
              <div className='item4'>
              <img src={ process.env.PUBLIC_URL + '/images/A2.jpg'}alt='#' className='item2Img'/>
              <h3> Wood Clutch</h3>
              <h3> Purple </h3>
              <p> From RMB150</p>
              </div>  
              <div className='item5'>
              <img src={ process.env.PUBLIC_URL + '/images/W10.jpg'} alt='#' className='item7Img'/>
              <h3> Headwrap</h3>
              <h3> Multi Colored </h3>
              <p> From RMB100</p>
              </div>
              <div className='item6'>
              <img src={ process.env.PUBLIC_URL + '/images/W11.jpg'} alt='#' className='item8Img'/>
              <h3> Headwrap</h3>
              <h3> Multi Colored</h3>
              <p> From RMB100</p>
              </div>     
              <div className='item1'>
              <img src={ process.env.PUBLIC_URL + '/images/W12.jpg'} alt='#' className='item7Img'/>
              <h3> Headwrap</h3>
              <h3> Multi Colored </h3>
              <p> From RMB1000</p>
              </div>
              <div className='item2'>
              <img src={ process.env.PUBLIC_URL + '/images/W13.jpg'} alt='#' className='item8Img'/>
              <h3> Headwrap</h3>
              <h3> Multi Colored</h3>
              <p> From RMB100</p>
              </div>                    
                </div>
              </div>

            </div>
        )
    }
}

export default Accessories
