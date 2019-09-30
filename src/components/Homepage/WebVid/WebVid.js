import React from 'react';
import video1 from "../../video/Pexels Videos 1429889.mp4";
import video2 from "../../video/PexelsVideos1550080.mp4";
import video3 from "../../video/PexelsVideos1877846.mp4";
import './WebVid.css';
import './jquery.bxslider.css';
import '../Homepage';

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
                            <h1 className="text-change">
                                WELCOME TO SPART
                            </h1>
                            <p className="text-change">
                                We are awsome website which do stuff with image .Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, beatae ducimus dolores distinctio itaque sapiente molestias laboriosam animi error excepturi omnis deserunt quas, iure adipisci ea blanditiis tenetur dicta eveniet?
                            </p>
                            <a href='javscript:void(0);' id='vidBtn'>Click Here</a>
                        </div>
                    </div>
                    <ul className="social-icons list-inline">
                        <li><a href='javscript:void(0);'><i className='fab fa-facebook-f'></i></a></li>
                        <li><a href='javscript:void(0);'><i className="fab fa-twitter"></i></a></li>
                        <li><a href='javscript:void(0);'><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href='javscript:void(0);'><i className="fab fa-google-plus-g"></i></a></li>
                        <li><a href='javscript:void(0);'><i className="fab fa-instagram"></i></a></li>
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
                            <h1 className="text-change">
                                WELCOME TO SPART
                            </h1>
                            <p className="text-change">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, beatae ducimus dolores distinctio itaque sapiente molestias laboriosam animi error excepturi omnis deserunt quas, iure adipisci ea blanditiis tenetur dicta eveniet?
                            </p>
                            <a href='javscript:void(0);' id='vidBtn'>Click Here</a>
                        </div>
                    </div>
                    <ul className="social-icons list-inline">
                        <li><a href='javscript:void(0);'><i className='fab fa-facebook-f'></i></a></li>
                        <li><a href='javscript:void(0);'><i className="fab fa-twitter"></i></a></li>
                        <li><a href='javscript:void(0);'><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href='javscript:void(0);'><i className="fab fa-google-plus-g"></i></a></li>
                        <li><a href='javscript:void(0);'><i className="fab fa-instagram"></i></a></li>
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
                            <h1 className="text-change">
                                WELCOME TO SPART
                            </h1>
                            <p className="ttext-change">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, beatae ducimus dolores distinctio itaque sapiente molestias laboriosam animi error excepturi omnis deserunt quas, iure adipisci ea blanditiis tenetur dicta eveniet?
                            </p>
                            <a href='javscript:void(0);' id='vidBtn'>Click Here</a>
                        </div>
                    </div>
                    <ul className="social-icons list-inline">
                        <li><a href='javscript:void(0);'><i className='fab fa-facebook-f'></i></a></li>
                        <li><a href='javscript:void(0);'><i className="fab fa-twitter"></i></a></li>
                        <li><a href='javscript:void(0);'><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href='javscript:void(0);'><i className="fab fa-google-plus-g"></i></a></li>
                        <li><a href='javscript:void(0);'><i className="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
            </li>
        </ul>
    )
}

export default WebVid;