import styled from 'styled-components';
import AppCard from 'components/app-card';
import { FAQ } from './data';
import { FAQSection } from './FAQSection';

const ProcureDirect = () => {
  return (
    <div>
      <Header>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h5 className="badge">PROCURE DIRECT PAGE</h5>
              <h1>Never run out of medications for your patients</h1>

              <p>
                Revolutionize how you discover and order products for your practice. Get quality pharmaceutical products delivered to your facility or practice on time.
              </p>

              <div className="d-flex flex-wrap">
                <a href="https://play.google.com/store/apps/details?id=com.drugstoc.app">
                  <img
                    src="/images/procure-direct/google-play-alt.svg"
                    alt="android play store icon"
                    aria-hidden="true"
                  />
                </a>
                <a href="https://apps.apple.com/ng/app/drugstoc-mobile/id1467205425">
                  <img
                    src="/images/procure-direct/app-store-alt.svg"
                    alt="apple store icon"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-5">
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1684435030/banner_2_e8iq3h.png"
                alt="Phone Spinning"
                loading="eager"
                className="w-100 d-lg-block d-none banner"
              />
            </div>
          </div>
          <img
            src="https://res.cloudinary.com/bizstak/image/upload/v1684239802/banner-dots_stl7x6.png"
            alt="Banner dots"
            aria-hidden="true"
            className="header__banner-dots-right d-lg-block d-none"
          />
        </div>
      </Header>
      <ProcureSection theme="#fff">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5">
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1684434886/supply_e6qfeg.png"
                alt=" Forward thinking solutions"
                className="mb-3 mb-lg-0"
              />
            </div>
            <div className="col-lg-5">
              <h3>
                Anti-counterfeit <br /> Supply Chain
              </h3>
              <p>
                Our supply chain is end to end traceable and trackable leaving no room for substandard or counterfeit products to contaminate your purchases.
              </p>
              <p>Our quality service systems are ISO 9001-2015 Certified for Good Distribution Practice and Quality Management Systems. </p>
            </div>
          </div>
        </div>
      </ProcureSection>
      <ProcureSection theme="linear-gradient(180deg, #FFF9EE 0%, rgba(255, 249, 238, 0.411458) 58.84%, rgba(255, 249, 238, 0.411458) 58.85%, rgba(255, 249, 238, 0.1) 100%)">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5 order-2 order-lg-1">
              <h3>
                7000+ Products, <br /> 24/7 Delivery Services
              </h3>
              <p>
                {/* Join the DrugStoc family and get access to over 7000+ products in the palm of your hand. We deliver within 24 hours all orders purchased on our platform within Lagos. All our products are long-dated to help you manage your expiry. */}
                Join the DrugStoc family and get access to over 7000+ products in the palm of your hand. We take orders 24/7 and have ExpressDelivery on all orders purchased in DrugStoc Coverage Zones. All our products are long-dated to help you manage your expiry.
              </p>
            </div>{' '}
            <div className="col-lg-5 order-1 order-lg-2">
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1684434961/section-2_2_muzguo.png"
                alt=" Forward thinking solutions"
                className="d-block mb-3 mb-lg-0"
              />
            </div>
          </div>
        </div>
      </ProcureSection>
      <ProcureSection theme="rgba(219, 219, 219, 0.1)">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5">
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1684434886/supply_e6qfeg.png"
                alt=" Forward thinking solutions"
                className="d-block mb-3 mb-lg-0"
              />
            </div>
            <div className="col-lg-5">
              <h3>
                Flexible Financing <br /> Options
              </h3>
              <p>
                Keep your shelves well-stocked while we help manage your end-to-end inventory with a seamless payment plan.
              </p>
              <p>
                Gain access to a personalized purchasing officer to help you at every step of your way.
              </p>
            </div>
          </div>
        </div>
      </ProcureSection>
      <FAQSection faq={FAQ} />
      <AppCard />
    </div>
  );
};

export const Header = styled.header`
  height: 740px;
  display: flex;
  align-items: center;
  position: relative;
  background: #fff8f0;
  @media (max-width: 992px) {
    min-height: 500px;
    display: block;
    padding: 7rem 0 3rem;
  }
  .container {
    position: relative;
  }
  h1 {
    font-family: var(--font-primary);
    font-weight: bold;
    color: var(--text-black);
    font-size: calc(var(--font-h1) + 2px);
    line-height: 1.4;
    margin-bottom: 1.8rem;

    span {
      color: var(--primary-green);
    }
  }
  h5 {
    font-size: calc(var(--font-p) + 0px);
    color: #fff;
    line-height: 32px;
    text-transform: uppercase;
    background: #ffa149;
    padding: 3px 9px;
    font-weight: 500;
    border-radius: 1px;
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: var(--font-h5);
    color: var(--text-black);
    line-height: 1.7;
  }
  .banner {
    transform: translatey(0px);
    animation: float 6s ease-in-out infinite;
    /* filter: drop-shadow(0 5px 15px rgb(0 0 0 / 60%)); */
    @keyframes float {
      0% {
        filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.4));
        transform: translatey(0px);
      }
      50% {
        filter: drop-shadow(0 25px 15px rgba(0, 0, 0, 0.2));
        transform: translatey(-20px);
      }
      100% {
        filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.4));
        transform: translatey(0px);
      }
    }
  }
  a {
    img {
      width: 150px;
      margin-right: 10px;
      margin-top: 1rem;
    }
  }

  button {
    margin-top: 1.2rem;
    padding: 13px 35px;
    font-weight: 500;
  }

  .iso-section {
    width: 95%;
    margin-top: 3.1rem;
  }

  .header__banner-dots {
    &-right {
      right: -20px;
      position: absolute;
      height: 251px;
      bottom: -60px;
    }
  }
`;

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
    color: #4c70d6;
  }
  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: calc(var(--font-h2) + 6px);
    line-height: 1.4;
    font-family: var(--font-primary);
    color: var(--text-black);
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
    @media (max-width: 992px) {
      height: 300px;
      object-fit: contain;
      object-position: left;
    }
  }
`;

export default ProcureDirect;