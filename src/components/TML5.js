import React from 'react'

const TML5 = () => {
    const movies = [
        {
            "movieTitle": "Aranya",
            "releaseYear": 2021,
            "directors": ["Prabhu Solomon"],
            "producers": ["Eros International"],
            "musicDirector" : "Shantanu Moitra",
            "actors": [
              {
                "name": "Rana Daggubati",
                "character": "Aranya",
                "pic" : "https://celebswiki.info/wp-content/uploads/2019/07/1562343920_231_Rana-Daggubati-Contact-Address-Phone-Number-House-Address-Email-Id.jpg"
              },
              {
                "name": "Zoya Hussain",
                "character": "Arvi",
                "pic":"https://internethelpline.in/wp-content/uploads/2022/01/Zoya-Hussain-e1642231733493.jpg"
              },
              {
                "name": "Vishnu Vishal",
                "character": "Singa",
                "pic":"https://th.bing.com/th/id/OIP.k-4g2MJqknz2s1hOvzWHMwHaHR?pid=ImgDet&w=579&h=569&rs=1"
              },
              {
                "name": "Shriya Pilgaonkar",
                "character": "Arundhati",
                "pic":"https://www.india-forums.com/tellybuzz/images/uploads/Shriya_Pilgaonkar_1.jpg"
              },
              {
                "name": "Ravi Kale",
                "character": "Superintendent of Police",
                "pic":"https://starsunfolded.com/wp-content/uploads/2018/06/Ravi-Kale.jpg"
              },
              {
                "name": "Anant Mahadevan",
                "character": "Kanakamedala Raja Gopalam",
                "pic":"https://starsunfolded.com/wp-content/uploads/2017/09/Anant-Mahadevan.jpg"
              }
            ],
            "genre": ["Adventure", "Drama"],
            "plot": "Aranya is a story about a man who forms a deep bond with elephants in the forests of India and becomes their protector. His mission is to save the elephants and their natural habitat from poachers and deforestation.",
            "posterUrl": "https://www.filmiforest.com/img/movies/4/aranya-photo-8.jpg",
            "trailerUrl": "https://example.com/aranya-trailer.mp4",
            "runtimeMinutes": 135,
            "ratings": {
              "IMDb": 7.4,
              "RottenTomatoes": 75,
              "Metacritic": 68
            },
            "boxOffice": {
              "budget": "$15 million",
              "gross": "$25 million"
            },
            "languages": ["Telugu", "Tamil", "Hindi"],
            "country": "India",
            "awards": ["National Film Award for Best Special Effects"]
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
    src="https://www.youtube-nocookie.com/embed/hhVmT1FyIkA?autoplay=1&mute=1"
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
                            src="https://imageory.clapnumber.com/albums/medium/1620914224_PRABHU_Solomon.jpg"
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
                            src="https://th.bing.com/th/id/R.2cfbc038521bc5efe24abecd6ccd1063?rik=vpK6mPNnz0n8cA&riu=http%3a%2f%2fnasheman.in%2fwp-content%2fuploads%2f2016%2f07%2fEros-International.jpg&ehk=jCtukABZgECjIFxWo6akK9nCsOfxe7%2f2YqvPXDBLemI%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
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
                            src="https://www.thehindu.com/entertainment/music/article15427663.ece/ALTERNATES/LANDSCAPE_615/8_BM_SHANTANU"
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

export default TML5
