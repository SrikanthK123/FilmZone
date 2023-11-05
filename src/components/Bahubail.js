import React from "react";

const Bahubail = () => {
  const movies = [
    {
      Title: "Baahubali 2: The Conclusion",
      Year: "2017",
      Rated: "Not Rated",
      Released: "28 Apr 2017",
      Runtime: "167 min",
      Genre: "Action, Drama",
      Director: "S.S. Rajamouli",
      Producer : "	Shobu Yarlagadda,Prasad Devineni",
      "musicDirector" : "M M Keeravani",
      
      Writer: "Vijayendra Prasad, S.S. Rajamouli, C.H. Vijay Kumar",
      actors: [
        {
          name: "Prabhas",
          character: "Amarendra Baahubali",
          pic: "https://i.pinimg.com/originals/06/a1/7c/06a17c016e2072d0351d6c35addf8236.jpg",
        },
        {
          name: "Rana Daggubati",
          character: "Bhallaladeva",
          pic: "https://celebswiki.info/wp-content/uploads/2019/07/1562343920_231_Rana-Daggubati-Contact-Address-Phone-Number-House-Address-Email-Id.jpg",
        },
        {
          name: "Anushka Shetty",
          character: "Devasena",
          pic: "https://alchetron.com/cdn/anushka-shetty-fb85b6bd-2bab-4ffa-898d-5f295ab7ca0-resize-750.jpeg",
        },
        {
          name: "Tamannaah",
          character: "Avantika",
          pic: "https://www.theindianwire.com/wp-content/uploads/2019/08/tamannaah.jpg",
        },
        {
          name : "Ramya Krishnan",
          character: " Sivagami Devi",
          pic: "https://th.bing.com/th/id/OIP.Nl9JqFtDUTHbRiXjuE7xfwHaHr?pid=ImgDet&rs=1"
        },
        {
          "name": "Nassar",
          "character": "Bijjaladeva ",
          "pic" : "https://i.pinimg.com/originals/0e/85/73/0e8573a3cf49a3c3a1aa017a5b665e33.jpg"
        },
      ],
      Plot: "'Bahubali 2: The Conclusion' is an Indian epic historical film directed by S.S. Rajamouli. The story revolves around the two warring brothers, Amarendra Baahubali and Bhallaladeva, who vie for the throne of the Mahishmati kingdom. It unravels the mystery behind Amarendra's death and how his son, Mahendra Baahubali, seeks to avenge his father's murder. The film explores themes of loyalty, betrayal, and sacrifice and features breathtaking action sequences and visual effects. With the help of his mother, Sivagami, and loyal allies, Mahendra ultimately defeats Bhallaladeva, reclaiming his rightful place as the ruler of Mahishmati, concluding the epic tale.",
      Language: "Telugu, Tamil",
      Country: "India",
      Awards: "28 wins & 16 nominations",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMmM3ODk3MDgtZjQwZi00Y2ZhLTg0YTItMTJiNmNjNzRkYmQ4XkEyXkFqcGdeQXVyNzU3Nzk4MDQ@._V1_SX300.jpg",
      Ratings: [
        {
          Source: "Internet Movie Database",
          Value: "8.2/10",
        },
        {
          Source: "Rotten Tomatoes",
          Value: "88%",
        },
      ],
      Metascore: "N/A",
      imdbRating: "8.2",
      imdbVotes: "109,677",
      imdbID: "tt4849438",
      Type: "movie",
      DVD: "03 Aug 2017",
      BoxOffice: "₹250 crore",
      Gross : "1900 crore",
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
                {movie.Title}
              </h2>
            </div>
            <div className="ratio ratio-16x9">
  <iframe
    src="https://www.youtube-nocookie.com/embed/u3Zcaeei_H8?autoplay=1&mute=1"
    title="YouTube video"
    allowFullScreen
    style={{ borderRadius: "10px" }}
    className="youtube-iframe"
  ></iframe>
</div>


            <div className="container ">
       
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
                              boxShadow: "0 0 40px #ffb5b5", margin:'30px' 
                            }}
                            src="https://images.indianexpress.com/2021/12/SS-Rajamouli-nnew-1200by667.jpg"
                            alt="director"
                            width="300px"
                            
                          />
                          <div className="col-lg-8">
                            <h6 style={{ color: "white",fontSize:'35px' }} className="mb-0"  data-aos="zoom-in">
                              Director
                            </h6>
                            <small style={{ color: "white" }}  data-aos="zoom-in">
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
                              margin:'30px'                            }}
                            src="https://i.pinimg.com/originals/d2/59/95/d259958180999491f0c33acdc51d6cf4.jpg"
                            alt="Producer"
                            width="300px" 
                          />
                          <div className="col-lg-8">
                            <h6 style={{ color: "white",fontSize:'35px' }} className="mb-0"  data-aos="zoom-in">
                              Producer
                            </h6>
                            <small style={{ color: "white" }} className="text"  data-aos="zoom-in">
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
                              boxShadow: "0 0 40px #ffb5b5", margin:'30px'
                            }}
                            src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2023-01/230110-mm-keeravani-ew-850p-93cd18.jpg"
                            alt="director"
                            width="300px" data-aos="slide-left"
                          />
                          <div className="col-lg-8">
                            <h6 style={{ color: "white",fontSize:'35px' }} className="mb-0" data-aos="zoom-in">
                              Music Director
                            </h6>
                            <small style={{ color: "white" }} className="text"  data-aos="zoom-in">
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
                      <div className="col-lg-4 " key={actorIndex} >
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
                            className="fw-normal"  data-aos="zoom-in"
                          >
                            {actor.name}
                          </h2>
                          <p style={{ color: "white" }}  data-aos="zoom-in">{actor.character}</p>
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

export default Bahubail;
