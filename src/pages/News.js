import React, { useState, useEffect } from "react";
import axios from "axios";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY`
      );
      setNews(res.data.articles);
    };
    fetchNews();
  }, []);

  return (
    <div>
      <h1>Latest News</h1>
      {news.map((article) => (
        <div key={article.url}>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );
};

export default News;
