import React from 'react'

const HML11 = () => {
    const movies = [
        {
            "Title": "Dune (2021)",
            "Year": "2021",
            "Rated": "PG-13",
            "Released": "22 Oct 2021",
            "Runtime": "155 min",
            "Genre": "Action, Adventure, Drama",
            "Director": "Denis Villeneuve",
            "Producer" : "Mary Parent,Denis Villeneuve,Cale Boyter,Joe Caracciolo Jr",
            "musicDirector" : "	Hans Zimmer",
            "Writer": "Jon Spaihts, Denis Villeneuve, Eric Roth",
            "actors": [
                {
                    name : "Timothée Chalamet",
                    character: "Paul Atreides",
                    pic: "https://media1.popsugar-assets.com/files/thumbor/-aRAnqRtAWXuuxH03CsMsqSv-O0/0x281:2838x3119/fit-in/550x550/filters:format_auto-!!-:strip_icc-!!-/2020/01/06/133/n/1922283/545a8eae5e13e8ffa61708.60484745_/i/timothee-chalamet-bob-dylan-movie.jpg"
                },
                {
                    name : "Rebecca Ferguson",
                    character: "Lady Jessica",
                    pic: "https://i.pinimg.com/originals/6c/7f/e3/6c7fe360e6ef850e66a8e6e4e75d71f5.jpg"
                },
                {
                    name : "Oscar Isaac",
                    character: "Duke Leto Atreides",
                    pic: "https://www.famousbirthdays.com/faces/isaac-oscar-image.jpg"
                },
                {
                    name : "Josh Brolin",
                    character: "Gurney Halleck",
                    pic: "https://www.famousbirthdays.com/headshots/josh-brolin-6.jpg"
                },
                {
                    name : "Stellan Skarsgård",
                    character: "Baron Vladimir Harkonnen",
                    pic: "https://th.bing.com/th/id/R.60a4ac01d9c950712fd66a92d9c251f1?rik=2vCwM%2fBwCOz12g&riu=http%3a%2f%2fstatic.tvtropes.org%2fpmwiki%2fpub%2fimages%2fstellan_skarsgrd_3102.jpg&ehk=nJBLQpbcFRLCv%2bL4%2b0WD4khTiFYcoO%2fOK6vbsQXaiMo%3d&risl=&pid=ImgRaw&r=0"
                },
                {
                    name : "Dave Bautista",
                    character: "Glossu Rabban",
                    pic: "https://yt3.ggpht.com/TflUSIg_NbZGo5htla8oeFP-LEA41HroZpGoHi8Bg41_5Pibmrx2etXqltg-rvt9_8RVE4UJPh_1IpTmLg=s900-mo-c-c0xffffffff-rj-k-no"
                },
              ],
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
            "Type": "movie",
            "DVD": "22 Oct 2021",
            "BoxOffice": "$108,327,830",
            "Gross": 	"$402 million",
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
                src="https://www.youtube-nocookie.com/embed/n9xhJrPXop4?autoplay=1&mute=1"
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
                          src="https://variety.com/wp-content/uploads/2020/12/Denis-Villeneuve-Fights-Back-HBO-Max-Dune.jpg"
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
                          src="https://editorial01.shutterstock.com/preview-440/12858547ao/eea66941/Shutterstock_12858547ao.jpg"
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
                          src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/03/12/16/hans-zimmer.jpg"
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

export default HML11
