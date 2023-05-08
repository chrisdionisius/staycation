import React from "react";
import { Fade } from "react-awesome-reveal";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

export default function FeaturedImage() {
  // Select the `page` property from the Redux store
  const page = useSelector((state) => state.page);

  // Extract the `id` parameter from the current route's URL
  const { id } = useParams();

  // Create a `data` constant based on the `page` and `id` constants
  // Use optional chaining to safely access nested properties of `page`
  // If no image ID is found, return an empty array
  const data = page?.[id]?.imageId || [];

  return (
    <section className="container">
      <div className="container-grid sm">
        {data.map((item, index) => {
          return (
            <div
              key={`FeaturedImage-${index}`}
              className={`item ${index > 0 ? "column-5" : "column-7"} ${
                index > 0 ? "row-1" : "row-2"
              }`}
            >
              {/* <Fade bottom delay={300 * index} triggerOnce> */}
              <div className="card h-100">
                <figure className="img-wrapper">
                  <img
                    className="img-cover"
                    src={`${process.env.REACT_APP_HOST}/${item.imageUrl}`}
                    alt={item._id}
                  />
                </figure>
              </div>
              {/* </Fade> */}
            </div>
          );
        })}
      </div>
    </section>
  );
}
