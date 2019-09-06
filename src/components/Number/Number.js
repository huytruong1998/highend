import React, { Component } from 'react';
import './Number.scss';
import { Spring } from 'react-spring/renderprops'
export default class Number extends Component {
    render() {
        return (
            <section className='numbers text-center' id='testimonials'>
                <br /> <br />
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-7">
                            <i className="big-size far fa-snowflake"></i>
                            <Spring
                                from={{ number: 0 }}
                                to={{ number: 349 }}
                                config={{ duration: 5000 }}
                            >
                                {props => (
                                    <p className="count fs-35 color-fff fw-700">{props.number.toFixed()}</p>
                                )}
                            </Spring>

                            <h3 className="color-aaa">+ PROJECTS</h3>
                        </div>
                        <div className="col-md-3 col-sm-7">
                            <i className="big-size fas fa-balance-scale"></i>

                            <Spring
                                from={{ number: 0 }}
                                to={{ number: 1322 }}
                                config={{ duration: 5000 }}
                            >
                                {props => (
                                    <p className="count fs-35 color-fff fw-700">{props.number.toFixed()}</p>
                                )}
                            </Spring>
                            <h3 className="color-aaa">+ VIDEOS</h3>
                        </div>
                        <div className="col-md-3 col-sm-7">
                            <i className="big-size fas fa-bell"></i>
                            <Spring
                                from={{ number: 0 }}
                                to={{ number: 519 }}
                                config={{ duration: 5000 }}
                            >
                                {props => (
                                    <p className="count fs-35 color-fff fw-700">{props.number.toFixed()}</p>
                                )}
                            </Spring>
                            <h3 className="color-aaa">+ AWARDS</h3>
                        </div>
                        <div className="col-md-3 col-sm-7">
                            <i className="big-size fas fa-circle"></i>
                            <Spring
                                from={{ number: 0 }}
                                to={{ number: 423 }}
                                config={{ duration: 5000 }}
                            >
                                {props => (
                                    <p className="count fs-35 color-fff fw-700">{props.number.toFixed()}</p>
                                )}
                            </Spring>
                            <h3 className="color-aaa">+ CLIENT</h3>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}
