import React from "react";

const TML11 = () => {
  const movies = [
    {
      movieTitle: "Most Eligible Bachelor",
      releaseYear: 2021,
      directors: ["Bhaskar"],
      producers: ["Geetha Arts"],
      musicDirector : "	Gopi Sundar",
      actors: [
        {
          name: "Akhil Akkineni",
          character: "Harsha",
          pic : "https://th.bing.com/th/id/R.1252fb0a29dab0530981158928b8da22?rik=dWvVrPq8IoYR%2bg&riu=http%3a%2f%2fwww.behindwoods.com%2ftamil-movies-cinema-news-16%2fimages%2fmr-majnu-first-look-video-starring-akhil-akkineni-photos-pictures-stills.jpg&ehk=uPLYR0zUwePapotoinMxIes6LrzYNyZBClPSQe%2bb9ok%3d&risl=&pid=ImgRaw&r=0"
        },
        {
          name: "Pooja Hegde",
          character: "Vibha",
          pic : "https://1.bp.blogspot.com/-OsgSPux-k2o/YKhtcJegz4I/AAAAAAAAq18/mDhvHtwp79cSB8f4_3PrZW_EunHhB1fKQCLcBGAsYHQ/s1250/pooja-hegde-light-emerald-earrings.jpeg"
        },
        {
            name: "Jayaprakash",
            character: "Prakash(Harsha's father)",
            pic : "https://th.bing.com/th/id/OIP.qJHDjXyMMU1x0b61iIBMZAHaHr?pid=ImgDet&w=586&h=608&rs=1"
          },
          {
            name: "Pragathi",
            character: "Lokeswari(Vibha's mother)",
            pic : "https://2.bp.blogspot.com/-3L8BqZyiaEo/WR7PU2o2lGI/AAAAAAAAD_c/QHtHKepv0c4kxH1FeloJH5MThCBkkBaOQCLcB/s1600/1979954_648316715205751_585776502_o.jpg"
          },
          {
            name: "Vennela Kishore",
            character: " Shoulder Shankar",
            pic : "https://i2.cinestaan.com/image-bank/1500-1500/142001-143000/142078.jpg"
          },
          {
            name: "Aamani",
            character: " Lakshmi(Harsha's mother)",
            pic : "https://wikimylinks.com/wp-content/uploads/2020/05/Aamani-Images-8-e1538726383281.jpg"
          },
      ],
      genre: ["Romantic Comedy"],
      plot: "Most Eligible Bachelor is a romantic comedy that explores the modern dating world and relationships, focusing on the journey of a young man and woman in search of their life partners.",
      posterUrl:
        "https://1.bp.blogspot.com/-rtb-g5zHaLg/YWlPW-cfoFI/AAAAAAAAJqs/LSVCGjOlz642aQuEOBt0L1ColZA7yghbQCLcBGAsYHQ/s696/Most-Eligible-Bachelor.jpg",
      trailerUrl: "https://example.com/most-eligible-bachelor-trailer.mp4",
      runtimeMinutes: 150,
      languages: ["Telugu"],
      country: "India",
      ratings: {
        IMDb: 7.1,
      },
      boxOffice: {
        budget: "	₹20 crore",
        gross: "₹51 crore",
      },
    },
  ];
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
                  src="https://www.youtube-nocookie.com/embed/oFJxjVVovQo?autoplay=1&mute=1"
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
                            src="https://th.bing.com/th/id/OIP.xMdWfR4gBnqeI0iLRFNUJQHaEO?pid=ImgDet&rs=1"
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
                            src="https://yt3.ggpht.com/a/AATXAJzTJXHizX46njrshP294UiB82hoaBTnz2P7Bw=s900-c-k-c0xffffffff-no-rj-mo"
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
                            src="https://www.thefamouspeople.com/profiles/images/gopi-sundar-5.jpg"
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
  );
};

export default TML11;
