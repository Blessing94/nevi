import React, { Component } from 'react'
import '../../App.css';
import '../Pages.css';

export class Women extends Component {
    render() {
        return (
            <div className='accessoriesPage'>
            <div className='customHeader'>
            <img src={process.env.PUBLIC_URL + '/images/womenCover.jpg'} alt='#' />
            </div>
            <div className='featuredProducts'>
                <div>
                  <h1> WOMEN </h1>
                </div>
                <div className='productsGrid'>
                <div className='item1'> 
              <img src={ process.env.PUBLIC_URL + '/images/W1.jpg'} alt='#' className='item1Img'/>
              <h3> Half Jacket</h3>
              <h3> Customizable</h3>
              <p> From RMB250</p>
              </div>
              <div className='item2'>
              <img src={ process.env.PUBLIC_URL + '/images/W2.jpg'}alt='#' className='item2Img'/>
              <h3> Wrap top</h3>
              <h3> Multi Colored </h3>
              <p> From RMB250</p>
              </div>
              <div className='item3'>
              <img src={ process.env.PUBLIC_URL + '/images/W7.jpg'} alt='#' className='item3Img'/>
              <h3> Earing & Croptop</h3>
              <h3> Multi Colored </h3>
              <p> From RMB200</p>
              </div>
              <div className='item4'>
              <img src={ process.env.PUBLIC_URL + '/images/W4.jpg'} alt='#' className='item4Img'/>
              <h3> Wrap dress</h3>
              <h3> Afro-Asian</h3>
              <p> From RMB450</p>
              </div>    
              <div className='item5'> 
              <img src={ process.env.PUBLIC_URL + '/images/W5.jpg'} alt='#' className='item5Img'/>
              <h3> Night Rob</h3>
              <h3> Black</h3>
              <p> From RMB350</p>
              </div>
              <div className='item6'>
              <img src={ process.env.PUBLIC_URL + '/images/W6.jpg'} alt='#' className='item6Img'/>
              <h3> Women Coat</h3>
              <h3> Black & Gold </h3>
              <p> From RMB350</p>
              </div>
              <div className='item7'>
              <img src={ process.env.PUBLIC_URL + '/images/W3.jpg'} alt='#' className='item7Img'/>
              <h3> His & Hers</h3>
              <h3> Multi Colored </h3>
              <p> From RMB600</p>
              </div>
              <div className='item8'>
              <img src={ process.env.PUBLIC_URL + '/images/W8.jpg'} alt='#' className='item8Img'/>
              <h3> Kimono set</h3>
              <h3> Top and Pants</h3>
              <p> From RMB450</p>
              </div>     
             
                </div>
              </div>

            </div>
            
        )
    }
}

export default Women
