import React from 'react'

const TLM7 = () => {
    const movies = [
        {
            "movieTitle": "Vaarasudu",
            "releaseYear": 2023,
            "directors": "Vamshi Paidipally",
            "producers": "Dil Raju",
            "musicDirector":"Thaman S",
            "actors": [
              {
                "name": "Vijay",
                "character": "Vijay",
                "pic" : "https://yt3.googleusercontent.com/UZjbHp99xbCsAmTx8pmAgnzZ-J_KxPJLtNa20bMccfoR5rn7uuGyraxxdmItOwVpkfT_b8er=s900-c-k-c0x00ffffff-no-rj"
              },
              {
                "name": "Rashmika Mandanna",
                "character": "Aadya",
                "pic" : "https://i.pinimg.com/280x280_RS/4d/e4/1b/4de41ba3d92e8b99cf4ab7db01389fca.jpg"
              },
              {
                "name": "R. Sarathkumar",
                "character": "Rajendran",
                "pic" : "https://www.behindwoods.com/tamil-movies/slideshow/kollywood-celebrities-donate-to-fefsi-during-corona-crisis/images/sarathkumars-donation.png"
              },
              {
                "name": "Prakash Raj",
                "character": "Jayaprakash",
                "pic" : "https://th.bing.com/th/id/OIP.q9yni35pb0LX_RK3Tq6QJwHaGp?pid=ImgDet&rs=1"
              },
              {
                "name": "Shaam",
                "character": "Aditya",
                "pic" : "https://th.bing.com/th/id/R.13217dcf2a1a6f756304013b79a1327c?rik=%2b%2fOUZJH3W%2fi6aw&riu=http%3a%2f%2fwww.behindwoods.com%2ftamil-movies%2fslideshow%2fyou-will-be-shocked-to-know-these-actors-real-names%2fimages%2fshaam-shamshuddin-ibrahim.jpg&ehk=qG945mVTZ1jERMzlKdht6KibIC0QmH5vfO8HWc5igPU%3d&risl=&pid=ImgRaw&r=0"
              },
              {
                "name": "Srikanth",
                "character": "Jai Rajendran",
                "pic" : "https://th.bing.com/th/id/OIP.CYOrnQLPRxuEajRBRAYqIQHaHy?pid=ImgDet&rs=1"
              }
            ],
            "genre": ["Action", "Drama"],
            "plot": "Vijay, the son of a wealthy businessman, returns home after seven years to save his family from a business rival. He falls in love with Aadya, the daughter of his rival, and must choose between love and duty.",
            "posterUrl": "https://th.bing.com/th/id/OIP.8TNgfN8jxxiyb36baR5lyQHaJq?pid=ImgDet&rs=1",
            "trailerUrl": "https://example.com/vaarasudu-trailer.mp4",
            "runtimeMinutes": 150,
            "ratings": {
              "IMDb": 7.5,
              "RottenTomatoes": 80,
              "Metacritic": 70
            },
            "boxOffice": {
              "budget": "$100 million",
              "gross": "$200 million"
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
            <div className="container pt-3 " > <h2 class="pb-2 " style={{ color: "white",marginBottom:'50px' }}>
                {movie.movieTitle}</h2></div>
           
            <div className="container ">
            <div className="ratio ratio-21x9">
  <iframe
    src="https://www.youtube-nocookie.com/embed/TnWnXBWzmkc?autoplay=1&mute=1"
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
                    <p style={{ color: "white",textAlign:'justify' }}>{movie.plot}</p>
                    <div class="mb-5">
                       <h4 style={{color:'#f70776'}}>Budget - <span style={{color:'#9896f1'}}>{movie.boxOffice.budget}</span></h4>
                       <h4 style={{color:'#f70776'}}>Gross - <span style={{color:'#9896f1'}}>{movie.boxOffice.gross}</span></h4>
                    
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
                            src="https://th.bing.com/th/id/OIP.md5uiWLYOtYp0BKOG0RqmwHaE7?pid=ImgDet&rs=1"
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
                            src="https://www.tollywood.net/wp-content/uploads/2019/05/Dil-Raju-1-768x512.jpg"
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
                <h2 class="pb-2 border-bottom" style={{ color: "#53a8b6",marginBottom:'50px' }}>
                  Star Cast
                </h2>
                <div class="container marketing">
                <div className="row">
  {movie.actors.map((actor, actorIndex) => (
    <div className="col-lg-4 " key={actorIndex} data-aos="fade-up"  >
      <div className="actor-card" style={{ textAlign: 'center',marginTop:'10px' }}>
        <img
          src={actor.pic} // Use actor's pic here
          alt={actor.name}
          className="img-fluid rounded-circle"
          width="100"
          height="100"
          id='circle'
        />
        <h2 style={{ color: 'white',margin:'10px'}} className="fw-normal"  data-aos="zoom-in">
          {actor.name}
        </h2>
        <p style={{ color: 'white' }}  data-aos="zoom-in" >{actor.character} </p>
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

export default TLM7
