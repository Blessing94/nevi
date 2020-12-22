import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Pants from './components/pages/Pants';
import Products from './components/pages/Products';
import CustomDesign from './components/pages/CustomDesign';
import SignUp from './components/pages/SignUp';
import HeadWear from './components/pages/HeadWear';
import Dresses from './components/pages/Dresses';
import Bikini from './components/pages/Bikini';
import FootWear from './components/pages/FootWear.js';
import Footer from './components/Footer';
import About from './components/pages/About';
import Women from './components/pages/Women';
import  Man from './components/pages/Man';
import Accessories from './components/pages/Accessories';
import Kids from './components/pages/Kids';
import ScrollToTop from './components/ScrollToTop';



function App() {
  
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div className='App'>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/products' component={Products} />
        <Route path='/pants' component={Pants} />
        <Route path='/custom-design' component={CustomDesign} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/headwear' component={HeadWear} />
        <Route path='/dresses' component={Dresses} />
        <Route path='/bikini' component={Bikini} />
        <Route path='/footwear' component={FootWear} />
        <Route path='/about' component={About} />
        <Route path='/women' component={Women} />
        <Route path='/man' component={Man} />
        <Route path='/kids' component={Kids} />
        <Route path='/accessories' component={Accessories} />
      </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
