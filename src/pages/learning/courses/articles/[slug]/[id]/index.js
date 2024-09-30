import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CommentSection from '../../../../../../components/comment';
import Loading from 'components/loading';

const LearningVideoPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [articlesData, setArticlesData] = useState(null);

  useEffect(() => {
    if (router.isReady && id) {
      const fetchArticlesData = async () => {
        const response = await fetch(`/api/learning/articles/${id}`);
        const data = await response.json();
        setArticlesData(data);
      };

      fetchArticlesData();
    }
  }, [router.isReady, id]);

  const handleBack = () => {
    router.back();
  };

  if (!articlesData) {
    return <Loading />;
  }

  const parseMarkdownToHTML = markdownText => {
    let htmlText = markdownText.replace(/\n\n/g, '</p><p>');
    htmlText = markdownText.replace(/\n/g, '</div><div>');
    htmlText = htmlText.replace(
      /\[img]\((.*?)\)/g,
      '<img src="$1" alt="image" />'
    );

    htmlText = htmlText.replace(/\[([^\]]+)]\((.*?)\)/g, '<a href="$2">$1</a>');

    return `<p>${htmlText}</p>`;
  };

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
          <h2>{articlesData.articleTitle || ''}</h2>
        </div>
        <section
          className="learningMostPopularVideoCards"
          style={{
            display: 'flex',
            justifyContent: 'center',
            background: '#f0f0f0',
          }}
        >
          <img
            src={articlesData.imageUrl}
            height={500}
            style={{ objectFit: 'cover', width: '100%' }}
          />
        </section>

        <section
          style={{ marginTop: 60 }}
          dangerouslySetInnerHTML={{
            __html: parseMarkdownToHTML(articlesData.article),
          }}
        />
        <section style={{ marginTop: 100 }}>
          <CommentSection />
        </section>
      </div>
    </div>
  );
};

export default LearningVideoPage;
