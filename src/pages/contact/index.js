/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import styled from 'styled-components';

const Contact = () => {

  const jobOptions = [
    'Quotation request',
    'Order Additions or Subtractions',
    'Invoice',
    'Payment Reconciliation',
    'Price',
    'Proform a Request',
    'Delivery',
    'DrugStoc App',
    'Stock availability',
    'Management',
    'Market Access',
    'Registration'
  ]

  const jobDescriptions = [
    'Pharmacist',
    'Doctor',
    'Nurse',
    'Health Care Professional',
    'Hospitals',
    'NGO',
    'Partners',
    'Pharmaceutical Company',
    'FMCG',
    'Government Representative'
  ]
  return (
    <div>
      <Header>
        <div className="header">
          <div className="container">
            <h1>Contact Us</h1>
            <p>
              Not sure where to Start? Fill out the form below. Our savvy client
              relationship experts are here to help and answer your questions
              and <br /> give you more details about our products and services.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-9">
              <div className="card">
                <div className="card-body">
                  <form>
                    <div className="row">
                      <div className="col-lg-12">
                        <select name="jobs" className="custom-select">
                          <option selected disabled>Enquiries</option>
                          {
                            jobOptions.map((e, i) =>
                              <option value={e} key={i}>{e}</option>
                            )
                          }
                        </select>
                      </div>
                      <div className="col-lg-12">
                        <select name="jobs" className="custom-select">
                          <option selected disabled>What best describe you? </option>
                          {jobDescriptions.map((e, i) =>
                            <option key={i} value={e}> {e} </option>
                          )}
                        </select>
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                        />
                      </div>
                      <div className="col-lg-12">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone Number"
                        />
                      </div>
                      <div className="col-lg-12">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                        />
                      </div>
                      <div className="col-lg-12">
                        <textarea
                          className="form-control"
                          placeholder="Message"
                        ></textarea>
                      </div>
                      <div className="col-lg-12">
                        <button className="btn btn-drug-stoc btn-block">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Header>
    </div>
  );
};

const Header = styled.header`
  min-height: 710px;

  background: #fff;

  @media (max-width: 992px) {
    min-height: 600px;
  }
  .header {
    padding: 2rem 0 7rem;
    @media (max-width: 992px) {
      padding: 3rem 0 7rem;
    }
    background: #f1f9f8;
  }
  h1 {
    font-family: var(--font-primary);
    font-weight: bold;
    color: var(--text-black);
    font-size: calc(var(--font-h1) + 2px);
    line-height: 1.4;
    margin-bottom: 1.8rem;
    margin-top: 7rem;

    text-align: center;
    @media (max-width: 992px) {
      margin-top: 4rem;
    }
    span {
      color: var(--primary-green);
    }
  }

  p {
    font-style: normal;
    font-weight: normal;
    text-align: center;
    font-size: var(--font-h5);
    color: var(--text-black);
    line-height: 1.7;
    margin-bottom: 6rem;
  }
  .card {
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 1px;
    margin-bottom: 5rem;
    margin-top: -8rem;
    &-body {
      @media (max-width: 992px) {
        padding: 3.5rem 2.5rem;
      }
      padding: 4.5rem 7.5rem;
    }
  }
  input,
  select,
  textarea {
    padding-left: 22px;
    border: 1px solid #dddddd;
    box-sizing: border-box;
    border-radius: 1px;

    font-size: calc(var(--font-h5) - 1px);
    color: rgba(63, 65, 78, 0.9);
    min-height: 46px;
    margin-bottom: 3rem;
  }
  textarea {
    min-height: 250px;
    resize: none;
    padding: 25px 20px;
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
`;

export default Contact;
