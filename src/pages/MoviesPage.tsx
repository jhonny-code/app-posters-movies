import React, { useEffect, useState } from "react";
import { fetchMovies } from "../services/omdb";
import { Movie } from "../models/movie.model";
import NormalPagination from "../components/NormalPagination";
import './MoviesPage.css';  

function MoviesPage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [search, setSearch] = useState<string>("Batman");
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(10);

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchMovies(search, page);
      setMovies(data.movies);
      setTotalPages(data.totalPages);
    };
    loadMovies();
  }, [search, page]);

  return (
    <div className="app-container">
      <h1 className="app-title">Normal Pagination</h1>
      <div className="search-container">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a movie..."
          className="search-input"
        />
      </div>
      <div className="movies-grid">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="movie-item">
            <img src={movie.Poster} alt={movie.Title} width="150" />
            <p>{movie.Title} ({movie.Year})</p>
          </div>
        ))}
      </div>
      <div className="pagination-container">
        <NormalPagination
          page={page}
          totalPages={totalPages}
          onChange={(_, value) => setPage(value)}
        />
      </div>
    </div>
  );
}

export default MoviesPage;
