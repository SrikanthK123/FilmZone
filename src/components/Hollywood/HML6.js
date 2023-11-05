import React from 'react'

const HML6 = () => {
    const movies = [
        {
            "Title": "Mission: Impossible - Ghost Protocol",
            "Year": "2011",
            "Rated": "PG-13",
            "Released": "21 Dec 2011",
            "Runtime": "132 min",
            "Genre": "Action, Adventure, Thriller",
            "Director": "Brad Bird",
            "Producer":"Tom Cruise,J. J. Abrams,Bryan Burk",
            "musicDirector" : "Michael Giacchino",
            "Writer": "Bruce Geller, Josh Appelbaum, André Nemec",
            "actors": [
                {
                    name : "Tom Cruise",
                    character: "Ethan Hunt",
                    pic: "https://th.bing.com/th/id/OIP.ZNmOSkgHhF5syQQTDNhh9AAAAA?pid=ImgDet&w=300&h=300&rs=1"
                },
                {
                    name : "Jeremy Renner",
                    character: "William Brandt",
                    pic: "https://s-media-cache-ak0.pinimg.com/736x/5a/a8/38/5aa8385c08554c93a534b4aa838258e1.jpg"
                },
                {
                    name : "Simon Pegg ",
                    character: "Benji Dunn",
                    pic: "https://th.bing.com/th/id/R.7dffe822154b0d91cd4979d9501ea97b?rik=Lz%2balpg36Qvwmg&riu=http%3a%2f%2fwww.100picsquizanswers.net%2fimages%2fhundred%2f52%2fsimon-pegg.jpg&ehk=44bOnDqos2%2fJcf12rk%2f1C2mo59XMMsop7dErIV5w9s4%3d&risl=&pid=ImgRaw&r=0"
                },
                {
                    name : "Paula Patton ",
                    character: "Jane Carter",
                    pic: "https://media2.s-nbcnews.com/i/streams/2013/July/130731/6C8461467-130731-Paula-Patton-tease-right.jpg"
                },
                {
                    name : "Michael Nyqvist",
                    character: "Kurt Hendricks",
                    pic: "https://img.zergnet.com/1829857_300.jpg"
                },
                {
                    name : "Vladimir Mashkov",
                    character: "Anatoly Sidorov",
                    pic: "https://th.bing.com/th/id/R.8abb08ce4df15f17338b3754ed01ed1c?rik=ex0fkDJ%2fXRBbDw&riu=http%3a%2f%2ftheplace2.ru%2farchive%2fvladimir_mashkov%2fimg%2f0_470c1_8288b1c5_XL%2b.jpg&ehk=%2bRtQE7h1EW%2fXBP84xGpJlz8DBtDSEo7bET4BCLiyX9Y%3d&risl=&pid=ImgRaw&r=0"
                },
              ],
            "Plot": "The IMF is shut down when it's implicated in the bombing of the Kremlin, causing Ethan Hunt and his new team to go rogue to clear their organization's name.",
            "Language": "English, Russian, French, Arabic, Swedish",
            "Country": "United States",
            "Awards": "5 wins & 30 nominations",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTY4MTUxMjQ5OV5BMl5BanBnXkFtZTcwNTUyMzg5Ng@@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "7.4/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "93%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "73/100"
                }
            ],
            "Metascore": "73",
            "imdbRating": "7.4",
            "imdbVotes": "517,786",
            "imdbID": "tt1229238",
            "Type": "movie",
            "DVD": "31 Dec 2013",
            "BoxOffice": "$209.39 million",
            "Gross" : "$694.7 million",
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
                src="https://www.youtube-nocookie.com/embed/EDGYVFZxsXQ?autoplay=1&mute=1"
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
                          src="https://th.bing.com/th/id/OIP.F3iVNPb5fu5Qz29HejShMAHaE5?pid=ImgDet&rs=1"
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
                          src="https://image.syracuse.com/home/syr-media/width620/img/entertainment_impact/photo/15268811-standard.jpg"
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
                          src="https://th.bing.com/th/id/OIP.v7AXqvs-SWEETnOxkCJ3UAHaEK?pid=ImgDet&rs=1"
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
    <div className="col-lg-4 " key={actorIndex} data-aos="fade-up"  >
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

export default HML6
