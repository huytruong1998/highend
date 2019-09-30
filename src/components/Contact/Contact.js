import React, { Component } from 'react';
import './Contact.scss';

export default class Contact extends Component {
    render() {
        return (
            <footer>
                <div id='contact'>
                    <div className="container">
                        <div className="row">
                            <br /><br />
                            <div className="col-md-6">
                                <div id='contact-left'>
                                    <h2>SPARTAN</h2>
                                    <br />
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus amet cum corrupti quaerat tempore dicta totam rerum ipsa porro at, odit est aspernatur, assumenda iste autem doloremque ullam cupiditate. Aliquid?
                                </p>
                                    <div id='contact-info'>
                                        <address>
                                            <strong>HeadQuarters:</strong>
                                            <p>421 Barson, pastee</p> <br />
                                            Oulu 90130, Finland
                                    </address>
                                        <div id='phone-fax-email'>
                                            <p>
                                                <strong>Phone:</strong> <span>
                                                    09999991
                                        </span>
                                                <strong>Phone:</strong> <span>
                                                    09999991
                                        </span>
                                                <strong>Phone:</strong> <span>
                                                    09999991
                                        </span>
                                            </p>
                                        </div>
                                    </div>
                                    <ul className="social-list">
                                        <li>
                                            <a href="#" className="social-icons icon-white"> <i className='fab fa-facebook-f'></i></a>
                                        </li>
                                        <li>
                                            <a href="#" className="social-icons icon-white"> <i className='fab fa-twitter'></i></a>
                                        </li>
                                        <li>
                                            <a href="#" className="social-icons icon-white"> <i className='fab fa-linkedin-in'></i></a>
                                        </li>
                                        <li>
                                            <a href="#" className="social-icons icon-white"> <i className='fab fa-google-plus-g'></i></a>
                                        </li>
                                    </ul>

                                </div>
                            </div>

                            <div className="col-md-6">
                                <div id="contact-right">
                                    <h3>
                                        Contact us
                                 </h3>
                                    <br />
                                    <form>
                                        <input type="text" name='full-name' placeholder='Full Name' className='form-control' />

                                        <input type="text" name='email' placeholder='Email Address ' className='form-control' />

                                        <textarea name="message" className='form-control' placeholder='meassage...' rows="5"></textarea>

                                        <div id="send-btn">
                                            <a href="#" className="btn btn-lg btn-general btn-white">SEND</a>
                                        </div>
                                    </form>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div id="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div id="footer-copyrights">
                                    <p>Copyrights &copy; 2019 All right Reserve by SPARTAN Inc.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div id="footer-menu">
                                    <ul>
                                        <li><a href="">HOME</a></li>
                                        <li><a href="">Features</a></li>
                                        <li><a href="">Team</a></li>
                                        <li><a href="">Work</a></li>
                                        <li><a href="">Pricing</a></li>
                                        <li><a href="">Client</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        )
    }
}
