import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const LearningVideo = () => {
  const router = useRouter();
  const { id } = router.query;
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (router.isReady && id) {
      const fetchVideo = async () => {
        try {
          const response = await fetch(`/api/videos/${id}`);
          const data = await response.json();
          setVideo(data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching video:', error);
          setLoading(false);
        }
      };
      fetchVideo();
    }
  }, [router.isReady, id]);

  if (loading) return <div>Loading...</div>;
  if (!video) return <div>Video not found</div>;

  return (
    <div>
      <h1>{video.videoTitle}</h1>
      <p>{video.date}</p>
    </div>
  );
};

export default LearningVideo;
