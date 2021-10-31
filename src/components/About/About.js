import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="my-5 about-page">
            <h3 className="text-center text-success py-4">Why choose our travel agency</h3>
            <p className="mt-4"><li>Travel Agent will provide you comprehensive range of travel services in specific term of your desire rather. Example: when you make travel packages, it is included free return airport transfer, there is professional tour guide will explain you about Bali correctly, spa, adventures and other activities that what the client needs.</li></p>
            <p><li>The travel agency will offer you the cheaper price quotation than when you make direct booking online to the properties.</li></p>
            <p><li>Travel agent will provide you clear and precise information according with your desire through email or other tools communications. The travel agent will do the maximum effort to fulfill all your needs.</li></p>
            <div className="d-flex list">
                <ul>
                    <li>It saves money</li>
                    <li>Added parks</li>
                    <li>Help with travel insurance/ visa requirements   and or immunization needs</li>
                </ul>
                <ul>
                    <li>No or less burden for you to enjoy trip</li>
                    <li>Solves complex travel problem</li>
                    <li>Personal travelling experts</li>
                </ul>
            </div>
        </div>
    );
};

export default About;