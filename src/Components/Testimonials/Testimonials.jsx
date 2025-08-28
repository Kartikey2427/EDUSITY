import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from "../../assets/back-icon.png"
import user_1 from "../../assets/user-1.png"
import user_2 from "../../assets/user-2.png"
import user_3 from "../../assets/user-3.png"
import user_4 from "../../assets/user-4.png"


const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }


    return (
        <div className="testimonials">
            <img
                src={next_icon}
                alt=""
                className="next-btn"
                onClick={slideForward}
            />
            <img
                src={back_icon}
                alt=""
                className="back-btn"
                onClick={slideBackward}
            />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Sophie Shine</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>
                                <i>
                                    "Choosing to pursue my degree at Edusity was one of the best
                                    decisions I've ever made. The supportive community,
                                    state-of-the-art facilities, and commitment to academic
                                    excellence have truly exceeded my expectations. I'll always be thankful for all the contributions forever."
                                </i>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>Mateo</h3>
                                    <span>Edusity, Canada</span>
                                </div>
                            </div>
                            <p>
                                <i>
                                    "Studying at Edusity has been an incredible journey filled
                                    with growth and discovery. The knowledgeable faculty,
                                    innovative curriculum, and welcoming environment have
                                    empowered me to achieve more than I ever thought was
                                    possible in my education."
                                </i>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Sofia Jones</h3>
                                    <span>Edusity, Brazil</span>
                                </div>
                            </div>
                            <p>
                                <i>
                                    "My experience with Edusity has been transformative in every
                                    sense of the word. The collaborative learning, diverse
                                    student body, and focus on practical skills have prepared me
                                    to face real-world challenges with confidence and
                                    determination."
                                </i>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>Liam Dawson</h3>
                                    <span>Edusity, Japan</span>
                                </div>
                            </div>
                            <p>
                                <i>
                                    "Enrolling at Edusity opened doors I never imagined possible
                                    for my academic path. The inspiring mentors, advanced
                                    resources, and culture of excellence have provided me with
                                    opportunities that continue to shape my career and personal
                                    growth."
                                </i>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Testimonials