import React from 'react'

const TML10 = () => {
    const movies = [
        {
            "movieTitle": "Pushpa: The Rise - Part 1",
            "releaseYear": 2021,
            "directors": ["Sukumar"],
            "producers": ["Mythri Movie Makers"],
            "musicDirector" : "	Devi Sri Prasad",
            "actors": [
              {
                "name": "Allu Arjun",
                "character": "Pushpa Raj",
                "pic" : "https://wavyhaircut.com/wp-content/uploads/2019/09/allu-arjun-hairstyle-streetbass-in-2019-allu-arjun-with-regard-to-allu-arjun-hair-style-image.jpg"
              },
              {
                "name": "Rashmika Mandanna",
                "character": "Srivalli",
                "pic" : "https://i.pinimg.com/280x280_RS/4d/e4/1b/4de41ba3d92e8b99cf4ab7db01389fca.jpg"
              },
              {
                "name": "Fahadh Faasil",
                "character": "Sri SP Bhanwar Singh Shekawat IPSvalli",
                "pic" : "https://th.bing.com/th/id/R.bceaaabc07d6bb2d6cd7b43182ca69bc?rik=svDjr7kE2b%2bNWA&riu=http%3a%2f%2fwww.behindwoods.com%2ftamil-movies-cinema-news-16%2fimages%2ftrance-malayalam-trailer-fahadh-faasil-nazriya-nazim-gautham-menon-photos-pictures-stills.png&ehk=jpk5lAorqUEpD6XZyVahBBlgsiACaodu3mXcE1PVsVk%3d&risl=&pid=ImgRaw&r=0"
              },
              {
                "name": "Jagadeesh Prathap Bandari",
                "character": "Kesava aka Mondelu",
                "pic" : "https://www.infoknocks.com/wp-content/uploads/2022/01/Jagadeesh-Prathap-Bandari.jpg"
              },
              {
                "name": "Sunil",
                "character": "Mangalam Srinu",
                "pic" : "https://www.telugu360.com/wp-content/uploads/2015/08/Sunil1.jpg"
              },
              {
                "name": "Rao Ramesh",
                "character": "Lawyer Varadarajulu",
                "pic" : "https://th.bing.com/th/id/OIP.zOyl3Mla_vHQxC1R-9IUzwHaHa?pid=ImgDet&w=350&h=350&rs=1"
              }
            ],
            "genre": ["Action", "Thriller"],
            "plot": "Pushpa: The Rise is an action thriller that follows the story of Pushpa Raj, a red sandalwood smuggler, and his life in the forests of Andhra Pradesh.",
            "posterUrl": "https://th.bing.com/th/id/OIP.GWhTg6VoA9v5ZssHwU5EEwAAAA?pid=ImgDet&rs=1",
            "trailerUrl": "https://example.com/pushpa-1-trailer.mp4",
            "runtimeMinutes": 153,
            "languages": ["Telugu"],
            "country": "India",
            "ratings": {
              "IMDb": 8.1,
              "RottenTomatoes": 80,
              "Metacritic": 70
            }, 
            "boxOffice": {
                "budget": "	₹170–250 crore",
                "gross": "₹360–373 crore"
                },
          }
    ]
  return (
    <>
       <div className="shyamMain">
        {movies.map((movie, index) => (
          <div key={index} className="movie-card">
            <div className="container pt-3 " > <h2 class="pb-2 " style={{ color: "white",marginBottom:'50px' }}>
                {movie.movieTitle}</h2></div>
           
            <div className="container">
            <div className="ratio ratio-21x9">
  <iframe
    src="https://www.youtube-nocookie.com/embed/Q1NKMPhP8PY?autoplay=1&mute=1"
    title="YouTube video"
    allowFullScreen
    style={{ borderRadius: "10px" }}
  ></iframe>
</div>


              <div class="container px-4 py-5">
                <h2 class="pb-2 border-bottom" style={{ color: "#53a8b6" }}>
                  About Movie
                </h2>

                <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
                  <div class="col d-flex flex-column align-items-start gap-2">
                    <h2 class="fw-bold " style={{ color: "#f70776" }}>
                      Story
                    </h2>
                    <p style={{ color: "white",textAlign:'justify' }}>{movie.plot}</p>
                    <div class="mb-5">
                       <h4 style={{color:'#f70776'}}>Budget - <span style={{color:'#9896f1'}}>{movie.boxOffice.budget}</span></h4>
                       <h4 style={{color:'#f70776'}}>Gross - <span style={{color:'#9896f1'}}>{movie.boxOffice.gross}</span></h4>
                    
    </div>
                  </div>
                  

                  <div>
                    <ul class="list-unstyled">
                      <li data-aos="zoom-in">
                        <a
                          class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none "
                          href="#"
                        >
                          <img
                            style={{
                              borderRadius: "20px",
                              boxShadow: "0 0 10px #00bbf0",
                            }}
                            src="https://th.bing.com/th/id/OIP.9wPDujhJJM_nSmTpcSWKHwHaFj?pid=ImgDet&w=1200&h=900&rs=1"
                            alt="director"
                            width="160px"
                          />
                          <div class="col-lg-8">
                            <h6 style={{ color: "white" }} class="mb-0">
                              Director
                            </h6>
                            <small style={{ color: "white" }}>
                              {movie.directors}
                            </small>
                          </div>
                        </a>
                      </li>
                      <li data-aos="zoom-in">
                        <a
                          class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none "
                          href="#"
                        >
                          <img
                            style={{
                              borderRadius: "20px",
                              boxShadow: "0 0 10px #00bbf0",
                            }}
                            src="https://cdn.gulte.com/wp-content/uploads/2023/01/mythri-660x330.jpg"
                            alt="Producer"
                            width="160px"
                            height="100px"
                          />
                          <div class="col-lg-8">
                            <h6 style={{ color: "white" }} class="mb-0">
                              Producer
                            </h6>
                            <small style={{ color: "white" }} class="text">
                              {" "}
                              {movie.producers}{" "}
                            </small>
                          </div>
                        </a>
                      </li>
                      <li data-aos="zoom-in">
                        <a
                          class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none "
                          href="#"
                        >
                          <img
                            style={{
                              borderRadius: "20px",
                              boxShadow: "0 0 10px #00bbf0",
                            }}
                            src="https://th.bing.com/th/id/OIP.HSva0PRLH0FJzTm8UoT31gHaFj?pid=ImgDet&rs=1"
                            alt="director"
                            width="160px"
                            height="100px"
                          />
                          <div class="col-lg-8">
                            <h6 style={{ color: "white" }} class="mb-0">
                              Music Director
                            </h6>
                            <small style={{ color: "white" }} class="text">
                              {" "}
                              {movie.musicDirector}{" "}
                            </small>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <h2 class="pb-2 border-bottom" style={{ color: "#53a8b6",marginBottom:'50px' }}>
                  Star Cast
                </h2>
                <div class="container marketing">
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

export default TML10
