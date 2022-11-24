import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
	return (
		<Tilt className='parallax-effect ma4 mt0' perspective={500}>
			<div className='inner-element'>
		      {/*<div>React</div>
		      <div>Parallax Tilt</div>*/}
		      <div><img alt='brain logo' src={brain}/></div>
		    </div>
		</Tilt>
	);
}

export default Logo;