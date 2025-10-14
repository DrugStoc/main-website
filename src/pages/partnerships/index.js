import styled from 'styled-components';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';
import { partners } from 'pages/home/data';
import { investors } from 'pages/about-us/data';
import PartnershipMetadata from 'components/meta/partnership';
import PartnerPills from 'components/PartnershipPills';
import GoodPillSection from 'components/GoodPillSection';
import { useState } from 'react';
import { ArrowRight } from 'react-bootstrap-icons';

const Partnerships = () => {
  const [hovered, setHovered] = useState(null);

  const options = [
    'Pharmacy',
    'HMO',
    'Private Investor',
    'Health Facility',
    'Independent Agent',
  ];
  return (
    <div>
      <PartnershipMetadata />
      <Header>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h5 className="badge">WE BELIEVE IN PARTNERSHIPS</h5>
              <h1>We partner with mission driven organizations </h1>

              <p>
                To build an inclusive supply chain in healthcare, DrugStoc
                understands the need to work
                <br /> and collaborate with mission driven organisations with a
                similar vision to increase access to affordable and genuine
                medications in emerging Economies.
              </p>
              <PartnerPills />
            </div>
            <div className="col-lg-5">
              <img
                src="/images/Goodpilll.svg"
                //src="https://res.cloudinary.com/bizstak/image/upload/v1684432694/banner_1_qi5elw.png"
                alt="hand shake illustratioln"
                loading="eager"
                className="w-100 d-lg-block d-none"
              />
            </div>
          </div>
          <img
            src="/images/landing/dotvector1.png"
            //src="https://res.cloudinary.com/bizstak/image/upload/v1684239802/banner-dots_stl7x6.png"
            alt="Banner dots"
            aria-hidden="true"
            className="header__banner-dots-right d-lg-block d-none"
          />
        </div>
      </Header>

      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" duration={0.8}>
        {/* <PartnershipsSection theme="#fff">
          <div className="container">
            <div className="row align-items-center justify-content-center m-auto">
              <div className="col-lg-10 text-center">
                <h4>Some of our Global Pharmaceutical Partners</h4>
                <p className="mb-5">
                  We work with more than 400 Pharmaceutical companies to deliver
                  anti-countefeit drugs to last mile patients
                </p>
                <div className="row align-items-center">
                  {partners.map(pt => (
                    <div className="col-lg col-4 mb-3 mb-lg-0" key={pt.src}>
                      <img src={pt.src} alt={pt.alt} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </PartnershipsSection> */}

        <GoodPillSection />
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" duration={0.6}>
        <ProvidersSection>
          <div className="container">
            <h3>Some of our Strategic Partners</h3>
            <h5>
              DrugStoc is backed and supported by some of the world’s most
              experienced and <br /> knowledgable investors and partners in the
              healthcare sector
            </h5>

            <div className="row align-items-center">
              {investors.map(investor => (
                <div className="col-lg-3 col-md-4 col-6" key={investor.src}>
                  <div className="investor__card">
                    <img src={investor.src} alt={investor.alt} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ProvidersSection>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" duration={0.8}>
        <GetInTouch>
          <div className="d-block d-lg-flex flex-wrap justify-content-center">
            <img
              src="/images/partnership.jpg"
              //src="https://res.cloudinary.com/bizstak/image/upload/v1684432815/section-2_1_tg0fcz.png"
              alt="a contact support person at her office at DrugStoc wearing a black nose mask"
            />
            <div className="content">
              <div>
                <h4>
                  With The GoodPill Project Pharmacies become frontline health
                  managers
                </h4>

                <p>
                  They can verify patient eligibility, manage affordable
                  programs, and share insights that lead to better health
                  policies
                </p>
                <p
                  className="text-muted fw-semibold mb-4"
                  style={{ fontSize: '1.1rem' }}
                >
                  I want to <span className="text-success">partner</span> as a:
                </p>

                {/* Pills */}
                <div className="d-flex flex-wrap gap-3" style={{ gap: 10 }}>
                  {options.map((option, index) => {
                    const isHovered = hovered === option;

                    return (
                      <a
                        key={option}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={
                          index
                            ? 'https://wa.link/4jcx5q'
                            : 'https://thegoodpillproject.org/pharmacy-register'
                        }
                        className="d-flex align-items-center gap-2 px-4 py-2 rounded-pill border border-success fw-bold text-decoration-none small"
                        style={{
                          zIndex: 10,
                          color: isHovered ? '#fff' : '#28a745',
                          background: isHovered
                            ? 'linear-gradient(90deg,#28a745,#20c997)'
                            : 'transparent',
                          boxShadow: isHovered
                            ? '0 4px 10px rgba(0,0,0,0.15)'
                            : 'none',
                          transform: isHovered
                            ? 'translateY(-3px) scale(1.05)'
                            : 'none',
                          transition: 'all 0.25s ease',
                        }}
                        onMouseEnter={() => setHovered(option)}
                        onMouseLeave={() => setHovered(null)}
                      >
                        {option}
                        <ArrowRight
                          size={14}
                          style={{
                            transform: isHovered
                              ? 'translateX(6px)'
                              : 'translateX(2px)',
                            transition: 'all 0.25s ease',
                          }}
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </GetInTouch>
      </ScrollAnimation>
    </div>
  );
};

const Header = styled.header`
  height: fit-content;
  display: flex;
  align-items: center;
  position: relative;
  background: #fff8f0;
  padding: 8rem 0;
  @media (max-width: 992px) {
    height: fit-content;
    display: block;
    padding: 8rem 0;
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
    width: 540px;
    position: absolute;
    right: 140px;
    bottom: 60px;
    z-index: 1;
    max-width: 50%;
  }
  a {
    img {
      width: 180px;
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
      right: 10%;
      position: absolute;
      height: 251px;
      bottom: 60px;
    }
  }
`;

const PartnershipsSection = styled.section`
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
  }
  img {
    width: 90px;
    display: block;
    text-align: center;
    margin: auto;
    object-fit: contain;
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
    @media (max-width: 992px) {
      white-space: unset;
    }
    list-style-position: inside;
    list-style-image: url("data:image/svg+xml,%0A%3Csvg width='30' height='30' viewBox='0 0 38 38' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='19' cy='19' r='19' fill='%23F5F9F9'/%3E%3Cpath d='M15.2949 23.59L19.8749 19L15.2949 14.41L16.7049 13L22.7049 19L16.7049 25L15.2949 23.59Z' fill='%232C4DA7' stroke='%232C4DA7' stroke-width='2'/%3E%3C/svg%3E%0A");
    li {
      margin-top: 0.8rem;
    }
    p {
      display: inline;
      margin-left: 0.4rem;
      vertical-align: middle;
    }
  }
`;
const ProvidersSection = styled.section`
  background: linear-gradient(
    319.35deg,
    #f5eade -10.45%,
    rgba(255, 255, 255, 0.5) 91.81%
  );
  padding: 8rem 0;
  text-align: center;
  margin-top: 7rem;

  @media (max-width: 992px) {
    margin-top: 4rem;
    padding: 4rem 0;
    br {
      display: none;
    }
  }
  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: calc(var(--font-h2) - 1px);
    line-height: 1.4;
    text-align: center;
    font-family: var(--font-primary);
    color: var(--text-black);
    margin-bottom: 1.5rem;
  }

  h5 {
    font-style: normal;
    font-weight: normal;
    font-size: calc(var(--font-p) + 1px);
    line-height: 1.7;
    /* or 32px */
    margin-bottom: 4.6rem;

    color: var(--text-black);
  }

  img {
    height: 53px;
    width: 100%;
    display: block;
    margin: auto;
    margin-bottom: 4rem;
  }

  .btn-drug-stoc {
    margin-top: 6rem;
    text-transform: uppercase;
    padding: 12px 50px;
    font-size: 13px;
  }
`;

const GetInTouch = styled.section`
  height: 650px;
  .content {
    padding-right: 4rem !important;
  }
  @media (max-width: 992px) {
    height: 100%;
    min-height: 500px;
    img,
    .content {
      height: 100%;
      width: 100%;
      padding-right: 0rem !important;
      flex: 0 0 100% !important;
      max-width: 100% !important;
      > div {
        padding: 4rem 2rem !important;
      }
    }
  }
  .d-lg-flex {
    height: 100%;
  }
  img {
    height: 100%;
    width: 100%;
    flex: 0 0 50%;
    max-width: 50%;
    object-fit: cover;
  }
  .content {
    background: #e2eedd;
    flex: 0 0 50%;

    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    max-width: 50%;
    p {
      font-style: normal;
      font-weight: normal;
      font-size: calc(var(--font-p) + 3px);
      line-height: 1.7;
      /* or 32px */
      margin-bottom: 2rem;
      color: var(--text-black);
    }

    h4 {
      font-style: normal;
      font-weight: bold;
      font-size: calc(var(--font-h2) + 9px);
      line-height: 1.4;
      font-family: var(--font-primary);
      color: var(--text-black);
      margin-bottom: 1rem;
    }

    button {
      padding: 15px 40px;
    }

    > div {
      padding-left: 21%;
    }
  }
`;

export default Partnerships;
