import React from "react";

const Hero = () => {
  return (
    <div class="px-4 py-5 my-5 text-center">
      <h1 class="display-5 fw-bold pt-5 my-5">We Are Scarborough Cleaners</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">
          No matter what your cleaning needs are, we have you covered. We cater
          to commercial & domestic clients. Be it a single vacation rental, or
          an entire hotel we can help. Get in touch today to discuss your
          cleaning needs.
        </p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <a
            href="#contact"
            type="button"
            class="btn btn-primary btn-lg px-4 gap-3"
          >
            Hire Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
