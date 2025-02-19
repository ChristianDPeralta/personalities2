import { useState } from 'react';
import { animeList } from './data.tsx';
import './App.css';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < animeList.length - 1;
  const hasPrev = index > 0;

  function handleNextClick() {
    setIndex(hasNext ? index + 1 : 0);
    setShowMore(false); // Hide details when switching anime
  }

  function handleBackClick() {
    setIndex(hasPrev ? index - 1 : animeList.length - 1);
    setShowMore(false);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let anime = animeList[index];

  return (
    <div className="gallery-container">
      <div className="header">
        <h1>Animes</h1>
        <p>Christian Dean M. Peralta - C-PEITEL3</p>
      </div>
      <div className="controls">
        <button onClick={handleBackClick}>BACK</button>
        <button onClick={handleNextClick}>NEXT</button>
      </div>
      <div className="anime-content">
        <div className="image-wrapper">
          <img src={anime.url} alt={anime.alt} className="fixed-image" />
        </div>
        <h2>{anime.name}</h2>
        <p>{index + 1} of {animeList.length}</p>
        <button className="toggle-button" onClick={handleMoreClick}>
          {showMore ? '▲' : '▼'}
        </button>
        <p className={`description ${showMore ? 'show' : ''}`}>{anime.description}</p>
      </div>
    </div>
  );
}
