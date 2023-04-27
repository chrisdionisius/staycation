import Button from "elements/Button";
import React from "react";
import { Fade } from "react-reveal";

export default function Categories({ data }) {
  return data.map((category, categoryIndex) => {
    return (
      <section className="container" key={categoryIndex}>
        <Fade bottom>
          <h4 className="mb-3 font-weight-medium">{category.name}</h4>
          <div className="container-grid">
            {category.items.length === 0 ? (
              <div className="row">
                <div className="col-auto align-items-center">
                  There's no property at the moment
                </div>
              </div>
            ) : (
              category.items.map((item, index) => {
                return (
                  <div
                    className="item column-3 row-i"
                    key={`category-${categoryIndex}-item-${index}`}
                  >
                    <Fade bottom delay={300 * index}>
                      <div className="card">
                        {item.isPopular && (
                          <div className="tag">
                            Popular{" "}
                            <span className="font-weight-light">Choice</span>
                          </div>
                        )}
                        <figure className="img-wrapper" style={{ height: 180 }}>
                          <img
                            className="img-cover"
                            src={item.imageUrl}
                            alt={item.name}
                          />
                        </figure>
                        <div className="meta-wrapper">
                          <Button
                            className="stretched-link d-block text-gray-800"
                            href={`/properties/${item._id}`}
                            type="link"
                          >
                            <h5 className="h4">{item.name}</h5>
                          </Button>
                          <span className="text-gray-500">
                            {item.city}, {item.country}
                          </span>
                        </div>
                      </div>
                    </Fade>
                  </div>
                );
              })
            )}
          </div>
        </Fade>
      </section>
    );
  });
}
