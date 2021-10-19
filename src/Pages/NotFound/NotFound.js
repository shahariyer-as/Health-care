import React from 'react';
import './NotFound.css';
import notfound from '../../Images/notfound/notfound.png';


const NotFound = () => {
    return (
        <div>
            <h2>404 NOT FOUND</h2>
            <img src={notfound} alt="" />
        </div>
    );
};

export default NotFound;