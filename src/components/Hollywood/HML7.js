import React from 'react'

const HML7 = () => {
    const movies = [
        {
            "Title": "John Wick: Chapter 4",
            "Year": "2023",
            "Rated": "R",
            "Released": "24 Mar 2023",
            "Runtime": "169 min",
            "Genre": "Action, Crime, Thriller",
            "Director": "Chad Stahelski",
            "Producer" : "Basil Iwanyk",
            "musicDirector" : "Tyler Bates",
            "Writer": "Shay Hatten, Michael Finch, Derek Kolstad",
            "actors": [
                {
                    name : "Keanu Reeves",
                    character: "John Wick",
                    pic: "https://th.bing.com/th/id/OIP.XLIVW6UV_Qm7BMXDcD_i1QHaHe?pid=ImgDet&w=591&h=597&rs=1"
                },
                {
                    name : "Donnie Yen",
                    character: "Caine",
                    pic: "https://popularbio.com/wp-content/uploads/2023/08/Donnie-Yen-1.jpg"
                },
                {
                    name : "Laurence Fishburne",
                    character: "the Bowery King",
                    pic: "https://i0.wp.com/short-biography.com/wp-content/uploads/laurence-fishburne/Laurence-Fishburne.jpg?fit=2169%2C2169&ssl=1"
                },
                {
                    name : "Hiroyuki Sanada",
                    character: "Shimazu Koji",
                    pic: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE2MzY0NTM1Ml5BMl5BanBnXkFtZTcwNzQzNzMyMw@@._V1_.jpg"
                },
                {
                    name : "Shamier Anderson",
                    character: "Mr. Nobody(The Tracker)",
                    pic: "https://th.bing.com/th/id/OIP.ff64Soq5gzekYp8PqE5FXwAAAA?pid=ImgDet&rs=1"
                },
                {
                    name : "Lance Reddick",
                    character: "Charon",
                    pic: "https://th.bing.com/th/id/OIP.mDiX6hAOGWC6LBw90sizQgD6D5?pid=ImgDet&w=2000&h=1988&rs=1"
                },
              ],
            "Plot": "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
            "Language": "English, French, Japanese, Russian, Spanish, Cantonese, German, Latin",
            "Country": "Germany, United States",
            "Awards": "2 wins & 3 nominations",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMDExZGMyOTMtMDgyYi00NGIwLWJhMTEtOTdkZGFjNmZiMTEwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "7.8/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "94%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "78/100"
                }
            ],
            "Metascore": "78",
            "imdbRating": "7.8",
            "imdbVotes": "287,165",
            "imdbID": "tt10366206",
            "Type": "movie",
            "DVD": "23 May 2023",
            "BoxOffice": "$187,131,806",
            "Gross" : "$440 million",
            "Production": "N/A",
            "Website": "N/A",
            "Response": "True"
        }
    ]
  return (
    <>
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
                src="https://www.youtube-nocookie.com/embed/qEVUtrk8_B4?autoplay=1&mute=1"
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
                    <h4 style={{ color: '#f70776' }}>Gross - <span style={{ color: '#9896f1' }}>{movie.Gross}</span></h4>
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
                          src="https://th.bing.com/th/id/OIP.gnYg0DIUuxAMCWt9scndLwAAAA?pid=ImgDet&w=474&h=266&rs=1"
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
                          src="https://i.ytimg.com/vi/UJQi0m1YNB8/maxresdefault.jpg"
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
                          src="https://th.bing.com/th/id/OIP.Ck2DhTshUNVRTLZ-5BhbWgHaEK?pid=ImgDet&rs=1"
                          alt="music director"
                          width="160px"
                          height="100px"
                        />
                        <div className="col-lg-8">
                          <h6 style={{ color: "white" }} className="mb-0">
                            Music Director
                          </h6>
                          <small style={{ color: "white" }}>
                            {movie.musicDirector} {/* Replace with the actual music director */}
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
    </>
  )
}

export default HML7
