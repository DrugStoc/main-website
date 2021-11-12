/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Footer = () => {
  return (
    <FooterWrapper role="contentinfo">
      <div className="container">
        <div className="row" role="row">
          <div className="col-6 col-md">
            <h5>Company</h5>
            <ul className="list-unstyled quick-links">
              <li>
                <Link href="/about" as="/about">
                  <a aria-label="Navigate To About us Page">About us</a>
                </Link>
              </li>
              <li>
                <Link href="/careers" as="/careers">
                  <a aria-label="Navigate To Careers at DrugStoc">
                    Careers at DrugStoc
                  </a>
                </Link>
              </li>

              <li>
                <Link href="/contact" as="/contact">
                  <a aria-label="Navigate To Contact Page">Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md ">
            <h5>Our Solutions</h5>
            <ul className="list-unstyled quick-links">
              <li>
                <Link href="/procure-direct" as="/procure-direct">
                  <a aria-label="Navigate To Procure Direct page">
                    Procure Direct
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/drugStoc-credit" as="/drugstoc-credit">
                  <a aria-label="Navigate To DrugStoc Credit page">
                    DrugStoc Credit
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/rxdelivery" as="/rx-delivery">
                  <a aria-label="Navigate To RxDelivery page">RxDelivery</a>
                </Link>
              </li>
              <li>
                <Link href="/market-access" as="/market-access">
                  <a aria-label="Navigate To Market Access page">
                    Market Access
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/rxinsights" as="/rx-insight">
                  <a aria-label="Navigate To RXInsights page">RXInsights</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md ">
            <h5>Our Clients</h5>

            <ul className="list-unstyled quick-links">
              <li>
                <Link href="/procure-direct" as="/procure-direct">
                  <a aria-label="Navigate To For Pharmacy page">For Pharmacy</a>
                </Link>
              </li>
              <li>
                <Link href="/procure-direct" as="/procure-direct">
                  <a aria-label="Navigate To For Hospitals & Clinics page">
                    For Hospitals & Clinics
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/procure-direct" as="/procure-direct">
                  <a aria-label="Navigate To For Licensed Medical Practitioners page">
                    For Licensed Medical Practitioners
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/partnerships" as="/partnerships">
                  <a aria-label="Navigate To For HMOs page">For HMOs</a>
                </Link>
              </li>
              <li>
                <Link href="/partnerships" as="/partnerships">
                  <a aria-label="Navigate To For Government facilities page">
                    For Government facilities
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md ">
            <h5>Address</h5>
            <ul className="list-unstyled quick-links">
              <li>
                <a
                  href="https://goo.gl/maps/nuNGr2W267ehHXwG7"
                  aria-label="Navigate To Google maps"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Plot 3 , Billing way, Oregun, Lagos
                </a>
              </li>
            </ul>
            <h5>Contact Us</h5>
            <ul className="list-unstyled quick-links">
              <li>
                <a
                  href="mailto:info@drugStoc.com"
                  aria-label="Navigate To Google maps"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  info@drugStoc.com
                </a>
              </li>
              <li>
                <a
                  href="tel:01894049494"
                  aria-label="Navigate To Google maps"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  01 894049494
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row" role="row">
          <div className="col-12 col-lg-3">
            <p className="text-left">© 2021 DrugStoc. All rights reserved</p>
          </div>
          <div className="col-12 col-lg"></div>
          <div className="col-12 col-lg-2">
            <div className="d-flex flex-wrap justify-content-between mt-3 mt-lg-0">
              <a
                href="https://www.instagram.com/drugstoc/"
                aria-label="Navigate To Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/social/Instagram.svg" />
              </a>
              <a
                href="  https://www.linkedin.com/company/drugstoc"
                aria-label="Navigate To Linkedin Page"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/social/Linkedin.svg" />
              </a>
              <a
                href="https://twitter.com/DrugStocNg"
                aria-label="Navigate to Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/social/Twitter.svg" />
              </a>
              <a
                href="https://www.facebook.com/drugstoc"
                aria-label="Navigate to Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/social/Facebook.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  border-top: 1px solid transparent;

  padding: 3rem 0 1rem;
  background: #fff;
  color: #efefefbf;

  background-repeat: repeat-y;
  padding: 3rem 0 1rem;

  img {
    height: 30px;
    width: auto;
    display: block;
    margin: 0rem auto 1rem 0;
  }

  h5 {
    font-weight: 500;
    font-size: calc(var(--font-sm) + 2px);
    line-height: 22px;
    /* identical to box height, or 183% */
    color: var(--text-black);
  }

  hr {
    border-color: #efefef;
    margin: 2rem 0 1rem;
  }

  p {
    font-weight: 400;
    font-size: 13px;
    line-height: 22px;
    /* identical to box height, or 220% */

    color: var(--text-black);

    &.text-left {
      font-feature-settings: 'liga' off;
      color: var(--text-black);
    }
    svg {
      display: inline;
      height: 12px;
      fill: red;
      width: auto;
      margin: 0 2px;
    }
  }
  h6 {
    font-weight: 400;
    font-size: 13px;
    line-height: 25px;
    /* identical to box height, or 220% */

    color: var(--text-black);
  }
  ul {
    li {
      a {
        font-style: normal;
        font-weight: normal;

        /* or 183% */
        font-size: 13px;
        line-height: 34px;
        color: var(--text-black);
        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;

export default Footer;
