import React, { useState } from 'react';
import Card from '../common/Card';
import './Teamswiper.css';
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
            <div className="card-slider">
                <div className="cards-slider-wrapper">
                    {
                        data.profiles.map(profiles => <Card key={profiles.index} selectCard={profiles} />)
                    }
                    <Card selectCard={selectCard} />
                </div>

            </div>

        </div>
    )
}

export default Teamswiper;