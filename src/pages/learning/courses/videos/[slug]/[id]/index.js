import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CommentSection from '../../../../../../components/comment';

const LearningVideoPage = () => {
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

  if (!videoData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="learningMostPopularVideos" style={{ marginTop: 86 }}>
      <div className="learningMostPopularVideosSection">
        <h2>{videoData.videoTitle || ''}</h2>
        <section
          className="learningMostPopularVideoCards"
          style={{
            display: 'flex',
            justifyContent: 'center',
            background: '#f0f0f0',
          }}
        >
          <video height="500" controls style={{ width: '100%' }}>
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

export default LearningVideoPage;
