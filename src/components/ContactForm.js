import React, { useState } from 'react';
import '../../src/style.css'


const ContactForm = () => {
    const [formVisible, setFormVisible] = useState(false);

    return (
        <div className="about-container contant-wraper">
            <div className="about-card">
                <div className="about-card-header">
                    <h5 className="about-card-header-title">فرم تماس با ما</h5>
                    <span className="about-card-header-des">
                        شما می توانید با پر کردن فرم زیر با ما ارتباط بگیرید
                    </span>
                </div>
                <div className="about-card-contant">
                    <button className="btn-about" onClick={() => setFormVisible(!formVisible)}>
                        پر کردن فرم
                    </button>
                    {formVisible && (
                        <form className="about-form">
                            <div className="about-form-item">
                                <label className="about-form-item-title" htmlFor="name">نام</label>
                                <input className="about-form-item-content" id="name" type="text" placeholder="نام خود را بنویسید..." />
                            </div>
                            <div className="about-form-item">
                                <label className="about-form-item-title" htmlFor="phone">موبایل</label>
                                <input className="about-form-item-content" id="phone" type="tel" placeholder="شماره موبایل خود را بنویسید" />
                            </div>
                            <div className="about-form-item">
                                <label className="about-form-item-title" htmlFor="message">توضیحات</label>
                                <textarea className="about-form-item-content" id="message" placeholder="توضیحات خود را بنویسید..." />
                            </div>
                            <button type="submit" className="btn-submit">ارسال فرم</button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
