import React from 'react';
import { Link } from 'react-router-dom';
import data from '../../data';

const Chat = () => {
  console.log(data);
  return (
    <>
      <p>This is chat application site.</p>
      {
        data.map((item) => {
          const {id, title, text} = item;
          return <>
           <p key={id}>{title}</p>
          <Link to={title} state={{id, title, text}}>Details</Link>

          </>
        })
      }
    </>
  )
}

export default Chat;