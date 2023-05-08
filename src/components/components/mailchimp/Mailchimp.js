const Mailchimp = () => {
  return (
    <div style={{ position: 'relatiive' }}>
      <link
        href="//cdn-images.mailchimp.com/embedcode/classic-071822.css"
        rel="stylesheet"
        type="text/css"
      />
      <style jsx>
        {`
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
        `}
      </style>

      <div id="mc_embed_signup">
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
                className="required email"
                id="mce-EMAIL"
                required
              />
              <span id="mce-EMAIL-HELPERTEXT" className="helper_text"></span>
            </div>
            <div id="mce-responses" className="clear foot">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: 'none' }}
              ></div>
              <div
                className="response"
                id="mce-success-response"
                style={{ display: 'none' }}
              ></div>
            </div>
            <div
              style={{ position: 'absolute', left: '-5000px' }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_e906394241361df56ffb88590_90a6d2a377"
                tabIndex="-1"
                value=""
              />
            </div>
            <div className="optionalParent">
              <div className="clear foot">
                <input
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                />
                <p className="brandingLogo">
                  <a
                    href="http://eepurl.com/ijrxM5"
                    title="Mailchimp - email marketing made easy and fun"
                  >
                    <img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
      <script
        type="text/javascript"
        src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
      ></script>
      <script type="text/javascript">
        {typeof window !== 'undefined' &&
          (() => {
            window.fnames = new Array();
            window.ftypes = new Array();
            window.fnames[0] = 'EMAIL';
            window.ftypes[0] = 'email';
            window.fnames[1] = 'FNAME';
            window.ftypes[1] = 'text';
            window.fnames[2] = 'LNAME';
            window.ftypes[2] = 'text';
            window.fnames[3] = 'ADDRESS';
            window.ftypes[3] = 'address';
            window.fnames[4] = 'PHONE';
            window.ftypes[4] = 'phone';
            window.fnames[5] = 'BIRTHDAY';
            window.ftypes[5] = 'birthday';
            var $mcj = jQuery.noConflict(true);
            const mcModal = document.getElementById('mc_embed_signup');
            closeBtn.addEventListener('click', () => {
              mcModal.style.display = 'none';
            });
          })()}
      </script>
    </div>
  );
};

export default Mailchimp;
