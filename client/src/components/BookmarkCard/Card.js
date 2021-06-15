import React from 'react';
import { Link } from 'react-router-dom';
const Card = ({ title, adres }) => {
    return (
        <div className="pageContainer">
            <div className="pageTitle">{title}</div>
            <a href={adres} className="btn btn-primary" target="_blank" > Siteye Git</a>
        </div>
    );
};

export default Card;
