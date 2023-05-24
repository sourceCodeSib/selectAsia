import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
  faPepperHot,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();

  return (
    <footer className="footer" id="footer">
      <div className="box-container">
        <div className="box">
          <FontAwesomeIcon icon={['fas', 'faUser']} />
          <h3>
            SelectAsia
            {/* <i>
              <FontAwesomeIcon icon={faPepperHot} />
            </i> */}
          </h3>
          <p>
            Unit 5, Littlepace Shopping Centre, Littlepace Rd, Huntstown, Dubin 15, D15 YF1H
          </p>
          <div className="share">
            <a href="/">
              <i>
                <FontAwesomeIcon className="fa-icon" icon={faFacebookF} />
              </i>
            </a>
            <a href="/">
              <i>
                <FontAwesomeIcon className="fa-icon" icon={faTwitter} />
              </i>
            </a>
            <a href="/">
              <i>
                <FontAwesomeIcon className="fa-icon" icon={faInstagram} />
              </i>
            </a>
            <a href="/">
              <i>
                <FontAwesomeIcon className="fa-icon" icon={faLinkedin} />
              </i>
            </a>
          </div>
        </div>
        <div className="box">
          <h3>contact info</h3>
          <a href="/" className="links">
            <i>
              <FontAwesomeIcon icon={faPhone} />
            </i>
            +353 89 217 3125
          </a>
          {/* <a href="/" className="links">
            <i>
              <FontAwesomeIcon icon={faPhone} />
            </i>
            +111 222 3333
          </a> */}
          <a href="/" className="links" id="emailLink">
            <i>
              <FontAwesomeIcon icon={faEnvelope} />
            </i>
            selectasiablanchardstown@gmail.com
          </a>
          <a href="/" className="links">
            <i>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </i>
            SelectAsia, Dublin
          </a>
        </div>
        <div className="box">
          <h3>quick info</h3>
          {location.pathname === '/' ? (
            <a href="#home" className="links">
              <i>
                <FontAwesomeIcon icon={faArrowRight} />
              </i>
              home
            </a>
          ) : (
            <Link to={'/'} className="links">
              <i>
                <FontAwesomeIcon icon={faArrowRight} />
              </i>
              home
            </Link>
          )}
          {location.pathname === '/' && (
            <a href="#features" className="links">
              <i>
                <FontAwesomeIcon icon={faArrowRight} />
              </i>
              features
            </a>
          )}
          {location.pathname === '/' && (
            <a href="#products" className="links">
              <i>
                <FontAwesomeIcon icon={faArrowRight} />
              </i>
              products
            </a>
          )}
          {location.pathname === '/' && (
            <a href="#categories" className="links">
              <i>
                <FontAwesomeIcon icon={faArrowRight} />
              </i>
              categories
            </a>
          )}
          {/* <a href="#home" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            home
          </a> */}
          {/* <a href="#features" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            features
          </a> */}
          {/* <a href="#products" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            products
          </a>
          <a href="#categories" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            categories
          </a> */}
        </div>
      </div>
      <div className="credits">
        <p>
          Created By
          {' '}
          <span>CS Designs</span>
          {' '}
          | @2023 All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
