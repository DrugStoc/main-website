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
              The return policy is within 24 hours after delivery, call +234(0)
              1 7005571 to request for return of goods.
            </p>
            <p>
              We dont’t take back cold chain item or injections except it’s
              returned on the spot. Returns will be rejected if they do not
              match the exact batch delivered, are damaged, or the pack had been
              tampered with by writing on or placing a price tag on it
            </p>
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
