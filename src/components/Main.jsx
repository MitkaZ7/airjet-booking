import React from 'react';
import wingWindowImage from '../images/wing-airplane-window.png';

const Main = () => {
  return (
    <div className='main'>
      <div className="main__text">
        <h1 className="main__header">Enjoy reserved overhead bin space</h1>
        <p className="main__subheader"><a className='main__link'>Explore Now</a></p>
      </div>
      <div className="main__image">
        <img src={wingWindowImage} alt="window look on wing" />
      </div>
    </div>
  )
}
export default Main;
