import WalkThrough from "./walkThrough";
const hero = () => {
  return (
    <div>
      <div className="faqHero">
        <h3 className="frequentlyaqHeading">Frequently Asked Questions</h3>
        <p style={{opacity: '80%'}}>We are here with you all the way up and down</p>
      </div>
      <div className="faqSearch">
        <img src='https://res.cloudinary.com/bizstak/image/upload/v1707300883/rqmxxwhbaj8ozshppkvg.png'  alt='search icon' />
        <input type='search'  placeholder='How may we be of help?' />
      </div>
      <WalkThrough />
    </div>
  );
};

export default hero;
