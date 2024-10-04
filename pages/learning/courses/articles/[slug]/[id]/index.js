import Layout from 'components/layout';
import ProtectedRoute from 'components/ProtectedRoute';
import LearningCourseArticle from 'pages/learning/courses/articles/[slug]/[id]';

export default function LearningVideoPage() {
  return (
    <ProtectedRoute>
      <Layout title="Learning Video">
        <LearningCourseArticle />
      </Layout>
    </ProtectedRoute>
  );
}
