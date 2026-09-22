import React from "react";
import "./Footer.css";
import img from '../../assets/playlist/1.jpeg';

const Footer = () => {
    return(
        <footer className="disclaimer-premium">
            <div className="disclaimer-premium-music-container">
                <div className="disclaimer-premium-music-logo">
                    <img src={img} alt="Spotify Logo" />
                </div>

                <div className="disclaimer-premium-music-info">
                    <div class="disclaimer-premium-music-info-text">
                        <h4 id="disclaimer-premium-title">Music</h4>
                        <h5 id="disclaimer-premium-subtitle">Music band</h5>
                    </div>
                    <button className="disclaimer-premium-music-additional-controls-button">
                        <i className="bi bi-heart"></i>
                    </button>
                </div>

                <div className="disclaimer-premium-music-progress">
                    <input type="range" className="disclaimer-premium-music-progress-bar" />
                </div>
                <div className="disclaimer-premium-music-controls">
                    <button className="disclaimer-premium-music-controls-button">
                        <i className="bi bi-shuffle"></i>
                    </button>
                    <button className="disclaimer-premium-music-controls-button">
                        <i className="bi bi-skip-backward-fill"></i>
                    </button>
                    <button className="disclaimer-premium-music-controls-play">
                        <i className="bi bi-play-circle-fill"></i>
                    </button>
                    <button className="disclaimer-premium-music-controls-button">
                        <i className="bi bi-skip-forward-fill"></i>
                    </button>
                    <button className="disclaimer-premium-music-controls-button">
                        <i className="bi bi-repeat"></i>
                    </button>
                </div>
                <div className="disclaimer-premium-music-volume">
                    <i className="bi bi-volume-up"></i>
                    <input type="range" className="disclaimer-premium-music-volume-bar" />
                </div>
                <div className="disclaimer-premium-music-additional-controls">
                    <button className="disclaimer-premium-music-additional-controls-button">
                        <i className="bi bi-list"></i>
                    </button>
                    <button className="disclaimer-premium-music-additional-controls-button">
                        <i className="bi bi-fullscreen"></i>
                    </button>
                </div>
            </div>
        </footer>
    )
};

export default Footer;
