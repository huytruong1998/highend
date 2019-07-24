import React, { useState, useEffect } from 'react';
import video1 from "../../video/PexelsVideos1510092.mp4";
import video2 from "../../video/PexelsVideos1550080.mp4";
import video3 from "../../video/PexelsVideos1877846.mp4";
import './WebVid.css';
import './jquery.bxslider.css';
import '../Header.css';

function WebVid() {
    return (
        <ul className="bxslider">
            <li>
                <div className="bg-video">
                    <video playsInline='playsinline' autoPlay='autoplay' muted loop='loop' id='herovideo'>
                        <source src={video1} />
                    </video>
                    <div className="container">
                        <div className="vidContent">
                            <h1 className="text-left">
                                WELCOME TO SPART
                            </h1>
                            <p className="text-left">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, beatae ducimus dolores distinctio itaque sapiente molestias laboriosam animi error excepturi omnis deserunt quas, iure adipisci ea blanditiis tenetur dicta eveniet?
                            </p>
                            <a href="" id='vidBtn'>Click Here</a>
                        </div>
                    </div>
                    <ul className="social-icons list-inline">
                        <li><a href=""><i className='fab fa-facebook-f'></i></a></li>
                        <li><a href=""><i className="fab fa-twitter"></i></a></li>
                        <li><a href=""><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href=""><i className="fab fa-google-plus-g"></i></a></li>
                        <li><a href=""><i className="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
            </li>
            <li>
                <div className="bg-video">
                    <video playsInline='playsinline' autoPlay='autoplay' muted loop='loop' id='herovideo'>
                        <source src={video2} />
                    </video>
                    <div className="container">
                        <div className="vidContent">
                            <h1 className="text-left">
                                WELCOME TO SPART
                            </h1>
                            <p className="text-left">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, beatae ducimus dolores distinctio itaque sapiente molestias laboriosam animi error excepturi omnis deserunt quas, iure adipisci ea blanditiis tenetur dicta eveniet?
                            </p>
                            <a href="" id='vidBtn'>Click Here</a>
                        </div>
                    </div>
                    <ul className="social-icons list-inline">
                        <li><a href=""><i className='fab fa-facebook-f'></i></a></li>
                        <li><a href=""><i className="fab fa-twitter"></i></a></li>
                        <li><a href=""><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href=""><i className="fab fa-google-plus-g"></i></a></li>
                        <li><a href=""><i className="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
            </li>

            <li>
                <div className="bg-video">
                    <video playsInline='playsinline' autoPlay='autoplay' muted loop='loop' id='herovideo'>
                        <source src={video3} />
                    </video>
                    <div className="container">
                        <div className="vidContent">
                            <h1 className="text-left">
                                WELCOME TO SPART
                            </h1>
                            <p className="text-left">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, beatae ducimus dolores distinctio itaque sapiente molestias laboriosam animi error excepturi omnis deserunt quas, iure adipisci ea blanditiis tenetur dicta eveniet?
                            </p>
                            <a href="" id='vidBtn'>Click Here</a>
                        </div>
                    </div>
                    <ul className="social-icons list-inline">
                        <li><a href=""><i className='fab fa-facebook-f'></i></a></li>
                        <li><a href=""><i className="fab fa-twitter"></i></a></li>
                        <li><a href=""><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href=""><i className="fab fa-google-plus-g"></i></a></li>
                        <li><a href=""><i className="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
            </li>
        </ul>
    )
}

export default WebVid;