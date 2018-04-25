import React from 'react';
//import { connect } from 'react-redux';

const MainBanner = ({ bannerName }) => {
    return (
        <div className="main-banner">
            <div className="constainer">
                <h1 className="logo-umiesz">
                    {bannerName}
                </h1>
                <p>Caly banner</p>
            </div>
        </div>
    );
}

export default MainBanner;