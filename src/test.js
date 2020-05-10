import React from 'react';
import { css } from 'emotion';
import { Cover3 } from './cover3.jpg';

export default function Test() {
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
      <div
        style={{
          width: '100%',
          height: '1000rem',
          display: 'inline',
          color: '#fff',
          padding: '1rem'
        }}
      >
        <h2>Stuff I want</h2>
        <p></p>
        <p>1. AirPods 2nd (or pro) generation</p>
        <p>2. iPhone 11 (Purple or Green)</p>
        <p>3. a new watch (anything) </p>
        <p>4. new mechanical pencil(i got this!!)</p>
      </div>
    </div>
  );
}
