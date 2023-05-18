import { personalized, providers } from './data';
import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';
import Link from 'next/link';

const Providers = () => {
  const half_length = Math.floor(personalized.length / 2);
  const personalizedFirstHalf = personalized.slice(0, half_length);
  const personalizedSecondHalf = personalized.slice(
    half_length,
    personalized.length
  );
  const Card = ({ data }) => (
    <div className="col-lg-4">
      <div className="card">
        <div className="card-body">
          {data.icon}
          <h4>{data.title}</h4>
          <p>{data.details}</p>
          <Link href={data.link}>
            <a>
              Learn More{' '}
              <img
                src="data:image/svg+xml,%0A%3Csvg width='5' height='9' viewBox='0 0 5 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.06442 0.750035L0.183167 1.63129L3.04567 4.50004L0.183167 7.36879L1.06442 8.25004L4.81441 4.50004L1.06442 0.750035Z' fill='black' fill-opacity='0.54'/%3E%3C/svg%3E%0A"
                alt="arrow right icon"
                className="caret ml-1"
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
  const LinearSection = styled.div`
    padding: 3rem 0;

    /* border-radius: 40% 40% 0 0; */
    margin-top: 5rem;

    background-size: cover;
    background-position: top center;
    background: linear-gradient(
      319.35deg,
      #f5eade -10.45%,
      rgba(255, 255, 255, 0.5) 91.81%
    );
    @media (max-width: 992px) {
      margin-top: 4rem;
      padding: 3rem 0;

      br {
        display: none;
      }
    }
  `;

  const PersonalizedSolutionSection = styled.section`
    .carousel-control-prev {
      top: 100%;
      height: 70px;
      left: 47%;
      transform: translate(-50%, 0);
    }
    .carousel-control-next {
      top: 100%;
      height: 70px;
      left: 53%;
      transform: translate(-50%, 0);
    }
    h4 {
      margin-top: 20px;
    }

    margin-top: 2rem;
    margin-bottom: 4rem;
    @media (max-width: 992px) {
      br {
        display: none;
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
      margin-bottom: 5.5rem;
    }

    .card {
      background: #ffffff;
      border: 0.979261px solid #fafafa;
      box-shadow: 0px 3.91704px 3.91704px rgba(0, 0, 0, 0.25);
      border-radius: 4.89631px;
      margin-bottom: 1rem;
      min-height: 300px;
      @media (max-width: 992px) {
        margin-bottom: 1.8rem;
        min-height: 300px;
      }

      h4 {
        font-style: normal;
        font-weight: 600;
        font-family: var(--font-primary);
        font-size: calc(var(--font-h4) + 2px);
        line-height: 1.5;
        color: var(--text-black);
        margin-bottom: 0.8rem;
      }

      p {
        font-style: normal;
        font-weight: normal;
        font-size: calc(var(--font-p) + 1px);
        line-height: 1.6;
        /* or 32px */

        color: var(--text-black);
      }
      a {
        font-weight: 600;
        font-size: calc(var(--font-p) + 1px);
        color: var(--text-black);
        img {
          width: 8px;
        }
      }
      img:not(.caret) {
        width: 100px;
        bottom: 0%;
        height: 100px;
        margin-bottom: 1rem;
        margin-top: 1.5rem;
        object-fit: contain;
      }
    }
  `;

  const ProvidersSection = styled.section`
    margin-top: 7rem;
    text-align: center;
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

    h5 {
      font-style: normal;
      font-weight: normal;
      font-size: calc(var(--font-p) + 1px);
      line-height: 1.7;
      /* or 32px */
      margin-bottom: 2.6rem;

      color: var(--text-black);
    }

    img {
      filter: drop-shadow(1px 3px 3px #0000001c);
      margin-top: 2.5rem;
      width: 89px;
      @media (max-width: 992px) {
        width: 65px;
      }
    }

    .btn-drug-stoc {
      margin-top: 3rem;
      text-transform: uppercase;
      padding: 12px 50px;
      font-size: 13px;
    }
  `;

  return (
    <LinearSection>
      <PersonalizedSolutionSection>
        <div className="container">
          <h3 className="text-left text-lg-center" data-aos="fade-up">
            Preferred Procurement Partner
            <br /> for HealthCare Providers
          </h3>
          <Carousel
            interval={null}
            nextIcon={
              <img
                src="data:image/svg+xml,%0A%3Csvg width='56' height='55' viewBox='0 0 56 55' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg filter='url(%23filter0_d)'%3E%3Ccircle cx='28.0688' cy='24.0679' r='23.9321' fill='white'/%3E%3Ccircle cx='28.0688' cy='24.0679' r='23.5195' stroke='%234B70D6' stroke-opacity='0.3' stroke-width='0.825245'/%3E%3C/g%3E%3Cpath d='M25.7006 17.8784L24.2461 19.3329L28.9706 24.0678L24.2461 28.8026L25.7006 30.2571L31.8899 24.0678L25.7006 17.8784Z' fill='black' fill-opacity='0.54'/%3E%3Cdefs%3E%3Cfilter id='filter0_d' x='0.835738' y='0.135742' width='54.4662' height='54.4662' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset dy='3.30098'/%3E%3CfeGaussianBlur stdDeviation='1.65049'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'/%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E%0A"
                alt="next icon"
                loading="lazy"
              />
            }
            prevIcon={
              <img
                src="data:image/svg+xml,%0A%3Csvg width='56' height='55' viewBox='0 0 56 55' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg filter='url(%23filter0_d)'%3E%3Ccircle cx='28.0698' cy='24.0679' r='23.9321' transform='rotate(180 28.0698 24.0679)' fill='white'/%3E%3Ccircle cx='28.0698' cy='24.0679' r='23.5195' transform='rotate(180 28.0698 24.0679)' stroke='%234B70D6' stroke-opacity='0.3' stroke-width='0.825245'/%3E%3C/g%3E%3Cpath d='M30.4381 30.2573L31.8926 28.8028L27.1681 24.068L31.8926 19.3331L30.4381 17.8786L24.2487 24.068L30.4381 30.2573Z' fill='black' fill-opacity='0.54'/%3E%3Cdefs%3E%3Cfilter id='filter0_d' x='0.837691' y='0.135742' width='54.4662' height='54.4662' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset dy='3.30098'/%3E%3CfeGaussianBlur stdDeviation='1.65049'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'/%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E%0A"
                alt="previous icon"
                loading="lazy"
              />
            }
            indicators={false}
            className="d-lg-block d-none"
          >
            <Carousel.Item>
              <div className="row">
                {personalizedFirstHalf.map((card, i) => (
                  <Card data={card} key={i} />
                ))}
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="row">
                {personalizedSecondHalf.map((card, i) => (
                  <Card data={card} key={i} />
                ))}
              </div>
            </Carousel.Item>
          </Carousel>
          <div className="d-lg-none d-block">
            {personalized.map((card, i) => (
              <Card data={card} key={i} />
            ))}
          </div>
        </div>
      </PersonalizedSolutionSection>
      <ProvidersSection>
        <div className="container">
          <h3 data-aos="fade-up">Trusted by The Best Healthcare Providers</h3>
          <h5 data-aos="fade-up">
            3000+ leading healthcare providers trust our seamless procurement{' '}
            <br /> and supply chain solutions
          </h5>
          <div className="row align-items-center">
            {providers.map((pt, i) => (
              <div
                className="col-lg-2 col-3 mb-3 mb-lg-0"
                key={i}
                data-aos="fade-up"
              >
                <img src={pt.src} alt={pt.alt} />
              </div>
            ))}
          </div>
        </div>
      </ProvidersSection>
    </LinearSection>
  );
};

export default Providers;
