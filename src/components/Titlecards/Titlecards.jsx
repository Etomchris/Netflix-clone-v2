import React, { useEffect, useState } from 'react'
import './Titlecards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';

const Titlecards = ({title, category}) => {

  const [apiData, setApiData] = useState([]);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjRkZWNlMTNlZjZiMjNkZWE2NmZiMTRjZDI1NjQwYSIsIm5iZiI6MTcyMjcxNjc1Ny43MjgzOTcsInN1YiI6IjY2YWU5MGVjMzY1MDc3OGJhZDQwZjAzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m086t2gxkdPPMdDVbpp402aIAnDUHX8wyu_i3JB9JT4'
    }
  };
  
  

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category ? category: 'now_playing'}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));
  }, []);
  return (
    <div className='title-cards'>
      <h2>{title ? title: "Popular on Netflix"}</h2>
      <div className="card-list">
        {apiData.map((card, index) => (
          <Link to={`/player/${card.id}`} className="card" key = {index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt='' />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Titlecards
