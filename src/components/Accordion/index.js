import { useState } from 'react';
import accordionStyles from '../../../public/accordion.module.css';

const Accordion = () => {
  const [accordions, setAccordions] = useState([
    {
      question: 'What is DrugStoc Pay?',
      answer:
        'Drugstoc pay is a digital wallet system, as well as a payment solution that facilitates stock financing for health Institutions and practitioners. It offers a flexible payment option such as pay in bits.',
      isOpen: false,
    },
    {
      question: 'How do I fund my wallet? ',
      answer:
        'This can be done via your account page. Navigate to your drugstoc pay menu and click the fund account button. ',
      isOpen: false,
    },
    {
      question: 'Can I use DrugStoc Pay on my first purchase? ',
      answer:
        'Yes, you can, however, you would need to fund your wallet if no available supplier credit',
      isOpen: false,
    },
    {
      question: 'How do I access the funds in my wallet?',
      answer:
        'You can access your funds by transferring them to your bank account',
      isOpen: false,
    },
    {
      question: 'How secure is the wallet?',
      answer: 'Highly secured. We follow PCI standards in data encryption',
      isOpen: false,
    },
    {
      question: 'Can any POS device be synced with my wallet?',
      answer:
        'No, you can’t sync any POS device to your wallet. It has to be the one setup for the wallet system.',
      isOpen: false,
    },
    {
      question: 'How do I sign-up for drugstoc pay',
      answer:
        'To sign up for drugstoc pay, simply create an account on the ecommerce platform, proceed to the drugstoc pay menu and create your security pin. After this the system automatically activates your drugstoc pay wallet withing 24hrs which you can then use to make transaction on the platform.',
      isOpen: false,
    },
    {
      question: 'Is drugstoc pay free to use',
      answer:
        'Drugstoc pay has no hidden charges. It is completely free to use.',
      isOpen: false,
    },
    {
      question:
        'Does drugstoc pay enable me to withdraw my money if I choose to?',
      answer:
        'Yes, you can withdraw your money by simply following the withdrawal prompts on your screen after hitting the withdraw button.',
      isOpen: false,
    },
    {
      question: 'Can I view all transactions performed with the drugstoc pay?',
      answer:
        'Yes, you can. This information can be accessed via the drugstoc default menu page',
      isOpen: false,
    },
  ]);

  const toggleAccordion = index => {
    setAccordions(prevState => {
      const updatedAccordions = prevState.map((accordion, i) => {
        if (i === index) {
          return {
            ...accordion,
            isOpen: !accordion.isOpen,
          };
        } else {
          return {
            ...accordion,
            isOpen: false,
          };
        }
      });
      return updatedAccordions;
    });
  };

  return (
    <div id="faq" href="#faq" className={accordionStyles.accordion}>
      <h2>FAQs (Frequently Asked Questions)</h2>
      {accordions.map((accordion, index) => (
        <div key={index} className={accordionStyles.accordionItem}>
          <div
            className={accordionStyles.accordionHeader}
            onClick={() => toggleAccordion(index)}
          >
            <h3>{accordion.question}</h3>
            <button>
              <span style={{ fontSize: 24 }}>
                {accordion.isOpen ? '-' : '+'}
              </span>
            </button>
          </div>
          {accordion.isOpen && <p>{accordion.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
