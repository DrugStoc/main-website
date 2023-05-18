import { AccordionContext } from 'react-bootstrap';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import { useContext } from 'react';
export const CustomToggle = ({ children, eventKey, callback }) => {
    const currentEventKey = useContext(AccordionContext);
  
    const decoratedOnClick = useAccordionToggle(
      eventKey,
      () => callback && callback(eventKey)
    );
  
    const isCurrentEventKey = currentEventKey === eventKey;
    return (
      <button
        type="button"
        className="accordion__button"
        onClick={decoratedOnClick}
      >
        {children}
        {isCurrentEventKey ? <span>-</span> : <span>+</span>}
      </button>
    );
  };