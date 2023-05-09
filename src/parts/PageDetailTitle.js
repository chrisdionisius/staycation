import Breadcrumb from "elements/Breadcrumb";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

export default function PageDetailTitle({ breadcrumb }) {
  // Select the `page` property from the Redux store
  const page = useSelector((state) => state.page);

  // Extract the `id` parameter from the current route's URL
  const { id } = useParams();

  // Create a `data` constant based on the `page` and `id` constants
  // Use optional chaining to safely access nested properties of `page`
  // If no image ID is found, return an empty array
  const data = page?.[id] || [];
  return (
    <section className="container spacing-sm">
      <Fade bottom triggerOnce>
        <div className="row align-items-center">
          {/* col = it'll take every possible space left */}
          <div className="col-12 col-lg">
            <Breadcrumb data={breadcrumb} />
          </div>
          {/* col-auto = it'll only take as much as it's child fit */}
          <div className="col-12 col-lg-auto text-center">
            <h1 className="h2">{data.title}</h1>
            <span className="text-gray-400">
              {data.city}, {data.country}
            </span>
          </div>
          <div className="col-12 col-lg"></div>
        </div>
      </Fade>
    </section>
  );
}
