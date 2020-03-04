import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import video1 from '../../media/videos/video.mp4';

import './style.css';

export default class Landing extends Component {
    render() {
        return (
            <div className="landing">
                <video autoPlay loop>
                    <source src={video1} type="video/mp4" />
                </video>
                <div className="over">
                    <h1>ARTHUR'S</h1>
                </div>
                <div className="under">
                    <h1>AQUATICS</h1>
                </div>
            </div>
        );
    }
}
