import React from "react";
import Image from "./Image";

const Services = () => {
  return (
    <div className="container marketing">
      <div className="row featurette mb-5">
        <div className="col-md-7">
          <h2 className="featurette-heading">
            We come prepared.{" "}
            <span className="text-muted">Keeping it simple.</span>
          </h2>
          <p className="lead">
            Our cleaners arrive with all of the supplies and equipment they need
            to clean your property. Our team will visit your site before our
            first clean and agree on a simple all-inclusive fee.
          </p>
        </div>
        <div className="col-md-5">
          <Image src="pink-image.jpg" alt="pink colourful image" />
        </div>
      </div>
      <div className="row featurette mb-5">
        <div className="col-md-7">
          <h2 className="featurette-heading">
            Need something extra?{" "}
            <span className="text-muted">No problem.</span>
          </h2>
          <p className="lead">
            We know that no 2 customers have the same requirements, that's why
            our team are ready to adapt to the unique needs of your business or
            home. Whether it's assiting with the changeover in your vacation
            rental, or doing a deep-clean in your home - we can help. Don't
            hesitate to get in touch today to discuss how we can help.
          </p>
        </div>
        <div className="col-md-5">
          <Image src="mixed-containers.jpg" alt="mixed colourful containers" />
        </div>
      </div>
      <div className="row featurette mb-5">
        <div className="col-md-7">
          <h2 className="featurette-heading">
            You're in safe hands.{" "}
            <span className="text-muted">Piece of mind guaranteed.</span>
          </h2>
          <p className="lead">
            We know how important safety and security of your home or business
            are. We have over 30 years' business experience. Our cleaners are
            fully insured and background-checked.
          </p>
        </div>
        <div className="col-md-5">
          <Image src="blue-image.jpg" alt="blue colourful image" />
        </div>
      </div>
    </div>
  );
};

export default Services;
