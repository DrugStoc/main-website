import Accordion from './Accordion';

function AccordionList({ data }) {
  return (
    <>
      <h1 className='faqHeading'>Frequently Asked Questions</h1>
      {Object.keys(data).map(section => (
        <div key={section}>
          <h3 className='sectionTitle'>{section.toUpperCase()}</h3>
          {data[section].map(item => (
            <Accordion
              key={item.id}
              title={item.title}
              description={item.description}
              altDescription1={item.altDescription1}
              altDescription2={item.altDescription2}
              altDescription3={item.altDescription3}
            />
          ))}
        </div>
      ))}
    </>
  );
}

export default AccordionList;
