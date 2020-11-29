import React from "react";
import { FaCheckSquare } from "react-icons/fa";
import { FaPenSquare } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export default function Features() {
  return (
    <section className="features">
      <div className="homepage-features">
        <p className="features-p">
          {" "}
          <span>
            <FaCheckSquare className="features-check" />{" "}
          </span>
          Cross off your bucket list todos one by one
        </p>
        <p className="features-p">
          <span>
            <FaPenSquare className="features-update" />
          </span>
          Update your progress as you get closer to accomplishing goals
        </p>

        <p className="features-p">
          <span>
            <FaStar className="features-star" />
          </span>
          View your completed bucket list todos over time — you're a rockstar!
        </p>
      </div>
    </section>
  );
}

// Feature 1: Cross off your bucket todos one by one
// Feature 2: Update your progress as you get closer to accomplishing goals
// feature 3: View your completed bucket list todos over time — you're a rockstar!
