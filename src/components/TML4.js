import React from 'react'

const TML4 = () => {
    const movies = [
        {
            "movieTitle": "Vakeel Saab",
            "releaseYear": 2021,
            "directors": ["Venu Sriram"],
            "producers": ["Dil Raju"],
            "musicDirector" : "S. Thaman",
            "actors": [
              {
                "name": "Pawan Kalyan",
                "character": "Advocate Satyadev",
                "pic" : "https://wallpapercave.com/wp/wp3995806.jpg"
              },
              {
                "name": "Nivetha Thomas",
                "character": "Vemula Palak",
                "pic" : "https://th.bing.com/th/id/OIP.03agx6nurTH72LPBBf39VAHaHb?pid=ImgDet&w=510&h=512&rs=1"
              },
              {
                "name": "Shruti Haasan",
                "character": "Amritha Konidela",
                "pic" : "https://wallpapercave.com/wp/wp7094593.jpg"
              }
              ,
              {
                "name": "Anjali",
                "character": "Zareena Begum",
                "pic" : "https://1.bp.blogspot.com/-jzeoPLlBLx4/U13XCcG4-SI/AAAAAAAAFIM/xcUWSynXYa0/s1600/anjali-latest-saree-photos.jpg"
              },
              {
                "name": "Prakash Raj",
                "character": "Advocate Nandagopal",
                "pic" : "https://th.bing.com/th/id/OIP.q9yni35pb0LX_RK3Tq6QJwHaGp?pid=ImgDet&rs=1"
              },
              {
                "name": "Mukesh Rishi",
                "character": "MP Korentla Rajender",
                "pic" : "https://th.bing.com/th/id/OIP.a8TaSpkUk35hAw8qRWVTAAAAAA?pid=ImgDet&rs=1"
              }

            ],
            "genre": ["Drama", "Thriller"],
            "plot": "Vakeel Saab is a movie about three girls who are accused of attempt to murder after escaping molestation12. The girls are perceived as loose women with no morals by the society2. Their only hope is an alcoholic lawyer who agrees to take up the case1. The movie revolves around the criminal lawyer who helps the young women to fight the molestation case against a rich brat3.",
            "posterUrl": "https://content.tupaki.com/twdata/2021/0421/reviews/Vakeel-Saab-1617955510-1374.jpg",
            "trailerUrl": "https://example.com/vakeel-saab-trailer.mp4",
            "runtimeMinutes": 154,
            "ratings": {
              "IMDb": 8.0,
              "RottenTomatoes": 87,
              "Metacritic": 73
            },
            "boxOffice": {
              "budget": "$12 million",
              "gross": "$40 million"
            },
            "languages": ["Telugu"],
            "country": "India",
            "awards": ["Nandi Award for Best Actor - Pawan Kalyan"]
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
    src="https://www.youtube-nocookie.com/embed/P1xKV0Dmetg?autoplay=1&mute=1"
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
                            src="https://th.bing.com/th/id/OIP.8iE9Wpv556FIh9igK12eFwHaEK?pid=ImgDet&rs=1"
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
                            src="https://www.tollywood.net/wp-content/uploads/2019/05/Dil-Raju-1-768x512.jpg"
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
                            src="https://th.bing.com/th/id/OIP.gcyUQw2ejPmcFjCe9VwsZQHaHS?pid=ImgDet&w=640&h=630&rs=1"
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

export default TML4
