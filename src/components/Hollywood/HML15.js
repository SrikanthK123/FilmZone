import React from 'react'

const HML15 = () => {
    const movies = [
        {
            "Title": "Terminator: Dark Fate",
            "Year": "2019",
            "Rated": "R",
            "Released": "01 Nov 2019",
            "Runtime": "128 min",
            "Genre": "Action, Adventure, Sci-Fi",
            "Director": "Tim Miller",
            "Producer" : "James Cameron",
            "musicDirector" : "Tom Holkenborg",
            "Writer": "David S. Goyer, Justin Rhodes, Billy Ray",
            "actors": [
                {
                    name : "Linda Hamilton",
                    character: "Sarah Connor",
                    pic: "https://www.famousbirthdays.com/headshots/linda-hamilton-7.jpg"
                },
                {
                    name : "Arnold Schwarzenegger",
                    character: "the T-800 (Carl)",
                    pic: "https://th.bing.com/th/id/OIP.m2Vs0HAyz2wdmh9iGRdSlAHaHp?pid=ImgDet&rs=1"
                },
                {
                    name : "Mackenzie Davis",
                    character: "Grace",
                    pic: "https://www.famousbirthdays.com/headshots/mackenzie-davis-8.jpg"
                },
                {
                    name : "Natalia Reyes",
                    character: " Dani Ramos",
                    pic: "https://celebmafia.com/wp-content/uploads/2019/04/natalia-reyes-2019-cinemacon-big-screen-achievement-awards-in-las-vegas-4.jpg"
                },
                {
                    name : "Gabriel Luna ",
                    character: "Gabriel (Rev-9)",
                    pic: "https://th.bing.com/th/id/OIP.Kkc2PX1GPIUg_sE0Pbzw9QAAAA?pid=ImgDet&w=400&h=400&rs=1"
                },
                {
                    name : "Diego Boneta",
                    character: "Diego Ramos ( Dani's brother)",
                    pic: "https://th.bing.com/th/id/OIP.nAkDQD5BIFTmMEcZMO1jtQHaIK?pid=ImgDet&w=600&h=662&rs=1"
                },
              ],
            "Plot": "An augmented human and Sarah Connor must stop an advanced liquid Terminator from hunting down a young girl, whose fate is critical to the human race.",
            "Language": "English, Spanish",
            "Country": "United States, Spain, Hungary",
            "Awards": "1 win & 12 nominations",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNzhlYjE5MjMtZDJmYy00MGZmLTgwN2MtZGM0NTk2ZTczNmU5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "6.2/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "70%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "54/100"
                }
            ],
            "Metascore": "54",
            "imdbRating": "6.2",
            "imdbVotes": "188,206",
            "imdbID": "tt6450804",
            "Type": "movie",
            "DVD": "01 Nov 2019",
            "BoxOffice": "$62,253,077",
            "Gross" : "	$261.1 million",
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
                src="https://www.youtube-nocookie.com/embed/oxy8udgWRmo?autoplay=1&mute=1"
                title="YouTube video"
                allowFullScreen
                style={{ borderRadius: "10px" }}
                allow= "autoplay"
                
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
                          src="https://www.theglobeandmail.com/resizer/rAlD_L1_uU8mlGqcacxaT57yd6U=/1200x0/filters:quality(80)/arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/HW57GE4EM5CCPOTPM26CH57GP4.jpg"
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
                          src="https://th.bing.com/th/id/OIP.j6zFaofT3XKLNFX2VfhqlgHaE8?pid=ImgDet&rs=1"
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
                          src="https://th.bing.com/th/id/OIP.6oqruvbbnRBlR1wkn557cAHaEK?pid=ImgDet&rs=1"
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
              Voice cast
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

export default HML15
