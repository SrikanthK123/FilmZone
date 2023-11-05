import React from 'react'

const TML18 = () => {
    const movies = [
        {
            "movieTitle": "Dhamaka",
            "releaseYear": 2022,
            "directors": ["Trinadha Rao Nakkina"],
            "producers": ["People Media Factory", "Abhishek Agarwal Arts"],
            "musicDirector" : "	Bheems Ceciroleo",
            "actors": [
              {
                "name": "Ravi Teja",
                "character": "Swamy/Anand Chakravarty",
                "pic" :"https://www.instantstories.com/uploads/stories/ravi-teja/ravi-teja-latest-hd-photoswallpapers-1080p4k-53nk-sm.jpg?v=1570088647"
              },
              {
                "name": "Sreeleela",
                "character": "Pranavi",
                "pic" :"https://th.bing.com/th/id/OIP.0RB1QBABVngWaFqsudj0NwHaHj?pid=ImgDet&rs=1"
              },
              {
                "name": "Jayaram",
                "character": "JP",
                "pic" :"https://englishmithra.com/wp-content/uploads/2023/07/jayaram.png"
              },
              {
                "name": "Sachin Khedekar",
                "character": "Chakravarty",
                "pic" :"https://starsunfolded.com/wp-content/uploads/2017/05/Sachin-Khedekar-profile.jpg"
              },
              
              {
                "name": "Rao Ramesh",
                "character": "Minister",
                "pic" :"https://th.bing.com/th/id/OIP.zOyl3Mla_vHQxC1R-9IUzwHaHa?pid=ImgDet&w=350&h=350&rs=1"
              },
             
              {
                "name": "Ali",
                "character": "Swamy's boss",
                "pic" :"https://th.bing.com/th/id/R.b260c7148731906bb0a644a5b05a6175?rik=yXbioEVTOAHMlQ&riu=http%3a%2f%2fwww.aiming.in%2fwp-content%2fuploads%2f2017%2f03%2fali-comedian-image.jpg&ehk=fnT6q4UxYpybsy2anY1C8WeMuUZNrGLZC%2bVx%2b7dIGxA%3d&risl=&pid=ImgRaw&r=0"
              }
            ],
            "genre": ["Action", "Comedy"],
            "plot": "A live news reporter finds himself in a hostage situation. He must use his wit and skills to save the hostages and expose a corrupt politician.",
            "posterUrl": "https://www.mirchi9.com/wp-content/uploads/2022/12/Dhamaka-2022-Telugu-Movie-Review.jpg",
            "trailerUrl": "https://example.com/dhamaka-trailer.mp4",
            "runtimeMinutes": 130,
            "ratings": {
              "IMDb": 7.5,
              "RottenTomatoes": 80,
              "Metacritic": 70
            },
            "boxOffice": {
              "budget": "₹70 crore",
              "gross": "₹108 crore"
            },
            "languages": ["Telugu"],
            "country": "India",
            "awards": []
          }
    ]
  return (
    <>
      <div className="shyamMain">
        {movies.map((movie, index) => (
          <div key={index} className="movie-card">
            <div className="container pt-3 ">
              {" "}
              <h2
                class="pb-2 "
                style={{ color: "white", marginBottom: "50px" }}
              >
                {movie.movieTitle}
              </h2>
            </div>

            <div className="container">
              <div className="ratio ratio-21x9">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/zLPjDE8Lyf4?autoplay=1&mute=1"
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
                    <p style={{ color: "white", textAlign: "justify" }}>
                      {movie.plot}
                    </p>
                    <div class="mb-5">
                      <h4 style={{ color: "#f70776" }}>
                        Budget -{" "}
                        <span style={{ color: "#9896f1" }}>
                          {movie.boxOffice.budget}
                        </span>
                      </h4>
                      <h4 style={{ color: "#f70776" }}>
                        Gross -{" "}
                        <span style={{ color: "#9896f1" }}>
                          {movie.boxOffice.gross}
                        </span>
                      </h4>
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
                            src="https://images.ottplay.com/images/trinadha-rao-nakkina-864.jpg"
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
                            src="https://cdn.gulte.com/wp-content/uploads/2022/10/Abhishek-Agarwal.jpeg"
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
                            src="https://th.bing.com/th/id/OIP.zJTdsemsRkBZsg5I1gLEkAHaEM?pid=ImgDet&rs=1"
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
                <h2
                  class="pb-2 border-bottom"
                  style={{ color: "#53a8b6", marginBottom: "50px" }}
                >
                  Star Cast
                </h2>
                <div class="container marketing">
                  <div className="row">
                    {movie.actors.map((actor, actorIndex) => (
                      <div className="col-lg-4 " key={actorIndex} data-aos="fade-up">
                        <div
                          className="actor-card"
                          style={{ textAlign: "center", marginTop: "10px" }}
                        >
                          <img
                            src={actor.pic} // Use actor's pic here
                            alt={actor.name}
                            className="img-fluid rounded-circle"
                            width="100"
                            height="100"
                            id='circle'
                          />
                          <h2
                            style={{ color: "white", margin: "10px" }}
                            className="fw-normal" data-aos="zoom-in"
                          >
                            {actor.name}
                          </h2>
                          <p style={{ color: "white" }} data-aos="zoom-in">{actor.character}</p>
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

export default TML18
