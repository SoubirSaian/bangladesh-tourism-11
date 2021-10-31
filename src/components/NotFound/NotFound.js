import React from 'react';
import './NotFound.css';

import img from '../../images/404-not-found.png';
const NotFound = () => {
    return (
        <div className="not-found">
             <img src={img} alt="" />
        </div>
    );
};

export default NotFound;