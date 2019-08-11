import React, { useState } from 'react';
import Card from '../common/Card';
import './Teamswiper.scss';
import data from '../common/data';

function Teamswiper() {
    const [selectCard, setCard] = useState(data.profiles[0]);

    const nextProfile = () => {
        const newIndex = selectCard.index + 1;
        setCard(data.profiles[newIndex]);
        console.log(newIndex);

    }

    const prevProfile = () => {
        const newIndex = selectCard.index - 1;
        setCard(data.profiles[newIndex]);
        console.log(newIndex);

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
                <button onClick={prevProfile}>Prev</button>
                <button onClick={nextProfile}>Next</button>
            </div>
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
    )
}

export default Teamswiper;