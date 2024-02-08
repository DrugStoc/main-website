const walkThrough = () => {
  const handleFirstVideoClick = () => {
    window.open('https://youtu.be/B3zTzsruSvo', '_blank');
  };

  const handleSecondVideoClick = () => {
    window.open('https://youtu.be/4H5SjBwS8vg', '_blank');
  };

  const handleThirdVideoClick = () => {
    window.open('https://youtu.be/B3zTzsruSvo', '_blank');
  };

  return (
    <div className="faqVideoSection">
      <div className="faqVideos">
        <div onClick={handleFirstVideoClick}>
          <img
            src="https://res.cloudinary.com/bizstak/image/upload/v1707303604/iconContainer_b7i1pe.png"
            alt=""
          />
        </div>
        <div onClick={handleSecondVideoClick}>
          <a
            href="https://youtu.be/4H5SjBwS8vg"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://res.cloudinary.com/bizstak/image/upload/v1707303604/iconContainer_b7i1pe.png"
              alt=""
            />
          </a>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/bizstak/image/upload/v1707303604/iconContainer_b7i1pe.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default walkThrough;
