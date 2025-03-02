import Executive from './executive';
import Procurement from './procurement';
import Sales from './sales';
import QA from './qa';
import styled from 'styled-components';
import Flutter from './flutter';
import React from './react';

export default function Job() {
  const h2Styles = {
    textAlign: 'center',
    marginTop: '50px',
  };
  return (
    <>
      <Container>
        <h2 style={h2Styles}>Sales Associate across Nigeria</h2>
        <Sales />

        <h2 style={h2Styles}>Procurement Associate</h2>
        <Procurement />

        <h2 style={h2Styles}>Executive Assistant to the Executive Office</h2>
        <Executive />

        <h2 style={h2Styles}>Quality Assurance Associate</h2>
        <QA />

        <h2 style={h2Styles}>Flutter Mobile Developer</h2>
        <Flutter />

        <h2 style={h2Styles}>React/Next.js Frontend Developer</h2>
        <React />
      </Container>
    </>
  );
}

const Container = styled.div`
  margin: 150px 0;
  h4 {
    margin: 30px 0;
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
