import styled from 'styled-components';

const impact = () => {
  return (
    <ImpactSection>
      <div className="container">
        <h3>Our Impact</h3>
        <div className="row">
          <div className="col-lg-3 mb-3 mb-lg-0" data-aos="fade-up">
            <h4>
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1684246902/9m_erunee.svg"
                alt="drugs in a bottle icon"
              />{' '}
              9M+
            </h4>
            <h5>
              Prescriptions of our products dispensed through our clients
              annually
            </h5>
          </div>

          <div className="col-lg-3 mb-3 mb-lg-0" data-aos="fade-up">
            <h4>
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1684246932/3k_a0j7dy.svg"
                alt="patient pulse while receiving treatment icon"
              />{' '}
              3000+
            </h4>
            <h5>Healthcare facilities trust us</h5>
          </div>

          <div className="col-lg-3 mb-3 mb-lg-0" data-aos="fade-up">
            <h4>
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1684247016/70k_blyh94.svg"
                alt="first aid kit box/bag icon"
              />{' '}
              7000+
            </h4>
            <h5>SKUs of genuine medicines and medical devices</h5>
          </div>

          <div className="col-lg-3 mb-3 mb-lg-0" data-aos="fade-up">
            <h4>
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1684246962/20m_w2zejk.svg"
                alt="hospital icon"
              />{' '}
              20M+
            </h4>
            <h5>Patients protected from counterfeit products to date</h5>
          </div>
        </div>
      </div>
    </ImpactSection>
  );
};

export default impact;

const ImpactSection = styled.section`
    margin-top: 5rem;
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
      margin-bottom: 4rem;
    }
    h4 {
      font-style: normal;
      display: flex;
      font-weight: 600;
      justify-content: center;
      font-size: calc(var(--font-h2) + 8px);
      line-height: 1.4;
      text-align: center;
      font-family: var(--font-primary);
      color: var(--text-black);
      @media (max-width: 992px) {
        font-size: calc(var(--font-h2) + 10px);
        margin-top: 1rem;
        font-weight: 800;
      }
    }

    .col-lg-3 {
      .fadeInUp {
        @media (max-width: 992px) {
          padding: 2rem 3rem;
          background: white;
          margin-bottom: 1rem;
          border-radius: 4px;
          box-shadow: 0 2px 15px #00000012;
        }
      }
      &:nth-of-type(1) {
        h4 {
          color: #4c70d6;
        }
      }
      &:nth-of-type(2) {
        h4 {
          color: #66c6a1;
        }
      }
      &:nth-of-type(3) {
        h4 {
          color: #ef8c6b;
        }
      }
      &:nth-of-type(4) {
        h4 {
          color: #a260b7;
        }
      }
    }
    h5 {
      font-style: normal;
      font-weight: normal;
      font-size: calc(var(--font-p) + 1px);
      line-height: 1.7;
      /* or 32px */

      text-align: center;
      color: var(--text-black);
    }
    img {
      height: 48px;
      /* margin: auto; */
      display: block;
      margin-right: 0.7rem;
      margin-bottom: 1rem;
      @media (max-width: 992px) {
        height: 40px;
      }
    }
  `;
