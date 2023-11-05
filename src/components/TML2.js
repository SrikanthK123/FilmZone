import React from 'react'

const TML2 = () => {
    const movies = [
        {
            "movieTitle": "Love Story",
            "releaseYear": 2022,
            "directors": ["Sekhar Kammula"],
            "producers": ["Narayandas Narang", "P. Ram Mohan Rao"],
            "musicDirector" : "Pawan Ch",
            "actors": [
              {
                "name": "Naga Chaitanya",
                "character": "Revant",
                "pic":"https://i0.wp.com/www.mrdustbin.com/wp-content/uploads/2020/04/%E0%A4%A8%E0%A4%BE%E0%A4%97%E0%A4%BE-%E0%A4%9A%E0%A5%88%E0%A4%A4%E0%A4%A8%E0%A5%8D%E0%A4%AF-Naga-Chaitanya-Akkineni.jpg"
              },
              {
                "name": "Sai Pallavi",
                "character": "Mounica",
                "pic" : "https://yt3.ggpht.com/wTUmYnlu1Aiim75PydgQ9qix7hATO_Vjr62pNVkTSQROsKlK4OQIn_gMHiZaZfVRZoNpNIqWUw=s900-c-k-c0x00ffffff-no-rj"
              }
              ,
              {
                "name": "Rajeev Kanakala",
                "character": "Narasimham",
                "pic" : "https://i.pinimg.com/736x/f4/8e/e2/f48ee21c9b79d12f36b17b99fda89ced.jpg"
              }
              ,
              {
                "name": "Devayani",
                "character": "Mounika's mother",
                "pic" : "https://static.toiimg.com/photo/22486670.cms?imgsize=44760"
              }
              ,
              {
                "name": "Easwari Rao  ",
                "character": "Manamma",
                "pic" : "https://1.bp.blogspot.com/-9xsIfma1F54/XnyTvQRgCfI/AAAAAAAATKY/DtSn2AB4vmIzs3C6kYx5km6OlqssIXY7ACLcBGAsYHQ/s1600/856e2fe1-31d8-43e3-9427-38524cd38f87.jpg"
              },
              {
                "name": "Uttej  ",
                "character": "Sub-Inspector Immanna",
                "pic" : "https://wikimylinks.com/wp-content/uploads/2020/09/Uttej-Images-2-657x600.jpg"
              }
            ],
            "genre": ["Romance", "Drama"],
            "plot": "Love Story is a heartwarming tale of two individuals from contrasting backgrounds who meet and fall in love while pursuing their dreams in the city of Hyderabad.",
            "posterUrl": "https://cdn.gulte.com/wp-content/uploads/2021/07/Love-Story3.jpg",
            "trailerUrl": "https://youtu.be/1yH_eOxpkwo?si=ME1qRud1fvAIajk3",
            "runtimeMinutes": 135,
            "ratings": {
              "IMDb": 7.9,
              "RottenTomatoes": 88,
              "Metacritic": 80
            },
            "boxOffice": {
              "budget": "$8 million",
              "gross": "$35 million"
            },
            "languages": ["Telugu"],
            "country": "India",
            "awards": ["Best Romantic Film Award"]
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
    src="https://www.youtube-nocookie.com/embed/1yH_eOxpkwo?autoplay=1&mute=1"
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
                    <p  style={{ color: "white",textAlign:'justify' }}>{movie.plot}</p>
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
                            src="https://assets.thehansindia.com/h-upload/2020/10/08/1004339-sekhar-kammula.jpg"
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
                            src="https://th.bing.com/th/id/OIP.N38Kzc5qsHh-XBUvDokNawAAAA?pid=ImgDet&rs=1"
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
                            src="https://th.bing.com/th/id/OIP.AsjfDMl6RyUuEI1YGi3s4wAAAA?pid=ImgDet&rs=1"
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

export default TML2
