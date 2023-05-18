import { Accordion } from 'react-bootstrap';
import styled from 'styled-components';
import { CustomToggle } from './CustomToggle';

export const FAQSection = ({ faq, theme = '#F5F9F9' }) => (
    <FAQSectionWrap theme={theme}>
      <div className="container">
        <h2>Your Frequently asked questions, answered.</h2>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <Accordion defaultActiveKey="0" flush="true">
              {faq.map((e, i) => {
                return (<div className="accordion__item" key={i}>
                  <CustomToggle eventKey={i + 1} type="arrow">
                    {e.question}
                  </CustomToggle>
                  <Accordion.Collapse eventKey={i + 1}>
                    <p>
                      {e.answer}
                    </p>
                  </Accordion.Collapse>
                </div>)
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </FAQSectionWrap>
  );

  const FAQSectionWrap = styled.section`
  padding: 6rem 0;
  @media (max-width: 992px) {
    padding: 4rem 0;
    br {
      display: none;
    }
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

  .accordion__item {
    background: ${({ theme }) => theme};
    margin-bottom: 1rem;
    background: #f5f9f9;
    border-radius: 5px;
    padding: 1.5rem;
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: calc(var(--font-p) + 1px);
    line-height: 1.75;
    color: #757575;
    margin-top: 1.3rem;
    margin-bottom: 0;
  }

  .accordion__button {
    font-size: calc(var(--font-h5) + 0px);
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-family: var(--font-primary);
    color: var(--text-black);
    background: transparent;
    margin-bottom: 0;
    border: none;
    font-weight: 500;
    span {
      font-size: 22px;
      color: var(--primary-blue);
      font-weight: 500;
    }
    &:focus-visible,
    &:focus {
      outline: none;
    }
  }
`;