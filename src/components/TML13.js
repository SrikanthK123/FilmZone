import React from 'react'

const TML13 = () => {
    const movies = [
        {
            "movieTitle": "Bimbisara",
            "releaseYear": 2022,
            "directors": ["Vassishta"],
            "producers": ["Hari Krishna K"],
            "musicDirector" : "M. M. Keeravani",
            "actors": [
              {
                "name": "Kalyan Ram Nandamuri",
                "character": "Bimbisara",
                "pic" : "https://nettv4u.com/serialimages/06-03-2019/nandamuri-kalyan-ram.jpg"
              },
              {
                "name": "Catherine Tresa",
                "character": "Vyjayanti",
                "pic" : "https://images.cinemaexpress.com/uploads/user/imagelibrary/2018/9/27/original/aaa.jpg"
              },
              {
                "name": "Samyuktha Menon",
                "character": "Iravathi",
                "pic" : "https://i2.wp.com/filmitamasha.com/wp-content/uploads/2020/05/Samyuktha_-Menon-8.jpg?fit=1024%2C1024&ssl=1"
              },
              {
                "name": "Vennela Kishore",
                "character": " Constable Prasadam",
                "pic" : "https://i2.cinestaan.com/image-bank/1500-1500/142001-143000/142078.jpg"
              },
              {
                "name": "Prakash Raj ",
                "character": "Vishwanandan Varma",
                "pic" : "https://th.bing.com/th/id/OIP.q9yni35pb0LX_RK3Tq6QJwHaGp?pid=ImgDet&rs=1"
              },
              {
                "name": "Srinivas Reddy",
                "character": "Minister Zubeda",
                "pic" : "https://lh5.googleusercontent.com/proxy/kPIsWroUEPmPqkASCHJY7xl68AUWjIURwDkmZEvbeJKNloZmjYUbFvsjHl378CnZ3KrOH3JF1FnhI-16OAJpqwFt7LnWF05wIuMbtl2-tTYLf072MuJMCLhseZfygbupCm1YSHv9jvo2ergWD7wyWlZNg1LYNjWawRMX8n8yvQ=w1200-h630-p-k-no-nu"
              }
            ],
            "genre": ["Action", "Fantasy"],
            "plot": "A powerful king from the ancient past is transported to the present day, where he must find a way to adapt to his new surroundings and defeat a new enemy.",
            "posterUrl": "https://cdn.gulte.com/wp-content/uploads/2022/08/Bimbisara-US-Premieres.jpg",
            "trailerUrl": "https://example.com/bimbisara-trailer.mp4",
            "runtimeMinutes": 140,
            "ratings": {
              "IMDb": 7.2,
              "RottenTomatoes": 75,
              "Metacritic": 65
            },
            "boxOffice": {
              "budget": "$10 million",
              "gross": "$20 million"
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
                  src="https://www.youtube-nocookie.com/embed/gpb2H-WWfBE?autoplay=1&mute=1"
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

export default TML13
