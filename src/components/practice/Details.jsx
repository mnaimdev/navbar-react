import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Details = () => {

    const navigate = useNavigate();

    

    const location = useLocation();

  return (
    <div>
        <p>{location.state.title}</p>
        <p>{location.state.text}</p>

        <button onClick={() => navigate('/chat')}>Back Chat</button>
    </div>
  )
}

export default Details;