import React, { useState } from "react";
import "./App.css";
import NewsCard from "./Components/NewsCard";
import { newsList } from "./data/news";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNews = newsList.filter((news) =>
    news.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <header>
        <h1>Báo Mới Clone</h1>
      </header>

      <div className="search-box">
        <input
          type="text"
          placeholder=" Tìm kiếm bài viết..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
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
