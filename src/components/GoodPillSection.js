import React, { useState } from 'react';
import { ArrowRight } from 'react-bootstrap-icons';

const GoodPillSection = () => {
  const [hovered, setHovered] = useState(null);
  const [buttonHovered, setButtonHovered] = useState(false);

  const partners = [
    'Pharmacy',
    'HMO',
    'Private Investor',
    'Health Facility',
    'Independent Agent',
  ];

  return (
    <section className="position-relative" style={{ paddingTop: '5rem' }}>
      {/* Background watermark */}
      <div
        className="position-absolute top-0 start-0"
        style={{
          width: '100%',
          height: '80%',
          zIndex: -1,
          opacity: 0.1,
          backgroundImage: "url('/images/Goodpill.svg')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />

      <div
        className="container"
        style={{ paddingTop: '4rem', paddingBottom: '4rem' }}
      >
        <div className="row align-items-center">
          {/* LEFT – Text & CTA */}
          <div className="col-lg-6 mb-5 mb-lg-0" style={{ gap: 10 }}>
            <h2 className="fw-bold mb-5" style={{ fontSize: '2.25rem' }}>
              The{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg,#28a745,#20c997)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                GoodPill Project
              </span>{' '}
              is a digital health network
            </h2>

            <p className="text-muted lead">
              that removes barriers to care, making genuine medicines easier to
              reach for everyone, everywhere.
            </p>

            <p className="fw-semibold text-dark mb-5">
              DrugStoc is changing the narrative of how medicines reach those
              who need them with The GoodPill Project.
            </p>

            <a
              className="btn btn-success btn-lg rounded-pill px-4 fw-bold d-inline-flex align-items-center"
              style={{
                background: 'linear-gradient(90deg,#28a745,#20c997)',
                border: 'none',
                overflow: 'hidden',
              }}
              onMouseEnter={() => setButtonHovered(true)}
              onMouseLeave={() => setButtonHovered(false)}
            >
              Partner with us on The GoodPill Project
              <ArrowRight
                className="ms-2 arrow-animate"
                style={{
                  animation: buttonHovered
                    ? 'arrowMove 1s infinite ease-in-out'
                    : 'none',
                }}
              />
            </a>
          </div>

          {/* RIGHT – Pills */}
          <div
            className="col-lg-6 text-center p-4 rounded-4"
            style={{
              background: buttonHovered
                ? 'rgba(255, 255, 255, 0.25)'
                : 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(15px)',
              border: buttonHovered
                ? '1px solid rgba(255, 255, 255, 0.4)'
                : '1px solid transparent',
              boxShadow: buttonHovered ? '0 8px 24px rgba(0,0,0,0.2)' : 'none',
              transition: 'all 0.4s ease',
            }}
          >
            <h5 className="fw-bold text-success mb-4">Partner as a:</h5>

            <div
              className="d-flex flex-wrap justify-content-center"
              style={{ gap: 10 }}
            >
              {partners.map((option, index) => {
                const isHovered = hovered === option;
                const isHighlighted = buttonHovered && index === 0; // highlight first pill when button hovered

                return (
                  <a
                    key={option}
                    href="#"
                    className="px-4 py-2 rounded-pill border border-success fw-bold text-decoration-none small"
                    style={{
                      color: isHovered || isHighlighted ? '#fff' : '#28a745',
                      background:
                        isHovered || isHighlighted
                          ? 'linear-gradient(90deg,#28a745,#20c997)'
                          : 'transparent',
                      boxShadow:
                        isHovered || isHighlighted
                          ? '0 4px 12px rgba(0,0,0,0.2)'
                          : 'none',
                      transform:
                        isHovered || isHighlighted
                          ? 'translateY(-3px) scale(1.05)'
                          : 'none',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={() => setHovered(option)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {option}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* KEYFRAMES */}
      <style>
        {`
          @keyframes arrowMove {
            0% { transform: translateX(0); }
            50% { transform: translateX(6px); }
            100% { transform: translateX(0); }
          }
        `}
      </style>
    </section>
  );
};

export default GoodPillSection;
