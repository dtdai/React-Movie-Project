import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Series from "./components/Series";
import Animated from "./components/Animated";
import TvShow from "./components/TvShow";
import Search from "./components/Search";
import MovieInfo from "./components/MovieInfo";
import SignUp from "./components/SignUp";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import PlayVideo from "./components/PlayVideo";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/phim-le" element={<Movies />} />
        <Route path="/phim-bo" element={<Series />} />
        <Route path="/hoat-hinh" element={<Animated />} />
        <Route path="/tv-shows" element={<TvShow />} />
        <Route path="/search" element={<Search />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/movieinfo/:slug" element={<MovieInfo />} />
        <Route path="/movieinfo/:slug/:EpSlug" element={<PlayVideo />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Sidebar />
    </Router>
  );
}

export default App;
