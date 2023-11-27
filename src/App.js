
import './App.css';
import Home from "./pages/Home";
import '../src/components/Button/Button'
import './components/PostCard/postCard'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Albums from './pages/AlbumsPage';
import AlbumPhotos from './pages/AlbumPhotos';



function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="/AlbumsPage" element={<Albums />} />
        </Route>
        <Route path="/AlbumsPhotos" element={<AlbumPhotos />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
