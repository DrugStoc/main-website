import { useState } from 'react';

function Accordion({
  title,
  description,
  altDescription1,
  altDescription2,
  altDescription3,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const hasAppleStoreLink = [
    description,
    altDescription1,
    altDescription2,
    altDescription3,
  ].some(text => text && text.toLowerCase().includes('apple store'));

  const hasPlayStoreLink = [
    description,
    altDescription1,
    altDescription2,
    altDescription3,
  ].some(text => text && text.toLowerCase().includes('play store'));

  const hasWebAppLink = [
    description,
    altDescription1,
    altDescription2,
    altDescription3,
  ].some(text => text && text.toLowerCase().includes('web app'));

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
              <ul style={{ marginLeft: '2rem' }}>
                {altDescription1 === null ? null : <li>{altDescription1}</li>}
                {altDescription2 === null ? null : <li>{altDescription2}</li>}
                {altDescription3 === null ? null : <li>{altDescription3}</li>}
              </ul>
              {hasAppleStoreLink && (
                <div>
                  &mdash;{' '}
                  <a
                    href="https://apps.apple.com/ng/app/drugstoc-pharmacy-partner/id1467205425"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apple Store
                  </a>
                </div>
              )}
              {hasPlayStoreLink && (
                <div>
                  &mdash;{' '}
                  <a
                    href="https://play.google.com/store/apps/details?id=com.drugstoc.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Play Store
                  </a>
                </div>
              )}
              {hasWebAppLink && (
                <div>
                  &mdash;{' '}
                  <a
                    href="https://app.drugstoc.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Web App
                  </a>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Accordion;
