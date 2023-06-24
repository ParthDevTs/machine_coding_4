import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Home } from './pages/home';
import { SinglePost } from './pages/singlePost';

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <nav className="navbar w-full bg-white px-8 py-4 "><p onClick={() => navigate("/")} className='cursor-pointer font-bold text-left'>My<span className="text-blue-700">Forum</span></p></nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/post/:id" element={<SinglePost />}></Route>
      </Routes>
    </div>
  );
}

export default App;
