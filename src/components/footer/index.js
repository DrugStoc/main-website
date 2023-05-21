import styled from 'styled-components';
import Link from 'next/link';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear()
  return (
    <FooterWrapper role="contentinfo">
      <style jsx>
        {
          `
            h5 {
              font-weight: 600
            }
          `
        }
      </style>
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
              <li>
                <Link href="/terms-and-conditions" as="/terms-and-conditions">
                  <a aria-label="Navigate To Terms and Condition Page">
                    Terms and Conditions
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/return-policy" as="/return-policy">
                  <a aria-label="Navigate To Terms and Condition Page">
                    Return Policy
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/privacy" as="/privacy">
                  <a aria-label="Navigate To Pro">Privacy</a>
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
              <li>
                <a href="https://app.drugstoc.com/" target='_blank'>
                  <a aria-label="Navigate To RXInsights page">Shop on Web</a>
                </a>
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
                  {/* Plot 3 , Billing way, Oregun, Lagos */}
                  Drugstoc Inc.
                </a>
              </li>
            </ul>

            <h5>Contact Us</h5>
            <ul className="list-unstyled quick-links">
              <li>
                <a
                  href="tel:+234(0)1 7005571"
                  aria-label="Navigate To Google maps"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +234(0)1 7005571
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@drugstoc.com"
                  aria-label="Navigate To Google maps"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="https://res.cloudinary.com/bizstak/image/upload/v1684263069/email_oe5zjc.png" alt="email envelop icon" width={45} height={45} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row" role="row">
          <div className="col-12 col-lg-3">
            <p className="text-left">© {year} DrugStoc. All rights reserved</p>
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
                <img src="/images/social/Instagram.svg" alt="instagram icon" />
              </a>
              <a
                href="  https://www.linkedin.com/company/drugstoc"
                aria-label="Navigate To Linkedin Page"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/social/Linkedin.svg" alt="linkedin icon" />
              </a>
              <a
                href="https://twitter.com/DrugStocHQ"
                aria-label="Navigate to Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/social/Twitter.svg" alt="twitter icon" />
              </a>
              <a
                href="https://www.facebook.com/drugstoc"
                aria-label="Navigate to Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/social/Facebook.svg" alt="facebook icon" />
              </a>
              <a
                href="https://youtube.com/@drugstoc"
                aria-label="Navigate to Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img width={34} height={34} src="/images/social/youtube.svg" alt="youtube icon" />
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
