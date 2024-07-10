import React from 'react';
import '../css/InformationComponent.css';
const InformationComponent = () => {
  return (
    <div className="information-container">
      <InformationBlock 
        heading="Innovations" 
        imageUrl="https://media.assettype.com/analyticsinsight%2Fimport%2Fwp-content%2Fuploads%2F2021%2F01%2FUnderstanding-Manufacturing-Technologies-and-their-Industrial-Use-Cases.jpg"
        content="There are many variations of passeges of lorem ipsum avialable,but mejority have suffered alteration."
      />
      <InformationBlock 
        heading="People And Culture " 
        imageUrl="https://media.assettype.com/analyticsinsight%2Fimport%2Fwp-content%2Fuploads%2F2021%2F01%2FUnderstanding-Manufacturing-Technologies-and-their-Industrial-Use-Cases.jpg"
        content="There are many variations of passeges of lorem ipsum avialable,but mejority have suffered alteration."
      />
      <InformationBlock 
        heading="Solutions At a Glance" 
        imageUrl="https://media.assettype.com/analyticsinsight%2Fimport%2Fwp-content%2Fuploads%2F2021%2F01%2FUnderstanding-Manufacturing-Technologies-and-their-Industrial-Use-Cases.jpg"
        content="There are many variations of passeges of lorem ipsum avialable,but mejority have suffered alteration."
      />
    </div>
  );
}

const InformationBlock = ({ heading, imageUrl, content }) => {
  return (
    <div className="information-block">
      <h2 className="information-heading">{heading}</h2>
      <img src={imageUrl} alt="Information" className="information-image" />
      <p className="information-content">{content}</p>
    </div>
  );
}

export default InformationComponent;
