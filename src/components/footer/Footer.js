import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";

/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Built by{" "}
          {
            <a
              href=""
              hoverStyle={{ fontWeight: "bold" }}
              style={{ color: props.theme.text }}
            >
              Virinchi Sai
            </a>
          }
        </p>
      </Fade>
    </div>
  );
}
