import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const apiKey = process.env.REACT_APP_API_KEY;

const StyledMovie = styled.div`
  width: 100%;
  height: 100%;

  .movie__backdrop {
    width: 100%;
    height: 250px;
    overflow: hidden;

    img {
      width: 100%;
      object-fit: cover;
    }

    &--gradient {
      width: 100%;
      height: inherit;
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 18%,
        rgba(0, 0, 0, 0.396796218487395) 43%,
        rgba(255, 255, 255, 0) 53%,
        rgba(255, 255, 255, 0) 57%,
        rgba(0, 0, 0, 0.41360294117647056) 78%,
        rgba(0, 0, 0, 0.8253676470588236) 97%
      );
      background-blend-mode: darken;
      position: absolute;
      z-index: 10;
      top: 0;
    }
  }

  .movie__info {
    display: flex;
    padding: 0 5%;

    img {
      width: 100px;
      height: 100%;
      border-radius: 10px;
    }

    .movie__details {
      padding-left: 5%;

      h1 {
        font-size: 25px;
        line-height: 23px;
        margin: 0;

        span {
          font-size: 18px;
          font-weight: normal;
        }
      }

      p {
        font-size: 14px;
        margin: 3% 0;

        span {
          font-weight: bold;
        }
      }
    }
  }

  .movie__description {
    padding: 5%;

    p {
      margin: 0;
    }
  }

  .genre {
    display: flex;
    flex-flow: row wrap;
    padding: 5%;
    margin-bottom: 95px;

    p {
      display: inline-block;
      margin: 5px 5px 5px 0;
      width: max-content;
      padding: 2% 4%;
      text-align: center;
      background-color: white;
      color: black;
      border-radius: 10px;
      font-size: 10px;
    }
  }

  @media (min-width: 600px) {
    .movie__backdrop {
      height: 680px;

      img {
        height: 100%;
        object-position: 40%;
      }
    }

    .movie__info {
      img {
        width: 350px;
      }

      .movie__details {
        width: max-content;

        h1 {
          font-size: 40px;
          line-height: 40px;
        }

        p {
          font-size: 20px;
        }
      }
    }

    .movie__description {
      padding-left: 500px;
      margin-top: -450px;
      height: 400px;

      p {
        font-size: 18px;
      }
    }

    .genre {
      p {
        font-size: 14px;
        padding: 1%;
        margin-right: 8px;
      }
    }
  }
`;

const Movie = (props) => {
  const [listGenres, setListGenres] = React.useState([]);

  React.useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
    )
      .then((res) => res.json())
      .then((json) => {
        if (json.genres) {
          setListGenres(json.genres);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <StyledMovie className="movie">
      <div className="movie__backdrop">
        <img src={props.backdrop} alt={props.backdropText} />
        <div className="movie__backdrop--gradient"></div>
      </div>

      <div className="movie__info">
        <img src={props.poster} alt={props.posterText} />

        <div className="movie__details">
          <h1>
            {props.title} <span>({props.year})</span>
          </h1>

          <p>
            <span>Rating: </span>
            {props.rating}
          </p>
        </div>
      </div>

      <div className="movie__description">
        <p>{props.description}</p>
      </div>

      <div className="genre">
        {props.genres.map((genre, key) => {
          listGenres.forEach((item) => {
            if (item.id === genre) {
              genre = item.name;
            }
          });

          return <p key={key}>{genre}</p>;
        })}
      </div>
    </StyledMovie>
  );
};

Movie.propTypes = {
  backdrop: PropTypes.string,
  backdropText: PropTypes.string,
  poster: PropTypes.string,
  posterText: PropTypes.string,
  genres: PropTypes.array,
  rating: PropTypes.number,
};

export default Movie;
