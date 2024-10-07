import LearningHeroCards from 'components/learningCard';
import AuthModal from 'components/modal/Auth';
import { useAuth } from 'context/AuthContext';
import { useRouter } from 'next/router';

const LearningHero = () => {
  const router = useRouter();
  const { token, setIsModalOpen, isModalOpen } = useAuth();
  const navigateToBookmark = () => {
    router.push('#most-popular-videos');
  };
  const handleViewClick = () => {
    if (token) {
      router.push(
        `/learning/courses/popular/strategies-for-business-resilience-in-an-inflated-economy/1`
      );
    } else {
      setIsModalOpen(true);
    }
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      {!isModalOpen ? null : (
        <AuthModal isOpen={isModalOpen} onClose={closeModal} />
      )}
      <div className="learningHero" style={{ position: 'relative' }}>
        <div className="learningHeroImg">
          <div className="learningHeroSectionContent">
            <div className="learningHeroSectionText">
              <h2>
                Empower Your Healthcare Practice with Cutting Edge Knowledge
              </h2>
              <p>
                DrugStoc Learning equips healthcare providers with the essential
                knowledge and tools to elevate their practice and increase
                revenue. Get exclusive access to our webinar replays, allowing
                you to learn at your own pace anytime, anywhere.
              </p>
              <div className="learningHeroFirstButton">
                <button onClick={navigateToBookmark}>Get Started</button>
                <button onClick={handleViewClick}>Log in</button>
              </div>
            </div>
            <div className="learningHeroForeImg">
              <div className="learningHeroForeimg">
                <img
                  className="learningHeroForeimgSecondImage"
                  src="https://res.cloudinary.com/bizstak/image/upload/v1726924915/jet_s10zxq.png"
                />
                <img
                  className="learningHeroFirstForeImg"
                  src="https://res.cloudinary.com/bizstak/image/upload/v1726923823/smilingDocWoman_nmkqrb.png"
                  width="95%"
                />
                <LearningHeroCards className="learningHeroProfileListCard">
                  <div>
                    <h4>220+ Satisfied people</h4>
                    <img
                      src="https://bit.ly/dan-abramov"
                      width={48}
                      height={48}
                    />
                    <img
                      src="https://bit.ly/kent-c-dodds"
                      width={48}
                      height={48}
                    />
                    <img
                      src="https://bit.ly/ryan-florence"
                      width={48}
                      height={48}
                    />
                    <img
                      src="https://bit.ly/prosper-baba"
                      width={48}
                      height={48}
                    />
                    <img
                      src="https://bit.ly/code-beast"
                      width={48}
                      height={48}
                    />
                    <img
                      src="https://bit.ly/sage-adebayo"
                      width={48}
                      height={48}
                    />
                  </div>
                </LearningHeroCards>
                <LearningHeroCards className="learningHeroTestimonialCard">
                  <div className="learningHeroTestimonialCardInfo">
                    <div className="learningHeroTestimonialCardContent">
                      <p>
                        "Drugstoc Learning has been very useful for me in my
                        pharmacy practice"
                      </p>
                      <img src="https://res.cloudinary.com/bizstak/image/upload/v1726952337/pharmarticalWoman_qknrle.png" />
                    </div>
                    <div className="learningHeroTestimonialCardInfo1">
                      <h5>
                        Ciroma Chukwuka <br />
                        <span className="learningHeroTestimonialCardPara">
                          Pharmacist
                        </span>
                      </h5>
                    </div>
                  </div>
                </LearningHeroCards>
                <LearningHeroCards className="learningHeroUsers">
                  <p>
                    <span className="learningHeroUsersCount">200+</span> <br />
                    Free resources to equip you in your proffesion or practice
                  </p>
                </LearningHeroCards>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="learningHeroTrophy">
        <img src="https://res.cloudinary.com/bizstak/image/upload/v1726958830/trophy_bewll1.png" />
      </div>
    </>
  );
};

export default LearningHero;
