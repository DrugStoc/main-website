import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CommentSection from '../../../../../../components/comment';
import Loading from 'components/loading';

const LearningCourseVideoPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    if (router.isReady && id) {
      const fetchVideoData = async () => {
        const response = await fetch(`/api/learning/videos/${id}`);
        const data = await response.json();
        setVideoData(data);
      };

      fetchVideoData();
    }
  }, [router.isReady, id]);

  const handleBack = () => {
    router.back();
  };

  if (!videoData) {
    return <Loading />;
  }

  return (
    <div className="learningMostPopularVideos" style={{ marginTop: 86 }}>
      <div className="learningMostPopularVideosSection">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            cursor: 'pointer',
          }}
        >
          <img
            style={{ position: 'relative', top: -20 }}
            src="https://res.cloudinary.com/bizstak/image/upload/v1727647527/arrowBack_bf0waq.svg"
            onClick={handleBack}
          />
          <h2>{videoData.videoTitle || ''}</h2>
        </div>
        <section
          className="learningMostPopularVideoCards"
          style={{
            display: 'flex',
            justifyContent: 'center',
            background: '#f0f0f0',
          }}
        >
          <video height={720} controls style={{ width: '100%' }}>
            <source src={videoData.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>
        <section style={{ marginTop: 100 }}>
          <CommentSection />
        </section>
      </div>
    </div>
  );
};

export default LearningCourseVideoPage;
