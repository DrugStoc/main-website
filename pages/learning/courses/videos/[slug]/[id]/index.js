import Layout from 'components/layout';
import ProtectedRoute from 'components/ProtectedRoute';
import LearningCourseVideo from 'pages/learning/courses/videos/[slug]/[id]';

export default function LearningVideoPage() {
  return (
    <ProtectedRoute>
      <Layout title="Learning Video">
        <LearningCourseVideo />
      </Layout>
    </ProtectedRoute>
  );
}
