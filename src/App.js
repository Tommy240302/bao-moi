import React, { useEffect, useState } from "react";
import "./App.css";
import NewsCard from "./UI/NewsCard";
import { newsList } from "./data/news";

function App() {
  const mainNews = newsList[0]; // Tin chính
  const sideNews = newsList.slice(1); // Các tin phụ

  const [searchQuery, setSearchQuery] = useState("");

  const filteredNews = newsList.filter((news) =>
    news.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <header>
        <img src="/images/logo.png" alt="User Icon" className="logo" />
        <div className="search-box">
          <input
            type="text"
            placeholder=" Tìm kiếm bài viết..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <img src="/icons/user.png" alt="User Icon" className="user-icon" />
      </header>

      <div className="menu-bar">
        <div className="menu-left">
          <div className="menu-item">NÓNG</div>
          <div className="menu-item">MỚI</div>
          <div className="menu-item">VIDEO</div>
          <div className="menu-item">CHỦ ĐỀ</div>
        </div>

        <div className="menu-tags">
          <span className="tag"># Kỳ họp thứ 9, Quốc hội khóa XV</span>
          <span className="tag"># Năng lượng tích cực</span>
          <span className="tag"># Khám phá Việt Nam</span>
        </div>

        <div className="menu-icon">
          <span className="icon-menu">☰</span>
        </div>
      </div>
      <main>
        <div className="main-layout">
          {/* Tin lớn bên trái */}
          <div className="main-news">
            <img src={mainNews.image} alt="main" />
            <h2>{mainNews.title}</h2>
            <p>{mainNews.summary}</p>
            <p className="meta">VietnamNet · 35 phút · 980 liên quan</p>
          </div>

          {/* Tin phụ bên phải */}
          <div className="side-news">
            {sideNews.map((news) => (
              <div key={news.id} className="side-item">
                <img src={news.image} alt={news.title} className="side-img" />
                <div className="side-text">
                  <p className="title">{news.title}</p>
                  <p className="meta">3 phút · 1457 liên quan</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>
      <footer>
        © 2025 Báo Mới Clone | Thiết kế bằng React + CSS thuần
      </footer>
    </div>
  );
}

export default App;
