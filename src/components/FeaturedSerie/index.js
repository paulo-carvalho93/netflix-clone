import React from 'react';

import './featuredserie.css';

export default function FeaturedSerie({ item }) {
  let BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/original';

  let firstDate = new Date(item.first_air_date);
  
  // Getting genres
  let genres = [];
  for(let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  let description = item.overview;
  if (description.length > 200) {
    description = description.substring(0, 200)+'...';
  }  

  return (
    <section 
      className="featured" 
      style={{
          backgroundImage: `url(${BASE_IMAGE_URL}${item.backdrop_path})`
      }}
    >
      <div className="featured-vertical">
        <div className="featured-horizontal">
          <div className="featured-name">
            {item.original_name}
          </div>
          <div className="featured-info">
            <div className="featured-vote_average">
              {item.vote_average} points
            </div>
            <div className="featured-year">
              {firstDate.getFullYear()}
            </div>
            <div className="featured-seasons">
              {item.number_of_seasons} {item.number_of_seasons !== 1 ? 'seasons' : 'season'}
            </div>
            <div className="featured-description">
              {description}
            </div>
            <div className="featured-buttons">
              <a href={`${item.homepage}`} className="featured-watch-button">► Watch</a>
            </div>
            <div className="featured-genres">
              <strong>Genres:</strong> {genres.join(', ')}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

