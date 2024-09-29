import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import truncateText from 'utils/truncateText';

const LearningVideoPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    if (router.isReady && id) {
      const fetchVideoData = async () => {
        const response = await fetch(`/api/learning/courses/${id}`);
        const data = await response.json();
        setVideoData(data);
      };

      fetchVideoData();
    }
  }, [router.isReady, id]);

  if (!videoData) {
    return <div>Loading...</div>;
  }

  // const handleViewClick = (slug, id) => {
  //   router.push(`/learning/video/${slug}/${id}`);
  // };

  // console.log(videoData);

  const allCards = [
    ...(videoData.videos || []),
    ...(videoData.articles || []),
  ].sort((a, b) => a.id.localeCompare(b.id));

  return (
    <div className="learningMostPopularVideos" style={{ marginTop: 86 }}>
      <div className="learningMostPopularVideosSection">
        <h2>{videoData.videos[0]?.title || 'Learning Feature Courses'}</h2>
        <section className="learningMostPopularVideoCards">
          {allCards.map(item => (
            <div className="learningMostPopularVideoCard" key={item.id}>
              <div className="learningMostPopularVideoCardTitle">
                <img
                  src={
                    item.videoTitle
                      ? 'https://res.cloudinary.com/bizstak/image/upload/v1727050721/video_y5jcce.svg'
                      : 'https://res.cloudinary.com/bizstak/image/upload/v1727288952/text_snippet_m3cs56.svg'
                  }
                  alt={item.videoTitle ? 'video icon' : 'article icon'}
                />
                <Link
                  href={
                    item.videoTitle
                      ? `/learning/courses/videos/${item.slug}/${item.id}`
                      : `/learning/courses/articles/${item.slug}/${item.id}`
                  }
                >
                  <a
                    aria-label={`Navigate to ${
                      item.videoTitle ? 'video' : 'article'
                    } with id of ${item.id}`}
                  >
                    <p title={item.title}>{truncateText(item.title, 67)}</p>
                  </a>
                </Link>
              </div>
              <h2>{truncateText(item.videoTitle || item.articleTitle, 35)}</h2>
              <p className="learningMostPopularVideoCardDate">{item.date}</p>
              {/* <button onClick={() => handleViewClick(item.slug, item.id)}>
                View
              </button> */}
              <Link
                href={
                  item.videoTitle
                    ? `/learning/courses/videos/${item.slug}/${item.id}`
                    : `/learning/courses/articles/${item.slug}/${item.id}`
                }
              >
                <a
                  className="learningViewButton"
                  aria-label={`Navigate to ${
                    item.videoTitle ? 'video' : 'article'
                  } with id of ${item.id}`}
                >
                  View
                </a>
              </Link>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default LearningVideoPage;
