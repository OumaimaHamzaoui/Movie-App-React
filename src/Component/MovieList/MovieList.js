import React from "react";
import Movie from "./Movie/Movie";
import "../MovieList/MovieList.css";
import WithLoading from "../../HOC/WithLoading";

function MovieList({ movieList, searchTerm, ratingvalue }) {
  let holder;

  ratingvalue > 1
    ? (holder = movieList.filter(el => el.rating == ratingvalue))
    : (holder = movieList);
  return (
    <div className="MovieList">
      {holder
        .filter(el => el.MovieName.toLowerCase().includes(searchTerm))
        .map((el, i) => (
          <Movie
            MovieImg={el.MovieImg}
            MovieName={el.MovieName}
            rating={el.rating}
            key={i}
          />
        ))}
    </div>
  );
}

export default WithLoading(MovieList);
