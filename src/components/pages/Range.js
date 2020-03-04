import React from 'react';

import './style.css';

import sharkProfile from '../../media/images/shark-profile.png';
import bettaProfile from '../../media/images/betta-profile.png';
import gouramiProfile from '../../media/images/gourami-profile.png';
import angelProfile from '../../media/images/angel-profile.png';
import ramProfile from '../../media/images/ram-profile.png';

function Range() {
    return (
        <div className="range">
            <div className="accordian">
                <div className="item">
                    <div className="bg bg1"></div>
                    <div className="content">
                        <div className="profile">
                            <img src={sharkProfile} alt="" />
                            <br />
                            <h2>Red Tail Sharks</h2>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="bg bg2"></div>
                    <div className="content">
                        <div className="profile">
                            <img src={bettaProfile} alt="" />
                            <br />
                            <h2>Bettas</h2>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="bg bg3"></div>
                    <div className="content">
                        <div className="profile">
                            <img src={gouramiProfile} alt="" />
                            <br />
                            <h2>Gouramis</h2>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="bg bg4"></div>
                    <div className="content">
                        <div className="profile">
                            <img src={angelProfile} alt="" />
                            <br />
                            <h2>Angel Fish</h2>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="bg bg5"></div>
                    <div className="content">
                        <div className="profile">
                            <img src={ramProfile} alt="" />
                            <br />
                            <h2>Ram Chiclids</h2>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Range;
