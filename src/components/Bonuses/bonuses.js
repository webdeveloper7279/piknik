import React from 'react';
import './bonuses.css'; // Styling uchun alohida CSS fayl

const bonuses = [
    {
        id: 1,
        image: 'https://karshi.clinics.uz/uzb/images/stories/chegirma-2.jpg',
        title: '10% Chegirma',
        description: 'Yangi foydalanuvchilar uchun barcha dam olish joylarida 10% chegirma.',
        button: 'Batafsil',
    },
    {
        id: 2,
        image: 'data:image/jpeg;base64,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',
        title: 'Sovg‘alar o‘yini',
        description: 'Har hafta eng faol foydalanuvchilarga sovg‘alar.',
        button: 'Ishtirok etish',
    },
    {
        id: 3,
        image: 'https://m.media-amazon.com/images/I/71U8jZrQsdL.jpg',
        title: 'Ball yig‘ish tizimi',
        description: 'Har bir bron qilish orqali ball yig‘ing va keyingi safar bepul dam oling!',
        button: 'Ko‘proq o‘rganish',
    },
];

const BonusSection = () => {
    const handleClick = (title) => {
        alert(`${title} funksiyasi tez orada ishga tushadi!`);
    };

    return (
        <section id="bonuses" className="bonuses-section">
            <div className="container">
                <h2 className="section-title">🎁 Bonuslar va Takliflar</h2>
                <div className="bonus-cards">
                    {bonuses.map((bonus) => (
                        <div key={bonus.id} className="bonus-card">
                            <img src={bonus.image} alt={bonus.title} />
                            <h3>{bonus.title}</h3>
                            <p>{bonus.description}</p>
                            <button onClick={() => handleClick(bonus.title)}>{bonus.button}</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BonusSection;
