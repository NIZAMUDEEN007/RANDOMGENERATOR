import React, { useState } from 'react';
import Header from './components/Header';
import HeaderDown from './components/HeaderDown';
import Card from './components/Card';
import './App.css';
import Footer from './components/Footer';

const App = () => {
  const [category, setCategory] = useState({ name: 'Select a Category', value: '' });

  const handleCategoryChange = (category) => {
    setCategory(category);
  };

  return (
    <div className="app">
      <Header onCategoryChange={handleCategoryChange} />
      <HeaderDown category={category} />
      <Card category={category} />
      <Footer/>
    </div>
  );
};

export default App;
