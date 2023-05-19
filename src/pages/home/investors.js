import Image from 'next/image';
import styled from 'styled-components';

const investors = () => {
  return (
    <ArticleSection>
      <div className="container">
        <h3>As seen on</h3>
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-3 col-6 mb-3 mt-3 mb-lg-0">
            <a
              href="https://www.bbc.co.uk/programmes/p088vk8g"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1684245720/image-52_dlrkan.svg"
                alt="bbc logo"
              />
            </a>
          </div>
          <div className="col-lg-3 col-6 mb-3 mt-3 mb-lg-0">
            <a
              href="https://www.ft.com/content/feae3ea1-cbc4-4188-96bf-8de8d01257d3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1684245774/image-54_t6odtu.svg"
                alt="financial times logo"
              />
            </a>
          </div>
          <div className="col-lg-3 col-6 mb-3 mt-3 mb-lg-0">
            <a
              href="https://www.ft.com/content/feae3ea1-cbc4-4188-96bf-8de8d01257d3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1684245813/image-55_ijdog6.svg"
                alt="techcabal logo"
              />
            </a>
          </div>
          <div className="col-lg-3 col-6 mb-3 mt-3 mb-lg-0">
            <a
              href="https://venturesafrica.com/10-healthcare-companies-and-startups-saving-lives-with-technology-in-nigeria/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1684245845/image-56_ihph0v.svg"
                alt="ventures logo"
              />
            </a>
          </div>
          <div className="col-lg-3 col-6 mb-3 mt-3 mb-lg-0">
            <a
              href="https://techcrunch.com/2021/11/14/nigerian-e-health-pharmaceutical-distribution-startup-drugstoc-secures-4-4-million-series-a-funding-embarks-on-expansion-drive/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1684245931/tc_xbqnst.png"
                alt="tc logo"
              />
            </a>
          </div>
          <div className="col-lg-3 col-6 mb-3 mt-3 mb-lg-0">
            <a
              href="https://finance.yahoo.com/news/nigerian-e-health-pharmaceutical-distribution-060017390.html?guccounter=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1684246129/yahoo-finance_wcticl.png"
                alt="yahoo finance logo"
              />
            </a>
          </div>

          <div className="col-lg-3 col-6 mb-3 mt-3 mb-lg-0">
            <a
              href="https://www.cnbcafrica.com/media/6282068335001/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1684246198/CNBC_knvorv.svg"
                alt="cnbc logo"
              />
            </a>
          </div>

          <div className="col-lg-3 col-6 mb-3 mt-3 mb-lg-0">
            <a
              href="https://www.youtube.com/watch?v=jjyjF3SmQzA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                layout="responsive"
                src="https://res.cloudinary.com/bizstak/image/upload/v1684246084/logo_arise_suylqx.png"
                alt="arise news logo"
                width="auto"
                height="auto"
              />
            </a>
          </div>

          <div className="col-lg-3 col-6 mb-3 mt-3 mb-lg-0">
            <a
              href="https://businessday.ng/technology/article/drugstoc-raises-4-4m-to-deepen-access-to-health-products-in-africa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                layout="responsive"
                src="https://res.cloudinary.com/bizstak/image/upload/v1684246256/business_day_frt3xb.png"
                alt="buiness day logo"
                width="auto"
                height="auto"
              />
            </a>
          </div>
          <div className="col-lg-3 col-6 mb-3 mt-3 mb-lg-0">
            <a
              href="https://nairametrics.com/2021/11/15/4-4-million-series-a-funding-to-boost-drugstoc-expansionary-drive/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                layout="responsive"
                src="https://res.cloudinary.com/bizstak/image/upload/v1684246009/nairametrics_jnwc2l.jpg"
                alt="nairametrics logo"
                width="auto"
                height="auto"
              />
            </a>
          </div>
        </div>
      </div>
    </ArticleSection>
  );
};

export default investors;

const ArticleSection = styled.section`
    margin-top: 7rem;
    margin-bottom: 6rem;
    @media (max-width: 992px) {
      margin-top: 4rem;
      br {
        display: none;
      }
    }

    h3 {
      font-style: normal;
      font-weight: 600;
      font-size: calc(var(--font-h2) - 1px);
      line-height: 1.4;
      text-align: center;
      font-family: var(--font-primary);

      color: var(--text-black);
      margin-bottom: 2rem;
    }
    img {
      width: 100%;
      display: block;
      object-fit: contain;
      height: 100px;
      @media (max-width: 992px) {
        height: 60px;
      }
    }
  `;