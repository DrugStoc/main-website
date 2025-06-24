const learningCourses = [
  {
    //icon: 'https://res.cloudinary.com/bizstak/image/upload/v1727045870/library_books_tkdfsb.svg',
    icon:"/images/learning/ico1.png",
    title: 'Comprehensive Course Library:',
    description:
      'Offer a diverse range of courses covering various medical specialties, from primary care to advanced procedures.',
  },
  {
    icon:"/images/learning/ico2.png",
    //icon: 'https://res.cloudinary.com/bizstak/image/upload/v1727045929/timeline_e3kr69.svg',
    title: 'Flexible Learning:',
    description:
      'Allow healthcare providers to learn at their own pace with on-demand access to courses and materials.',
  },
  {
    icon:"/images/learning/ico3.png",
    //icon: 'https://res.cloudinary.com/bizstak/image/upload/v1727046016/person_tdqvgz.svg',
    title: 'Expert Instructors:',
    description:
      'Highlight experienced healthcare professionals as instructors, ensuring high-quality content.',
  },
  {
    icon:"/images/learning/ico4.png",
    //icon: 'https://res.cloudinary.com/bizstak/image/upload/v1727046075/grade_u9oglg.svg',
    title: 'Continuing Education Credits:',
    description:
      "Emphasize the platform's ability to help providers meet their continuing education requirements.",
  },
  {
    icon:"/images/learning/ico5.png",
    //icon: 'https://res.cloudinary.com/bizstak/image/upload/v1727046130/question_answer_m0l2yd.svg',
    title: 'Interactive Learning:',
    description:
      'Showcase features like quizzes, simulations, and case studies to enhance engagement.',
  },
];

const LearningHintCard = () => {
  return (
    <div className="whyDrugStoc">
      <div className="whyDrugStocSection">
        <h2>Why DrugStoc</h2>
        <section className="learningCourses">
          {learningCourses.map((course, index) => (
            <div className="learningCoursesCard" key={index}>
              <div className="learningCoursesCardIcon">
                <img src={course.icon} alt={course.title} />
              </div>
              <h4>{course.title}</h4>
              <p>{course.description}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default LearningHintCard;
