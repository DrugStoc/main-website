import AccordionList from './AccordionList';
import data from './data';

const FAQ = () => {
  return (
    <div className="majorFAQ">
      <AccordionList data={data} />
    </div>
  );
};

export default FAQ;
