import React, { Component } from 'react'
import '../Pages.css';
import '../../App.css';


export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {name: ''};
    this.state = {email: ''};
    this.state = {password: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({name: event.target.value});
    this.setState({email: event.target.value});
    this.setState({password: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
  
  }
  render() {
  return (
    <div>
   <div className='customHeader'>
  <img src={process.env.PUBLIC_URL + '/images/b.jpg'} alt='#' />
   
  </div>
  <div className='contactNeviCover'>
          <div className='contactNevih1'>
            <h1> SIGN UP</h1>
          </div>
         <div className='contactNevi'>
         <h3> STAY LOGGED IN WITH N.E.V.I</h3>
         <form className='contactForm' onSubmit={this.handleSubmit}>
           <div>
        <label className='nameLabel'>
          <h4>NAME*</h4>
          <input className='nameInput' type="text" value={this.state.value} onChange={this.handleChange} placeholder='Name' />
        </label>
        </div>
        <div>
        <label className='emailLabel'>
          <h4>EMAIL*</h4>
          <input className='emailInput' type="email" value={this.state.value} onChange={this.handleChange} placeholder='Email' />
        </label>
        </div>
        <div>
        <label className='emailLabel'>
          <h4>PASSWORD*</h4>
          <input className='emailInput' type="password" value={this.state.value} onChange={this.handleChange} placeholder='Email' />
        </label>
        </div>
        <input type="submit" value="SIGN UP" className='contactBtn'/>
      </form>
         </div>
       </div>
  </div>
  );
  
}
}
export default SignUp