/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import styled from 'styled-components';

/* -------------------------- Internal Dependencies ------------------------- */
import AppCard from 'components/app-card';
import { BenefitSection } from 'pages/careers';
import { Header } from 'pages/procure-direct';
import Link from 'next/dist/client/link';



const MarketAccess = () => {
  return (
    <div>
      <Header>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h5 className="badge">MARKET ACCESS </h5>
              <h1>
                Thinking about the African market? <br />
                Get your products to your target audience
              </h1>

              <p>
                We use data driven insights and a new-age hybrid distribution model to  <br />
                create access for your products to the people who need it the most.{' '}
                <br />

              </p>
            </div>
            <div className="col-lg-5">
              <img
                src="/images/market-access/banner.png"
                alt="Woman Smiling"
                loading="eager"
                className="w-100 d-lg-block d-none"
              />
            </div>
          </div>
          <img
            src="/images/landing/banner-dots.png"
            alt="Banner dots"
            aria-hidden="true"
            className="header__banner-dots-right d-lg-block d-none"
          />
        </div>
      </Header>

      <MarketAccessSection theme="#fff">
        <div className="container">
          <p className="blue text-center mb-2">HOW MARKET ACCESS WORKS?</p>
          <h2>For Pharmaceutical Manufacturers</h2>

          <div className="row align-items-center justify-content-between mt-4">
            <div className="col-lg-6">
              <img
                src="/images/market-access/section-2.png"
                alt=" Forward thinking solutions"
                className="d-lg-block d-none w-100"
              />
            </div>
            <div className="col-lg-5">
              <p>
                We provide end-to-end services to ensure that you have a reliable market access partner. These services include:
              </p>
              <ul className="row">
                <li className="col-lg-6 ">
                  <p>Regulatory Affairs</p>
                </li>
                <li className="col-lg-6 ">
                  <p>Registration Services</p>
                </li>
                <li className="col-lg-6 ">
                  <p>Data Driven Pricing <br />and Demand Data</p>
                </li>
                <li className="col-lg-6 ">
                  <p>Track and Trace your <br /> Products Live</p>
                </li>
                <li className="col-lg-6 ">
                  <p>Distribution and <br />Warehousing</p>
                </li>
                <li className="col-lg-6 ">
                  <p> Marketing and Merchandising <br /> Services</p>
                </li>
              </ul>
              <p>
                Open up a new frontier with a reliable partner that prioritises quality and waste reduction. Solidify your presence within a growing market with immense potential. Let's get the conversation started.
              </p>
            </div>
          </div>
        </div>
      </MarketAccessSection>
      <AccessBlurbSection>
        <div className="container">
          <h2>Your medical products, simply delivered</h2>
          <p style={{ textAlign: 'center', marginBottom: '50px' }}> We specialise in: </p>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <div className="card-body">
                  <img src="/images/careers/pharmacy-products.svg" alt="drugs icon" />
                  <h4>Pharmacy Products</h4>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <div className="card-body">
                  <img src="/images/careers/small-device.svg" alt="splitted drugs icon" />
                  <h4>Small Medical Devices</h4>

                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <div className="card-body">
                  <img src="/images/careers/medical-consumables.svg" alt="Stethoscope icon" />
                  <h4>Medical Consumables</h4>

                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <div className="card-body">
                  <img src="/images/careers/rapid-test.svg" alt="injection icon" />
                  <h4>Rapid Diagnostic Tests</h4>
                  {/* <p>
                    With the fast pace of our environment, you’re sure to
                    acquire new skills.
                  </p> */}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <div className="card-body">
                  <img src="/images/careers/career-5.svg" alt="nose mask icon" />
                  <h4>Cold Chain Products </h4>
                  {/* <p>
                    Life is too short to work on things you don’t love. Join us
                    and do the things you love.
                  </p> */}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <div className="card-body">
                  <img src="/images/careers/specialty-item.svg" alt="a pin with two wings" />
                  <h4>Specialty Items in Tertiary Care</h4>
                  {/*<p>
                    All team members have 20 days of paid annual leave, and are
                    warmly encouraged to use them
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>

      </AccessBlurbSection>

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <a href="mailto:marketaccess@drugstoc.com">
          Send us a Email <img src="/images/arrow.svg" width="30" style={{ marginLeft: '10px' }} />
        </a>
      </div>

      <AppCard />
    </div>
  );
};

const MarketAccessSection = styled.section`
  background: ${({ theme }) => theme};
  p.blue {
    color: var(--primary-blue);
  }
  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: calc(var(--font-h2) + 3px);
    line-height: 1.6;
    font-family: var(--font-primary);
    text-align: center;
    color: #000;
    margin-bottom: 4rem;
  }
  margin-top: 7rem;
  @media (max-width: 992px) {
    br {
      display: none;
    }
    margin-top: 4rem;
  }
  img {
    width: 100%;
  }
  h5 {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 100% */
    text-align: center;
    margin-bottom: 1rem;
    color: var(--primary-blue);
  }
  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: calc(var(--font-h2) + 3px);
    line-height: 1.6;
    font-family: var(--font-primary);
    text-align: center;
    color: var(--primary-green);
    margin-bottom: 5.5rem;
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: calc(var(--font-p) + 2px);
    line-height: 1.7;
    /* or 32px */

    color: var(--text-black);
  }

  h4 {
    font-style: normal;
    font-weight: bold;
    font-size: calc(var(--font-h2) + 1px);
    line-height: 1.4;
    font-family: var(--font-primary);
    color: var(--text-black);
    margin-bottom: 2rem;
  }

  ul {
    white-space: nowrap;
    @media (max-width: 992px) {
      white-space: unset;
    }
    list-style-position: inside;
    list-style-image: url("data:image/svg+xml,%0A%3Csvg width='30' height='30' viewBox='0 0 38 38' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='19' cy='19' r='19' fill='%23F5F9F9'/%3E%3Cpath d='M15.2949 23.59L19.8749 19L15.2949 14.41L16.7049 13L22.7049 19L16.7049 25L15.2949 23.59Z' fill='%232C4DA7' stroke='%232C4DA7' stroke-width='2'/%3E%3C/svg%3E%0A");
    li {
      margin-top: 0.8rem;
    }
    p {
      display: inline-block;
      margin-left: 0.4rem;
      vertical-align: middle;
    }
  }
`;

const AccessBlurbSection = styled(BenefitSection)`
  background: #fff8f0;
  margin-top: 7rem;
  @media (max-width: 992px) {
    margin-top: 4rem;
  }
  h2{
    color: #000;
    margin: 50px;
    text-align: center ;
  }
`;

export default MarketAccess;
