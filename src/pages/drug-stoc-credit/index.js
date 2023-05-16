import styled from 'styled-components';
import AppCard from 'components/app-card';
import { Header } from 'pages/procure-direct';

const DrugStocCredit = () => {
  return (
    <div>
      <Header>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <a className="btn btn-drug-stoc mx-auto mt-5" href="#">
               DRUGSTOC PAY
              </a>
              <h1>
                With DrugStoc Pay, money is no problem.

              </h1>

              <p>
                Access interest free credit to instantly stock your pharmacy with DrugStoc Pay. Instant access. Zero interest. Flexible payment. 100% Transparent
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
                    alt="apple icon"
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
            <div className="col-md-6 col-lg-2">
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <div className="card-body">
                  <img src="/images/careers/30.svg" alt="shield icon" />
                  <h4>No Deposit Required, No Collateral</h4>
                  <p>
                    Enjoy Easy Access to Instant Loans Now - Easy to Apply, No Long Form to Fill, and No Collateral Is Required.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <div className="card-body">
                  <img src="/images/careers/40.svg" alt="a closed wallet icon" />
                  <h4>Flexible repayment Options</h4>
                  <p>
                    Grow your practice by selecting from various repayment options available to you

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ProcureSection >
      <ProcureSection theme="#FFF8F0">
        <p className="text-center mb-3"><b>How DrugStoc Pay works?</b></p>{' '}
        <div className=" row container">
          <div className=" col-lg-5" style={{ marginLeft: "120px" }}>
          <ul>
            <li><span>Get qualified to Request credit on your DrugStoc Pay account</span>
            </li>
            <li><span>Receive the funds in your DrugStoc Wallet.</span></li>
            <li><span>Use funds to order pharmaceuticals and fill up your shelves.</span></li>
            <li><span>Send funds from your Wallet into your other accounts.</span></li>
          </ul>
          </div>
          <div className="col-lg-4" style={{ marginLeft: "160px" }} >
            <img
                src="/images/stoc-credit/credit.png"
                alt="drugstoc mobile ecommerce app ui"
            />
            </div>
          <a className="btn btn-drug-stoc mx-auto mt-5" href="#">
            DOWNLOAD MOBILE
          </a>
        </div>
      </ProcureSection>
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
 li {
    color: #4B70D6;
    margin-bottom: 43px;

  }
  li span { color: black; }
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
