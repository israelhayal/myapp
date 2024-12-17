import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="bg-primary text-white font-sans">
      {/* Hero Section */}
      <div className="hero">
        <h1 className="hero-title">
          Make Your Home <br /> Smarter
        </h1>
        <p className="hero-subtitle">
          Discover a new era of home assistance with advanced robots designed to simplify your daily tasks.
        </p>
        <button className="hero-button">Shop Now →</button>
        <div className="hero-image">
          <img
            src="https://via.placeholder.com/500" // Replace with your image
            alt="Advanced Robot"
          />
        </div>
      </div>

      {/* About Us Section */}
      <section className="about">
        <div className="about-item">
          <h2 className="about-item-title">47K</h2>
          <p className="about-item-subtitle">Happy Clients</p>
        </div>
        <div className="about-item">
          <h2 className="about-item-title">173</h2>
          <p className="about-item-subtitle">Unique Models</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2 text-pink-500">About us</h3>
          <p>
            We specialize in creating home assistant robots that blend innovation, functionality, and style. Our products help you manage your household more efficiently.
          </p>
        </div>
      </section>

      {/* Our Best Sellers Section */}
      <section className="best-sellers">
        <h2 className="best-sellers-title">Our best sellers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Caretaker Robot" />
            <h3 className="product-card-title">Caretaker Robot</h3>
            <p className="product-card-price">$245.00</p>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Chef Robot" />
            <h3 className="product-card-title">Chef Robot</h3>
            <p className="product-card-price">$2,500</p>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Repairer Robot" />
            <h3 className="product-card-title">Repairer Robot</h3>
            <p className="product-card-price">$3,700</p>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Garbage Sorter Robot" />
            <h3 className="product-card-title">Garbage Sorter Robot</h3>
            <p className="product-card-price">$1,200</p>
          </div>
        </div>
        <button className="view-all-button">View All Products →</button>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="flex-1">
          <img src="https://via.placeholder.com/400" alt="Key Features Robot" />
        </div>
        <div className="why-choose-us-text">
          <h3 className="why-choose-us-title">Why choose us?</h3>
          <h2 className="why-choose-us-heading">Key features & benefits</h2>
          <p className="why-choose-us-feature">
            <strong>Innovative Design</strong> - Modern aesthetics that fit seamlessly into any interior.
          </p>
          <p className="why-choose-us-feature">
            <strong>Versatile Functionality</strong> - Each robot performs multiple tasks to make your life easier.
          </p>
          <p className="why-choose-us-feature">
            <strong>Durable & Long-lasting</strong> - Built with high-quality materials for extended service life.
          </p>
        </div>
      </section>

      {/* Discount Banner */}
      <section className="discount-banner">
        <h2 className="discount-banner-title">
          GET UP TO <span className="discount-banner-highlight">25% OFF</span> YOUR PERFECT HOME ASSISTANT TODAY!
        </h2>
        <button className="discount-button">Claim Your Discount →</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© Copyright Assistix 2024</p>
      </footer>
    </div>
  );
};

export default Home;
