import { useRouter } from 'next/router';

const popularVideos = [
  {
    id: 1,
    title: 'Strategies for Business Resilience in an Inflated Economy',
    videoTitle: 'Harnessing Data for Decision Making',
    date: 'May 25, 2023 at 10:00 AM',
  },
  {
    id: 2,
    title: 'Strategies for Business Resilience in an Inflated Economy',
    videoTitle: 'Harnessing Data for Decision Making',
    date: 'May 25, 2023 at 10:00 AM',
  },
  {
    id: 3,
    title: 'Strategies for Business Resilience in an Inflated Economy',
    videoTitle: 'Harnessing Data for Decision Making',
    date: 'May 25, 2023 at 10:00 AM',
  },
  {
    id: 4,
    title: 'Strategies for Business Resilience in an Inflated Economy',
    videoTitle: 'Harnessing Data for Decision Making',
    date: 'May 25, 2023 at 10:00 AM',
  },
];

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + '...';
  }
  return text;
};

const LearningPopularVideos = () => {
  const router = useRouter();

  const handleViewClick = id => {
    router.push(`/learning/videos/${id}`);
  };

  return (
    <div className="learningMostPopularVideos">
      <div className="learningMostPopularVideosSection">
        <h2>Most popular videos</h2>
        <section className="learningMostPopularVideoCards">
          {popularVideos.map((video, index) => (
            <div className="learningMostPopularVideoCard" key={index}>
              <div className="learningMostPopularVideoCardTitle">
                <img
                  src="https://res.cloudinary.com/bizstak/image/upload/v1727050721/video_y5jcce.svg"
                  alt="video icon"
                />
                <p title={video.title}>{truncateText(video.title, 67)}</p>
              </div>
              <h2>{truncateText(video.videoTitle, 35)}</h2>
              <p className="learningMostPopularVideoCardDate">{video.date}</p>
              <button onClick={() => handleViewClick(video.id)}>View</button>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default LearningPopularVideos;
