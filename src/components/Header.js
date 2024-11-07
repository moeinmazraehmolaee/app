import React from 'react';
import '../../src/style.css'

const Header = () => {
    return (
        <div className="header">
            <div className="header-box">
                <div className="header-name">
                    <h5 className="header-name-title">امیر قطب الدینی</h5>
                    <span className="header-name-des">دانشجوی کارشناسی مهندسی کامپیوتر</span>
                </div>
            </div>
            <div className="header-img">
                <img className="img" src="./img/photo_2024-05-11_23-24-09.jpg" alt="prof" />
            </div>
        </div>
    );
}

export default Header;
