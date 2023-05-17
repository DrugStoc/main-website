import styled from 'styled-components';
import AppCard from 'components/app-card';
import { Header } from 'pages/procure-direct';
import RXInsightMetadata from 'components/meta/rxInsight';

const MarketInsight = () => {
  return (
    <div>
      <RXInsightMetadata />
      <Header>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h5 className="badge">MARKET INSIGHTS </h5>
              <h1>Data-driven market insights for Phamaceutical companies</h1>

              <p>
                We offer qualitative and quantitative insights to help <br />
                pharmaceutical manufacturers, government institutions and <br />
                Pharmacy business owners to make smarter decisions
              </p>
            </div>
            <div className="col-lg-5">
              <img
                src="/images/market-insight/market-insights.svg"
                alt="Woman Smiling"
                loading="eager"
                className="w-100 d-lg-block d-none"
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
      <MarketInsightSection theme="#fff">
        <div className="container">
          <p className="blue text-center mb-2">
            HOW MARKET INSIGHT CAN HELP YOU?
          </p>
          <h2>For Pharmaceutical Companies</h2>

          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <img
                src="/images/market-insight/section-1.png"
                alt=" Forward thinking solutions"
                className="d-lg-block d-none w-100"
              />
            </div>
            <div className="col-lg-5">
              <p>
                Take out all guess work away from your decision making
                processes.We use more than 300 data points to help provide
                powerful insights tailored to your specific business needs.
              </p>
              <ul className="row">
                <li className="col-lg-12 ">
                  <p>Identify ways to lower costs and improve revenues</p>
                </li>
                <li className="col-lg-12 ">
                  <p>Identify the market potential for new products</p>
                </li>
                <li className="col-lg-12 ">
                  <p>Pinpoint what is impacting sales</p>
                </li>
                <li className="col-lg-12 ">
                  <p>Understand market perception about your products</p>
                </li>
                <li className="col-lg-12 ">
                  <p>
                    Customise your insights to solve your growth challenges
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </MarketInsightSection>
      <MarketInsightSection theme="#fff">
        <div className="container">
          <h2>For Stakeholder & Decision Makers</h2>

          <div className="row align-items-center justify-content-between mt-4">
            <div className="col-lg-5">
              <p>
                Leverage on our unique market insights to positively transform your business. From growing your pharmacy sales, to benchmarking market prices for retailers and interested organisations, to providing insight to design your next marketing campaign, we are here to help you navigate the chaos. We work with:
              </p>
              <ul className="row">
                <li className="col-lg-12 ">
                  <p>Consumer Health Companies</p>
                </li>
                <li className="col-lg-12 ">
                  <p>Wholesalers</p>
                </li>
                <li className="col-lg-12 ">
                  <p>Government instititutions</p>
                </li>
                <li className="col-lg-12 ">
                  <p>Non Governmental Organizations</p>
                </li>
                <li className="col-lg-12 ">
                  <p>Retailers</p>
                </li>
                <li className="col-lg-12 ">
                  <p>Health Insurance Companies</p>
                </li>
              </ul>
              <p>We worked with the wonderful people at Rippleworks to ensure the integrity of our data sets. Our data comply with F.A.I.R Standards.</p>
            </div>
            <div className="col-lg-6">
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1684242904/Image-4_qxvjml.png"
                style={{ borderRadius: '20px' }}
                alt=" Forward thinking solutions"
                className="d-lg-block d-none w-100"
              />

            </div>
          </div>
        </div>
      </MarketInsightSection>
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <a href="mailto:rx-insights@drugstoc.com" style={{ marginLeft: 'auto', marginRight: 'auto', }}>
          Send an Email <img src="/images/arrow.svg" width="30" style={{ marginLeft: '10px' }} />
        </a>
      </div>
      
      <AppCard />
    </div>
  );
};

const MarketInsightSection = styled.section`
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
    margin-top: 4rem;
    br {
      display: none;
    }
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

export default MarketInsight;
