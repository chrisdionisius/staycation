import React from "react";
import Star from "elements/Star";
import TestimonyAccent from "assets/images/testimonial-image-frame.jpg";
import Button from "elements/Button";
import { Fade } from "react-awesome-reveal";

export default function Testimony({ data }) {
  return (
    <Fade bottom triggerOnce>
      <section className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-auto mb-4">
            <div
              className="testimonial-hero"
              // style={{ margin: `30px 0 0 30px` }}
            >
              <img
                className="position-relative"
                src={`${process.env.REACT_APP_HOST}/${data.imageUrl}`}
                alt="Testimonial"
                style={{ zIndex: 2 }}
              />
              <img
                className="position-absolute"
                src={TestimonyAccent}
                alt="Testimonial frame"
              />
            </div>
          </div>
          <div className="col">
            <h4 style={{ marginBottom: 40 }}>{data.name}</h4>
            <Star value={data.rate} width={35} height={35} spacing={4} />
            <h5 className="h2 font-weight-light line-height-2 my-3">
              {data.content}
            </h5>
            <span className="text-gray-500">
              {data.familyName}, {data.familyOccupation}
            </span>
            <div>
              <Button
                className="btn px-5"
                style={{ marginTop: 40 }}
                hasShadow
                isPrimary
                type="link"
                href={`/testimonial/${data._id}`}
              >
                Read Their Story
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
