import React from 'react'

const TML3 = () => {
    const movies = [
        {
            "movieTitle": "Narappa",
            "releaseYear": 2021,
            "directors": ["Srikanth Addala"],
            "producers": ["Suresh Babu"],
            "musicDirector" : "Mani Sharma",
            "actors": [
              {
                "name": "Venkatesh Daggubati",
                "character": "Narappa",
                "pic" : "https://th.bing.com/th/id/OIP.5u9ySszOkttf49FS7vLnywHaHv?pid=ImgDet&w=564&h=589&rs=1"
              },
              {
                "name": "Priyamani",
                "character": "Sundaramma",
                "pic" : "https://th.bing.com/th/id/OIP.J6c5phB8LMMumx7EHKZ74QAAAA?pid=ImgDet&rs=1"
              }
              ,
              {
                "name": "Karthik Rathnam",
                "character": "Munikanna",
                "pic" : "https://imgk.timesnownews.com/media/kar6.jpg"
              }
              ,
              {
                "name": "Vasishta N. Simha",
                "character": "Seenappa",
                "pic" : "https://th.bing.com/th/id/OIP.jvTGwuV2EjH6ZdBBB5ZlGAHaHa?pid=ImgDet&rs=1"
              }
              ,
              {
                "name": "Nassar",
                "character": "Shavkar Shankaraiah",
                "pic" : "https://i.pinimg.com/originals/0e/85/73/0e8573a3cf49a3c3a1aa017a5b665e33.jpg"
              },
              {
                "name": "Rao Ramesh",
                "character": "Lawyer Varadarajulu",
                "pic" : "https://th.bing.com/th/id/OIP.zOyl3Mla_vHQxC1R-9IUzwHaHa?pid=ImgDet&w=350&h=350&rs=1"
              }
            ],
            "genre": ["Drama", "Action"],
            "plot": "Narappa is a violent revenge story of a father who requires the brutal murder of his eldest son1. It is an official remake of the Tamil blockbuster movie Asuran2. The story is set in Ramasagaram, a small village where the social hierarchy is oppressive3. Narappa's family is facing a land dispute with the landowner Panduswamy, and as part of the fight, Munikanna, the eldest son of Narappa, is killed by the Panduswamy men23. The film explores the battle between haves and have-nots, the ill-treatment of certain castes, and the fight for survival and dignity1.",
            "posterUrl": "https://1.bp.blogspot.com/-cyjwWK0c4_s/YPWvC7cp4RI/AAAAAAAACQ4/OEhzFWg8AVA5OCak6LKMRdekBi0A5C0egCLcBGAsYHQ/s1280/IMG_20210719_222625_045.jpg",
            "trailerUrl": "https://example.com/narappa-trailer.mp4",
            "runtimeMinutes": 152,
            "ratings": {
              "IMDb": 8.1,
              "RottenTomatoes": 88,
              "Metacritic": 75
            },
            "boxOffice": {
              "budget": "$10 million",
              "gross": "$30 million"
            },
            "languages": ["Telugu"],
            "country": "India",
            "awards": ["National Film Award for Best Feature Film"]
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
    src="https://www.youtube-nocookie.com/embed/GNJ-kT6gFhQ?autoplay=1&mute=1"
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
                            src="https://th.bing.com/th/id/OIP.2TEcKYGr_4XLIgBy9anV-wHaEL?pid=ImgDet&rs=1"
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
                            src="https://th.bing.com/th/id/OIP.FcM_cWg2JY7lCzRMX8SZPgHaE7?w=273&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7"
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
                            src="https://th.bing.com/th/id/OIP.zwlWXl3Ww-4vw0jDRrqitAAAAA?pid=ImgDet&rs=1"
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
        <h2 style={{ color: 'white',margin:'10px'}} className="fw-normal" data-aos="zoom-in">
          {actor.name}
        </h2>
        <p style={{ color: 'white' }} data-aos="zoom-in">{actor.character}</p>
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

export default TML3
