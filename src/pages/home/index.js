/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import AppCard from 'components/app-card';
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
// import ScrollAnimation from 'react-animate-on-scroll';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';
import { clients, partners, personalized, providers } from './data';
import StackedAvatar from '../../../public/images/landing/stacked-avatar.svg';
import Stars from '../../../public/images/landing/stars.svg';
import ISO from '../../../public/images/landing/iso.svg';
import AOS from 'aos'
import "aos/dist/aos.css";


/* -------------------------- Internal Dependencies ------------------------- */

const Home = () => {
  const [currentWord, setCurrentWord] = useState({
    word: 'Pharmacies',
    currentIndex: 0,
  });
  const half_length = Math.floor(personalized.length / 2);

  const personalizedFirstHalf = personalized.slice(0, half_length);
  const personalizedSecondHalf = personalized.slice(
    half_length,
    personalized.length
  );

  useEffect(() => {
    AOS.init({
      duration: 300
    })
    const words = [
      'Pharmacies',
      'Hospitals &<br /> Clinics',
      'Doctors &<br /> Specialists',
      'Healthcare <br /> Providers',
      'Government <br />Facilities',
    ];
    // Function that executes every 2000 milliseconds
    const interval = setInterval(function () {
      setCurrentWord(prev => ({
        ...prev,
        word: words[prev.currentIndex],
        currentIndex:
          prev.currentIndex === words.length - 1 ? 0 : prev.currentIndex + 1,
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Header>
        <img
          src="/images/landing/banner-dots.png"
          alt="Banner dots"
          aria-hidden="true"
          className="header__banner-dots-left"
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <h1 data-aos="zoom-out-up">
                Empowering <br />
                {currentWord.word.split('<br />').map((word, index) => (
                  <>
                    <span
                      key={word}
                      className={`animated ${index === 1 ? 'fadeInUp' : 'fadeInDown'
                        }`}
                    >
                      {word}
                    </span>{' '}
                  </>
                ))}
                <br />
                Toward a Healthier Africa.
              </h1>
              <p data-aos="zoom-out-up">
                Anti-Counterfeit Supply Chain for Healthcare Providers in
                Emerging Economies
              </p>

              <a
                href="https://apps.apple.com/ng/app/drugstoc-mobile/id1467205425"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-drug-stoc"
              >
                SIGN UP NOW
              </a>

              <div className="d-flex  message__section">
                <StackedAvatar width="100" />{' '}
                <div className="ml-2">
                  <Stars width="90" />{' '}
                  <p>Highly Rated by 3000+ Healthcare Providers</p>
                </div>
              </div>

              <ISO className="iso-section" aria-hidden="true" data-aos="zoom-out-up" />
            </div>
          </div>
          <div className="banner d-lg-block d-none">
            <Image
              src="/images/landing/banner.png"
              alt="Picture of the author"
              height={814}
              width={866.27}
              layout="intrinsic"
              data-aos="fade-left"
              data-aos-offset="0"
            />
          </div>
        </div>
        <img
          src="/images/landing/banner-dots.png"
          alt="Banner dots"
          aria-hidden="true"
          loading="lazy"
          className="header__banner-dots-right d-lg-block d-none"
        />
      </Header>

      <PartnerShipSection>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-10 m-auto">
              <h4 className="text-center " data-aos="fade-up">Trusted by Global Brands</h4>
              <div className="row align-items-center">
                {partners.map((pt, i) => (
                  <div className="col-lg col-4 mb-3 mb-lg-0" key={i}>
                    <img src={pt.src} alt={pt.alt} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PartnerShipSection>
      <PersonalizedExtened>
        <div className="container" data-aos="fade-up">
          <h3>
            Forward Thinking Solutions for <br /> Healthcare Providers
          </h3>
          <div className="row align-items-center">
            <div className="col-lg-7">
              <img
                src="/images/landing/personalized/personalized-banner.png"
                alt=" Forward thinking solutions"
                className="d-block mb-3 mb-lg-0"
                width="670"
                height="562.9"
                data-aos="fade-up"

              />
            </div>
            <div className="col-lg-5">
              <h4>End to End Pharmacy Supply Chain Procurement</h4>
              <p>
                Seamless & easy-to-use platform that let you manage and
                procure all your medications, pharmaceutical and medical
                products in one place.
              </p>
              <ul className="row">
                <li className="col-lg-6 " data-aos="fade-right">
                  <p>Essential medicines</p>
                </li>
                <li className="col-lg-6 " data-aos="fade-right">
                  <p>Generics</p>
                </li>
                <li className="col-lg-6 " data-aos="fade-right">
                  <p>Specialty Drugs</p>
                </li>
                <li className="col-lg-6 " data-aos="fade-right">
                  <p>Medical consumables</p>
                </li>
                <li className="col-lg-6 " data-aos="fade-right">
                  <p>Rare Drugs</p>
                </li>
                <li className="col-lg-6 " data-aos="fade-right">
                  <p>Small medical devices</p>
                </li>
              </ul>
              <p>
                Ominichannel and seamless platform that ensures all your
                medications, medical products, consumables and small devices
                are available at the click of a button.
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
                loans. Focus on delivery exceptional services to patients
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
                  <p>Invoicing</p>
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
                practice or pharmacy business. It’s that simple, that’s the
                DrugStoc magic!
              </p>
            </div>
            <div className="col-lg-7 order-lg-2 order-1">
              <img
                data-aos="zoom-in-up"

                src="/images/landing/personalized/payment-image.png"
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
                data-aos="zoom-in"
                src="/images/landing/personalized/personalized-2.png"
                alt=" Forward thinking solutions"
                className="d-block mb-3 mb-lg-0"
                width="670"
                layout="intrinsic"
                height="595.06"
              />
            </div>
            <div className="col-lg-5">
              <h4 >Exceptional Service & Procurement Partner</h4>
              <p>
                Automate your entire procurement and service delivery to your
                patient. We Support you at every stage of the way. Only focus
                on delivering outstanding service to your patients
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
                  <p>Dedicated Customer support</p>
                </li>
                <li className="col-lg-6 " data-aos="fade-right">
                  <p>PCN Certified</p>
                </li>
                <li className="col-lg-6 " data-aos="fade-right">
                  <p>Anti-counterfeit Supply Chain</p>
                </li>
              </ul>
              <p>
                At DrugStoc, we are constantly and tirelessly seeking ways to
                improve your access to pharmaceutical products and services.
              </p>
            </div>
          </div>
        </div>
      </PersonalizedExtened>

      <LinearSection>
        <PersonalizedSolutionSection>
          <div className="container">
            <h3 className="text-left text-lg-center" data-aos="fade-up">
              Preferred Procurement Partner <br /> for Health Care Providers
            </h3>
            <Carousel
              interval={null}
              nextIcon={
                <img
                  src="data:image/svg+xml,%0A%3Csvg width='56' height='55' viewBox='0 0 56 55' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg filter='url(%23filter0_d)'%3E%3Ccircle cx='28.0688' cy='24.0679' r='23.9321' fill='white'/%3E%3Ccircle cx='28.0688' cy='24.0679' r='23.5195' stroke='%234B70D6' stroke-opacity='0.3' stroke-width='0.825245'/%3E%3C/g%3E%3Cpath d='M25.7006 17.8784L24.2461 19.3329L28.9706 24.0678L24.2461 28.8026L25.7006 30.2571L31.8899 24.0678L25.7006 17.8784Z' fill='black' fill-opacity='0.54'/%3E%3Cdefs%3E%3Cfilter id='filter0_d' x='0.835738' y='0.135742' width='54.4662' height='54.4662' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset dy='3.30098'/%3E%3CfeGaussianBlur stdDeviation='1.65049'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'/%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E%0A"
                  alt=""
                  loading="lazy"
                />
              }
              prevIcon={
                <img
                  src="data:image/svg+xml,%0A%3Csvg width='56' height='55' viewBox='0 0 56 55' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg filter='url(%23filter0_d)'%3E%3Ccircle cx='28.0698' cy='24.0679' r='23.9321' transform='rotate(180 28.0698 24.0679)' fill='white'/%3E%3Ccircle cx='28.0698' cy='24.0679' r='23.5195' transform='rotate(180 28.0698 24.0679)' stroke='%234B70D6' stroke-opacity='0.3' stroke-width='0.825245'/%3E%3C/g%3E%3Cpath d='M30.4381 30.2573L31.8926 28.8028L27.1681 24.068L31.8926 19.3331L30.4381 17.8786L24.2487 24.068L30.4381 30.2573Z' fill='black' fill-opacity='0.54'/%3E%3Cdefs%3E%3Cfilter id='filter0_d' x='0.837691' y='0.135742' width='54.4662' height='54.4662' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset dy='3.30098'/%3E%3CfeGaussianBlur stdDeviation='1.65049'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'/%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E%0A"
                  alt=""
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
            {/*</ScrollAnimation>*/}
            <div className="d-lg-none d-block">
              {personalized.map((card, i) => (
                <Card data={card} key={i} />
              ))}
            </div>
          </div>
        </PersonalizedSolutionSection>
        <ProvidersSection>
          <div className="container">
            <h3 data-aos="fade-up">Trusted by Leading Healthcare Providers</h3>
            <h5 data-aos="fade-up">
              3000+ leading healthcare providers trust our seamless procurement{' '}
              <br /> and supply chain solutions
            </h5>
            <div className="row align-items-center">
              {providers.map((pt, i) => (
                <div className="col-lg-2 col-3 mb-3 mb-lg-0" key={i} data-aos="fade-up">
                  <img src={pt.src} alt={pt.alt} />
                </div>
              ))}
            </div>
            <Link href="/">
              <button className="btn btn-drug-stoc">Get Started</button>
            </Link>
          </div>
        </ProvidersSection>
      </LinearSection>

      <ClientsSection>
        <div className="container">
          <h3>See What Our Clients Are Saying</h3>
          <h6>
            Our clients praise us for our great service and on-time delivery
          </h6>
          <Carousel
            indicators={false}
            nextIcon={
              <img
                src="data:image/svg+xml,%0A%3Csvg width='34' height='16' viewBox='0 0 34 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.99719 7.00045H30.1662L24.5765 1.41068L25.9964 0.000732422L33.9961 8.00041L25.9964 16.0001L24.5865 14.5901L30.1662 9.00037H6.99719V7.00045Z' fill='black' fill-opacity='0.54'/%3E%3C/svg%3E%0A"
                alt=""
              />
            }
            prevIcon={
              <img
                src="data:image/svg+xml,%0A%3Csvg width='34' height='16' viewBox='0 0 34 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='arrow_back_24px'%3E%3Cpath id='icon/navigation/arrow_back_24px' d='M27.0028 7.00045H3.83375L9.42352 1.41068L8.00358 0.000732422L0.00390625 8.00041L8.00358 16.0001L9.41352 14.5901L3.83375 9.00037H27.0028V7.00045Z' fill='black' fill-opacity='0.54'/%3E%3C/g%3E%3C/svg%3E%0A"
                alt=""
              />
            }
          >
            {clients.map((card, i) => (
              <Carousel.Item key={i}>
                <div className="row justify-content-md-center">
                  <div className="col-lg-9">
                    <h4 className="card-details-carousel-holder">{card.message}</h4>
                    <div className="card-details">
                      <h5>{card.name}</h5>
                      <p>{card.role}</p>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </ClientsSection>

      <ImpactSection>
        <div className="container">
          <h3>Our Impact</h3>
          <div className="row">
            <div className="col-lg-3 mb-3 mb-lg-0" data-aos="fade-up">
              <h4>
                <img src="/images/landing/impact/9m.svg" alt="" /> 9M+
              </h4>
              <h5>Prescriptions Depensed Through our Partners Annually</h5>
            </div>

            <div className="col-lg-3 mb-3 mb-lg-0" data-aos="fade-up">
              <h4>
                <img src="/images/landing/impact/3k.svg" alt="" /> 3000+
              </h4>
              <h5>Healthcare Providers Across 50 Cities Trust Us</h5>
            </div>

            <div className="col-lg-3 mb-3 mb-lg-0" data-aos="fade-up">
              <h4>
                <img src="/images/landing/impact/70k.svg" alt="" /> 7000+
              </h4>
              <h5>SKUs of Genuine Medicines and Medical Devices</h5>
            </div>

            <div className="col-lg-3 mb-3 mb-lg-0" data-aos="fade-up">
              <h4>
                <img src="/images/landing/impact/20m.svg" alt="" /> 20M+
              </h4>
              <h5>
                Happy Patients Served via Our Anti Counterfeit Supply Chain
              </h5>
            </div>
          </div>
        </div>
      </ImpactSection>

      <AppCard />

      <ArticleSection>
        <div className="container">
          <h3>As seen on</h3>
          <div className="row align-items-center">
            <div className="col-lg-3 col-6 mb-3 mb-lg-0">
              <a
                href="https://www.bbc.co.uk/programmes/p088vk8g"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/landing/articles/image-52.svg" alt="" />
              </a>
            </div>
            <div className="col-lg-3 col-6 mb-3 mb-lg-0">
              <a
                href="https://www.ft.com/content/feae3ea1-cbc4-4188-96bf-8de8d01257d3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/landing/articles/image-54.svg" alt="" />
              </a>
            </div>
            <div className="col-lg-3 col-6 mb-3 mb-lg-0">
              <a
                href="https://www.ft.com/content/feae3ea1-cbc4-4188-96bf-8de8d01257d3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/landing/articles/image-55.svg" alt="" />
              </a>
            </div>
            <div className="col-lg-3 col-6 mb-3 mb-lg-0">
              <a
                href="https://venturesafrica.com/10-healthcare-companies-and-startups-saving-lives-with-technology-in-nigeria/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/landing/articles/image-56.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </ArticleSection>
      {/*</ScrollAnimation>*/}
    </div>
  );
};

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
              alt=""
              className="caret ml-1"
            />
          </a>
        </Link>
      </div>
    </div>
  </div>
);

const Header = styled.header`
  height: 730px;
  display: flex;
  align-items: center;
  position: relative;

  @media (max-width: 992px) {
    min-height: 750px;
    display: block;
    height: auto;
    padding: 8rem 0 0;
  }

  h1 {
    font-family: var(--font-primary);
    font-weight: 600;
    color: var(--text-black);
    font-size: calc(var(--font-h1) + 0px);
    line-height: 1.4;
    margin-bottom: 1.8rem;
    @media (min-width: 992px) {
      margin-top: 6rem;
    }

    span {
      font-family: var(--font-primary);
      color: var(--primary-pink);
      display: inline-block;
      animation-duration: 0.5s;
    }
  }
  .message__section {
    margin-top: 2.3rem;
    p {
      font-size: calc(var(--font-accent) + 1px);
    }
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: var(--font-h5);
    color: var(--text-black);
    line-height: 1.7;
  }
  .banner {
    width: 690px;
    position: absolute;
    right: 140px;
    bottom: -7px;
    z-index: 1;
    max-width: 50%;
  }

  a {
    margin-top: 1.2rem;
    padding: 13px 35px;
    font-weight: 500;
  }

  .iso-section {
    width: 90%;
    margin-top: 2rem;
  }

  .header__banner-dots {
    &-left {
      left: -30px;
      position: absolute;
      height: 300px;
      margin-top: 12rem;
      opacity: 0.3;

      @media (max-width: 992px) {
        bottom: 0;
        left: unset;
        right: 0;
        z-index: -1;
        opacity: 0;
      }
    }
    &-right {
      right: -10px;
      position: absolute;
      height: 300px;
      bottom: 200px;
      opacity: 0.3;
    }
  }
`;
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
  h4{
    margin-top: 20px ;
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
      margin-left: 0.4rem;
      vertical-align: middle;
    }
  }
`;

const SmartPaymentSection = styled(PersonalizedExtened)`
  background: #f5f9f9;
  padding: 2rem 0;
  @media (max-width: 992px) {
    padding:2rem 0;
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

const ClientsSection = styled.section`
  margin-top: 5rem;
  @media (max-width: 992px) {
    margin-top: 3rem;
    br {
      display: none;
    }
  }
  .card-details-carousel-holder{
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
    color:var(--text-dark);
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
export default Home;
