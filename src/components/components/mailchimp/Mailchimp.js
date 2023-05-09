import { useEffect, useState } from 'react';

const Mailchimp = () => {
  const [isFormDisplayed, setIsFormDisplayed] = useState(true);

  useEffect(() => {
    const mcModal = document.getElementById('mc_embed_signup');
    const windowHeight = window.innerHeight;
    const scrollPositionToShow = windowHeight * 0.2;
    const scrollPositionToHide = windowHeight * 0.4;

    const handleScroll = () => {
      if (window.scrollY >= scrollPositionToShow && !isFormDisplayed) {
        setIsFormDisplayed(true);
        mcModal.style.display = 'block';
      }

      if (window.scrollY >= scrollPositionToHide && isFormDisplayed) {
        setIsFormDisplayed(false);
        mcModal.style.display = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isFormDisplayed]);
  return (
    <div style={{ position: 'relative', top: -500 }}>
      <link
        href="//cdn-images.mailchimp.com/embedcode/classic-071822.css"
        rel="stylesheet"
        type="text/css"
      />
      <style jsx>{`
        #mc_embed_signup {
          background: #fff;
          font: 14px Helvetica, Arial, sans-serif;
          width: 600px;
          position: fixed;
          top: calc(45px + 50%);
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 50000000000;
          box-shadow: 0 0 10px #ccc;
        }
      `}</style>

      <div
        id="mc_embed_signup"
        style={{ display: isFormDisplayed ? 'block' : 'none' }}
      >
        <form
          action={`${process.env.NEXT_PUBLIC_ACTION}`}
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <h2>Subscribe</h2>
            <div className="indicates-required">
              <span className="asterisk">*</span> indicates required
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-FNAME">First Name </label>
              <input
                type="text"
                value=""
                name="FNAME"
                className=""
                id="mce-FNAME"
              />
              <span id="mce-FNAME-HELPERTEXT" className="helper_text"></span>
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-LNAME">Last Name </label>
              <input
                type="text"
                value=""
                name="LNAME"
                className=""
                id="mce-LNAME"
              />
              <span id="mce-LNAME-HELPERTEXT" className="helper_text"></span>
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">
                Email Address <span className="asterisk">*</span>
              </label>
              <input
                type="email"
                value=""
                name="EMAIL"
                className=""
                id="mce-EMAIL"
                required
              />
              <span id="mce-EMAIL-HELPERTEXT" className="helper_text"></span>
            </div>
            <div className="mc-field-group">
              <button type="submit" className="btn-submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Mailchimp;
