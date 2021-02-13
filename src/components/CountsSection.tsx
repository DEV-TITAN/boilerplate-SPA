/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function CountsSection() {
  return (
    <section id="counts" className="counts">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="icofont-simple-smile" />
              <span data-toggle="counter-up">232</span>
              <p>Happy Clients</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
            <div className="count-box">
              <i className="icofont-document-folder" />
              <span data-toggle="counter-up">521</span>
              <p>Projects</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="icofont-live-support" />
              <span data-toggle="counter-up">1,463</span>
              <p>Hours Of Support</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="icofont-users-alt-5" />
              <span data-toggle="counter-up">15</span>
              <p>Hard Workers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CountsSection;
