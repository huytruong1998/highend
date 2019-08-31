import React from 'react';
import './Pricing.scss';

function Pricing() {
    return (
        <div id='pricing-content'>
            <div className="container">
                <div className="title-content">
                    <h2>PRICING</h2>
                </div>
            </div>
            <div className="pricing-section-wrap">
                <div className="card-container">
                    <div className="card-holder">
                        <div className="card__side card__side--front">
                            <div className="price-head card__background_1">
                                <h4>Regular</h4>
                                <h2>$15 <span>/month</span></h2>
                            </div>
                            <div className="price-content">
                                <ul>
                                    <li><strong>5</strong> Gb Ram</li>
                                    <li><strong>30</strong> Gb Storage</li>
                                    <li><strong>1</strong> Account</li>
                                    <li><strong>Awesome</strong> support</li>

                                </ul>
                            </div>
                            <div className="price -button">
                                <a href="#">BUY NOW</a>
                            </div>

                        </div>
                        <div className="card__side card__side--back card__background_1">
                            <div className="card__cta">
                                <div className="card__cta__top">
                                    <h4>
                                        HiredGun Lucian
                                        </h4>
                                    <p>Only</p>
                                    <div className="card__price">
                                        <a href="#popup" className="btn btn--white btn--animated">1350 RP</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-container">
                    <div className="card-holder">
                        <div className="card__side card__side--front">
                            <div className="price-head card__background_2">
                                <h4>Premium</h4>
                                <h2>$40 <span>/month</span></h2>
                            </div>
                            <div className="price-content">
                                <ul>
                                    <li><strong>50</strong> Gb Ram</li>
                                    <li><strong>300</strong> Gb Storage</li>
                                    <li><strong>10</strong> Account</li>
                                    <li><strong>Awesome</strong> support</li>

                                </ul>
                            </div>
                            <div className="price -button">
                                <a href="#">BUY NOW</a>
                            </div>

                        </div>
                        <div className="card__side card__side--back card__background_2">
                            <div className="card__cta">
                                <div className="card__cta__top">
                                    <h4>
                                        HiredGun Lucian
                                        </h4>
                                    <p>Only</p>
                                    <div className="card__price">
                                        <a href="#popup" className="btn btn--white btn--animated">1350 RP</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-container">
                    <div className="card-holder">
                        <div className="card__side card__side--front">
                            <div className="price-head card__background_3">
                                <h4>Ultimate</h4>
                                <h2>$100 <span>/month</span></h2>
                            </div>
                            <div className="price-content">
                                <ul>
                                    <li><strong>1000</strong> Gb Ram</li>
                                    <li><strong>Unlimited</strong> Gb Storage</li>
                                    <li><strong>200</strong> Account</li>
                                    <li><strong>Awesome</strong> support</li>

                                </ul>
                            </div>
                            <div className="price -button">
                                <a href="#">BUY NOW</a>
                            </div>

                        </div>
                        <div className="card__side card__side--back card__background_3">
                            <div className="card__cta">
                                <div className="card__cta__top">
                                    <h4>
                                        HiredGun Lucian
                                        </h4>
                                    <p>Only</p>
                                    <div className="card__price">
                                        <a href="#popup" className="btn btn--white btn--animated">1350 RP</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Pricing;