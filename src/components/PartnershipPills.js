import React, { useState } from 'react';
import { ArrowRight } from 'react-bootstrap-icons';

const PartnerPills = () => {
  const [hovered, setHovered] = useState(null);

  const options = [
    'Pharmacy',
    'HMO',
    'Private Investor',
    'Health Facility',
    'Independent Agent',
  ];

  return (
    <div className="position-relative mt-5 overflow-hidden">
      {/* Dramatic CTA */}
      <h3 className="fw-bold text-dark mb-3" style={{ fontSize: '1.75rem' }}>
        Let’s transform healthcare together with{' '}
        <span
          className="fw-extrabold"
          style={{
            background: 'linear-gradient(90deg,#28a745,#20c997)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          The GoodPill Project
        </span>
      </h3>

      {/* Context lead-in */}
      <p className="text-muted fw-semibold mb-4" style={{ fontSize: '1.1rem' }}>
        I want to <span className="text-success">partner</span> as a:
      </p>

      {/* Pills */}
      <div className="d-flex flex-wrap gap-3" style={{ gap: 10 }}>
        {options.map((option, index) => {
          const isHovered = hovered === option;

          return (
            <a
              key={option}
              target="_blank"
              href={
                index
                  ? 'https://wa.link/4jcx5q'
                  : 'https://thegoodpillproject.org/pharmacy-register'
              }
              className="d-flex align-items-center gap-2 px-4 py-2 rounded-pill border border-success fw-bold text-decoration-none small"
              style={{
                zIndex: 10,
                color: isHovered ? '#fff' : '#28a745',
                background: isHovered
                  ? 'linear-gradient(90deg,#28a745,#20c997)'
                  : 'transparent',
                boxShadow: isHovered ? '0 4px 10px rgba(0,0,0,0.15)' : 'none',
                transform: isHovered ? 'translateY(-3px) scale(1.05)' : 'none',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={() => setHovered(option)}
              onMouseLeave={() => setHovered(null)}
            >
              {option}
              <ArrowRight
                size={14}
                style={{
                  transform: isHovered ? 'translateX(6px)' : 'translateX(2px)',
                  transition: 'all 0.25s ease',
                }}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default PartnerPills;
