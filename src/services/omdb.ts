import axios from "axios";
import { Movie, OmdbApiResponse } from "../models/movie.model";

const API_KEY = process.env.REACT_APP_OMDB_API_KEY as string;
const BASE_URL = "https://www.omdbapi.com/";

export const fetchMovies = async (searchTerm: string, page: number): Promise<{ movies: Movie[]; totalPages: number }> => {
  try {
    const response = await axios.get<OmdbApiResponse>(`${BASE_URL}?s=${searchTerm}&page=${page}&apikey=${API_KEY}`);
    
    if (response.data.Response === "True") {
      const totalResults = parseInt(response.data.totalResults, 10);
      const totalPages = Math.ceil(totalResults / 10); // OMDB devuelve 10 resultados por página
      return { movies: response.data.Search, totalPages };
    }

    return { movies: [], totalPages: 1 };
  } catch (error) {
    console.error("Error fetching movies:", error);
    return { movies: [], totalPages: 1 };
  }
};
