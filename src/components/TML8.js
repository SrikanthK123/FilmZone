import React from 'react'

const TML8 = () => {
    const movies = [
        {
            "movieTitle": "Kushi",
            "releaseYear": 2023,
            "directors": ["Shiva Nirvana"],
            "producers": ["Mythri Movie Makers"],
            "musicDirector" : "	Hesham Abdul Wahab",
            "actors": [
              {
                "name": "Vijay",
                "character": "Siva",
                "pic" : "https://th.bing.com/th/id/R.2115c5a5d3018592757ff25aad78a94c?rik=v%2fpgVu45WeVoEA&riu=http%3a%2f%2fwww.behindwoods.com%2ftamil-movies-cinema-news-16%2fimages%2fgeetha-govindam-hits-100-crore-mark-at-box-office-photos-pictures-stills.jpg&ehk=YOiOkdzMt9rIYui8Khqk95qStsxez4OCmTtnRQtSmuk%3d&risl=&pid=ImgRaw&r=0"
              },
              {
                "name": "Samantha Ruth Prabhu",
                "character": "Madhavi",
                "pic" : "https://2.bp.blogspot.com/-HIcR1QK3WUQ/W7cSXvnFlEI/AAAAAAAACew/WR_sGpHZCeozmigHQH_LQWA3QyC5DzRmgCEwYBhgL/s1600/samantha-photos-age-height-bio.jpg"
              }
              ,
              {
                "name": "Sachin Khedekar",
                "character": "Lenin Satyam",
                "pic" : "https://starsunfolded.com/wp-content/uploads/2017/05/Sachin-Khedekar-profile.jpg"
              }
              ,
              {
                "name": "Saranya Ponvannan",
                "character": "Rajalakshmi",
                "pic" : "https://th.bing.com/th/id/R.1b95411d59b7c61aa51ddd474bab6646?rik=%2bdLUpBd0tOfe2g&riu=http%3a%2f%2fwww.behindwoods.com%2ftamil-movies%2fslideshow%2fthe-actresses-who-are-the-most-loved-as-in-amma-character%2fimages%2fsaranya-ponvannan-29.jpg&ehk=iajnRy47jrYLq6AfmRigEfFGvbdAKKTX7v0b4qqzsyc%3d&risl=&pid=ImgRaw&r=0"
              },
              {
                "name": "Murali Sharma",
                "character": "Chadarangam Srinivasa Rao",
                "pic" : "https://www.cinejosh.com/telugu/newsimg/murali-sharma-about-his-villain-and-character-roles_b_0301180441.jpg"
              },
              {
                "name": "Lakshmi",
                "character": "Aradhya's grandmother",
                "pic" : "https://nettv4u.com/serialimages/Lakshmi-narayan.JPG"
              }
            ],
            "genre": ["Romantic Comedy"],
            "plot": "A young man and woman fall in love, but their relationship is threatened by their social differences.",
            "posterUrl": "https://sensongsmp3.live/wp-content/uploads/2023/05/Kushi-2023-Telugu-Movie-Songs-Download-Vijay-Devarakonda-Samantha.jpg",
            "trailerUrl": "https://example.com/kushi-trailer.mp4",
            "runtimeMinutes": 120,
            "ratings": {
              "IMDb": "3/5",
              "RottenTomatoes": "N/A",
              "Metacritic": "N/A"
            },
            "boxOffice": {
              "budget": "₹50–70 crore",
              "gross": "₹71 crore"
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
           
            <div className="container">
            <div className="ratio ratio-21x9">
  <iframe
    src="https://www.youtube-nocookie.com/embed/AsvGScyj4gw?autoplay=1&mute=1"
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
                            src="https://assets.thehansindia.com/h-upload/2021/09/06/1106277-shiva-nirvana.jpg"
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
                            src="https://cdn.gulte.com/wp-content/uploads/2023/01/mythri-660x330.jpg"
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
                            src="https://s3.ap-southeast-1.amazonaws.com/cdn.deccanchronicle.com/sites/default/files/10525974_520547368047603_1920298965112285501_N.jpg"
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
    <div className="col-lg-4 " key={actorIndex} data-aos="fade-up" >
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

export default TML8
