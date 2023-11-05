import React from 'react'

const TML16 = () => {
    const movies = [
        {
            "movieTitle": "Major",
            "releaseYear": 2022,
            "directors": ["Sashi Kiran Tikka"],
            "producers": ["Sony Pictures Films India,", "Mahesh Babu Entertainment"],
            "musicDirector" : "	Sricharan Pakala",
            "actors": [
              {
                "name": "Adivi Sesh",
                "character": "Major Sandeep Unnikrishnan",
                "pic" : "https://c.saavncdn.com/artists/Adivi_Sesh_500x500.jpg"
              },
              {
                "name": "Sobhita Dhulipala",
                "character": "Pramoda",
                "pic" : "https://th.bing.com/th/id/OIP.a3nL1DdEyB83kysuXBi2IQHaGp?pid=ImgDet&w=640&h=574&rs=1"
              },
              
              {
                "name": "Saiee Manjrekar",
                "character": "Isha",
                "pic" : "https://th.bing.com/th/id/OIP.7ieD7wNybpd_bNXVv06w4gHaHa?pid=ImgDet&rs=1"
              },
              
              {
                "name": "Prakash Raj ",
                "character": "K. Unnikrishnan",
                "pic" : "https://th.bing.com/th/id/OIP.q9yni35pb0LX_RK3Tq6QJwHaGp?pid=ImgDet&rs=1"
              },
              
              {
                "name": "Revathi",
                "character": "Dhanalakshmi Unnikrishnan",
                "pic" : "https://th.bing.com/th/id/OIP.aj2fn54HzglqUNGJ-N-jkgAAAA?pid=ImgDet&rs=1"
              },
              
              {
                "name": "Murali Sharma",
                "character": " Colonel(Team Commander Shera)",
                "pic" : "https://www.cinejosh.com/telugu/newsimg/murali-sharma-about-his-villain-and-character-roles_b_0301180441.jpg"
              }
            ],
            "genre": ["Action", "Biography"],
            "plot": "The film tells the story of Major Sandeep Unnikrishnan, an Indian Army officer who was martyred in the 2008 Mumbai attacks.",
            "posterUrl": "https://i.ytimg.com/vi/4SI-VHyNg6U/maxresdefault.jpg",
            "trailerUrl": "https://example.com/major-trailer.mp4",
            "runtimeMinutes": 143,
            "ratings": {
              "IMDb": 8.0,
              "RottenTomatoes": 90,
              "Metacritic": 75
            },
            "boxOffice": {
              "budget": "$12 million",
              "gross": "$24 million"
            },
            "languages": ["Telugu", "Hindi", "Malayalam"],
            "country": "India",
            "awards": ["National Film Award for Best Actor – Male (Special Mention)", "Filmfare Award for Best Actor – Telugu"]
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
                  src="https://www.youtube-nocookie.com/embed/LbTN2dOJcbQ?autoplay=1&mute=1"
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
                            src="https://www.cinejosh.com/telugu/newsimg/sashi-kiran-tikka-interview_b_0906220857.jpg"
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
                            src="https://th.bing.com/th/id/R.de600642bd7ff280d53c24da5bf232c2?rik=qVAOZk47Ng47rg&riu=http%3a%2f%2fimages.cinemaexpress.com%2fuploads%2fuser%2fimagelibrary%2f2018%2f6%2f12%2foriginal%2fasdfsdfsdfsd.jpg&ehk=n03QJatCm0r0cGsaBRUtvr%2bmYasB4dI%2f4nA3I1Co2tM%3d&risl=&pid=ImgRaw&r=0"
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
                            src="https://th.bing.com/th/id/OIP.nq3Bn6cVwsNoGBgIl13xGQHaEL?pid=ImgDet&rs=1"
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

export default TML16
