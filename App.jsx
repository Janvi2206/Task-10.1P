import React from 'react';
import Header from './Header';
import FeaturedArticles from './FeaturedArticles';
import './App.css';
import FeaturedTutorials from './FeaturedTutorials';
import Footer from './Footer';
import SignUpForm from './SignUpForm';

function App() {
  return (
    <div className="App">
      <Header />
      <FeaturedArticles />
      <FeaturedTutorials />
      <SignUpForm />
      <Footer />
    </div>
  );
}

export default App;
