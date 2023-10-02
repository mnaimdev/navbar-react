import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import Contact from './components/Contact';
import Error from './components/Error';
import Home from './components/Home';
import Navbar from './components/Navbar';
import User from './components/User';

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar />
        <Routes>
            <Route path="/" element={<Home />}>
            </Route>

            <Route path="/blog" element={<Blog />}>
            </Route>

            <Route path="/blog/:title" element={<BlogDetail />}>
            </Route>

            <Route path="/contact" element={<Contact />}>
            </Route>

            <Route path="/user" element={<User />}>
            </Route>

            <Route path="*" element={<Error />}>
            </Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App;
