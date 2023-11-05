import React from 'react'

const HML8 = () => {
    
    const movies = [
        {
            "Title": "The Super Mario Bros. Movie",
            "Year": "2023",
            "Rated": "PG",
            "Released": "05 Apr 2023",
            "Runtime": "92 min",
            "Genre": "Animation, Adventure, Comedy",
            "Director": "Aaron Horvath, Michael Jelenic, Pierre Leduc",
            "Producer" : "Chris Meledandri,Shigeru Miyamoto",
            "musicDirector": "Brian Tyler",
            "Writer": "Matthew Fogel",
            "actors": [
                {
                    name : "Chris Pratt",
                    character: "Mario",
                    pic: "https://pyxis.nymag.com/v1/imgs/feb/7fe/152bf64c31a93a9b4ac2552d62dfd0ceac-14-chris-pratt.rsquare.w700.jpg"
                },
                {
                    name : "Anya Taylor-Joy",
                    character: "Princess Peach",
                    pic: "https://i.pinimg.com/736x/4d/7f/48/4d7f48fb1f88e9d15db01672d6a43c37.jpg"
                },
                {
                    name : "Charlie Day",
                    character: "Luigi",
                    pic: "https://th.bing.com/th/id/OIP.MpLFm0kinhQTuP0z9e5UwAAAAA?pid=ImgDet&w=300&h=300&rs=1"
                },
                {
                    name : "Jack Black",
                    character: "Bowser",
                    pic: "https://th.bing.com/th/id/OIP.DymHgkDOLcvwaYqEqaRZXgHaHa?pid=ImgDet&w=720&h=720&rs=1"
                },
                {
                    name : "Keegan-Michael Key",
                    character: "Toad",
                    pic: "https://th.bing.com/th/id/OIP.ff64Soq5gzekYp8PqE5FXwAAAA?pid=ImgDet&rs=1"
                },
                {
                    name : "eth Rogen",
                    character: "Donkey Kong",
                    pic: "https://th.bing.com/th/id/R.9a265cbfab3b7f5295cad3d05dc466ac?rik=mQ9qtmLp4ZUT0w&riu=http%3a%2f%2fpixel.nymag.com%2fimgs%2fdaily%2fvulture%2f2016%2f07%2f08%2f8-Seth-Rogen.w529.h529.jpg&ehk=NDxfmoBd0%2bKUI%2fA3ZC0UqXwLtFShZo9A%2fsMqMErL4kM%3d&risl=&pid=ImgRaw&r=0"
                },
              ],
            "Plot": "A plumber named Mario travels through an underground labyrinth with his brother, Luigi, trying to save a captured princess.",
            "Language": "English",
            "Country": "United States, Japan",
            "Awards": "N/A",
            "Poster": "https://m.media-amazon.com/images/M/MV5BOTJhNzlmNzctNTU5Yy00N2YwLThhMjQtZDM0YjEzN2Y0ZjNhXkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "7.1/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "59%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "46/100"
                }
            ],
            "Metascore": "46",
            "imdbRating": "7.1",
            "imdbVotes": "197,202",
            "imdbID": "tt6718170",
            "Type": "movie",
            "DVD": "16 May 2023",
            "BoxOffice": "$574,934,330",
            "Gross" : "	$1.362 billion",
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
                src="https://www.youtube-nocookie.com/embed/TnGl01FkMMo?autoplay=1&mute=1"
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
                          src="https://media.gettyimages.com/photos/producers-aaron-horvath-and-michael-jelenic-attend-cartoon-networks-picture-id452820532?s=612x612"
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
                          src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/04/chris-meladandri-shigeru-miyamoto-at-super-mario-bros-premiere-alex-j-berliner.jpg"
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
                          src="https://th.bing.com/th/id/OIP.9N7KqnbWCXCS_oDO43WNTQHaF7?pid=ImgDet&rs=1"
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

export default HML8
