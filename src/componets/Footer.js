import React from 'react';
import './footer.css';


function Footer(props) {
    return (
        <div>
            <div className="container">
                <div className="footer foots">
                    <div className="footer-head" id='contacts'>
                        <h3 className='contact-text'>Contact</h3>
                    </div>
                    <div className="footer-text">
                        <p className='footer-texts'>Want to know more or just chat? You are welcome!</p>
                    </div>
                    <div className="footer-btn">
                        <button className='button'>Send message</button>
                    </div>

                    <div className="icons d-flex justify-content-center">

                        <div className="row rows">
                            <img src="/images/in.svg" alt="" />
                            <img className='ml-5' src="/images/ins.svg" alt="" />
                            <img className='ml-5' src="/images/be.svg" alt="" />
                            <img className='ml-5' src="/images/bass.svg" alt="" />
                        </div>
                    </div>

                    <p className='footer-text2'>Like me on LinkedIn, Instagram, Behance, Dribble</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;