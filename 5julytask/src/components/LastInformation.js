import React from 'react';
import '../css/LastInformation.css';

const LastInformation = () => {
  const imageSrc = 'https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1651146525/1651146523.jpg';
  const text = 'All teh Lorem Ipsum generators on the Internet tend to repeat predefined chunks as nesessary, making this first true generator on the Internet.it uses a dictnory of over 200 Latin words,combined with a handful model sentense structure , to generate Lorem ipsum which looks resonable. the generated Lorem ipsum is there fore always free from repetition.';

  return (
    <div className="lastinformation-container">
      <div className="text-container">
        <h1>Lorem impsum dolor</h1>
        <p>{text}</p>
      </div>
      <div className="image-container">
        <img src={imageSrc} alt="Illustration" />
      </div>
    </div>
  );
};

export default LastInformation;
