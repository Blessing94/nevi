import React, { Component } from 'react'
import '../Pages.css';

export class About extends Component {
    render() {
        return (
            <div className='customHeader'>
            <img src={process.env.PUBLIC_URL + '/images/nevi-img.jpg'} alt='#' />
<div className="customCards">
  <div className='whyWeRock'>
  <h1> ABOUT N.E.V.I</h1>
  <p> N.E.V.Impressions is an all-inclusive clothing arena and
      Fashion hub for African print designs across diverse cultures. We also make design clothing
      any event. 
  </p>
 
  </div>
<div className='firstCustomCard'>
  <h2>N.E.V.I Design Style</h2>
  <p> Most of our clothing is based on African cloth and designs. One of our favorite clothes is the Kenet cloth but we 
    also use Mudcloth. African Wax cloth, Ankara and other non African fabrics.</p>
  <img src={process.env.PUBLIC_URL + '/images/a.jpg'} alt='#' />
  </div>

  <div className='secondCustomCard'>
  <h2>Why African Cloth ?</h2>
  <p> We are the leading African print clothing company in China and our roots are from the motherland
    itsself. Our is from Ghana which is famous for the amazing Kente cloth. 
    </p>
  <img src={process.env.PUBLIC_URL + '/images/Africa-img.jpg'} alt='#' />
  </div>

  <div className='founderCustomCard'>
  <h2>Meet Our Founder </h2>
  <p> Meet Our founder and chief designer Vivian Osei Mensah. A Shanghai based Ghanian 
     She began NeVi with the goal of bringing her Culteral Fashion heritage
    to the world. 
  </p>
  <img src={process.env.PUBLIC_URL + '/images/founder.jpg'} alt='#' />
  </div>

  <div className='fourthCustomCard'>
  <h2> Africa & Ghana</h2>
  <p> Ghana is a West African country with 
    a rich history in textiles and design. It is home to diverse
    cultures giving us amazing Fabrics and styles
  </p>
  <img src={process.env.PUBLIC_URL + '/images/Ghana-img.jpg'} alt='#' />
  </div>

  <div className='thirdCustomCard'>
  <h2>Find us on WeChat </h2>
  <p> For our clients in China you can reach us on our WeChat platform and have a converstion 
    with our founder and designer directly. Scan the above QR code on your WeChat App. 
  </p>
  <div className='wechatimg'>
  <img src={process.env.PUBLIC_URL + '/images/wechat-img.jpg'} alt='#' />
  </div>
  </div>
</div>
            </div>
             
        )
    }
}

export default About
