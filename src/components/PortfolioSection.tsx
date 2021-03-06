import React from 'react';

import portfolio1 from '../assets/portfolio/portfolio-1.jpg';
import portfolio2 from '../assets/portfolio/portfolio-2.jpg';
import portfolio3 from '../assets/portfolio/portfolio-3.jpg';
import portfolio4 from '../assets/portfolio/portfolio-4.jpg';
import portfolio5 from '../assets/portfolio/portfolio-5.jpg';
import portfolio6 from '../assets/portfolio/portfolio-6.jpg';
import portfolio7 from '../assets/portfolio/portfolio-7.jpg';
import portfolio8 from '../assets/portfolio/portfolio-8.jpg';
import portfolio9 from '../assets/portfolio/portfolio-9.jpg';

function PortfolioSection() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Portfolio</h2>
          <h3>
            Check our
            <span>Portfolio</span>
          </h3>
          <p>
            Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
            adipisci expedita at voluptas atque vitae autem.
          </p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">
                All
              </li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src={portfolio1} className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
              <a
                href={portfolio1}
                data-gall="portfolioGallery"
                className="venobox preview-link"
                title="App 1"
              >
                <i className="bx bx-plus" />
              </a>
              <a
                href="portfolio-details.html"
                className="details-link"
                title="More Details"
              >
                <i className="bx bx-link" />
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src={portfolio2} className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <a
                href={portfolio2}
                data-gall="portfolioGallery"
                className="venobox preview-link"
                title="Web 3"
              >
                <i className="bx bx-plus" />
              </a>
              <a
                href="portfolio-details.html"
                className="details-link"
                title="More Details"
              >
                <i className="bx bx-link" />
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src={portfolio3} className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>App 2</h4>
              <p>App</p>
              <a
                href={portfolio3}
                data-gall="portfolioGallery"
                className="venobox preview-link"
                title="App 2"
              >
                <i className="bx bx-plus" />
              </a>
              <a
                href="portfolio-details.html"
                className="details-link"
                title="More Details"
              >
                <i className="bx bx-link" />
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src={portfolio4} className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>Card 2</h4>
              <p>Card</p>
              <a
                href={portfolio4}
                data-gall="portfolioGallery"
                className="venobox preview-link"
                title="Card 2"
              >
                <i className="bx bx-plus" />
              </a>
              <a
                href="portfolio-details.html"
                className="details-link"
                title="More Details"
              >
                <i className="bx bx-link" />
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src={portfolio5} className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>Web 2</h4>
              <p>Web</p>
              <a
                href={portfolio5}
                data-gall="portfolioGallery"
                className="venobox preview-link"
                title="Web 2"
              >
                <i className="bx bx-plus" />
              </a>
              <a
                href="portfolio-details.html"
                className="details-link"
                title="More Details"
              >
                <i className="bx bx-link" />
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src={portfolio6} className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>App 3</h4>
              <p>App</p>
              <a
                href={portfolio6}
                data-gall="portfolioGallery"
                className="venobox preview-link"
                title="App 3"
              >
                <i className="bx bx-plus" />
              </a>
              <a
                href="portfolio-details.html"
                className="details-link"
                title="More Details"
              >
                <i className="bx bx-link" />
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src={portfolio7} className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>Card 1</h4>
              <p>Card</p>
              <a
                href={portfolio7}
                data-gall="portfolioGallery"
                className="venobox preview-link"
                title="Card 1"
              >
                <i className="bx bx-plus" />
              </a>
              <a
                href="portfolio-details.html"
                className="details-link"
                title="More Details"
              >
                <i className="bx bx-link" />
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src={portfolio8} className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>Card 3</h4>
              <p>Card</p>
              <a
                href={portfolio8}
                data-gall="portfolioGallery"
                className="venobox preview-link"
                title="Card 3"
              >
                <i className="bx bx-plus" />
              </a>
              <a
                href="portfolio-details.html"
                className="details-link"
                title="More Details"
              >
                <i className="bx bx-link" />
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src={portfolio9} className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <a
                href={portfolio9}
                data-gall="portfolioGallery"
                className="venobox preview-link"
                title="Web 3"
              >
                <i className="bx bx-plus" />
              </a>
              <a
                href="portfolio-details.html"
                className="details-link"
                title="More Details"
              >
                <i className="bx bx-link" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
