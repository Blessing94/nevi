import React, { Component } from 'react';
import '../../App.css';
import '../Pages.css';

export class Man extends Component {
    render() {
        return (
            <div className='accessoriesPage'>
            <div className='customHeader'>
            <img src={process.env.PUBLIC_URL + '/images/nevi-img.jpg'} alt='#' />
            </div>
            <div className='featuredProducts'>
                <div>
                  <h1> MAN </h1>
                </div>
                <div className='productsGrid'>
                <div className='item1'> 
              <img src={ process.env.PUBLIC_URL + '/images/M1.jpg'} alt='#' className='item1Img'/>
              <h3> White shirt</h3>
              <h3> Kente strip </h3>
              <p> From RMB150</p>
              </div>
              <div className='item2'> 
              <img src={ process.env.PUBLIC_URL + '/images/M2.jpg'}alt='#' className='item2Img'/>
              <h3> Nevi stweater</h3>
              <h3> Blue with fur</h3>
              <p> From RMB250</p>
              </div>
              <div className='item3'>
              <img src={ process.env.PUBLIC_URL + '/images/P4.jpg'} alt='#' className='item1Img'/>
              <h3> Nevi Joggers</h3>
              <h3> White </h3>
              <p> From RMB250</p>
              </div>
              <div className='item4'>
              <img src={ process.env.PUBLIC_URL + '/images/M3.jpg'}alt='#' className='item2Img'/>
              <h3> White Hoodie</h3>
              <h3> Custom print </h3>
              <p> From RMB250</p>
              </div>
              <div className='item3'>
              <img src={ process.env.PUBLIC_URL + '/images/img-10.jpg'} alt='#' className='item1Img'/>
              <h3> Air Force 1</h3>
              <h3> Love the culture </h3>
              <p> From RMB250</p>
              </div>
              <div className='item4'>
              <img src={ process.env.PUBLIC_URL + '/images/M4.jpg'}alt='#' className='item2Img'/>
              <h3> Nevi Blazer</h3>
              <h3> Custom designed</h3>
              <p> From RMB250</p>
              </div>
              </div>
              </div>
            </div>
        )
    }
}

export default Man
