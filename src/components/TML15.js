import React from 'react'

const TML15 = () => {
    const movies = [
        {
            "movieTitle": "RRR",
            "releaseYear": 2022,
            "directors": ["S. S. Rajamouli"],
            "producers": ["D. V. V. Danayya"],
            "musicDirector" : "M M Keeravani",
            "actors": [
              {
                "name": "N. T. Rama Rao Jr.",
                "character": "Alluri Sitarama Raju",
                "pic" : "https://cinemachaat.files.wordpress.com/2017/09/jai-lava-kusa-6.jpg?w=300"
              },
              {
                "name": "Ram Charan",
                "character": "Komaram Bheem",
                "pic" : "https://pbs.twimg.com/profile_images/1259506139324014592/EEqrAldO_400x400.jpg"
              },
              {
                "name": "Alia Bhatt",
                "character": "Sita",
                "pic" : "https://th.bing.com/th/id/OIP.dU788z87Uiph2aewa882DQHaGL?pid=ImgDet&rs=1"
              },
              {
                "name": "Ajay Devgn",
                "character": "Gurunath Singh",
                "pic" : "https://i.pinimg.com/736x/ac/5a/91/ac5a91c704e805b31a2663ffd15d62f6.jpg"
              },
              {
                "name": "Shriya Saran",
                "character": "Sarojini(Sitarama Raju's mother)",
                "pic" : "https://allwikibiography.in/wp-content/uploads/2021/03/Shriya1.jpg"
              },
              {
                "name": "Olivia Morris",
                "character": "Jennifer (Jenny)",
                "pic" : "https://cdn.wallpapersafari.com/55/77/e8zHcx.jpg"
              }
            ],
            "genre": ["Action", "Adventure", "Historical Fiction"],
            "plot": "A fictional story about two Indian revolutionaries, Alluri Sitarama Raju (N. T. Rama Rao Jr.) and Komaram Bheem (Ram Charan), who fought against the British Raj and the Nizam of Hyderabad, respectively.",
            "posterUrl": "https://tsdcovers.files.wordpress.com/2022/07/rrr-v2.jpg?w=1200",
            "trailerUrl": "https://example.com/rrr-trailer.mp4",
            "runtimeMinutes": 180,
            "ratings": {
              "IMDb": 8.8,
              "Metacritic": 80
            },
            "boxOffice": {
              "budget": "$70 million",
              "gross": "$1 billion"
            },
            "languages": ["Telugu"],
            "country": "India",
            "awards": ["Golden Globe Award for Best Foreign Language Film", "Academy Award for Best Picture"]
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
                  src="https://www.youtube-nocookie.com/embed/NgBoMJy386M?autoplay=1&mute=1"
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
                            src="https://images.indianexpress.com/2021/12/SS-Rajamouli-nnew-1200by667.jpg"
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
                            src="https://th.bing.com/th/id/OIP.2qKq6kYBIUXG3oLCAPv3egHaD4?pid=ImgDet&rs=1"
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
                            src="https://i2.wp.com/www.newsbugz.com/wp-content/uploads/2018/08/M.-M.-Keeravani-Images-6.jpg?fit=1200%2C800&ssl=1"
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
                      <div className="col-lg-4 " key={actorIndex} data-aos="fade-up" >
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

export default TML15
