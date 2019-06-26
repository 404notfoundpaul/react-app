import React, { Component } from 'react';
import ResponsiveImage from './ResponsiveImage';
import '../css/styles/sass/header.css';

class Header extends Component {
    render(){
        return (
            <header className="anu-header">
            <div className="wrapper">
              <div className="top">
                <div className="tagline">
                  Crawford School <br />of Public Policy
                </div>
                <ResponsiveImage imageName="anu-logo" class="anu-logo" />
              </div>
              <div className="bottom">
                <div><p><strong>Scott Thomson</strong> is currently completing a Master of Environmental and Resource Economics</p></div>
                <p><strong>Are you ready to apply your knowledge of economics to tackle broader issues such as climate change mitigation, poverty reduction, and international trade?</strong></p>
              </div>
              <ResponsiveImage imageName="hero"/>
            </div>
          </header> 
        )
    }
}

export default Header;