import React from 'react'

const HML9 = () => {
    const movies = [
        {
            "Title": "The Nun 2",
            "Year": "2019",
            "Rated": "R",
            "Released": "24 May 2019",
            "Runtime": "10 min",
            "Genre": "Short, Comedy, Horror",
            "Director": "Michael Chaves",
            "Producer" : "Peter Safran,James Wan",
            "musicDirector" : "	Marco Beltrami",
            "Writer": "N/A",
            "actors": [
                {
                    name : "Taissa Farmiga",
                    character: "Sister Irene Palmer",
                    pic: "https://short-biography.com/wp-content/uploads/taissa-farmiga/Taissa-Farmiga.jpg"
                },
                {
                    name : "Jonas Bloquet",
                    character: "Maurice",
                    pic: "https://images.networthlist.org/images/23/jonas-bloquet.jpg"
                },
                {
                    name : "Storm Reid ",
                    character: "Sister Debra",
                    pic: "https://th.bing.com/th/id/OIP.8AxE01xdVWbl7tV72TwEsQHaHa?pid=ImgDet&w=733&h=733&rs=1"
                },
                {
                    name : "Anna Popplewell",
                    character: "Kate",
                    pic: "https://th.bing.com/th/id/OIP.ugm_v2zxJSYnnyzcyQ9uCgHaHS?pid=ImgDet&rs=1"
                },
                {
                    name : "Bonnie Aarons",
                    character: "The Demon Nun",
                    pic: "https://i.pinimg.com/originals/0a/85/a3/0a85a38ea34447e37ecb5a6938e91c1b.png"
                },
                {
                    name : "Suzanne Bertish",
                    character: "Madame Laurent",
                    pic: "https://th.bing.com/th/id/OIP.veoD0q8IGeyVEblwDwuUTwHaHa?pid=ImgDet&rs=1"
                },
              ],
            "Plot": "In a small town in 1954 in Romania, a young dog is hunted by a demonic nun.",
            "Language": "German",
            "Country": "Germany",
            "Awards": "N/A",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNjZlOGVhZDctODU2Yi00NzcyLWFlNmItZGQ2ZDc2NTIwNGMyXkEyXkFqcGdeQXVyNzkwMTYyMTI@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "5.2/10"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "5.2",
            "imdbVotes": "239",
            "imdbID": "tt9916720",
            "Type": "movie",
            "DVD": "N/A",
            "BoxOffice":"$38 million",
            "Gross":"$265.7 million",
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
                src="https://www.youtube-nocookie.com/embed/QF-oyCwaArU?autoplay=1&mute=1"
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
                          src="https://th.bing.com/th/id/OIP.39ShnMDUEFpwnzWAy6cNegHaE8?pid=ImgDet&rs=1"
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
                          src="https://th.bing.com/th/id/R.4d436490b291b9a7086f91e7fe53e119?rik=blCRGGlDBXU0bg&riu=http%3a%2f%2ffilmmusicreporter.com%2fwp-content%2fuploads%2f2014%2f07%2f001-col-web-Marco-Beltrami-WWZ-Apr2013.jpg&ehk=pL%2bxNgDCeG9Srla79bXr1OIujVLjXcV5ad4y8oHBEOA%3d&risl=&pid=ImgRaw&r=0"
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

export default HML9
