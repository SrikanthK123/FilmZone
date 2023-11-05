import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const HollywoodMovie = () => {
  const Search = [
    {
      Title: "The Avengers",
      Year: "2012",
      imdbID: "tt0848228",
      imdb: "8.0",
      Type: "movie",
      Poster: "https://cdn.wallpapersafari.com/36/94/SK2sZv.jpg",
    },

    {
      Title: "Avengers: Infinity War",
      Year: "2018",
      imdbID: "tt4154756",
      imdb: "8.4",
      Type: "movie",
      Poster:
        "https://images.hdqwalls.com/wallpapers/avengers-infinity-war-2018-poster-4k-rq.jpg",
    },
    {
      Title: "Avengers: Age of Ultron",
      Year: "2015",
      imdbID: "tt2395427",
      imdb: "7.4",
      Type: "movie",
      Poster:
        "https://th.bing.com/th/id/R.51e0036077aa8429c6bb3826c1a509ff?rik=B39UTlTvuEggVQ&riu=http%3a%2f%2fhdqwalls.com%2fwallpapers%2favengers-age-of-ultron-3.jpg&ehk=Tk3DeXhfRpkNrf5LuSbOEOey9z3ObHUbm1%2fBHFLe7O0%3d&risl=&pid=ImgRaw&r=0",
    },

    {
      Title: "Avatar",
      Year: "2009",
      imdbID: "tt0499549",
      imdb: "7.9",
      Type: "movie",
      Poster:
        "https://i.pinimg.com/736x/46/74/f6/4674f6db90b640adf55c098b65117efa.jpg",
    },
    {
      Title: "Avatar: The Way of Water",
      Year: "2022",
      imdbID: "tt1630029",
      imdb: "7.6",
      Type: "movie",
      Poster:
        "https://th.bing.com/th/id/OIP.g-KMnyUsJdxik-v3RWhsmwAAAA?pid=ImgDet&rs=1",
    },
    {
      Title: "Mission: Impossible - Ghost Protocol",
      Year: "2011",
      imdbID: "tt1229238",
      imdb: "7.4",
      Type: "movie",
      Poster:
        "https://th.bing.com/th/id/OIP.tT7oNyB8TE4u30hslrKYcwAAAA?pid=ImgDet&rs=1",
    },
   

    {
      Title: "John Wick: Chapter 4",
      Year: "2023",
      imdbID: "tt10366206",
      imdb: "7.8",
      Type: "movie",
      Poster:
        "https://th.bing.com/th/id/OIP.NJ3lCKKOhdskJS9EOGZDbwHaKI?pid=ImgDet&rs=1",
    },
    {
      Title: "The Super Mario Bros. Movie",
      Year: "2023",
      imdbID: "tt6718170",
      imdb: "7.1",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTJhNzlmNzctNTU5Yy00N2YwLThhMjQtZDM0YjEzN2Y0ZjNhXkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_SX300.jpg",
    },
    {
      Title: "The Nun 2",
      Year: "2019",
      imdbID: "tt9916720",
      imdb: "4.9",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNjZlOGVhZDctODU2Yi00NzcyLWFlNmItZGQ2ZDc2NTIwNGMyXkEyXkFqcGdeQXVyNzkwMTYyMTI@._V1_SX300.jpg",
    },
    {
      "Title": "Aquaman",
      "Year": "2018",
      "Rated": "PG-13",
      "Released": "21 Dec 2018",
      "Runtime": "143 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Wan",
      "Writer": "David Leslie Johnson-McGoldrick, Will Beall, Geoff Johns",
      "Actors": "Jason Momoa, Amber Heard, Willem Dafoe",
      "Plot": "Arthur Curry, the human-born heir to the underwater kingdom of Atlantis, goes on a quest to prevent a war between the worlds of ocean and land.",
      "Language": "English, Russian, Maori, Italian",
      "Country": "United States, Australia",
      "Awards": "3 wins & 36 nominations",
      "Poster": " https://i.pinimg.com/736x/b9/02/59/b90259b5450d0b19ea757180af635707.jpg",
      "Ratings": [
          {
              "Source": "Internet Movie Database",
              "Value": "6.8/10"
          },
          {
              "Source": "Rotten Tomatoes",
              "Value": "66%"
          },
          {
              "Source": "Metacritic",
              "Value": "55/100"
          }
      ],
      "Metascore": "55",
      "imdbRating": "6.8",
      "imdbVotes": "502,712",
      "imdbID": "tt1477834",
      "Type": "movie",
      "DVD": "05 Mar 2019",
      imdb: "6.8",
      "BoxOffice": "$335,104,314",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
  },
   
  {
    "Title": "Dune",
    "Year": "2021",
    "Rated": "PG-13",
    "Released": "22 Oct 2021",
    "Runtime": "155 min",
    "Genre": "Action, Adventure, Drama",
    "Director": "Denis Villeneuve",
    "Writer": "Jon Spaihts, Denis Villeneuve, Eric Roth",
    "Actors": "Timothée Chalamet, Rebecca Ferguson, Zendaya",
    "Plot": "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
    "Language": "English, Mandarin",
    "Country": "United States, Canada",
    "Awards": "Won 6 Oscars. 172 wins & 283 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "8.0/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "83%"
        },
        {
            "Source": "Metacritic",
            "Value": "74/100"
        }
    ],
    "Metascore": "74",
    "imdbRating": "8.0",
    "imdbVotes": "722,599",
    "imdbID": "tt1160419",
    imdb: "8.3",
    "Type": "movie",
    "DVD": "22 Oct 2021",
    "BoxOffice": "$108,327,830",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},
    {
      Title: "Oppenheimer",
      Year: "2023",
      imdbID: "tt15398776",
      imdb: "8.5",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg",
    },
    {
      Title: "Killers of the Flower Moon",
      Year: "2023",
      imdbID: "tt5537002",
      imdb: "8.1",
      Type: "movie",
      Poster:
        "https://th.bing.com/th/id/OIP.ELkdRW2baEIoruINB_vvywAAAA?pid=ImgDet&rs=1",
    },
    {
      Title: "Spider-Man: Across the Spider-Verse",
      Year: "2023",
      imdbID: "tt9362722",
      imdb: "8.7",
      Type: "movie",
      Poster:
        "https://th.bing.com/th/id/R.32c6b5219aed558d5fc100f26d2736ec?rik=sR%2bQyzCZ7aT1CQ&riu=http%3a%2f%2fhdqwalls.com%2fdownload%2fspiderman-into-the-spider-verse-new-artwork-wy-3840x2160.jpg&ehk=bzkp8dwyiugldbGbKklRfwt7Qz9rOiXxBSgEB7Xv1f8%3d&risl=1&pid=ImgRaw&r=0",
    },
    {
      Title: "Terminator: Dark Fate",
      Year: "2019",
      imdbID: "tt6450804",
      imdb: "6.2",
      Type: "movie",
      Poster:
        "https://www.hdwallpapers.in/download/terminator_dark_fate_2019_4k-3840x2160.jpg",
    },
  ];
  return (
    <div className="HollywoodPage">
      <div class="container py-4">
        <div class="p-5 mb-4 bg-light rounded-3" id="avengers">
          <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold" style={{ color: "white" }}></h1>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "baseline",
              }}
            >
              <img
                id="endgame"
                style={{ width: "35vw", height: "35vh", margin: "auto" }}  data-aos="silde-up"
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/846a9086-8a40-43e0-aa10-2fc7d6d73730/dctx3rp-7c2620f9-f626-46b5-8fc3-c803acd4396a.png/v1/fill/w_900,h_379,strp/avengers__endgame__2019__logo_png__1_by_mintmovi3_dctx3rp-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Mzc5IiwicGF0aCI6IlwvZlwvODQ2YTkwODYtOGE0MC00M2UwLWFhMTAtMmZjN2Q2ZDczNzMwXC9kY3R4M3JwLTdjMjYyMGY5LWY2MjYtNDZiNS04ZmMzLWM4MDNhY2Q0Mzk2YS5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.1thG9Li-p5OwclQJmXUtjNGAhdsQ2TAY3Sx-CzBgoIs"
              />
            </div>
            <a href="/hollywood"><button class="avenger-hover bn21">Play</button></a>
          </div>{" "}
        </div>
      </div>
      <div className="container px-4 py-5" id="custom-cards">
        <h2 className="pb-2 border-bottom" style={{ color: "white" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            class="bi bi-film"
            viewBox="0 0 16 16"
          >
            <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />
          </svg>{" "}
          <span style={{ color: "#49beb7" }}>HollyWood Show</span>
        </h2>
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          {Search.map((movie, index) => (
            <div id='hollywoodCard'  className="col" key={index} data-aos="fade-up" >
              <Link style={{ textDecoration: "none" }} to={movie.Title}>
                <div
                  id={`tmovie${index}`}
                  className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                  style={{ backgroundImage: `url(${movie.Poster})` }} // Use 'Poster' from the JSON data
                >
                  <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <h3
                      id="movieTitle"
                      className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold"
                      style={{ width: "fit-content" }}
                      data-aos="fade-up"
                    >
                      {movie.Title} {/* Use 'Title' from the JSON data */}
                    </h3>
                    <ul
                      id="Rating"
                      style={{
                        color: "#facf5a",
                        fontWeight: "bold",
                        backgroundColor: "black",
                        width: "fit-content",
                        padding: "5px",
                        borderRadius: "8px",
                        
                      }}
                      className="d-flex list-unstyled mt-auto" data-aos="zoom-in"
                    >
                      {movie && movie.imdb && (
                        <li className="me-auto">
                          IMDb Rating:{" "}
                          <span style={{ color: "#ff0000" }}>{movie.imdb}</span>
                        </li>
                      )}
                      {/* Add the rest of your movie information here */}
                    </ul>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HollywoodMovie;
