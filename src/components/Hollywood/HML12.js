import React from 'react'

const HML12 = () => {
    const movies = [
        {
            "Title": "Oppenheimer",
            "Year": "2023",
            "Rated": "R",
            "Released": "21 Jul 2023",
            "Runtime": "180 min",
            "Genre": "Biography, Drama, History",
            "Director": "Christopher Nolan",
            "Producer" : "Emma Thomas,Charles Roven,Christopher Nolan",
            "musicDirector" : "Ludwig Göransson",
            "Writer": "Christopher Nolan, Kai Bird, Martin Sherwin",
            "actors": [
                {
                    name : "Cillian Murphy",
                    character: "J. Robert Oppenheimer",
                    pic: "https://th.bing.com/th/id/OIP.YLEkvy0fH_3DSxbkHB4UsgAAAA?pid=ImgDet&w=295&h=295&rs=1"
                },
                {
                    name : "Emily Blunt",
                    character: "Katherine 'Kitty' Oppenheimer",
                    pic: "https://th.bing.com/th/id/OIP.beD6v7tpEKueB60v_TgisAHaHO?pid=ImgDet&w=728&h=711&rs=1"
                },
                {
                    name : "Matt Damon",
                    character: "Gen",
                    pic: "https://www.gannett-cdn.com/presto/2019/08/06/USAT/d89f9119-841f-4095-93af-b88fb6daf383-Matt_Damon_2x.jpg?width=631&height=551&fit=crop&format=pjpg&auto=webp"
                },
                {
                    name : "Robert Downey Jr.",
                    character: "Lewis Strauss",
                    pic: "https://i.pinimg.com/originals/5c/3a/d7/5c3ad7cf3ec687434bacf4087309b780.jpg"
                },
                {
                    name : "Florence Pugh",
                    character: "Jean Tatlock",
                    pic: "https://th.bing.com/th/id/OIP.cqs5RWQrCTr9XlvxmX_2uQHaIF?pid=ImgDet&w=700&h=764&rs=1"
                },
                {
                    name : "Josh Hartnett",
                    character: "Ernest Lawrence",
                    pic: "https://th.bing.com/th/id/OIP.aZ_WOSmRc0cn6teRLaSLDAHaHa?pid=ImgDet&rs=1"
                },
              ],
            "Plot": "The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.",
            "Language": "English, German, Italian",
            "Country": "United States, United Kingdom",
            "Awards": "2 wins & 1 nomination",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "8.6/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "93%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "88/100"
                }
            ],
            "Metascore": "88",
            "imdbRating": "8.6",
            "imdbVotes": "450,016",
            "imdbID": "tt15398776",
            "Type": "movie",
            "DVD": "N/A",
            "BoxOffice": "	$100 million",
            "Gross" : "	$946.9 million",
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
                src="https://www.youtube-nocookie.com/embed/uYPbbksJxIg?autoplay=1&mute=1"
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
                          src="https://tiermaker.com/images/templates/nolan-movies-1650456/16504561689921580.webp"
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
                          src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/09/13/10/christophernolanucl.jpg?width=968&auto=webp&quality=75&crop=968:645%2Csmart"
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
                          src="https://media.vanityfair.com/photos/6398cadd3d8dff581e586b0f/master/w_2560%2Cc_limit/1375899523"
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

export default HML12
