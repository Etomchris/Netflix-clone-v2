import React, { useEffect, useState } from 'react'
import './Player.css'
import back_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const navigate = useNavigate();
  const { id } = useParams();
  const [apiData, setApiData] = useState({
    key: '',
    name: '',
    typeof: '',
    published_at: ''
  });
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjRkZWNlMTNlZjZiMjNkZWE2NmZiMTRjZDI1NjQwYSIsIm5iZiI6MTcyMjcxNjc1Ny43MjgzOTcsInN1YiI6IjY2YWU5MGVjMzY1MDc3OGJhZDQwZjAzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m086t2gxkdPPMdDVbpp402aIAnDUHX8wyu_i3JB9JT4'
    }
  };
  
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));

  }, []);  
  return (
    <div className='player'>
      <img src={back_icon} alt="" onClick={() => {navigate('/')}}/>
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='Trailer' frameBorder='0'
      allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
        
      </div>
    </div>
  )
}

export default Player
