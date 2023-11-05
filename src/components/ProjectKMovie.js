import React from "react";
import img1 from "../Images/421710-project-k.jpg"
import img2 from "../Images/projeck-k1.jpg"
import img3 from "../Images/projeck-k2.jpg"
import img4 from "../Images/projeck-k3.jpg"
import img5 from "../Images/project-k4.jpg"
import img6 from "../Images/project-k5.jpg"
import img7 from "../Images/project-k6.jpg"
import ProjectKLogo from "../Images/ProjectKTitle2.png"
const ProjectKMovie = () => {
  const movies = [
    {
      Title: "Kalki 2898-AD",
      Year: "2024",
      Rated: "N/A",
      Released: "12 Jan 2024",
      Runtime: "N/A",
      Genre: "Action, Drama, Fantasy",
      Director: "Nag Ashwin",
      Producer: "C. Aswani Dutt",
      musicDirector: "Santhosh Narayanan",
      Writer: "Nag Ashwin",
      actors: [
        {
          name: "Prabhas",
          character: "",
          pic: "https://i.pinimg.com/originals/06/a1/7c/06a17c016e2072d0351d6c35addf8236.jpg",
        },
        {
          name: "Rana Daggubati",
          character: "",
          pic: "https://celebswiki.info/wp-content/uploads/2019/07/1562343920_231_Rana-Daggubati-Contact-Address-Phone-Number-House-Address-Email-Id.jpg",
        },
        {
          name: "Kamal haasan",
          character: "",
          pic: "https://www.behindwoods.com/tamil-movies-cinema-news-15/images/vivek-tweets-that-he-is-no-match-to-kamal-haasan-photos-pictures-stills.jpg",
        },
        {
          name: " Deepika Padukone",
          character: "",
          pic: "https://i.pinimg.com/originals/27/48/7f/27487f922911385460189dd0b0db8fbd.jpg",
        },
        {
          name: "Amitabh Bachchan",
          character: "",
          pic: "https://4.bp.blogspot.com/-lWylEWM7tic/V_tD1YlgiOI/AAAAAAAAC44/baishRA5SBo6oPnUStjF67KXYaKkHERpQCLcB/s1600/ab.jpg",
        },
        {
          name: "Disha Patani",
          character: " ",
          pic: "https://takemebackto.s3.amazonaws.com/person/pictures/349887-disha-patani.jpeg",
        },
      ],
      Plot: "A modern-day avatar of Vishnu, a Hindu god, who is believed to have descended to earth to protect the world from evil forces.",
      Language: "Telugu, Hindi",
      Country: "India",
      Awards: "N/A",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzRlNTZmNDctZjJlZi00Mzc1LWIwMjItNzFjMWJlMWIzOTdiXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_SX300.jpg",
      Ratings: [],
      Metascore: "N/A",
      imdbRating: "N/A",
      imdbVotes: "N/A",
      imdbID: "tt12735488",
      Type: "movie",
      DVD: "N/A",
      BoxOffice: "₹600 crore",
      Gross: "N/A",
      Production: "N/A",
      Website: "N/A",
      Response: "True",
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
                className="pb-2 "
                style={{ color: "white", marginBottom: "50px" }}
              >
                {movie.Title} -{" "}
                <span style={{ color: "#de1f91" }}>Release Date </span>-{" "}
                <span style={{ color: "#00aaff" }}>{movie.Released}</span>
              </h2>
            </div>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube-nocookie.com/embed/bC36d8e3bb0?autoplay=1&mute=1"
                title="YouTube video"
                allowFullScreen
                allow="autoplay; encrypted-media"
                style={{ borderRadius: "10px" }}
                className="youtube-iframe"
              ></iframe>
            </div>

            <div className="container ">
            <div className="container px-4 py-5" id="custom-cards">
        <h2 className="pb-2 border-bottom" style={{ color: "white" }}>
         <img src= {ProjectKLogo} id="ProjectKLogoHere" style={{width:'127px',height:'70px',cursor:'pointer'}} />
        </h2>
<div class="row" style={{marginTop:'20px'}}>
  <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <img
      src={img6}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Project-K"
      id="Gallery"
    />

    <img
      src={img5 }
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Project-K"
      id="Gallery"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src={img3}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Project-K"
      id="Gallery"
    />

    <img
      src={img4}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Project-K"
      id="Gallery"
    />
    
    <img
      src="https://indogeeks.in/wp-content/uploads/2023/07/Kalki-2898-Project-K-prabhas-movie-release-date-trailer-teaser.jpg"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Project-K"
      id="Gallery"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src={img2}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Project-K"
      id="Gallery"
    />

    
    <img
      src={img7}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Project-K"
      id="Gallery"
    />
  </div>
</div>
      </div>
              <div className="container px-4 py-5">
                <h2 className="pb-2 border-bottom" style={{ color: "#53a8b6" }}>
                  About Movie
                </h2>

                <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
                  <div className="col d-flex flex-column align-items-start gap-2">
                    <h2 className=" fw-bold " style={{ color: "#f70776" }}>
                      Story
                    </h2>
                    <p style={{ color: "white", textAlign: "justify" }}>
                      {movie.Plot}
                    </p>
                    <div className="mb-5">
                      <h4 style={{ color: "#f70776" }}>
                        Budget -{" "}
                        <span style={{ color: "#9896f1" }}>
                          {movie.BoxOffice}
                        </span>
                      </h4>
                      <h4 style={{ color: "#f70776" }}>
                        Gross -{" "}
                        <span style={{ color: "#9896f1" }}>{movie.Gross}</span>
                      </h4>
                    </div>
                  </div>

                  <div>
                    <ul className="list-unstyled">
                      <li data-aos="zoom-in">
                        <a
                          className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none "
                          href="#"
                        >
                          <img
                            style={{
                              borderRadius: "20px",
                              boxShadow: "0 0 40px #ffb5b5",
                              margin: "30px",
                            }}
                            src="https://www.cinejosh.com/newsimg/newsmainimg/nag-ashwin-jathi-ratnalu_b_1003210341.jpg"
                            alt="director"
                            width="300px"
                          />
                          <div className="col-lg-8">
                            <h6
                              style={{ color: "white", fontSize: "35px" }}
                              className="mb-0"
                              data-aos="zoom-in"
                            >
                              Director
                            </h6>
                            <small
                              style={{ color: "white" }}
                              data-aos="zoom-in"
                            >
                              {movie.Director}
                            </small>
                          </div>
                        </a>
                      </li>
                      <li data-aos="zoom-in">
                        <a
                          className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none "
                          href="#"
                        >
                          <img
                            style={{
                              borderRadius: "20px",
                              boxShadow: "0 0 40px #ffb5b5",
                              margin: "30px",
                            }}
                            src="https://www.cinejosh.com/newsimg/newsmainimg/aswini-dutt_b_1906210454.jpg"
                            alt="Producer"
                            width="300px"
                          />
                          <div className="col-lg-8">
                            <h6
                              style={{ color: "white", fontSize: "35px" }}
                              className="mb-0"
                              data-aos="zoom-in"
                            >
                              Producer
                            </h6>
                            <small
                              style={{ color: "white" }}
                              className="text"
                              data-aos="zoom-in"
                            >
                              {" "}
                              {movie.Producer}{" "}
                            </small>
                          </div>
                        </a>
                      </li>
                      <li data-aos="zoom-in">
                        <a
                          className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none "
                          href="#"
                        >
                          <img
                            style={{
                              borderRadius: "20px",
                              boxShadow: "0 0 40px #ffb5b5",
                              margin: "30px",
                            }}
                            src="https://www.thehindu.com/entertainment/music/cllf1k/article35606048.ece/ALTERNATES/LANDSCAPE_615/Santhosh-Narayanan-02-Credit-Arun-Titan"
                            alt="director"
                            width="300px"
                            data-aos="slide-left"
                          />
                          <div className="col-lg-8">
                            <h6
                              style={{ color: "white", fontSize: "35px" }}
                              className="mb-0"
                              data-aos="zoom-in"
                            >
                              Music Director
                            </h6>
                            <small
                              style={{ color: "white" }}
                              className="text"
                              data-aos="zoom-in"
                            >
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
                  className="pb-2 border-bottom"
                  style={{ color: "#53a8b6", marginBottom: "50px" }}
                >
                  Star Cast
                </h2>
                <div className="container marketing">
                  <div className="row">
                    {movie.actors.map((actor, actorIndex) => (
                      <div className="col-lg-4 " key={actorIndex}  data-aos="fade-up"> 
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
                            id="circle"
                          />
                          <h2
                            style={{ color: "white", margin: "10px" }}
                            className="fw-normal"
                            data-aos="zoom-in"
                          >
                            {actor.name}
                          </h2>
                          <p style={{ color: "white" }} data-aos="zoom-in">
                            {actor.character}
                          </p>
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

export default ProjectKMovie;
