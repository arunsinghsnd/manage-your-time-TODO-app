import React from 'react';// importing react
import Tilt from 'react-tilt';// It gives the logo hover effects
import brain from './brain.png';// importing logo 
import './Logo.css';// applying css to the logo componts


// this is logo component and function based component
const Logo = () => {
  return (
    // for styling uses the tachyons labiries
    <div className='ma4  mt0'>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 100, width: 100 }} >
        <div className="Tilt-inner pa3">
          <img style={{paddingTop: '5px'}} alt='logo' src={brain}/>
        </div>
      </Tilt>
    </div>
  );
}

// exporting our logo
export default Logo;