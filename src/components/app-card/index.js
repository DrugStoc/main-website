import styled from 'styled-components';

const AppCard = () => {
  return (
    <BackdropWrapper>
      <img
        src="/images/landing/download/backdrop1.png"
        alt="static ripple background"
        className="backdrop d-lg-block d-none"
      />
      <img
        src="/images/landing/download/backdrop2.png"
        alt="static ripple background"
        className="backdrop2 d-lg-block d-none"
      />
      <div className="container">
        <DownloadAppSection>
          <div className="container">
            <MobileBanner>
              <img
                data-aos="fade-down"
                src="/images/landing/download/banner.png"
                alt="drugstoc e-commerce mobile app"
              />
            </MobileBanner>

            <div className="row">
              <div className="col-md-6">
                <h3 data-aos="fade-down">
                  Download DrugStoc App
                  <br /> on your Phone
                </h3>
                <p data-aos="fade-down">
                  Download the app to manage your orders, keep track of the
                  order progress and much more. Discover products and take
                  advantage of promotional discounts on the go.
                </p>
                <div className="d-flex flex-wrap justify-content-center justify-content-lg-start">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.drugstoc.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-aos="zoom-out-up"
                  >
                    <img
                      src="/images/landing/download/google-play-alt.svg"
                      alt="google play store icon"
                      className="logo"
                    />
                  </a>
                  <a
                    href="https://apps.apple.com/ng/app/drugstoc-mobile/id1467205425"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-aos="zoom-out-up"
                  >
                    <img
                      src="/images/landing/download/app-store-alt.svg"
                      alt="app store icon"
                      className="logo"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <img
            data-aos="fade-left"
            src="/images/landing/download/banner.png"
            alt="a mobile view of DrugStoc app"
            className="banner d-lg-block d-none"
          />
        </DownloadAppSection>
      </div>
    </BackdropWrapper>
  );
};

const MobileBanner = styled.div`
  display: none;
  @media (max-width: 992px) {
    display: block;
    text-align: center;
    margin-top: -145.5%;
  }
  img {
    width: 100%;
  }
`;

const DownloadAppSection = styled.section`
  margin-top: 6rem;
  //background: var(--primary-blue);
  padding: 6rem 3rem;
  position: relative;
  display: flex;
  align-items: center;
  min-height: 435px;
  .mobile-banner {
    display: none;
  }
  @media (max-width: 992px) {
    h3 {
      padding-top: 50px;
    }
    .mobile-banner {
      display: none;
    }
    padding: 3rem 1.5rem;
    margin-top: 4rem;
    text-align: center;
    br {
      display: none;
    }
  }

  img.banner {
    width: 414px;
    position: absolute;
    bottom: 0;
    right: 3%;
  }

  .logo {
    width: 155px;
    margin-right: 20px;
    margin-bottom: 0.5rem;
    @media (max-width: 992px) {
      width: 7rem;
      margin-right: 10px;
    }
  }
  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: calc(var(--font-h2) - 1px);
    line-height: 1.4;
    margin-bottom: 1rem;
    color: #fff;
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: calc(var(--font-p) + 1px);
    line-height: 1.7;
    /* or 32px */
    margin-bottom: 2.5rem;
    color: #fff;
  }
`;

const BackdropWrapper = styled.div`
  @media (max-width: 992px) {
    margin-top: 350px;
  }
  background: var(--primary-blue);
  position: relative;
  .backdrop {
    position: absolute;
    left: 0;
    height: 520px;
  }
  .backdrop2 {
    position: absolute;
    right: 0;
    height: 430px;
    top: -62%;
  }
`;

export default AppCard;
