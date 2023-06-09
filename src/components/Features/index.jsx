// Features
import React from 'react';
import './Features.css';
import { Link } from 'react-router-dom';

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="content">
        <h1 className="heading">
          our
          {' '}
          <span>features</span>
        </h1>
        <div className="box-container">
          <div className="box">
            <img src="/static/images/feature-img-1.png" alt="" />
            <h3>fresh and organic</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit, quis!</p>
            {/* <a href="/" className="btn">read more</a> */}
            <Link to={'/features/freshorganic'} className="btn">read more</Link>
          </div>
          <div className="box">
            <img src="/static/images/feature-img-2.png" alt="" />
            <h3>free delivery</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit, quis!</p>
            {/* <a href="/" className="btn">read more</a> */}
            <Link to={'/features/freedelivery'} className="btn">read more</Link>
          </div>
          <div className="box">
            <img src="/static/images/feature-img-3.png" alt="" />
            <h3>Pick & Collect</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit, quis!</p>
            {/* <a href="/" className="btn">read more</a> */}
            <Link to={'/features/collect'} className="btn">read more</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
