import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Account = () => {

  const navigate = useNavigate();

  const {id} = useParams();

  return (
    <>
        <p>This is our account page</p>
        <Link to="/number/1234" >Number</Link>
        <button onClick={() => navigate('/')}>Back Home</button>
        <p>Parameter is {id}</p>
    </>
  )
}

export default Account;