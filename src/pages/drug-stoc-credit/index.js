/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import styled from 'styled-components';

/* -------------------------- Internal Dependencies ------------------------- */
import AppCard from 'components/app-card';
import { FAQ } from './data';
import { FAQSection } from 'pages/procure-direct';
import { Header } from 'pages/procure-direct';

const DrugStocCredit = () => {
  return (
    <div>
      <Header>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <h5 className="badge">DRUGSTOC CREDIT</h5>
              <h1>
                Instant, flexible Loans <br />
                to stock your Pharmacy
              </h1>

              <p>
                With DrugStoc Credit, your drug supply chain can be much more.
                Get uninterruted stock or finance to take your practice,
                hospital or pharmacy to the next level.
              </p>

              <div className="d-flex flex-wrap">
                <a href="#">
                  <img
                    src="/images/procure-direct/google-play-alt.svg"
                    alt=""
                    aria-hidden="true"
                  />
                </a>
                <a href="#">
                  <img
                    src="/images/procure-direct/app-store-alt.svg"
                    alt=""
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-5">
              <img
                src="/images/stoc-credit/banner.png"
                alt="Phone Spinning"
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
      <ProcureSection theme="#fff">
        <div className="container">
          <h2>
            No-hassle financing for your <br /> Healthcare business
          </h2>

          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <div className="card-body">
                  <img src="/images/careers/1.svg" alt="" />
                  <h4>Up to 28 Credit Days</h4>
                  <p>
                    Get up to 24 calender days interest free loans. Get your
                    business running without worry about your stock levels.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <div className="card-body">
                  <img src="/images/careers/2.svg" alt="" />
                  <h4>No Deposit Required, No Collateral</h4>
                  <p>
                    Enjoy an Easy Access to Instant Loans Now - Easy to Apply,
                    No Long Form to Fill, and No Collateral Is Required.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <div className="card-body">
                  <img src="/images/careers/3.svg" alt="" />
                  <h4>Flexible repayment Options</h4>
                  <p>
                    You can get money you need for your healthcare business fast
                    at great rates & flexible terms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ProcureSection>
      <ProcureSection theme="#FFF8F0">
        <div className="container">
          <p className="text-center mb-3">How DrugStoc Credit works?</p>{' '}
          <h2>Simple 4 easy guide steps</h2>
          <div className="row mt-5 mb-5 circles-row align-items-center justify-content-center">
            <img
              alt=""
              src="/images/stoc-credit/arrow1.svg"
              className="d-lg-block d-none arrows arrow-top"
            />
            <img
              alt=""
              src="/images/stoc-credit/arrow1.svg"
              className="d-lg-block d-none arrows arrow-top1"
            />
            <img
              alt=""
              src="/images/stoc-credit/arrow2.svg"
              className="d-lg-block d-none arrows arrow-down"
            />
            <div className="col-lg-3 col-md-6 col-12 mb-3 mb-md-4 mb-lg-0">
              <div className="circles">
                <div>
                  <img alt="" src="/images/stoc-credit/list.svg" />
                  <p className="mb-0">
                    <b>Apply Credit</b>
                  </p>
                  <p>Submit your application</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-3 mb-md-4 mb-lg-0">
              <div className="circles">
                <div>
                  <img alt="" src="/images/stoc-credit/call.svg" />
                  <p className="mb-0">
                    <b> Hear from us</b>
                  </p>
                  <p>We will contact you</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-3 mb-md-4 mb-lg-0">
              <div className="circles">
                <div>
                  <img alt="" src="/images/stoc-credit/stamp.svg" />
                  <p className="mb-0">
                    <b> Get Approval</b>
                  </p>
                  <p>Get fast approval within 2 business hours.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-3 mb-md-4 mb-lg-0">
              <div className="circles">
                <div>
                  <img alt="" src="/images/stoc-credit/box.svg" />
                  <p className="mb-0">
                    <b> Place an Order</b>
                  </p>
                  <p>Get fast approval within 2 business hours.</p>
                </div>
              </div>
            </div>
          </div>
          <a className="btn btn-drug-stoc mx-auto mt-5" href="#">
            DOWNLOAD MOBILE
          </a>
        </div>
      </ProcureSection>
      <FAQSection faq={FAQ} theme="#FAFAFB" />
      <AppCard />
    </div>
  );
};

const ProcureSection = styled.section`
  background: ${({ theme }) => theme};
  padding: 6rem 0;
  @media (max-width: 992px) {
    padding: 4rem 0;
    br {
      display: none;
    }
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: calc(var(--font-p) + 2px);
    line-height: 1.75;
    /* or 32px */
    margin-bottom: 2rem;
    color: var(--text-black);
  }
  a {
    color: #fff;
    padding: 14px 30px;
    width: fit-content;
    text-align: center;
    display: block;
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

  .circles {
    background: #fff;
    border-radius: 50%;
    padding: 10px;
    text-align: center;
    height: 220px;
    width: 220px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      color: var(--primary-blue);
      margin: 0;
      line-height: 1.6;
      font-size: calc(var(--font-p) + 1px);
    }
    img {
      width: 40px;
      margin-bottom: 13px;
    }
  }
  .row.circles-row {
    position: relative;
    margin-top: 7rem !important;
    margin-bottom: 9rem !important;
  }
  img {
    width: 100%;
    &.arrows.arrow-down {
      width: 260px;
      bottom: -69px;
      left: 50%;
      transform: translate(-50%, 0%);
    }

    &.arrows.arrow-top1 {
      width: 260px;
      top: -69px;
      right: 170px;
    }
    &.arrows.arrow-top {
      width: 260px;
      top: -69px;
      left: 170px;
    }
    &.arrows {
      position: absolute;
    }
  }
  .col-lg-4 {
    margin-bottom: 2rem;
  }
  .card {
    background: #ffffff;
    border-radius: 10px;
    border: none;
    box-shadow: 0px 1.56927px 31.3854px rgba(0, 0, 0, 0.1);
    height: 100%;

    h4 {
      font-style: normal;
      font-weight: 600;
      font-size: calc(var(--font-h5) + 2px);
      /* or 32px */

      font-family: var(--font-primary);
      color: var(--text-black);
      margin-bottom: 0.3rem;
    }
    p {
      font-style: normal;
      font-weight: normal;
      font-size: calc(var(--font-h5) - 1px);
      /* or 32px */
      color: var(--text-black);
      margin-bottom: 2rem;
      margin-top: 1rem;
    }
    img {
      margin: 2rem 0;
      width: 50px;
    }
  }
`;

export default DrugStocCredit;
