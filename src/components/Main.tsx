import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

import lucio from '../assets/images/lucio.jpg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={lucio} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/koiralashlok" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/shlok-koirala/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
          <h1>Lúcio Correia dos Santos</h1>
          <p>Professional Copium Dealer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/koiralashlok" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/shlok-koirala/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;