import React from 'react';
import styled from 'styled-components';

export default function returnPolicy() {
  return (
    <>
      <Container>
        <div className="header">
          <div className="container">
            <h1>Return Policy</h1>
            <p>
              This package has been sealed and should only be opended by he
              intented recipient. If you are not the intented recipient or it
              has been mistakenly delivered to you, kindly return to us by
              calling +234(0) 1 7005571.
            </p>
            <p>
              To return a product, kindly contact Customer Service Rep. via call
              – 01700557 or your designated sales representative within 48 hours
              of receiving the product. A return officer will schedule a pickup
              upon confirmation from any of our team.
            </p>
            <p>
              Goods received cannot be returned after 72hours (3 days) of
              delivery. Cold chain products, Injectibles and Controlled drugs
              cannot be returned once received. They can only be returned
              immediately at the point of supply.
            </p>
            <p>
              Drugstoc E-hub reserves the right to reject any returned item if:{' '}
            </p>
            <ul>
              <li>Without a Goods Returned Notes </li>
              <li>found damaged or compromised in any way,</li>
              <li>it does not match the exact batch delivered</li>
              <li>Tampered with using inks, tags etc</li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  margin: 150px 0;
  h4 {
    margin: 30px 0;
  }
  h1 {
    text-align: center;
  }
  h6 {
    margin-top: 30px;
    font-size: 24px;
    font-weight: bold;
  }
  li {
    margin-top: 10px;
    margin-left: 40px;
  }
`;
