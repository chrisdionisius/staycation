import React from "react";
import { useDispatch } from "react-redux";
import { checkoutBooking } from "store/actions/checkout";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function ButtonSubmitBooking({ data }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function fnStartBooking({ data, itemDetails }) {
    dispatch(
      checkoutBooking({
        _id: itemDetails._id,
        duration: data.duration,
        date: {
          startDate: data.date.startDate,
          endDate: data.date.endDate,
        },
      })
    );
    navigate("/checkout");
  }

  return (
    <Button
      className="btn"
      hasShadow
      isPrimary
      isBlock
      onClick={fnStartBooking}
    >
      Continue to Book
    </Button>
  );
}

export default ButtonSubmitBooking;
