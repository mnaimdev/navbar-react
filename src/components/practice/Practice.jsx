import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Account from './Account';
import Chat from './Chat';
import Details from './Details';
import ErrorText from './ErrorText';
import HomePage from './HomePage';
import MyNav from './MyNav';

const Practice = () => {
  return (
    <>
        <BrowserRouter>
        <MyNav />
            <Routes>
                <Route path='/chat' element={<Chat />}></Route>
                <Route path='/' element={<HomePage />}></Route>
            
                <Route path='/account' element={<Account />}></Route>
                <Route path='/number/:number' element={<Account />}></Route>
            
                <Route path='*' element={<ErrorText />}></Route>
                <Route path='chat/:title' element={<Details />}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Practice;