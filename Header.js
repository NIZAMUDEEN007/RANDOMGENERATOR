import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import quotesData from './quotes.json';
import jokesData from './jokes.json';
import MenuIcon from '@mui/icons-material/Menu';
import Footer from './Footer';

const Header = ({ onCategoryChange }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [fontFamily, setFontFamily] = useState('');
  const [color, setColor] = useState('');

  const categories = [
    { name: 'Quotes', value: 'quotes', endpoint: quotesData, fontFamily: "'Courgette', cursive", color: '  #1D2228' },
    { name: 'Facts', value: 'facts', endpoint: 'https://api.api-ninjas.com/v1/facts?limit=1', fontFamily: "'Saira', sans-serif", color: '#607D8B' },
    { name: 'Jokes', value: 'jokes', endpoint: jokesData, fontFamily: " 'DynaPuff', cursive", color: '#FFA726' },
  ];

  const handleCategoryClick = (category) => {
    setShowDropdown(false);
    setSelectedCategory(category);
    setFontFamily(category.fontFamily);
    setColor(category.color);
    onCategoryChange({ ...category, color: category.color });
  };

  const renderCategories = () => {
    return categories.map((category, index) => {
      return (
        <div
          key={index}
          className="category-item"
          onClick={() => handleCategoryClick(category)}
        >
          {category.name}
        </div>
      );
    });
  };

  return (
    <div>
      <div className="header" style={{ backgroundColor: color }}>
        <div className="header-title" style={{ fontFamily: fontFamily }}>RAND RATOR</div>
        <div className="header-dropdown">
          <div className="category">
            <div className="category-selected" onClick={() => setShowDropdown(!showDropdown)}>
              <MenuIcon/>
            </div>
            {showDropdown && (
              <div className="category-list">{renderCategories()}</div>
            )}
          </div>
        </div>
      </div>
      <Footer color={color} />
    </div>
  );
};

Header.propTypes = {
  onCategoryChange: PropTypes.func.isRequired,
};

export default Header;
