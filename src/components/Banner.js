import React from 'react';
import BannerWrapper from './containers/BannerWrapper';
import Fab8 from '../images/fab8.png';
const Banner = () => (
  <BannerWrapper>
    <div className="banner-img">
      <img src={Fab8} alt="fabian" />
    </div>
    <div className="intro-top">
      <p className="one intro-animatedRight">Executive Producer</p>
      <p className="two intro-animatedLeft">Creartor</p>
      <p className="three intro-animatedRight">Lider</p>
      <p className="four intro-animatedLeft">Futurist</p>
    </div>
  </BannerWrapper>
);

export default Banner;
