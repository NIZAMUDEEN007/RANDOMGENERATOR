import React, { useState, useEffect, useRef } from "react";
import "./Card.css";
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ShareIcon from '@material-ui/icons/Share';

const Card = ({ category }) => {
  const [text, setText] = useState("");
  const textRef = useRef(null);

  useEffect(() => {
    if (category.value === "quotes" && category.endpoint.quotes) {
      // Get a random quote from the quotesData array
      const randomIndex = Math.floor(Math.random() * category.endpoint.quotes.length);
      const { quote, author } = category.endpoint.quotes[randomIndex];
      setText(`${quote} - ${author}`);
    } else if (category.value === "jokes") {
      // Get a random joke from the joke API
      fetch('https://sv443.net/jokeapi/v2/joke/Dark?type=single')
        .then(response => response.json())
        .then(data => setText(data.joke));
    } else if (category.value === "facts") {
      // Get a random fact from the numbers API
      fetch('http://numbersapi.com/random')
        .then(response => response.text())
        .then(data => setText(data));
    }
  }, [category]);

  const handleRefreshClick = () => {
    // Refresh the content when the user clicks the refresh button
    setText("");
    setTimeout(() => {
      if (category.value === "quotes" && category.endpoint.quotes) {
        // Get a random quote from the quotesData array
        const randomIndex = Math.floor(Math.random() * category.endpoint.quotes.length);
        const { quote, author } = category.endpoint.quotes[randomIndex];
        setText(`${quote} - ${author}`);
      } else if (category.value === "jokes") {
        // Get a random joke from the joke API
        fetch('https://sv443.net/jokeapi/v2/joke/Dark?type=single')
          .then(response => response.json())
          .then(data => setText(data.joke));
      } else if (category.value === "facts") {
        // Get a random fact from the numbers API
        fetch('http://numbersapi.com/random')
          .then(response => response.text())
          .then(data => setText(data));
      }
    });
  };

  const handleCopyClick = () => {
    // Copy the text to the clipboard when the user clicks the copy button
    navigator.clipboard.writeText(text);
  };

  const handleShareClick = () => {
    // Share the text with friends when the user clicks the share button
    const shareUrl = `https://example.com/share?text=${text}`;
    navigator.share({
      url: shareUrl
    });
  };

  let buttonText;
  if (category.value === "quotes") {
    buttonText = "Get Random Quote";
  } else if (category.value === "jokes") {
    buttonText = "Get Random Joke";
  } else if (category.value === "facts") {
    buttonText = "Get Random Fact";
  }

  return (
    <div className="whole" style={{ fontFamily: category.fontFamily ,color:category.color}}> 
      <div className="card-actions" style={{ fontFamily: category.fontFamily ,color:category.color}}>
        <button className="button-name" onClick={handleRefreshClick} style={{ fontFamily: category.fontFamily,color:category.color }}>
          {buttonText}
        </button>
      </div>
      <div className="card" >
        <div className="card-content" ref={textRef}>{text}</div>
      </div>

      <div className="icon-buttons">
        <FileCopyIcon className="copy-icon" onClick={handleCopyClick} />
        <ShareIcon className="share-icon" onClick={handleShareClick} />
      </div>
    </div>
 
  );
};
export default Card;