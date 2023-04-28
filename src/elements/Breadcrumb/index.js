import React from "react";
import PropTypes from "prop-types";
import "./index.scss";
import Button from "elements/Button";

export default function Breadcrumb(props) {
  const className = ["breadcrumb", props.className];

  return (
    <nav aria-label="breadcrumb">
      <ol className={className.join(" ")}>
        {props.data.map((item, index) => {
          return (
            <li
              key={`breadcrumb-${index}`}
              className={`breadcrumb-item${
                // Add an "active" class to the last item in the array
                index === props.data.length - 1 ? " active " : ""
              }`}
            >
              {/* Conditionally render the item's title or a button that links to its href */}
              {index === props.data.length - 1 ? (
                // Render the item's title if it is the last item in the array
                item.pageTitle
              ) : (
                // Render a button that links to the item's href if it is not the last item
                <Button type="link" href={item.pageHref}>
                  {item.pageTitle}
                </Button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

Breadcrumb.propTypes = {
  data: PropTypes.array,
  className: PropTypes.string,
};
