import Layout from 'components/layout';
import LearningCoursePopular from 'pages/learning/courses/popular/[slug]/[id]';

export default function LearningVideoPage() {
  return (
    <Layout title="Learning Video">
      <LearningCoursePopular />
    </Layout>
  );
}
