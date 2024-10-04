import Layout from 'components/layout';
import ProtectedRoute from 'components/ProtectedRoute';
import LearningCourseFeature from 'pages/learning/courses/features/[slug]/[id]';

export default function LearningVideoPage() {
  return (
    <ProtectedRoute>
      <Layout title="Learning Video">
        <LearningCourseFeature />
      </Layout>
    </ProtectedRoute>
  );
}
