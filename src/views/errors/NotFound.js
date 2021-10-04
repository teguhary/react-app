import React from 'react';
import Image from '../../assets/NotFound.png';

function NotFound(props) {
    return (
        <div className="container">
            <div className="d-flex justify-content-center align-items-center vh-75">
                <div className="card border-0">
                    <img src={Image} alt="not found"></img>
                    <div className="card-body display-6">
                        This Page Not Found
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFound;