import React from 'react'

const TML6 = () => {
    const movies = [
        {
            "movieTitle": "Adipurush",
            "releaseYear": 2023,
            "directors": ["Om Raut"],
            "producers": ["Bhushan Kumar", "Krishan Kumar", "Om Raut", "Prasad Sutar", "Rajesh Nair", "Vamsi Pramod"],
            "musicDirector" : "Ankit Balhara · Sanchit Balhara",
            "actors": [
              {
                "name": "Prabhas",
                "character": "Lord Rama",
                "pic" : "https://i.pinimg.com/originals/06/a1/7c/06a17c016e2072d0351d6c35addf8236.jpg"
              },
              {
                "name": "Kriti Sanon",
                "character": "Sita",
                "pic":"https://1.bp.blogspot.com/-EtUtKVCe8Aw/XSgbZ-isloI/AAAAAAAAZB0/bF9oOI-o-JgSxF-l1KmOdUxoYbcaVErGQCLcBGAs/s1600/1%2B%252832%2529.jpg"
              },
              {
                "name": "Saif Ali Khan",
                "character": "Ravana",
                "pic" : "https://st1.bollywoodlife.com/wp-content/uploads/2019/05/Saif-Ali-Khan-1.jpg"
              },
              {
                "name": "Sunny Singh",
                "character": "Shesh",
                "pic" : "https://cdn.123telugu.com/content/wp-content/uploads/2020/11/Sunny-Singh-300x300.jpg"
              },
              {
                "name": "Devdatta Nage",
                "character": "Bajrang",
                "pic" : "https://th.bing.com/th/id/OIP.LlXEqhM_2EkMQP8_Bdfe5wHaH5?pid=ImgDet&rs=1"
              },
              {
                "name": "Sonal Chauhan",
                "character": "Mandodari",
                "pic" : "https://th.bing.com/th/id/R.ddf09ced7a44b85a02059865f3b8710a?rik=Nd5XjkQECQYLHw&riu=http%3a%2f%2fstarsunfolded.com%2fwp-content%2fuploads%2f2016%2f05%2fSonal-Chauhan.jpg&ehk=MhSyMAViNH8DtDTV6y7UtgtDj3%2fNcoh6dW%2blDH3rjow%3d&risl=&pid=ImgRaw&r=0"
              }
            ],
            "genre": ["Action", "Drama", "Fantasy"],
            "plot": "A retelling of the Hindu epic Ramayana, Adipurush tells the story of Lord Rama, who battles the demon king Ravana to rescue his wife, Sita.",
            "posterUrl": "https://th.bing.com/th/id/OIP.A8oN-BwlQTEQzSk_clWELQHaJQ?pid=ImgDet&rs=1",
            "trailerUrl": "https://example.com/adipurush-trailer.mp4",
            "runtimeMinutes": 160,
            "ratings": {
              "IMDb": 7.5,
              "RottenTomatoes": 80,
              "Metacritic": 70
            },
            "boxOffice": {
              "budget": "$400 million",
              "gross": "$600 million"
            },
            "languages": ["Telugu", "Hindi"],
            "country": "India",
            "awards": ["Filmfare Award for Best Film – Telugu", "Nandi Award for Best Feature Film – Telugu"]
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
    src="https://www.youtube-nocookie.com/embed/e3ew7YUeeQc?autoplay=1&mute=1"
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
                            src="https://www.telugu360.com/wp-content/uploads/2022/10/Om-Raut.jpg"
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
                            src="https://th.bing.com/th/id/R.1b4b19f4fc7522545b98f19c28578210?rik=B40JDIST1Hv2gw&riu=http%3a%2f%2fphotogallery.indiatimes.com%2fphoto%2f61128490.cms&ehk=N4MZziQB2eH5QbqSOyeOaM7B8LbFUpXs8MyRl44scOE%3d&risl=&pid=ImgRaw&r=0"
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
                            src="https://res.cloudinary.com/jerrick/image/upload/c_scale,f_jpg,q_auto/dmwrl3avab26py8gcnoz.jpg"
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

export default TML6
