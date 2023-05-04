import Breadcrumb from "elements/Breadcrumb";
import React from "react";
import Fade from "react-reveal/Fade";

export default function PageDetailTitle({ data, breadcrumb }) {
  return (
    <section className="container spacing-sm">
      <Fade bottom>
        <div className="row align-items-center">
          {/* col = it'll take every possible space left */}
          <div className="col">
            <Breadcrumb data={breadcrumb} />
          </div>
          {/* col-auto = it'll only take as much as it's child fit */}
          <div className="col-auto text-center">
            <h1 className="h2">{data.title}</h1>
            <span className="text-gray-400">
              {data.city}, {data.country}
            </span>
          </div>
          <div className="col"></div>
        </div>
      </Fade>
    </section>
  );
}
