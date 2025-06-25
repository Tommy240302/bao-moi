import React from "react";
import "./NewsCard.css";

const NewsCard = ({ title, image, summary }) => {
  return (
    <div className="news-card">
      <img src={image} alt="news" />
      <div className="news-content">
        <h2>{title}</h2>
        <p>{summary}</p>
      </div>
    </div>
  );
};

export default NewsCard;
