import React from 'react'

const HML10 = () => {
    const movies = [
        {
            "Title": "Aquaman",
            "Year": "2018",
            "Rated": "PG-13",
            "Released": "21 Dec 2018",
            "Runtime": "143 min",
            "Genre": "Action, Adventure, Fantasy",
            "Director": "James Wan",
            "Producer" : "Peter Safran,Rob Cowan",
            "musicDirector" : "Rupert Gregson-Williams",
            "Writer": "David Leslie Johnson-McGoldrick, Will Beall, Geoff Johns",
            "actors": [
                {
                    name : "Jason Momoa",
                    character: " Arthur Curry (Aquaman)",
                    pic: "https://th.bing.com/th/id/OIP.Ask1kLHy3Hprvk5umqbbIgHaHi?pid=ImgDet&rs=1"
                },
                {
                    name : "Amber Heard",
                    character: "Mera",
                    pic: "https://th.bing.com/th/id/OIP.t56L46q5ZBMiiM27X6F_pAHaHx?pid=ImgDet&w=1980&h=2080&rs=1"
                },
                {
                    name : "Willem Dafoe",
                    character: "Vulko",
                    pic: "https://th.bing.com/th/id/OIP.mSGZbGy2d2BLzFns235nKgHaHa?pid=ImgDet&w=536&h=536&rs=1"
                },
                {
                    name : "Patrick Wilson",
                    character: "King Orm",
                    pic: "https://th.bing.com/th/id/OIP.f2neppbDwU9yYyBVsDWJigHaHv?pid=ImgDet&rs=1"
                },
                {
                    name : "Dolph Lundgren",
                    character: "King Nereus",
                    pic: "https://s-media-cache-ak0.pinimg.com/236x/c9/08/8d/c9088dabd42cb2cfbac01000c805d2c1.jpg"
                },
                {
                    name : "Yahya Abdul-Mateen II",
                    character: "David Kane (Black Manta)",
                    pic: "https://i.pinimg.com/originals/37/64/e7/3764e7a1a3c0d558cba5c1a1a22af3ce.jpg"
                },
              ],
            "Plot": "Arthur Curry, the human-born heir to the underwater kingdom of Atlantis, goes on a quest to prevent a war between the worlds of ocean and land.",
            "Language": "English, Russian, Maori, Italian",
            "Country": "United States, Australia",
            "Awards": "3 wins & 36 nominations",
            "Poster": "https://m.media-amazon.com/images/M/MV5BOTk5ODg0OTU5M15BMl5BanBnXkFtZTgwMDQ3MDY3NjM@._V1_SX300.jpg",
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
            "BoxOffice": "$160–200 million",
            "Gross" : "$1.152 billion",
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
                src="https://www.youtube-nocookie.com/embed/WDkg3h8PCVU?autoplay=1&mute=1"
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
                          src="https://s.yimg.com/uu/api/res/1.2/6wCnKYX2LqsG9dYkVzygQA--~B/aD0xOTY3O3c9MzAwMDtzbT0xO2FwcGlkPXl0YWNoeW9u/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-images/2019-05/b5d836b0-7683-11e9-9ebf-286f5263069d"
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
                          src="https://th.bing.com/th/id/OIP.76U46GFKpo5ASGV5HgXX0AHaF2?pid=ImgDet&rs=1"
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
                          src="https://media.output.com/app/uploads/2017/02/rupert-gregson-williams-artist.jpg"
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

export default HML10
