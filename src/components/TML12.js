import React from 'react'

const TML12 = () => {
    const movies = [
        {
            "movieTitle": "Maestro",
            "releaseYear": 2021,
            "directors": ["Merlapaka Gandhi"],
            "producers": ["Sudheer Babu"],
            "musicDirector" : "Mahati Swara Sagar",
            "actors": [
              {
                "name": "Nithiin",
                "character": "Arun(a pianist)",
                "pic" : "https://th.bing.com/th/id/R.5b2184edf025b2a5a09e8ba77dcd86bb?rik=y5k1PFN49VFedA&riu=http%3a%2f%2fpics.tollypics.com%2f_data%2fi%2fupload%2f2020%2f02%2f20%2f20200220052339-2b046697-cu_e240.jpg&ehk=U20dm%2bmfi%2fcgjAweKotOpaFmfMhjX0obrY68l3x4YMk%3d&risl=&pid=ImgRaw&r=0"
              },
              {
                "name": "Nabha Natesh",
                "character": "Sophie",
                "pic" : "https://th.bing.com/th/id/OIP.PK6OpeUyyn8dWSIOfD-U-gHaHd?pid=ImgDet&w=1080&h=1087&rs=1"
              },
              {
                "name": "Tamannaah",
                "character": "Simran",
                "pic" : "https://www.theindianwire.com/wp-content/uploads/2019/08/tamannaah.jpg"
              },
              {
                "name": "Naresh",
                "character": "Mohan",
                "pic" : "https://www.apherald.com/ImageStore/images/movies/movies_actors/senior-actor-naresh-latest-stills2.jpg"
              },
              {
                "name": "Srinivasa Reddy",
                "character": "SI P. Srinivas Naik",
                "pic" : "https://lh5.googleusercontent.com/proxy/kPIsWroUEPmPqkASCHJY7xl68AUWjIURwDkmZEvbeJKNloZmjYUbFvsjHl378CnZ3KrOH3JF1FnhI-16OAJpqwFt7LnWF05wIuMbtl2-tTYLf072MuJMCLhseZfygbupCm1YSHv9jvo2ergWD7wyWlZNg1LYNjWawRMX8n8yvQ=w1200-h630-p-k-no-nu"
              },
              {
                "name": "Harsha Vardhan",
                "character": " Dr. Swamy",
                "pic" : "https://th.bing.com/th/id/OIP.i9gN34Nl2SeGunb0bKwFUAHaGZ?pid=ImgDet&w=324&h=280&rs=1"
              }
            ],
            "genre": ["Crime", "Comedy"],
            "plot": "Maestro is a crime-comedy film centered around a man who gets embroiled in a murder investigation and how he uses his wits and humor to navigate through the chaos.",
            "posterUrl": "https://www.telugubulletin.com/wp-content/uploads/2021/09/Maestro-Movie-Review-and-Rating.jpeg",
            "trailerUrl": "https://example.com/maestro-trailer.mp4",
            "runtimeMinutes": 140,
            "languages": ["Telugu"],
            "country": "India",
            "ratings": {
              "IMDb": 7.1
            },
            "boxOffice": {
                "budget": "	₹ 20-25 Crore ",
                "gross": "₹35 crore"
                },
          },
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
                  src="https://www.youtube-nocookie.com/embed/pgEJDVQUp3s?autoplay=1&mute=1"
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
                            src="https://th.bing.com/th/id/OIP.FKSasYuj-KSS8ZFqQZOdswHaEO?pid=ImgDet&rs=1"
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
                            src="https://1.bp.blogspot.com/-1Np5y4ubfdo/XWf_7SVBf9I/AAAAAAAAi20/XTH38w7yFZIc-gKcEQs-M9r_WWZB3wS5gCLcBGAs/s1600/Nithin.jpg"
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
                            src="https://th.bing.com/th/id/OIP.R6LFweMifMDMofEEoRi-yQHaE7?pid=ImgDet&rs=1"
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
                      <div className="col-lg-4 " key={actorIndex}> data-aos="fade-up"
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

export default TML12
