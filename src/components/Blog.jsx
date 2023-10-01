import React from 'react';

import { Link, useNavigate } from 'react-router-dom';
import data from '../data';

const Blog = () => {

    const truncateString = (str, num) => {
        if (str.length > num) {
            return str.slice(0, num)+ '...'
        }
    }

    const navigate = useNavigate();

  return (
    <>
        {
            data.map((item) => {
                const {id, title, text} = item;
                return <div key={id} className='blog'>
                    <p>{title}</p>
                    <p>{truncateString(text, 100)}</p>
                    <Link to={title} state={{id, title, text}}>Learn More</Link>
                </div>
            })
        }

        <button onClick={() => navigate("/") }>Go Home</button>
    </>
  )
}

export default Blog;