import { useRouter } from 'next/router';

const LearningVideo = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div>Video ID: {id}</div>;
};

export default LearningVideo;
