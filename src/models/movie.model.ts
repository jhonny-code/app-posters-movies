export interface Movie {
    imdbID: string;
    Title: string;
    Year: string;
    Poster: string;
  }
  
  export interface OmdbApiResponse {
    Search: Movie[];
    totalResults: string;
    Response: string;
  }