import React from 'react'
import './Ourwork.css';
import img1 from '../workimg/1.jpg';
import img2 from '../workimg/2.jpg';
import img3 from '../workimg/3.jpg';
import img4 from '../workimg/4.jpg';
import img5 from '../workimg/5.jpg';
import img6 from '../workimg/6.jpg';
import img7 from '../workimg/7.jpg';
import img8 from '../workimg/8.jpg';

function Ourwork() {
    return (
        <section id='work'>
            <div className="content-box">
                <div className="content-title">
                    <div className='text-center'>
                        <h2>SHOWCASE HIGHLIGHT</h2>

                    </div>

                </div>
                <div className='hightlight-grid'>
                    <div className='content-item'>
                        <div className="img-wrapper">
                            <a href={img1}>
                                <img src={img1} alt="" className='img-responsive' />
                            </a>

                        </div>
                    </div>
                    <div className='content-item'>
                        <div className="img-wrapper">
                            <a href={img2}>
                                <img src={img2} alt="" className='img-responsive' />
                            </a>
                        </div>
                    </div>
                    <div className='content-item'>
                        <div className="img-wrapper">
                            <a href={img3}>
                                <img src={img3} alt="" className='img-responsive' />
                            </a>
                        </div>
                    </div>
                    <div className='content-item'>
                        <div className="img-wrapper">
                            <a href={img4}>
                                <img src={img4} alt="" className='img-responsive' />
                            </a>
                        </div>
                    </div>
                    <div className='content-item'>
                        <div className="img-wrapper">
                            <a href={img5}>
                                <img src={img5} alt="" className='img-responsive' />
                            </a>
                        </div>
                    </div>
                    <div className='content-item'>
                        <div className="img-wrapper">
                            <a href={img6}>
                                <img src={img6} alt="" className='img-responsive' />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Ourwork;