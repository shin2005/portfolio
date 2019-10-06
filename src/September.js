import React from "react";
import { css } from "emotion";
import { Cover3 } from "./cover3.jpg";

export default function September() {
  return (
    <div
      className={css`
      background-image: url("${Cover3}");
      background-size: cover;
      overflow: hidden;
      text-align: center;
      height: 100vh;
      a {
        color: #fff;
      }
    `}
    >
      <h1
        style={{
          color: "white"
        }}
      >
        coming soon, please wait...
      </h1>
    </div>
  );
}
