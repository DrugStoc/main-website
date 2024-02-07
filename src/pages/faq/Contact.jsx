import { useRouter } from 'next/router';

const Contact = () => {
  const router = useRouter();
  const handleContactClick = () => {
    window.open(
      'https://api.whatsapp.com/send/?phone=2348036879999&text&type=phone_number&app_absent=0',
      '_blank'
    );
  };
  
  return (
    <div className="contactInfo">
      <p>Still can't find what you're looking for?</p>
      <button className="buttonContact" onClick={handleContactClick}>
        Call us on Whatsapp
      </button>
    </div>
  );
};

export default Contact;
