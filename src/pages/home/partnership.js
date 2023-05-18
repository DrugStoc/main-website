import styled from 'styled-components';
import { partners } from './data';

const Partnership = () => {
  const PartnerShipSection = styled.section`
    background: rgba(241, 240, 239, 0.5);
    padding: 4rem 0;

    img {
      width: 70px;
      display: block;
      text-align: center;
      margin: auto;
      object-fit: contain;
      @media (max-width: 992px) {
        width: 50px;
      }
    }

    h4 {
      font-style: normal;
      font-weight: normal;
      font-size: var(--font-h5);
      line-height: 157%;
      margin-bottom: 2rem;
      color: #484848;
      @media (max-width: 992px) {
        br {
          display: none;
        }
      }
    }
  `;
  return (
    <PartnerShipSection>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-10 m-auto">
            <h4 className="text-center " data-aos="fade-up">
              Trusted by Global Brands
            </h4>
            <div className="row align-items-center">
              {partners.map((pt, i) => (
                <div className="col-lg col-4 mb-3 mb-lg-0" key={i}>
                  <img src={pt.src} alt={pt.alt} />
                </div>
              ))}
            </div>
            <p style={{ paddingTop: '2rem', textAlign: 'center' }}>
              We work with more than 400 Pharmaceutical Manufacturers to deliver
              anti-counterfeit medication to the last mile.
            </p>
          </div>
        </div>
      </div>
    </PartnerShipSection>
  );
};

export default Partnership;
