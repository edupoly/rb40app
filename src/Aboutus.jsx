import React from "react";

const AboutUs = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img 
              src="https://via.placeholder.com/500x300" 
              alt="About Us" 
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6">
            <h2 className="mb-4">About Us</h2>
            <p className="lead">
              We are a team of dedicated professionals committed to providing 
              top-notch services and solutions. Our mission is to deliver 
              excellence and value to our customers.
            </p>
            <p>
              With years of experience and a passion for innovation, we aim to 
              create impactful solutions that empower businesses and individuals 
              alike.
            </p>
            <a href="/contact" className="btn btn-primary">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
