import React, { useState } from "react";
import "./App.css";
import NewsCard from "./UI/NewsCard";
import { newsList } from "./data/news";

function App() {
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


      <main className="news-container">
        {filteredNews.length > 0 ? (
          filteredNews.map((news) => (
            <NewsCard
              key={news.id}
              title={news.title}
              image={news.image}
              summary={news.summary}
            />
          ))
        ) : (
          <p style={{ gridColumn: "1 / -1", textAlign: "center", color: "#888" }}>
            Không tìm thấy kết quả nào.
          </p>
        )}
      </main>

      <footer>
        © 2025 Báo Mới Clone | Thiết kế bằng React + CSS thuần
      </footer>
    </div>
  );
}

export default App;
