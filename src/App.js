import React from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import ContactForm from './components/ContactForm';
import ContentSection from './components/ContentSection';
import './style.css';

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <ContentSection 
                title="اطلاعات شخصی"
                description="راه های ارتباطی و اطلاعات مربوط به من"
                items={[
                    "وضعیت سربازی :‌ شمول",
                    "سال تولد : دی ماه 1381",
                    "شماره تماس : 5366 670 0913",
                    "ایمیل کاری : amirghotb7@gmail.com"
                ]}
            />
            <ContentSection 
                title="مدارک تحصیلی"
                description="مدارک کسب شده توسط من"
                items={[
                    "دیپلم ریاضی از مدرسه شاهد سال :1400",
                    "کارشناسی کامپیوتر سال :1404"
                ]}
            />
            <ContentSection 
                title="مهارت ها"
                description="مهارت های که بدست آوردم"
                items={[
                    "توانایی رهبری تیمی",
                    "برنامه ریزی کارهای دشوار",
                    "زبان های برنامه نویسی python , java ,cpp در حد متوسط",
                    "پایگاه داده : ‌sql در حد مقدماتی",
                    "آشنایی با +network"
                ]}
            />
            <ContactForm />
        </div>
    );
}

export default App;
