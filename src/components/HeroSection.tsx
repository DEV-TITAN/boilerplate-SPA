/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import background from '../assets/hero-bg.jpg';

function HeroSection() {
  return (
    <section
      id="hero"
      className="d-flex align-items-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="container" data-aos="zoom-out" data-aos-delay="100">
        <h1>
          Welcome to
          <span>Template</span>
        </h1>
        <h2>We are team of talented designers making websites</h2>
        <div className="d-flex">
          <a href="#about" className="btn-get-started scrollto">
            Get Started
          </a>
          <a
            href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
            className="venobox btn-watch-video"
            data-vbtype="video"
            data-autoplay="true"
          >
            Watch Video
            <i className="icofont-play-alt-2" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
