import React, { useState } from 'react';
import Card from '../common/Card';
import './Teamswiper.scss';
import data from '../common/data';

function Teamswiper() {
    const [selectCard, setCard] = useState(data.profiles[0]);

    const nextProfile = () => {
        let newIndex;
        if (selectCard.index < (data.profiles.length - 1)) {
            newIndex = selectCard.index + 1;
        } else {
            newIndex = 0;
        }
        setCard(data.profiles[newIndex]);

    }

    const prevProfile = () => {
        let newIndex;
        if (selectCard.index === 0) {
            newIndex = data.profiles.length - 1;
        } else {
            newIndex = selectCard.index - 1;

        }
        setCard(data.profiles[newIndex]);
    }

    return (
        <div id='team-swipe'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h5>A passionate team</h5>
                        <h2>Awesome Leaders</h2>
                    </div>
                    <p className="desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero modi necessitatibus perferendis corrupti! Ut distinctio nostrum odit, perferendis, quibusdam, tempore explicabo qui neque id molestias earum alias! Nisi, adipisci quod!
                    </p>
                </div>


            </div>
            <div className="team-member-section">
                <div className="button-section">
                    <button className='button-switch' onClick={nextProfile}><i class="fas fa-arrow-left"></i></button>
                </div>
                <div className="team-swiper-section">
                    <div className={`card-slider active-slide-${selectCard.index}`}>
                        <div className="cards-slider-wrapper" style={{
                            'transform': `translateX(-${selectCard.index * (100 / data.profiles.length)}%)`
                        }}>
                            {
                                data.profiles.map(profiles => <Card key={profiles.index} selectCard={profiles} />)
                            }
                        </div>
                    </div>
                </div>
                <div className="button-section">
                    <button className='button-switch' onClick={prevProfile}><i class="fas fa-arrow-right"></i></button>
                </div>
            </div>




        </div>
    )
}

export default Teamswiper;