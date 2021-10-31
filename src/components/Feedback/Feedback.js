import React from 'react';
import './Feedback.css';

import image from '../../images/feedback-image.jpg';

const Feedback = () => {
    return (
        <div className="my-5 py-3 feedback-part">
            <h2 className="text-success my-4">Client feedback</h2>
            <p>I really had my doubts at first. I asked for a quote online and the next day I was contracted by my sales representive.The quote came out high so the sales man did a good job to find me a good deal</p>
            <img src={image} alt="" />
            <h5 className="text-primary">Shopnil Mahdi</h5>
            <h6>Ui-ux designer</h6>
        </div>
    );
};

export default Feedback;