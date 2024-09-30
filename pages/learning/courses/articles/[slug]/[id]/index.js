import Layout from 'components/layout';
import LearningCourseArticle from 'pages/learning/courses/articles/[slug]/[id]';

export default function LearningVideoPage() {
  return (
    <Layout title="Learning Video">
      <LearningCourseArticle />
    </Layout>
  );
}
