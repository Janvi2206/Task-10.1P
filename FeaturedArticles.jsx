import React, { useState } from 'react';
import './FeaturedArticles.css';

const FeaturedArticles = () => {
  const [showAllArticles, setShowAllArticles] = useState(false);

  const articles = [
    { title: "Article 1", description: "Description for Article 1", author: "John Doe", image: "https://th.bing.com/th/id/OIP.TGoeVGF0KxG5AtivvYzYRAHaDt?pid=ImgDet&rs=1" },
    { title: "Article 2", description: "Description for Article 2", author: "Jane Smith", image: "https://th.bing.com/th/id/OIP.TGoeVGF0KxG5AtivvYzYRAHaDt?pid=ImgDet&rs=1" },
    { title: "Article 3", description: "Description for Article 3", author: "Alex Johnson", image: "https://th.bing.com/th/id/OIP.TGoeVGF0KxG5AtivvYzYRAHaDt?pid=ImgDet&rs=1" },
    { title: "Article 4", description: "Description for Article 4", author: "Emily Brown", image: "https://th.bing.com/th/id/OIP.TGoeVGF0KxG5AtivvYzYRAHaDt?pid=ImgDet&rs=1" },
    { title: "Article 5", description: "Description for Article 5", author: "Michael Wilson", image: "https://th.bing.com/th/id/OIP.TGoeVGF0KxG5AtivvYzYRAHaDt?pid=ImgDet&rs=1" },
    // Add more articles here
  ];

  return (
    <section className="featured-articles">
      <h2 className="section-title">Featured Articles</h2>
      <div className="articles-grid">
        {showAllArticles
          ? articles.map((article, index) => (
              <div key={index} className="article">
                <img className="article-image" src={article.image} alt={`Article ${index + 1}`} />
                <h3 className="article-title">{article.title}</h3>
                <p className="article-description">{article.description}</p>
                <p className="article-author">By {article.author}</p>
              </div>
            ))
          : articles.slice(0, 3).map((article, index) => (
              <div key={index} className="article">
                <img className="article-image" src={article.image} alt={`Article ${index + 1}`} />
                <h3 className="article-title">{article.title}</h3>
                <p className="article-description">{article.description}</p>
                <p className="article-author">By {article.author}</p>
              </div>
            ))}
      </div>
      {!showAllArticles && (
        <button className="see-all-button" onClick={() => setShowAllArticles(true)}>
          See All Articles
        </button>
      )}
    </section>
  );
}

export default FeaturedArticles;
