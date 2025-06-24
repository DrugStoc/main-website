import AuthModal from 'components/modal/Auth';
import { useAuth } from 'context/AuthContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import truncateText from 'utils/truncateText';

const LearningPopularVideos = () => {
  const [videos, setVideos] = useState([]);
  const { token, setIsModalOpen, isModalOpen } = useAuth();
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
    if (token) {
      router.push(`/learning/courses/popular/${slug}/${id}`);
    } else {
      setIsModalOpen(true);
    }
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="learningMostPopularVideos">
      {!isModalOpen ? null : (
        <AuthModal isOpen={isModalOpen} onClose={closeModal} />
      )}
      <div
        id="most-popular-videos"
        className="learningMostPopularVideosSection"
      >
        <h2>Most popular videos</h2>
        <section className="learningMostPopularVideoCards">
          {videos.map(video => (
            <div className="learningMostPopularVideoCard" key={video.id}>
              <div className="learningMostPopularVideoCardTitle">
                <img
                  src='/images/learning/ico6.png'
                  //src="https://res.cloudinary.com/bizstak/image/upload/v1727050721/video_y5jcce.svg"
                  alt="video icon"
                />
                <Link
                  href={`/learning/courses/popular/${video.slug}/${video.id}`}
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
              <button onClick={() => handleViewClick(video.slug, video.id)}>
                View
              </button>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default LearningPopularVideos;
