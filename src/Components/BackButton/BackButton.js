import React from "react";

export default function BackButton(props) {
  return (
    <>
      <button onClick={(e) => props.history.goBack()} className="back-button">
        Go Back
      </button>
    </>
  );
}
