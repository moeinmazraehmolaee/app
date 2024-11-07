import React from 'react';
import '../../src/style.css'

const ContentSection = ({ title, description, items }) => {
    return (
        <div className="contant-wraper">
            <h3 className="contant-wraper-title">{title}</h3>
            <span className="contant-wraper-des">{description}</span>
            <div className="contant-item">
                {items.map((item, index) => (
                    <span key={index}>{item}</span>
                ))}
            </div>
        </div>
    );
};

export default ContentSection;
