const LearningPopularVideos = () => {
  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  }

  const text = 'Strategies for Business Resilience in an Inflated Economy';
  const truncatedText = truncateText(text, 30);
  console.log(truncatedText);

  return (
    <div className="learningMostPopularVideos">
      <div className="learningMostPopularVideosSection">
        <h2>Most popular videos</h2>
        <section className="learningMostPopularVideoCards">
          <div className="learningMostPopularVideoCard">
            <div className="learningMostPopularVideoCardTitle">
              <img src="https://res.cloudinary.com/bizstak/image/upload/v1727050721/video_y5jcce.svg" />
              <p title="Strategies for Business Resilience in an Inflated Economy">
                {truncateText(
                  'Strategies for Business Resilience in an Inflated Economy',
                  67
                )}
              </p>
            </div>
            <h2>{truncateText('Harnessing Data for Decision Making', 35)}</h2>
            <p className="learningMostPopularVideoCardDate">
              May 25, 2023 at 10:00 AM
            </p>
            <button>View</button>
          </div>
          <div className="learningMostPopularVideoCard">
            <div className="learningMostPopularVideoCardTitle">
              <img src="https://res.cloudinary.com/bizstak/image/upload/v1727050721/video_y5jcce.svg" />
              <p title="Strategies for Business Resilience in an Inflated Economy">
                {truncateText(
                  'Strategies for Business Resilience in an Inflated Economy',
                  67
                )}
              </p>
            </div>
            <h2>{truncateText('Harnessing Data for Decision Making', 35)}</h2>
            <p className="learningMostPopularVideoCardDate">
              May 25, 2023 at 10:00 AM
            </p>
            <button>View</button>
          </div>
          <div className="learningMostPopularVideoCard">
            <div className="learningMostPopularVideoCardTitle">
              <img src="https://res.cloudinary.com/bizstak/image/upload/v1727050721/video_y5jcce.svg" />
              <p title="Strategies for Business Resilience in an Inflated Economy">
                {truncateText(
                  'Strategies for Business Resilience in an Inflated Economy',
                  67
                )}
              </p>
            </div>
            <h2>{truncateText('Harnessing Data for Decision Making', 35)}</h2>
            <p className="learningMostPopularVideoCardDate">
              May 25, 2023 at 10:00 AM
            </p>
            <button>View</button>
          </div>
          <div className="learningMostPopularVideoCard">
            <div className="learningMostPopularVideoCardTitle">
              <img src="https://res.cloudinary.com/bizstak/image/upload/v1727050721/video_y5jcce.svg" />
              <p title="Strategies for Business Resilience in an Inflated Economy">
                {truncateText(
                  'Strategies for Business Resilience in an Inflated Economy',
                  67
                )}
              </p>
            </div>
            <h2>{truncateText('Harnessing Data for Decision Making', 35)}</h2>
            <p className="learningMostPopularVideoCardDate">
              May 25, 2023 at 10:00 AM
            </p>
            <button>View</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LearningPopularVideos;
