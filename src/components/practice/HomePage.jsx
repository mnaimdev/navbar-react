import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const HomePage = () => {

  const [query, setQuery] = useSearchParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


  const handleForm = (e) => {
    e.preventDefault();
    setQuery({name: name, email: email});
  }

  return (
    <>
        This is our homepage

      <form onSubmit={handleForm}>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
        <button>Save</button>
      </form>

      <p>output </p>
      <p>{query.get("name")}</p>
      <p>{query.get("email")}</p>
    </>
  )
}

export default HomePage;