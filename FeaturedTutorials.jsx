import React, { useState } from 'react';
import './FeaturedTutorials.css';

const FeaturedTutorials = () => {
  const [showAllTutorials, setShowAllTutorials] = useState(false);

  const tutorials = [
    { title: "Tutorial 1", description: "Description for Tutorial 1", author: "Alice Lee", image: "https://i.pinimg.com/originals/a1/56/ab/a156ab3553cf8b162a0f3393a4c26632.jpg" },
    { title: "Tutorial 2", description: "Description for Tutorial 2", author: "Bob Johnson", image: "https://i.pinimg.com/originals/a1/56/ab/a156ab3553cf8b162a0f3393a4c26632.jpg" },
    { title: "Tutorial 3", description: "Description for Tutorial 3", author: "Eve Smith", image: "https://i.pinimg.com/originals/a1/56/ab/a156ab3553cf8b162a0f3393a4c26632.jpg" },
    { title: "Tutorial 4", description: "Description for Tutorial 4", author: "David Williams", image: "https://i.pinimg.com/originals/a1/56/ab/a156ab3553cf8b162a0f3393a4c26632.jpg" },
    { title: "Tutorial 5", description: "Description for Tutorial 5", author: "Grace Miller", image: "https://i.pinimg.com/originals/a1/56/ab/a156ab3553cf8b162a0f3393a4c26632.jpg" },
    // Add more tutorials here
  ];

  return (
    <section className="featured-tutorials">
      <h2 className="section-title">Featured Tutorials</h2>
      <div className="tutorials-grid">
        {showAllTutorials
          ? tutorials.map((tutorial, index) => (
              <div key={index} className="tutorial">
                <img className="tutorial-image" src={tutorial.image} alt={`Tutorial ${index + 1}`} />
                <h3 className="tutorial-title">{tutorial.title}</h3>
                <p className="tutorial-description">{tutorial.description}</p>
                <p className="tutorial-author">By {tutorial.author}</p>
              </div>
            ))
          : tutorials.slice(0, 3).map((tutorial, index) => (
              <div key={index} className="tutorial">
                <img className="tutorial-image" src={tutorial.image} alt={`Tutorial ${index + 1}`} />
                <h3 className="tutorial-title">{tutorial.title}</h3>
                <p className="tutorial-description">{tutorial.description}</p>
                <p className="tutorial-author">By {tutorial.author}</p>
              </div>
            ))}
      </div>
      {!showAllTutorials && (
        <button className="see-all-button" onClick={() => setShowAllTutorials(true)}>
          See All Tutorials
        </button>
      )}
    </section>
  );
}

export default FeaturedTutorials;
