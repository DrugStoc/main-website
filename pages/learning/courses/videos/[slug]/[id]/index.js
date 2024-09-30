import Layout from 'components/layout';
import LearningCourseVideo from 'pages/learning/courses/videos/[slug]/[id]';

export default function LearningVideoPage() {
  return (
    <Layout title="Learning Video">
      <LearningCourseVideo />
    </Layout>
  );
}
