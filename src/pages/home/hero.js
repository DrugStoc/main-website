import StackedAvatar from '../../../public/images/landing/stacked-avatar.svg';
import ISO from '../../../public/images/landing/iso.svg';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import styled from 'styled-components';
import Image from 'next/image';

const Hero = () => {
  const [currentWord, setCurrentWord] = useState({
    word: 'Pharmacies',
    currentIndex: 0,
  });

  useEffect(() => {
    AOS.init({
      duration: 300,
    });
    const words = [
      'Pharmacies',
      'Hospitals & Clinics',
      'Doctors & Specialists',
      'Healthcare Providers',
      'Government Facilities',
    ];
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
    <Header>
      <img
        src='/images/landing/dotvector1.png'
        //src="https://res.cloudinary.com/bizstak/image/upload/v1684239802/banner-dots_stl7x6.png"
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
                <span
                  key={index}
                  className={`animated ${index === 1 ? 'fadeInUp' : 'fadeInDown'
                    }`}
                >
                  {word}
                </span>
              ))}
              <br />
              Toward a Healthier Africa.
            </h1>
            <p data-aos="zoom-out-up">
              Anti-Counterfeit Supply Chain for Healthcare Providers in Emerging
              Economies
            </p>
            <div className="show-download-now">
              <a
                href="https://play.google.com/store/apps/details?id=com.drugstoc.app"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="zoom-out-up"
              >
                {/* <img
                  
                  src="https://res.cloudinary.com/bizstak/image/upload/v1684244266/google-play-alt_urfsrl.svg"
                  alt="google play"
                  className="logo"
                /> */}
                  <img
                      src='/images/landing/get_play_store.png'
                      //src="https://res.cloudinary.com/bizstak/image/upload/v1684244266/google-play-alt_urfsrl.svg"
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
                {/* <img
                  src="https://res.cloudinary.com/bizstak/image/upload/v1684244274/app-store-alt_sc7dml.svg"
                  alt="app store"
                  className="logo"
                  style={{height:"50%", width:"50%"}}
                /> */}
                <img
                      src='/images/landing/get_app_store.png'
                      //src="https://res.cloudinary.com/bizstak/image/upload/v1684244274/app-store-alt_sc7dml.svg"
                      alt="app store icon"
                      className="logo"
                    />
              </a>
            </div>

            <div className="d-flex  message__section">
              <StackedAvatar width="100" />{' '}
              <div className="ml-2">
                <img
                  src='/images/landing/herostarrating.png'
                  //src="https://res.cloudinary.com/bizstak/image/upload/v1684247082/stars_g4klpd.svg"
                  width="90"
                  alt="stacked avatar pictures of doctors"
                />
                <p>Highly Rated by 3000+ Healthcare Providers</p>
              </div>
            </div>

            <ISO
              className="iso-section"
              aria-hidden="true"
              data-aos="zoom-out-up"
            />
          </div>
        </div>
        <div className="banner d-lg-block d-none">
          <img
            src='/images/landing/Heroimage.png'
            // src="https://res.cloudinary.com/bizstak/image/upload/v1684239587/banner_uhxkbs.png"
            alt="A Doctor Holding a Paper"
            // layout="responsive"
            width="auto"
            height="auto"
            // data-aos="fade-left"
            // data-aos-offset="0"
            style={{ width: '95%' }}
          />
        </div>
      </div>
      <img
        src='/images/landing/dotvector2.png'
        //src="https://res.cloudinary.com/bizstak/image/upload/v1684239802/banner-dots_stl7x6.png"
        alt="Banner dots"
        aria-hidden="true"
        loading="lazy"
        className="header__banner-dots-right d-lg-block d-none"
      />
    </Header>
  );
};

export default Hero;

const Header = styled.header`
    height: 730px;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    .show-download-now {
      display: flex;
      width: fit-content;
      align-items: center;
      gap: 20px;
      a {
        border: 1px solid black;
        padding: 8px;
        border-radius: 8px;
        overflow: hidden;
        padding: 0;
      }
      img {
        max-width: 150px;
      }
    }

    @media (max-width: 992px) {
      min-height: 600px;
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
        font-size: calc(var(--font-accent) + 4px);
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
        right: 20px;
        position: absolute;
        height: 300px;
        bottom: 200px;
        opacity: 0.3;
      }
    }
  `;