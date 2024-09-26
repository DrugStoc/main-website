import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import truncateText from 'utils/truncateText';

const LearningPopularVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetch('/api/videos');
      const data = await response.json();
      setVideos(data);
    };

    fetchVideos();
  }, []);

  const router = useRouter();

  const handleViewClick = (slug, id) => {
    router.push(`/learning/videos/popular/${slug}/${id}`);
  };

  return (
    <div className="learningMostPopularVideos">
      <div className="learningMostPopularVideosSection">
        <h2>Most popular videos</h2>
        <section className="learningMostPopularVideoCards">
          {videos.map(video => (
            <div className="learningMostPopularVideoCard" key={video.id}>
              <div className="learningMostPopularVideoCardTitle">
                <img
                  src="https://res.cloudinary.com/bizstak/image/upload/v1727050721/video_y5jcce.svg"
                  alt="video icon"
                />
                <Link
                  href={`/learning/videos/popular/${video.slug}/${video.id}`}
                >
                  <a
                    aria-label={`Navigate to popular video with id of ${video.id}`}
                  >
                    <p title={video.title}>{truncateText(video.title, 67)}</p>
                  </a>
                </Link>
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
