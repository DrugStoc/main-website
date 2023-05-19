import { Carousel } from 'react-bootstrap';
import { Transition } from 'react-transition-group';
import { clients } from './data';
import { useRef } from 'react';
import styled from 'styled-components';

const testimonial = () => {
  const transitionRef = useRef(null);

  return (
    <ClientsSection>
      <div className="container">
        <h3>See What Our Clients Say About Us</h3>
        <h6>
          Our clients praise us for our great service and on-time delivery
        </h6>

        <div>
          <Carousel
            indicators={false}
            nextIcon={
              <img
                src="data:image/svg+xml,%0A%3Csvg width='34' height='16' viewBox='0 0 34 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.99719 7.00045H30.1662L24.5765 1.41068L25.9964 0.000732422L33.9961 8.00041L25.9964 16.0001L24.5865 14.5901L30.1662 9.00037H6.99719V7.00045Z' fill='black' fill-opacity='0.54'/%3E%3C/svg%3E%0A"
                alt="carousel next icon"
              />
            }
            prevIcon={
              <img
                src="data:image/svg+xml,%0A%3Csvg width='34' height='16' viewBox='0 0 34 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='arrow_back_24px'%3E%3Cpath id='icon/navigation/arrow_back_24px' d='M27.0028 7.00045H3.83375L9.42352 1.41068L8.00358 0.000732422L0.00390625 8.00041L8.00358 16.0001L9.41352 14.5901L3.83375 9.00037H27.0028V7.00045Z' fill='black' fill-opacity='0.54'/%3E%3C/g%3E%3C/svg%3E%0A"
                alt="carousel previous icon"
              />
            }
          >
            {clients.map((card, i) => (
              <Carousel.Item key={i}>
                <div className="row justify-content-md-center">
                  <div className="col-lg-9">
                    <h4 className="card-details-carousel-holder">
                      {card.message}
                    </h4>
                    <div className="card-details">
                      <h5>{card.name}</h5>
                      <p>{card.role}</p>
                    </div>
                  </div>
                </div>
                <Transition
                  timeout={500}
                  onEnter={() => (transitionRef.current.style.opacity = 0)}
                  onExiting={() => (transitionRef.current.style.opacity = 0)}
                  onExited={() => (transitionRef.current.style.opacity = 1)}
                  appear
                  mountOnEnter
                  unmountOnExit
                >
                  <div ref={transitionRef}>
                    <img src={card.image} alt={card.name} />
                  </div>
                </Transition>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </ClientsSection>
  );
};

export default testimonial;

const ClientsSection = styled.section`
    margin-top: 5rem;
    @media (max-width: 992px) {
      margin-top: 3rem;
      br {
        display: none;
      }
    }
    .card-details-carousel-holder {
      min-height: 100px;
    }

    h3 {
      font-style: normal;
      font-weight: 600;
      font-size: calc(var(--font-h2) - 1px);
      line-height: 1.4;
      text-align: center;
      font-family: var(--font-primary);
      color: var(--text-black);
    }
    h6 {
      margin-bottom: 4.5rem;
      font-style: normal;
      font-weight: normal;
      font-size: calc(var(--font-p) + 2px);
      line-height: 150%;

      text-align: center;

      color: #757575;
    }
    h4 {
      font-style: normal;
      font-weight: 600;
      font-size: calc(var(--font-h5) + 3px);
      line-height: 2.2;
      color: var(--text-dark);
      margin-bottom: 0;
      @media (max-width: 992px) {
        margin-top: 2rem;
      }
    }

    img.avatar {
      height: 150px;
      width: 150px;
      object-fit: cover;
      display: block;
      margin: auto;
      border-radius: 50%;
      @media (max-width: 992px) {
        height: 120px;
        width: 120px;
      }
    }
    .card-details {
      text-align: right;
      float: right;
      width: fit-content;
      margin-left: auto;
      margin-top: 10px;
      h5 {
        font-style: normal;
        font-weight: 500;
        margin-bottom: 0px;
        font-size: calc(var(--font-p));
        line-height: 1.7;
        /* or 32px */

        color: var(--text-dark);
      }
      p {
        font-style: normal;
        font-weight: 400;

        font-size: calc(var(--font-p) - 1px);
        line-height: 1.7;
        /* or 32px */

        color: var(--text-gray);
      }
    }

    .carousel-control-prev {
      width: auto;
      left: 13.5%;
      margin-top: 7rem;
      @media (max-width: 992px) {
        display: none;
      }

      img {
        width: 26px;
      }
    }
    .carousel-control-next {
      right: unset;
      width: auto;
      left: 17%;
      @media (max-width: 992px) {
        display: none;
      }
      margin-top: 7rem;
      img {
        width: 26px;
      }
    }

    .carousel-indicators {
      justify-content: flex-start;
      width: fit-content;
      margin: 0;
      flex-direction: column;
      top: 14px;
      li {
        width: 11px !important;
        height: 11px !important;
        border-radius: 50%;
        background: var(--primary-blue);
        border-width: 5.5px;
        margin-bottom: 7px;
        flex: 0 !important;
        opacity: 0.2;
        &.active {
          opacity: 1;
        }
      }
    }
  `;