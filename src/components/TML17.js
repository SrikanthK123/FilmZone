import React from 'react'

const TML17 = () => {
    const movies = [
        {
            "movieTitle": "Bheemla Nayak",
            "releaseYear": 2022,
            "directors": ["Saagar K. Chandra"],
            "producers": ["Sithara Entertainments"],
            "musicDirector" : "	Thaman S",
            "actors": [
              {
                "name": "Pawan Kalyan",
                "character": "Bheemla Nayak",
                "pic" : "https://wallpapercave.com/wp/wp3995806.jpg"
              },
              {
                "name": "Rana Daggubati",
                "character": "Daniel Shekar",
                "pic" : "https://celebswiki.info/wp-content/uploads/2019/07/1562343920_231_Rana-Daggubati-Contact-Address-Phone-Number-House-Address-Email-Id.jpg"
              },
              {
                "name": "Nithya Menen",
                "character": "Saagar",
                "pic" : "https://img.huffingtonpost.com/asset/5d5cfe532500003200188fec.png?cache=bAYo3UDTiJ&ops=crop_10_27_826_767,scalefit_630_noupscale"
              },
              {
                "name": "Samyuktha",
                "character": "Kamali(Daniel's wife)",
                "pic" : "https://i2.wp.com/filmitamasha.com/wp-content/uploads/2020/05/Samyuktha_-Menon-8.jpg?fit=1024%2C1024&ssl=1 "
              },
              {
                "name": "Rao Ramesh",
                "character": "Nagaraju",
                "pic" : "https://th.bing.com/th/id/OIP.zOyl3Mla_vHQxC1R-9IUzwHaHa?pid=ImgDet&w=350&h=350&rs=1"
              },
              {
                "name": "Samuthirakani",
                "character": "Jeevan Kumar(Daniel's father)",
                "pic" : "https://thepersonage.com/wp-content/uploads/2020/07/Samuthirakani-Pic.jpg"
              }
            ],
            "genre": ["Action", "Drama"],
            "plot": "A remake of the Malayalam film Ayyappanum Koshiyum, Bheemla Nayak tells the story of two powerful men who clash, leading to a series of violent confrontations.",
            "posterUrl": "https://www.filmibeat.com/img/2021/12/bheemlanayak-1640067960.jpg",
            "trailerUrl": "https://example.com/bheemla-nayak-trailer.mp4",
            "runtimeMinutes": 158,
            "ratings": {
              "IMDb": 7.5,
              "RottenTomatoes": 80,
              "Metacritic": 70
            },
            "boxOffice": {
              "budget": "$10 million",
              "gross": "$20 million"
            },
            "languages": ["Telugu"],
            "country": "India",
            "awards": ["Filmfare Award for Best Actor – Telugu (Male)", "Nandi Award for Best Actor"]
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
                  src="https://www.youtube-nocookie.com/embed/m8v-qYaiWzw?autoplay=1&mute=1"
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
                            src="https://www.thecityceleb.com/wp-content/uploads/2022/10/Saagar-K-Chandra-Bio-Wife-Age-Movies-Instagram-Twitter-Wikipedia-Associates-Family-Pawan-Kalyan-1140x641.jpeg"
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
                            src="https://www.telugu360.com/wp-content/uploads/2020/03/Sithara-Entertainments.jpg"
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

export default TML17
