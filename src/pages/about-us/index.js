import Link from 'next/link';
import styled from 'styled-components';
import AppCard from 'components/app-card';
import { teams, investors } from './data';
import { CoreValueSection } from '../../components/components/core-values';
import AboutMetadata from 'components/meta/about';

const AboutUs = () => {
  return (
    <div>
      <AboutMetadata />
      <Header>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1>Why DrugStoc?</h1>
              <h5>
                Access to genuine medication in emerging economies is broken,
                DrugStoc wants to fix it.{' '}
              </h5>
              <p>
                Africa records ~100,000 deaths from counterfeit and <br />
                substandard medication a year due to unreliable <br /> supply
                chains.
              </p>

              <p className="throphy">
                <img
                  src="https://res.cloudinary.com/bizstak/image/upload/v1684247462/throphy_kpv7fo.svg"
                  alt="nhea logo"
                  width="30"
                  className="mr-2"
                />{' '}
                Winner, Nigeria Healthcare Excellence Awards 2019 & 2021
              </p>
            </div>
          </div>
          <img
            src="https://res.cloudinary.com/bizstak/image/upload/v1684235697/banner_i6jd4m.png"
            alt="Picture of the author"
            loading="eager"
            className="banner d-lg-block d-none"
          />
        </div>
        <img
          src="https://res.cloudinary.com/bizstak/image/upload/v1684237749/banner-dots_ccbxwa.png"
          alt="Banner dots"
          aria-hidden="true"
          className="header__banner-dots-right d-lg-block d-none"
        />
      </Header>
      <WhatWeDo>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="card mb-5 mb-lg-0" style={{ height: '330px' }}>
                <div className="card-body">
                  <h4>Our Mission</h4>
                  <img src="https://res.cloudinary.com/bizstak/image/upload/v1684236043/rocket_nys2bq.png" alt="aircraft icon" />
                  <p>
                    To Empower Healthcare Providers for a Healthier Africa
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="card" style={{ height: '330px' }}>
                <div className="card-body">
                  <h4>Our Vision</h4>
                  <img src="https://res.cloudinary.com/bizstak/image/upload/v1684238287/vision_xjsbgx.png" alt="telescope icon" />
                  <p>
                    To Revolutionise the Way Healthcare Providers Interface with
                    the Pharmaceutical Market
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </WhatWeDo>
      <WhatWeDo background="#fff">
        <div className="container">
          <div className="row what-we-do__intro justify-content-between align-items-center">
            <div className="col-lg-6 pr-lg-0 mb-4 mb-lg-0">
              <img src="https://res.cloudinary.com/bizstak/image/upload/v1684238597/what-we-do_qrywoc.png" alt="What we do" />
            </div>

            <div className="col-lg-5 pl-lg-0">
              <h3>What we do?</h3>
              <p>
                At DrugStoc, we combine the use of unmatched technology, supply
                chain innovation, financial solutions, and product knowledge to
                unlock access to medications in emerging Economies.
              </p>
              <br />
              <p>
                Today, we are the fastest growing tech enabled procurement
                partner for Pharmaceutical & Consumer Health companies reaching
                thousands of Pharmacies, Retailers, Hospitals, Clinics and
                Medical Practitioners across Nigeria.
              </p>

            </div>
          </div>
        </div>
      </WhatWeDo>
      <CoreValueSection />

      <InvestSection>
        <div className="container">
          <h2>Who's backing us?</h2>
          <h5>
            DrugStoc is backed by some of the tech world’s most experienced and
            knowledgable <br /> investors in the healthcare sector
          </h5>
          <div className="row">
            {investors.map(investor => (
              <div className="col-lg-3 col-md-4 col-6" key={investor.src}>
                <div className="investor__card">
                  <img src={investor.src} alt={investor.alt} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <TeamSection>
          <div className="container">
            <h2 className="blue">Ambitious? Passionate about Healthcare?</h2>
            <h5 className="mt-4 ">
              Come work with us and do meaningful work with kind and smart
              colleagues who’re passionate <br /> about changing the health care
              systems across Africa{' '}
            </h5>

            <Link href="/careers">
              <a className="btn btn-drug-stoc mt-4 m-auto text-center">
                VISIT CAREERS PAGE
              </a>
            </Link>
          </div>
        </TeamSection>
      </InvestSection>
      <TeamSection>
        <div className="container">
          <h2>Connect With Us</h2>
          <h5>
            We’re a team of Doctors, Pharmacists, Engineers, Financial analysts
            and <br /> Innovators on a misson to change healthcare
          </h5>
          <div className="row icons__container">
            {teams.map(team => (
              <div
                className="col-lg-4 col-md-4 col-12 team__Card__holder"
                key={team.image}
              >
                <a
                  href={team.link}
                  target="_blank"
                  rel="noopener"
                  referrerPolicy="no-referrer"
                >
                  <button className="team__card">
                    {team.image}
                    <span>{team.name} </span>
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </TeamSection>

      <AppCard />
    </div>
  );
};

const Header = styled.header`
  height: 710px;
  display: flex;
  align-items: center;
  position: relative;
  background: #e2eef6;
  @media (max-width: 992px) {
    min-height: 600px;
    display: block;
    padding: 8rem 0 0;
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
    font-family: var(--font-primary);
    font-size: calc(var(--font-h4) + 1px);
    color: #272d4e;
    line-height: 32px;
    margin-bottom: 15px;
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: var(--font-h5);
    color: var(--text-black);
    line-height: 1.7;
    &.throphy {
      font-size: 14px;
      position: relative;
      top: 18%;
      @media (max-width: 992px) {
        margin-top: 3rem;
        top: 0;
      }
    }
  }
  .banner {
    width: 47%;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 1;
    max-width: 50%;

    height: calc(100% - 81px);

    object-fit: cover;
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
      right: 70px;
      position: absolute;
      height: 251px;
      bottom: -170px;
      z-index: 1;
    }
  }
`;

const WhatWeDo = styled.section`
  padding: 8rem 0;
  background: ${({ background }) =>
    background || 'linear-gradient(171.41deg, #fcfefe 16.7%, #fcf9f5 84.35%)'};
  @media (max-width: 992px) {
    padding: 4rem 0;
  }
  .card {
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    border: none;
    padding: 2rem;
    h4 {
      font-style: normal;
      font-weight: bold;
      font-size: calc(var(--font-p) + 2px);
      line-height: 1.7;
      font-family: var(--font-primary);
      color: #000;
    }
    img {
      height: 74px;
      margin: 0.8rem 0;
    }

    p {
      font-style: normal;
      font-weight: normal;
      font-size: calc(var(--font-p) + 3px);
      /* or 32px */
      line-height: 1.78;
      color: var(--text-black);
    }
  }
  .what-we-do__intro {
    @media (max-width: 992px) {
      br {
        display: none;
      }
    }
    img {
      width: 100%;
      height: 430px;
      object-fit: cover;
      border-radius: 18px;
    }

    p {
      font-style: normal;
      font-weight: normal;
      font-size: calc(var(--font-p) + 2px);
      line-height: 1.85;
      /* or 32px */

      color: var(--text-black);
      &:first-child {
        margin-bottom: 2rem;
      }
    }
    button {
      margin-top: 1.2rem;
      padding: 13px 30px;
    }
    h3 {
      font-style: normal;
      font-weight: bold;
      font-size: calc(var(--font-h2) + 1px);
      line-height: 1.4;
      font-family: var(--font-primary);
      color: var(--text-black);
      margin-bottom: 2rem;
    }
  }
`;

const TeamSection = styled.section`
  .icons__container {
    max-width: 700px;
    margin: auto;
  }
  margin-top: 6rem;
  margin-bottom: 8rem;

  @media (max-width: 992px) {
    margin-top: 4rem;
    display: block;
    br {
      display: none;
    }
  }

  a.text-center {
    width: fit-content;
    margin: auto;
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
    &.blue {
      color: var(--primary-blue);
    }
  }
  h5 {
    font-style: normal;
    font-weight: normal;
    font-size: calc(var(--font-p) + 3px);
    line-height: 1.7;
    /* or 32px */
    text-align: center;
    color: var(--text-black);
    margin-bottom: 3rem;
  }

  .team__card {
    margin: auto;
    height: 45px;
    border-left: 100px;
    background-color: var(--primary-blue);
    width: 200px;
    border: none;
    color: white;
    display: flex;
    align-items: center;
    border-radius: 100px;
    padding-left: 20px;
    span {
      padding-left: 30px;
    }
    @media (max-width: 992px) {
      justify-content: center !important;
      padding: 15px;
      gap: 20px;
      width: fit-content;

      span {
        padding-left: 0;
      }
    }
  }

  .team__Card__holder {
    gap: 20px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
    @media (max-width: 992px) {
      display: block !important;
    }
  }

  .investor__card {
    h4 {
      font-style: normal;
      font-weight: 500;
      font-size: calc(var(--font-p) + 2px);
      /* or 32px */
      text-align: center;
      color: var(--text-black);
      margin-bottom: 0.3rem;
    }
    p {
      font-style: normal;
      font-weight: normal;
      font-size: calc(var(--font-p) + 0px);
      /* or 32px */
      text-align: center;
      color: var(--text-black);
      margin-bottom: 3rem;
    }

    img {
      height: 120px;
      width: 120px;
      display: block;
      margin: auto;
      margin-bottom: 1.2rem;
      @media (max-width: 992px) {
        height: 100px;
        width: 100px;
      }
    }
  }

  .investor__card {
    img {
      height: 53px;
      width: 100%;
      display: block;
      margin: auto;
      margin-bottom: 4rem;
      @media (max-width: 992px) {
        height: 34px !important;
      }
    }
  }
`;

const InvestSection = styled(TeamSection)`
  background: linear-gradient(
    333.35deg,
    #ffe3ca -10.45%,
    rgba(255, 255, 255, 0.5) 91.81%
  );
  padding: 8rem 0;
`;
export default AboutUs;
