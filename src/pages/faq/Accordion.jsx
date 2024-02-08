import { useState } from 'react';

function Accordion({ title, description, altDescription1, altDescription2, altDescription3 }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="accordion">
        <div
          className="accordionSection"
          style={{ borderBottom: '1px solid #e8e7ee' }}
        >
          <div className="accordion-content" onClick={toggleAccordion}>
            <p className="accordionTitle">{title}</p>
            <span>
              {isOpen ? (
                <img
                  style={{ transform: isOpen ? 'rotate(180deg)' : '' }}
                  src="https://res.cloudinary.com/bizstak/image/upload/v1707314874/Vector_xoqdnz.png"
                  alt="dropdown Icon"
                />
              ) : (
                <img
                  src="https://res.cloudinary.com/bizstak/image/upload/v1707314874/Vector_xoqdnz.png"
                  alt="dropdown Icon"
                />
              )}
            </span>
          </div>
          {isOpen && (
            <>
              <p>
                <p className="accordion-text">{description}</p>
              </p>
              <ul style={{marginLeft: '2rem'}}>
                {altDescription1 === null ? null : <li>{altDescription1}</li>}
                {altDescription2 === null ? null : <li>{altDescription2}</li>}
                {altDescription3 === null ? null : <li>{altDescription3}</li>}
              </ul>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Accordion;
