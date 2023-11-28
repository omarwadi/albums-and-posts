
import './App.css';
import Home from "./pages/home-page"
import '../src/components/Button/Button'
import './components/PostCard/postCard'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Albums from './pages/albums-page-page';
import AlbumPhotos from './pages/album-photos-page';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="/AlbumsPage" element={<Albums />} />
        </Route>
        <Route path="/AlbumsPhotos/:id" element={<AlbumPhotos />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
