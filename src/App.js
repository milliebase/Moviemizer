import React from 'react';
import './App.css';

import Nav from './components/Nav';
import Settings from './components/Settings';
import MovieText from './components/MovieText';
import Movie from './components/Movie';

import icon from './assets/images/moviemizer_icon.png';

const apiKey = process.env.REACT_APP_API_KEY;

function App() {
  const [totalPages, setTotalPages] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [movie, setMovie] = React.useState([]);
  const [config, setConfig] = React.useState('');
  const [showResult, setShowResult] = React.useState(false);

  React.useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.asc&include_adult=false&page=1&vote_count.gte=800`)
    .then((res) => res.json())
    .then((json) => {
      setTotalPages(json.total_pages)
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  React.useEffect(() => {
    let randomPageId = Math.floor((Math.random() * totalPages) + 1);

    if (totalPages !== 0) {
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.asc&include_adult=false&page=${randomPageId}&vote_count.gte=800`)
      .then((res) => res.json())
      .then((json) => {
        let result = json.results
        let randomMovieId = Math.floor((Math.random() * result.length-1) + 1);
        setMovie(result[randomMovieId]);
        setShowResult(true);
      })
      .catch(err => {
        console.log(err);
      })
    }

  }, [count])

  React.useEffect(() => {
      fetch(`https://api.themoviedb.org/3/configuration?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((json) => {
        let configObj = json.images.base_url + json.images.backdrop_sizes[3];
        setConfig(configObj);
      })
  }, [])

  return (
    <div className="App">
      <Nav />

      <section className="movie__holder">
        <MovieText showResult={showResult} />

        {/* {console.log(movie)} */}

        {movie.id && (
          <Movie
            backdrop = {(movie.backdrop_path) ? config + movie.backdrop_path : icon}
            title = {movie.title}
            year = {movie.release_date.substr(0, movie.release_date.indexOf('-'))}
            rating = {movie.vote_average}
            genres = {movie.genre_ids}
            poster = {config + movie.poster_path}
            description = {movie.overview}
          />
        )}
      </section>

      <Settings
        handleSubmit={
          (e) => {
            e.preventDefault();
            setCount(count+1);

            // const data = new FormData(e.target)

            // for (let pair of data.entries()) {
            //   setGenre(pair[1]);
            // }
          }
      } />
    </div>
  );
}

export default App;
