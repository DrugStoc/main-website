import Layout from 'components/layout';
import ProtectedRoute from 'components/ProtectedRoute';
import LearningCoursePopular from 'pages/learning/courses/popular/[slug]/[id]';

export default function LearningVideoPage() {
  return (
    <ProtectedRoute>
      <Layout title="Learning Video">
        <LearningCoursePopular />
      </Layout>
    </ProtectedRoute>
  );
}
