import React from "react";
import { useParams } from "react-router-dom";
import { newsList } from "../data/news";

const NewsDetail = () => {
  const { id } = useParams();
  const newsItem = newsList.find((n) => n.id === parseInt(id));

  if (!newsItem) return <div>Không tìm thấy bài viết</div>;

  return (
    <div>
      <h1>{newsItem.title}</h1>
      <img src={newsItem.image} alt="news" width="100%" />
      <p>{newsItem.summary}</p>
    </div>
  );
};

export default NewsDetail;
