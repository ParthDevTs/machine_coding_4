import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { SinglePost } from './pages/singlePost';

function App() {
  return (
    <div className="App">
      <nav className="navbar"></nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/post/:id" element={<SinglePost />}></Route>
      </Routes>
    </div>
  );
}

export default App;
