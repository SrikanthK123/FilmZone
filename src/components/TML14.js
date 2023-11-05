import React from 'react'

const TML14 = () => {
    const movies = [
        {
            "movieTitle": "Sita Ramam",
            "releaseYear": 2022,
            "directors": ["Hanu Raghavapudi"],
            "producers": ["Swapna Dutt", "Ashwini Dutt"],
            "actors": [
              {
                "name": "Dulquer Salmaan",
                "character": "Lieutenant Ram",
                "pic" : "https://a10.gaanacdn.com/images/artists/59/861059/crop_480x480_861059.jpg"
              },
              {
                "name": "Mrunal Thakur",
                "character": "Sita Mahalakshmi",
                "pic" : "https://i1.wp.com/www.hindustantimes.com/rf/image_size_960x540/HT/p2/2019/08/22/Pictures/_5c414ad6-c4e6-11e9-9ed0-dd7a6b36c3ad.jpg?ssl=1"
              },
              {
                "name": "Rashmika Mandanna",
                "character": "Afreen",
                "pic" : "https://i.pinimg.com/280x280_RS/4d/e4/1b/4de41ba3d92e8b99cf4ab7db01389fca.jpg"
              },
              {
                "name": "Sumanth",
                "character": "Brigadier Vishnu Sharma",
                "pic" : "https://szcdn.ragalahari.com/feb2021/hd/sumanth-kapatadhaari-interview/sumanth-kapatadhaari-interviewthumb.jpg"
              },
              {
                "name": "Tharun Bhascker",
                "character": "Balaji",
                "pic" : "https://szcdn.ragalahari.com/oct2019/hd/tharun-bhascker-mmc-interview/tharun-bhascker-mmc-interviewthumb.jpg"
              },
              {
                "name": "Vennela Kishore",
                "character": "Durjoy Sharma",
                "pic" : "https://i2.cinestaan.com/image-bank/1500-1500/142001-143000/142078.jpg"
              }
            ],
            "genre": ["Romance", "Drama", "War"],
            "plot": "The film tells the story of Lieutenant Ram, a Kashmiri Pandit soldier who falls in love with Sita Mahalakshmi, a Telugu woman, during the 1965 Indo-Pakistani War. The film also follows Afreen, a journalist who is tasked with finding Sita and delivering a letter to her from Ram.",
            "posterUrl": "https://www.mirchi9.com/wp-content/uploads/2022/08/Sita-Ramam-Telugu-Movie-Review.jpg",
            "trailerUrl": "https://example.com/sita-ramam-trailer.mp4",
            "runtimeMinutes": 160,
            "ratings": {
              "IMDb": 8.0,
              "RottenTomatoes": 90,
              "Metacritic": 75
            },
            "boxOffice": {
              "budget": "$12 million",
              "gross": "$24 million"
            },
            "languages": ["Telugu", "Tamil", "Malayalam"],
            "country": "India",
            "awards": ["Filmfare Award for Best Film – Telugu", "Nandi Award for Best Film"]
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
                  src="https://www.youtube-nocookie.com/embed/Ljk6tGZ1l3A?autoplay=1&mute=1"
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
                            src="https://i.ytimg.com/vi/UxpewrKNpm0/maxresdefault.jpg"
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
                            src="https://webserieszworld.com/wp-content/uploads/2021/05/Nandamuri-Kalyan-Ram.jpg"
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

export default TML14
