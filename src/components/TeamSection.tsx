/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import team1 from '../assets/team/team-1.jpg';
import team2 from '../assets/team/team-2.jpg';
import team3 from '../assets/team/team-3.jpg';
import team4 from '../assets/team/team-4.jpg';

function TeamSection() {
  return (
    <section id="team" className="team section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Team</h2>
          <h3>
            Our Hardworking
            <span>Team</span>
          </h3>
          <p>
            Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
            adipisci expedita at voluptas atque vitae autem.
          </p>
        </div>

        <div className="row">
          <div
            className="col-lg-3 col-md-6 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="member">
              <div className="member-img">
                <img src={team1} className="img-fluid" alt="" />
                <div className="social">
                  <a href="">
                    <i className="icofont-twitter" />
                  </a>
                  <a href="">
                    <i className="icofont-facebook" />
                  </a>
                  <a href="">
                    <i className="icofont-instagram" />
                  </a>
                  <a href="">
                    <i className="icofont-linkedin" />
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
              </div>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="member">
              <div className="member-img">
                <img src={team2} className="img-fluid" alt="" />
                <div className="social">
                  <a href="">
                    <i className="icofont-twitter" />
                  </a>
                  <a href="">
                    <i className="icofont-facebook" />
                  </a>
                  <a href="">
                    <i className="icofont-instagram" />
                  </a>
                  <a href="">
                    <i className="icofont-linkedin" />
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
              </div>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="member">
              <div className="member-img">
                <img src={team3} className="img-fluid" alt="" />
                <div className="social">
                  <a href="">
                    <i className="icofont-twitter" />
                  </a>
                  <a href="">
                    <i className="icofont-facebook" />
                  </a>
                  <a href="">
                    <i className="icofont-instagram" />
                  </a>
                  <a href="">
                    <i className="icofont-linkedin" />
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>William Anderson</h4>
                <span>CTO</span>
              </div>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="member">
              <div className="member-img">
                <img src={team4} className="img-fluid" alt="" />
                <div className="social">
                  <a href="">
                    <i className="icofont-twitter" />
                  </a>
                  <a href="">
                    <i className="icofont-facebook" />
                  </a>
                  <a href="">
                    <i className="icofont-instagram" />
                  </a>
                  <a href="">
                    <i className="icofont-linkedin" />
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
