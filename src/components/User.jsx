import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const User = () => {
    const [query, setQuery] = useSearchParams();
    const [name, setName] = useState("");
    const [profession, setProfession] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery({name: name, profession: profession});
    }

  return (
    <>
        <h3>User</h3>
        <p>{query.get("name")}</p>
        <p>{query.get("profession")}</p>


        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <input type="text" value={profession} onChange={(e) => setProfession(e.target.value)} placeholder="Profession" />
            <button style={{padding: '5px'}}>Submit</button>
        </form>
    </>
  )
}

export default User;