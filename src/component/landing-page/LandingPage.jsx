import React from 'react';

const LandingPage = () => {
    return (
        <div className="landing-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">Groceries Delivered Right to Your Door</h1>
                    <p className="hero-subtitle">
                        Subscribe today and enjoy 10% off every order. Fresh groceries, milk, and everyday essentials in just one click!
                    </p>
                    <button className="subscribe-button">Subscribe Now</button>
                </div>
                <div className="hero-image">
                    <img src="https://th.bing.com/th/id/OIP.WruU8Odxpxab5JMUPVtIjgHaD2?rs=1&pid=ImgDetMain" alt="Grocery delivery" />
                </div>
            </section>

            {/* Offers Section */}
            <section className="offers-section">
                <div className="offers-content">
                    <h2>Best Offers on Everyday Groceries</h2>
                    <p>Get fresh fruits, vegetables, milk, and essentials with 10% off on every subscription.</p>
                </div>
                <div className="offers-image">
                    <img src="https://th.bing.com/th/id/OIP.9U3eBIcoIpBZdIYRGraCqwHaE8?rs=1&pid=ImgDetMain" alt="Fruits and vegetables" />
                </div>
            </section>

            {/* Subscription Benefits */}
            <section className="subscription-section">
                <div className="subscription-content">
                    <h2>Why Choose Us?</h2>
                    <ul>
                        <li>Fresh groceries delivered daily</li>
                        <li>Easy online subscription for regular delivery</li>
                        <li>Up to 10% savings on every order</li>
                        <li>Convenient doorstep delivery</li>
                    </ul>
                </div>
                <div className="subscription-animation">
                    <div className="floating-grocery-item"></div> {/* Placeholder for animation */}
                </div>
            </section>
        </div>
    );
}

export default LandingPage;
