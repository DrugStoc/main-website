/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { Accordion, AccordionContext } from 'react-bootstrap';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';

export const CoreValueSection = () => (
  <CoreValues>
    <div className="d-block d-lg-flex flex-wrap">
      <div className="core__values-intro">
        <div className="container">
          <h2>Our Core Values</h2>
          <Accordion defaultActiveKey="0" flush>
            <div className="accordion__item">
              <CustomToggle eventKey="0" type="arrow">
                Health Provider First
              </CustomToggle>

              <Accordion.Collapse eventKey="0">
                <p>
                  Being a healthcare workers is already a tough endeavour in our corner of the world. We can make it better by working together to get rid of counterfeit products and the hassles of getting quality medication to our healthcare providers.
                </p>
              </Accordion.Collapse>
            </div>
            <div className="accordion__item">
              <CustomToggle eventKey="1" type="arrow">
                Quality Matters
              </CustomToggle>

              <Accordion.Collapse eventKey="1">
                <p>
                  Quality is a culture. From the quality of the manufacturers we onboard, to international quality standards in storage and distribution, to the quality of our front facing access points and customer service desk; we work around the clock to uphold and improve on standards in our industry.
                </p>
              </Accordion.Collapse>
            </div>
            <div className="accordion__item">
              <CustomToggle eventKey="2" type="arrow">
                Fair Pricing
              </CustomToggle>

              <Accordion.Collapse eventKey="2">
                <p>
                  80% of healthcare is Nigeria is financed by out of pocket payments by the patient. We work on reducing the burden of these payments through various supply chain innovations.
                </p>
              </Accordion.Collapse>
            </div>
            <div className="accordion__item">
              <CustomToggle eventKey="3" type="arrow">
                Rare and Speciality Medication Access
              </CustomToggle>

              <Accordion.Collapse eventKey="3">
                <p>
                  It takes several years for speciality items or new drug discoveries to make their way to the African market. This results in patients receiving outdated therapies due to the lack of availability of the product and forces the patient or provider to source the medication through international middlemen which increases the price anywhere from 2x to 64x the international market price. We find this outrageous.
                </p>
              </Accordion.Collapse>
            </div>
            <div className="accordion__item">
              <CustomToggle eventKey="4" type="arrow">
                Reduce the Brain Drain
              </CustomToggle>

              <Accordion.Collapse eventKey="4">
                <p>
                  Nigeria looses thousands of skilled health workers a year to other countries. We offer an avenue for financial independence by empowering them with financial and social entrepreneurship skills that reduce the necessity for the exodus.
                </p>
              </Accordion.Collapse>
            </div>
          </Accordion>
        </div>
      </div>
      <div className="core__values-image">
        <img src="/images/about-us/core-values.png" alt="" />
      </div>
    </div>
  </CoreValues>
);

export const CustomToggle = ({ children, eventKey, callback }) => {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = currentEventKey === eventKey;
  return (
    <button
      type="button"
      className="accordion__button"
      onClick={decoratedOnClick}
    >
      {children}

      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: isCurrentEventKey ? 'rotate(90deg)' : 'rotate(00deg)',
        }}
      >
        <path d="M8 20L16 12L8 4V20Z" fill="white" />
      </svg>
    </button>
  );
};

const CoreValues = styled.section`
  .d-block.flex-wrap {
    height: 62rem;
    align-items: stretch;
  }
  .accordion__item {
    border-bottom: 1px dashed #ffffff;
  }
  .container {
    max-width: 500px;
    margin: auto;
    @media (max-width: 992px) {
      max-width: 100%;
    }
  }
  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: calc(var(--font-h2) + 3px);
    line-height: 1.6;
    font-family: var(--font-primary);
    color: #fff;
    margin-bottom: 2rem;
  }
  .core__values {
    &-intro {
      background: var(--primary-blue);
      height: 100%;
      max-width: 50%;
      flex: 0 0 50%;
      min-height: 360px;
      padding: 7rem 0;
      height: 100%;
      @media (max-width: 992px) {
        max-width: 100%;
        flex: 0 0 100%;
        padding: 7rem 30px;
      }
      p {
        font-style: normal;
        font-weight: normal;
        font-size: calc(var(--font-p) + 3px);
        line-height: 33px;
        color: #fff;
      }
    }
    &-image {
      max-width: 50%;
      flex: 0 0 50%;
      height: 100%;
      @media (max-width: 992px) {
        display: none;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .accordion__button {
    font-size: calc(var(--font-h5) + 5px);
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 2.6rem 0;
    align-items: center;
    font-family: var(--font-primary);
    color: #fff;
    background: transparent;
    border: none;

    &:focus-visible,
    &:focus {
      outline: none;
    }
  }
`;
