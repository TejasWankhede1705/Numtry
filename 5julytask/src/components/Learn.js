// BlueCardComponent.jsx
import React from 'react';
import '../css/Learn.css'; // Import your component's CSS file

const LearnComponent = () => {
  const heading = "A Little About Us"; // Example heading
  const content = "Welcome to [Company Name], your trusted partner in safety solutions. At [Company Name], we are committed to providing top-quality safety products that protect lives and enhance workplace safety standards. With [number] years of industry experience, we specialize in [specific types of safety products or services offered]."; // Example content
  const learnMoreUrl = "https://numetry.in/"; // Example URL

  return (
    <div className="blue-card">
      <h2 className="blue-heading">{heading}</h2>
      <p className="blue-content">{content}</p>
      <a href={learnMoreUrl} className="learn-more-button">
        Learn More
      </a>
    </div>
  );
}

export default LearnComponent;
