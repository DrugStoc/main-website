import styled from 'styled-components';
import Image from 'next/image';

const personalized = () => {
  return (
    <>
      <PersonalizedExtened>
        <div className="container" data-aos="fade-up">
          <h3>
            Forward Thinking Solutions for <br /> Healthcare Providers
          </h3>
          <div className="row align-items-center">
            <div className="col-lg-7">
              <Image
                layout="responsive"
                src="/images/landing/fwdthinksol1.png"
                //src="https://res.cloudinary.com/bizstak/image/upload/v1684242950/Image-1_ceo26i.png"
                alt=" Forward thinking solutions"
                className="d-block mb-3 mb-lg-0"
                width="670"
                height="562.9"
                data-aos="fade-up"
              />
            </div>
            <div className="col-lg-5">
              <h4>End-to-End Procurement Solutions</h4>
              <p>
                Seamless & easy-to-use platform that lets health providers
                manage and procure all their pharmaceutical and medical products
                in one place.
              </p>
              <ul className="row">
                <li className="col-lg-6 " data-aos="fade-right">
                  <p>7000+ Products</p>
                </li>
                <li className="col-lg-6 " data-aos="fade-right">
                  <p>Speciality Items</p>
                </li>
                <li className="col-lg-6 " data-aos="fade-right">
                  <p>Trusted Brands</p>
                </li>
                <li className="col-lg-6 " data-aos="fade-right">
                  <p>Medical Consumables</p>
                </li>
                <li className="col-lg-6 " data-aos="fade-right">
                  <p>Rare Medication</p>
                </li>
                <li className="col-lg-6 " data-aos="fade-right">
                  <p>Small Medical Devices</p>
                </li>
              </ul>
              <p>
                Ominichannel access ensures that all health providers are
                empowered to make the best purchasing decision for their
                practice and patient.
              </p>
            </div>
          </div>
        </div>
      </PersonalizedExtened>
      <SmartPaymentSection>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 order-lg-1 order-2">
              <h4>Smart Payment Solutions & Inventory Financing </h4>
              <p>
                Smartly scale your pharmacy business with our collateral free
                loans. Focus on delivering exceptional services to patients
                while we ensure you never run out of Stock.
              </p>
              <ul className="row">
                <li className="col-lg-6 " data-aos="fade-right">
                  <p>DrugStoc Credit</p>
                </li>
                <li className="col-lg-6 " data-aos="fade-right">
                  <p>Point of Sale (POS)</p>
                </li>
                <li className="col-lg-6 " data-aos="fade-right">
                  <p>Inventory Automation</p>
                </li>
                <li className="col-lg-6 " data-aos="fade-right">
                  <p>Smart Account Reconciliation</p>
                </li>
                <li className="col-lg-6 " data-aos="fade-right">
                  <p>Virtual Wallet</p>
                </li>
                <li className="col-lg-6 " data-aos="fade-right">
                  <p>Business Growth Manager</p>
                </li>
              </ul>
              <p>
                We provide you with everything you need to run and scale your
                practice or pharmacy business. Talk to us today on how we can
                grow your practice together.
              </p>
            </div>
            <div className="col-lg-7 order-lg-2 order-1">
              <Image
                layout="responsive"
                data-aos="zoom-in-up"
                src="/images/landing/smtpay.png"
                //src="https://res.cloudinary.com/bizstak/image/upload/v1684240567/Image-2_mjbhwx.png"
                alt=" Forward thinking solutions"
                className="mb-3 mb-lg-0"
                width="670"
                height="643.67"
              />
            </div>
          </div>
        </div>
      </SmartPaymentSection>
      <PersonalizedExtened>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <Image
                layout="responsive"
                data-aos="zoom-in"
                src="/images/landing/expserv.png"
                //src="https://res.cloudinary.com/bizstak/image/upload/v1684246458/personalized-2_nkuo1b.png"
                alt=" Forward thinking solutions"
                className="d-block mb-3 mb-lg-0"
                width="670"
                height="595.06"
              />
            </div>
            <div className="col-lg-5">
              <h4>Exceptional Service & Procurement Partner</h4>
              <p>
                DrugStoc is a hassle-free procurement platform to source all the
                medications, consumables, and small medical devices needed for
                your practice. Find quality at the click of a button.
              </p>
              <ul className="row">
                <li className="col-lg-6 " data-aos="fade-right">
                  <p>24/7 service delivery</p>
                </li>
                <li className="col-lg-6 " data-aos="fade-right">
                  <p>ISO 9001-2015 Certified </p>
                </li>
                <li className="col-lg-6 " data-aos="fade-right">
                  <p>7000 + Products</p>
                </li>
                <li className="col-lg-6 " data-aos="fade-right">
                  <p>Dedicated Customer Support</p>
                </li>
                <li className="col-lg-6 " data-aos="fade-right">
                  <p>PCN Certified</p>
                </li>
                <li className="col-lg-6 " data-aos="fade-right">
                  <p>Anti-counterfeit Supply Chain</p>
                </li>
              </ul>
              <p>
                Our team of pharmacists, doctors, and procurement specialists
                understand your needs and work tirelessly to manage your cost
                and product availability.
              </p>
            </div>
          </div>
        </div>
      </PersonalizedExtened>
    </>
  );
};

export default personalized;

const PersonalizedExtened = styled.section`
    margin-top: 3rem;

    @media (max-width: 992px) {
      margin-top: 2rem;
      br {
        display: none;
      }
    }

    img {
      width: 100%;
      object-fit: contain;
      @media (max-width: 992px) {
        height: 300px;
        object-position: left;
      }
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
      font-weight: 600;
      font-size: calc(var(--font-h2) + 3px);
      line-height: 1.4;
      font-family: var(--font-primary);
      text-align: center;
      color: var(--text-black);
      margin-bottom: 3.5rem;
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
      font-weight: 600;
      font-size: calc(var(--font-h2) + 1px);
      line-height: 1.4;
      font-family: var(--font-primary);
      color: var(--text-black);
      margin-bottom: 2rem;
    }

    ul {
      white-space: nowrap;
      @media (max-width: 992px) {
        white-space: unset;
      }
      list-style-position: inside;
      list-style-image: url("data:image/svg+xml,%0A%3Csvg width='30' height='30' viewBox='0 0 38 38' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='19' cy='19' r='19' fill='%23F5F9F9'/%3E%3Cpath d='M15.2949 23.59L19.8749 19L15.2949 14.41L16.7049 13L22.7049 19L16.7049 25L15.2949 23.59Z' fill='%232C4DA7' stroke='%232C4DA7' stroke-width='2'/%3E%3C/svg%3E%0A");
      li {
        margin-top: 0.8rem;
      }
      p {
        display: inline-block;
        margin-left: 0.37rem;
        vertical-align: middle;
      }
    }
  `;

  const SmartPaymentSection = styled(PersonalizedExtened)`
    background: #f5f9f9;
    padding: 2rem 0;
    @media (max-width: 992px) {
      padding: 2rem 0;
    }
    ul {
      list-style-image: url("data:image/svg+xml,%0A%3Csvg width='30' height='30' viewBox='0 0 38 38' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='19' cy='19' r='19' fill='white'/%3E%3Cpath d='M15.2949 23.59L19.8749 19L15.2949 14.41L16.7049 13L22.7049 19L16.7049 25L15.2949 23.59Z' fill='%232C4DA7' stroke='%232C4DA7' stroke-width='2'/%3E%3C/svg%3E%0A");
    }
    img {
      width: 95%;
      object-fit: contain;
      margin-left: auto;
      display: block;
    }
  `;