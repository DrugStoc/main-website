import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import truncateText from 'utils/truncateText';

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

  const handleViewClick = id => {
    router.push(`/learning/features/${id}`);
  };

  if (loading) return <div>Loading...</div>;
  if (!video) return <div>Video not found</div>;

  const { featured } = video;

  return (
    <div>
      <div className="learningVideo">
        <div className="learnVideoHeroImg">
          <h1>Welcome, Tolu</h1>
        </div>
      </div>
      <div className="learningVideoMain">
        <h2>Explore Our Extensive Webinar Library</h2>
        <p>
          Stay informed and stay competitive with our extensive library of
          webinars. Covering a range of topics from business strategies to
          patient care innovations, our webinars will provide practical insights
          and actionable steps to boost revenue.
        </p>

        <div>
          <div className="learningVideoRelative">
            <input
              className="learningVideoMain learningVideoInput"
              placeholder="Search for webinar"
            />
          </div>
          <h3>Featured Webinars</h3>
        </div>
        <div className="learningVideoMB">
          {featured?.map(webinar => (
            <div key={webinar.id} className="learningVideoFlexRow">
              <div className="learningVideoFlexRowImg">
                <img src={webinar.imgSrc} />
              </div>
              <div className="learningVideoFlexColumn">
                <div>
                  <p title={webinar.title}>{truncateText(webinar.title, 67)}</p>
                  <div className="learningVideoBadgeFlexRow">
                    <div>
                      <img
                        src="https://res.cloudinary.com/bizstak/image/upload/v1727050721/video_y5jcce.svg"
                        alt="video icon"
                      />
                      <span>{webinar.videosCount}</span>
                    </div>
                    <div>
                      <img
                        src="https://res.cloudinary.com/bizstak/image/upload/v1727288952/text_snippet_m3cs56.svg"
                        alt="script icon"
                      />
                      <span>{webinar.articlesCount}</span>
                    </div>
                    <div>
                      <img
                        src="https://res.cloudinary.com/bizstak/image/upload/v1727289145/clock_hekegh.svg"
                        alt="clock icon"
                      />
                      <span>{webinar.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="learningVideoExplore">
                  <button onClick={() => handleViewClick(webinar.id)}>
                    <span>Explore</span>
                    <img
                      src="https://res.cloudinary.com/bizstak/image/upload/v1727297928/arrow_forward_phbdsv.svg"
                      width={24}
                      height={24}
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningVideo;
