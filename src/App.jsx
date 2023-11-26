import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import Contact from './components/Contact';
import User from './components/User';
import Error from './components/Error';

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar />
        <Routes>
            

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

      {/* <Practice /> */}
      
    </>
  )
}

export default App;
