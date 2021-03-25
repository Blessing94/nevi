import React from 'react';
import '../../App.css';
import '../Pages.css';

export default function HeadWear() {
  return (
    <>
     <div className='accessoriesPage'>
            <div className='customHeader'>
            <img src={process.env.PUBLIC_URL + '/images/custom-img.jpg'} alt='#' />
            </div>
            <div className='featuredProducts'>
                <div>
                  <h1> HEADWEAR </h1>
                </div>
                <div className='productsGrid'>
                <div className='item1'> 
              <img src={ process.env.PUBLIC_URL + '/images/headwear-img.jpg'} alt='#' className='item1Img'/>
              <h3> Bonnets</h3>
              <h3> Multi Colored </h3>
              <p> From RMB150</p>
              </div>
              <div className='item2'>
              <img src={ process.env.PUBLIC_URL + '/images/headwear2-img.jpg'}alt='#' className='item2Img'/>
              <h3> Fedora hat</h3>
              <h3> Brown </h3>
              <p> From RMB150</p>
              </div>
              <div className='item3'>
              <img src={ process.env.PUBLIC_URL + '/images/headwear3-img.jpg'} alt='#' className='item3Img'/>
              <h3> Bonnet & Slippers</h3>
              <h3> Floral</h3>
              <p> From RMB250</p>
              </div>
              <div className='item4'>
              <img src={ process.env.PUBLIC_URL + '/images/headwear4-img.jpg'} alt='#' className='item4Img'/>
              <h3> Silk Bonnets</h3>
              <h3> customizable </h3>
              <p> From RMB150</p>
              </div>    
              <div className='item5'> 
              <img src={ process.env.PUBLIC_URL + '/images/headwear5-img.jpg'} alt='#' className='item5Img'/>
              <h3> Silk Bonnet</h3>
              <h3> Red </h3>
              <p> From RMB150</p>
              </div>
              <div className='item6'>
              <img src={ process.env.PUBLIC_URL + '/images/img-20.jpg'} alt='#' className='item6Img'/>
              <h3> Wool Beanie</h3>
              <h3> In All colors  </h3>
              <p> From RMB100</p>
              </div>
              
                </div>
              </div>

            </div>
    </>
  );
}
