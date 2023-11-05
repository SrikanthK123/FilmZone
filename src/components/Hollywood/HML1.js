import React from 'react';

const HML1 = () => {
  const movies = [
    {
      "Title": "The Avengers",
      "Year": "2012",
      "Rated": "PG-13",
      "Released": "04 May 2012",
      "Runtime": "143 min",
      "Genre": "Action, Sci-Fi",
      "Director": "Joss Whedon",
      "Producer":"Kevin Feige",
      "Writer": "Joss Whedon, Zak Penn",
      "musicDirector":"	Alan Silvestri",
      "actors": [
        {
            name : "Robert Downey Jr",
            character: "Iron Man",
            pic: "https://i.pinimg.com/originals/5c/3a/d7/5c3ad7cf3ec687434bacf4087309b780.jpg"
        },
        {
            name : " Chris Evans",
            character: " Captain America",
            pic: "https://s-media-cache-ak0.pinimg.com/originals/d0/53/86/d0538610cdad9e667de67dc3d351890c.jpg"
        },
        {
            name : "  Scarlett Johansson",
            character: "Natasha Romanoff(Black Widow)",
            pic: "https://www.beautycrew.com.au/media/34845/scarlett-johansson-short-hair-89th-annual-academy-awards.jpg?width=675"
        },
        {
            name : "Mark Ruffalo",
            character: "Bruce Banner(Hulk)",
            pic: "https://th.bing.com/th/id/OIP.xhE5sAGerjsh7WhgTODJzgHaJQ?pid=ImgDet&w=2398&h=3000&rs=1"
        },
        {
            name : "Chris Hemsworth",
            character: "Thor",
            pic: "https://bookitnow.pk/uploads/88e91e98aff00205d4fb3777448dceac.jpg"
        },
        {
            name : " Jeremy Renner",
            character: "Clint Barton (Hawkeye)",
            pic: "https://s-media-cache-ak0.pinimg.com/736x/5a/a8/38/5aa8385c08554c93a534b4aa838258e1.jpg"
        },
      ],
      "Plot": "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      "Language": "English, Russian",
      "Country": "United States",
      "Awards": "Nominated for 1 Oscar. 38 wins & 80 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "8.0/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "91%"
        },
        {
          "Source": "Metacritic",
          "Value": "69/100"
        }
      ],
      "Metascore": "69",
      "imdbRating": "8.0",
      "imdbVotes": "1,434,660",
      "imdbID": "tt0848228",
      "Type": "movie",
      "DVD": "22 Jun 2014",
      "BoxOffice": "$623,357,910",
      "Gross" : "$1.52 billion",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
    }
  ];

  return (
    <div className="shyamMain">
      {movies.map((movie, index) => (
        <div key={index} className="movie-card">
          <div className="container pt-3">
            <h2 className="pb-2" style={{ color: "white", marginBottom: '50px' }}>
              {movie.Title}
            </h2>
          </div>

          <div className="container">
            <div className="ratio ratio-21x9">
              <iframe
                src="https://www.youtube-nocookie.com/embed/eOrNdBpGMv8?autoplay=1&mute=1"
                title="YouTube video"
                allowFullScreen
                style={{ borderRadius: "10px" }}
              ></iframe>
            </div>

            <div className="container px-4 py-5">
              <h2 className="pb-2 border-bottom" style={{ color: "#53a8b6" }}>
                About Movie
              </h2>

              <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
                <div className="col d-flex flex-column align-items-start gap-2">
                  <h2 className="fw-bold" style={{ color: "#f70776" }}>
                    Story
                  </h2>
                  <p style={{ color: "white", textAlign: 'justify' }}>{movie.Plot}</p>
                  <div className="mb-5">
                    <h4 style={{ color: '#f70776' }}>Budget - <span style={{ color: '#9896f1' }}>{movie.BoxOffice}</span></h4>
                    <h4 style={{ color: '#f70776' }}>BoxOffice - <span style={{ color: '#9896f1' }}>{movie.Gross}</span></h4>
                  </div>
                </div>

                <div>
                  <ul className="list-unstyled">
                    <li data-aos="zoom-in">
                      <a
                        className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none"
                        href="#"
                      >
                        <img
                          style={{
                            borderRadius: "20px",
                            boxShadow: "0 0 10px #00bbf0",
                          }}
                          src="https://th.bing.com/th/id/OIP.nOOOzUoDt6jG_FZap1wrtwHaE8?pid=ImgDet&rs=1"
                          alt="director"
                          width="160px"
                        />
                        <div className="col-lg-8">
                          <h6 style={{ color: "white" }} className="mb-0">
                            Director
                          </h6>
                          <small style={{ color: "white" }}>
                            {movie.Director}
                          </small>
                        </div>
                      </a>
                    </li>
                    <li data-aos="zoom-in">
                      <a
                        className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none"
                        href="#"
                      >
                        <img
                          style={{
                            borderRadius: "20px",
                            boxShadow: "0 0 10px #00bbf0",
                          }}
                          src="https://th.bing.com/th/id/OIP.6uDQBdlzgB8Xyx_8TFcmiwHaFO?pid=ImgDet&rs=1"
                          alt="Producer"
                          width="160px"
                          height="100px"
                        />
                        <div className="col-lg-8">
                          <h6 style={{ color: "white" }} className="mb-0">
                            Producer
                          </h6>
                          <small style={{ color: "white" }}>
                            {movie.Producer} {/* Replace with the actual producer's name */}
                          </small>
                        </div>
                      </a>
                    </li>
                    <li data-aos="zoom-in">
                      <a
                        className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none"
                        href="#"
                      >
                        <img
                          style={{
                            borderRadius: "20px",
                            boxShadow: "0 0 10px #00bbf0",
                          }}
                          src="https://th.bing.com/th/id/OIP.0ggQKT40v_eeI8DE4ZAEnQHaE5?pid=ImgDet&rs=1"
                          alt="music director"
                          width="160px"
                          height="100px"
                        />
                        <div className="col-lg-8">
                          <h6 style={{ color: "white" }} className="mb-0">
                            Music Director
                          </h6>
                          <small style={{ color: "white" }}>
                            {movie.Writer} {/* Replace with the actual music director */}
                          </small>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <h2 className="pb-2 border-bottom" style={{ color: "#53a8b6", marginBottom: '50px' }}>
                Star Cast
              </h2>
              <div className="container marketing">
              <div className="row">
  {movie.actors.map((actor, actorIndex) => (
    <div className="col-lg-4 " key={actorIndex} data-aos="fade-up" >
      <div className="actor-card" style={{ textAlign: 'center',marginTop:'10px' }}>
        <img
          src={actor.pic} // Use actor's pic here
          alt={actor.name}
          className="img-fluid rounded-circle"
          width="100"
          height="100"
          id='circle'
        />
        <h2 style={{ color: 'white',margin:'10px'}} className="fw-normal" data-aos="zoom-in">
          {actor.name}
        </h2>
        <p style={{ color: 'white' }} data-aos="zoom-in">{actor.character}</p>
      </div>
    </div>
  ))}
</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HML1;
