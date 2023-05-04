import Button from "elements/Button";
import React from "react";
import { Fade } from "react-awesome-reveal";

export default function MostPicked(props) {
  return (
    <section className="container" ref={props.refMostPicked}>
      <Fade triggerOnce>
        <h4 className="mb-3">Most Picked</h4>
        <div className="container-grid">
          {props.data.map((item, index) => {
            return (
              <div
                className={`item column-4 ${index === 0 ? "row-2" : "row-1"}`}
                key={index}
              >
                {/* <Fade triggerOnce> */}
                <div className="card card-featured">
                  <div className="tag">
                    ${item.price}
                    <span className="font-weight-light"> per {item.unit}</span>
                  </div>
                  <figure className="img-wrapper">
                    <img
                      className="img-cover"
                      src={
                        item.imageId[0]
                          ? `${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}`
                          : ""
                      }
                      alt={item.title}
                    />
                  </figure>
                  <div className="meta-wrapper">
                    <Button
                      className="stretched-link d-block text-white"
                      type="link"
                      href={`/properties/${item._id}`}
                    >
                      <h5>{item.title}</h5>
                    </Button>
                    <span>
                      {item.city}, {item.country}
                    </span>
                  </div>
                </div>
                {/* </Fade> */}
              </div>
            );
          })}
        </div>
      </Fade>
    </section>
  );
}
