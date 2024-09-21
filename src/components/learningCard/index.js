const LearningHeroCards = ({ children, className }) => {
  return (
    <div className={`learningHeroCard ${className}`}>
      <div className="learningHeroCardProfiles">{children}</div>
    </div>
  );
};

export default LearningHeroCards;
