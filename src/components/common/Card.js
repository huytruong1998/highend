import React from 'react';
import './Card.scss';


const ProfileClick = () => {
    console.log('hello');

}

const Filler = (props) => {
    return <div className="filler-bar" style={{ width: props.percentage + '%' }} />

}

const ProgressBar = (props) => {
    return (
        <div className="progress-bar">
            <Filler percentage={props.percentage} />
        </div>
    )
}

const Card = ({ selectCard }) => {
    const { index, name, job, image, skill1, skill2 } = selectCard;
    return (
        <div className='team-mem' id={`card-${index}`}>
            <div className="img-social" onClick={ProfileClick}>
                <img src={image} alt="" />
                <div className="teambox-centent">
                    <ul className='team-social'>
                        <li><a href='javscript:void(0);'><i className='fab fa-facebook-f'></i></a></li>
                        <li><a href='javscript:void(0);'><i className="fab fa-twitter"></i></a></li>
                        <li><a href='javscript:void(0);'><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href='javscript:void(0);'><i className="fab fa-google-plus-g"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="team-img">

                <div className="team-desc">
                    <div className="team-personal">
                        <h1>{name}</h1>
                        <p>{job}</p>
                    </div>
                    <div className="progress-display">
                        <div className="skills">
                            <span className="skills-desc">
                                Management
                            </span>
                            <span className="percentage">
                                {skill1}%
                            </span>
                        </div>
                        <ProgressBar percentage={skill1} />
                    </div>
                    <div className="progress-display">
                        <div className="skills">
                            <span className="skills-desc">
                                Management
                            </span>
                            <span className="percentage">
                                {skill2}%
                            </span>
                        </div>
                        <ProgressBar percentage={skill2} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Card;