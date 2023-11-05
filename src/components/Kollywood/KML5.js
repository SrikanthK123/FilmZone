import React from 'react'

const KML5 = () => {
    const movies = [
        {
            "movieTitle": "Thunivu",
            "Year": "2023",
            "Rated": "Not Rated",
            "Released": "11 Jan 2023",
            "Runtime": "146 min",
            "Genre": "Action, Crime, Thriller",
            "Director": "H. Vinoth",
            "producers": "Boney Kapoor",
            "musicDirector":"Ghibran",
            "Writer": "H. Vinoth",
            "actors": [
                {
                  "name": "Ajith Kumar",
                  "character": "ViDark Deviljay",
                  "pic" : "https://images.indiawords.com/wp-content/uploads/2017/11/Ajith-Kumar-smart-side-look-pose-image-768x768.jpg"
                },
                {
                  "name": "Manju Warrier",
                  "character": "Kanmani",
                  "pic" : "https://cdn.platinumlist.net/upload/artist/manju_warrier_304-mobile.jpg"
                },
                {
                  "name": "Samuthirakani",
                  "character": " Commissioner Dayalan",
                  "pic" : "https://thepersonage.com/wp-content/uploads/2020/07/Samuthirakani-Pic.jpg"
                },
                {
                  "name": "John Kokken",
                  "character": "Krish",
                  "pic" : "https://m.media-amazon.com/images/M/MV5BNzk3MTQwYzktZjUwZi00ZDhhLTljNzctZDM2NmJlYzMxMzg4XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg"
                },
                {
                  "name": "Ajay Kumar",
                  "character": " ACP Ramachandran",
                  "pic" : "https://images.plex.tv/photo?size=medium-360&scale=1&url=https:%2F%2Fmetadata-static.plex.tv%2Fc%2Fpeople%2Fca6d4dc2e946667e03159ce404f0bb5b.jpg"
                },
                {
                  "name": "Bagavathi Perumal",
                  "character": " Inspector Rajesh",
                  "pic" : "https://th.bing.com/th/id/OIP.OdoE7xyQcWsxxBV_LF4KXAAAAA?pid=ImgDet&rs=1"
                }
              ],
            "Plot": "Vijay Rajendran is a happy to-go lucky man. Things change when his father becomes terminally ill, and he is left to manage his business empire.",
            "Language": "Tamil",
            "Country": "India",
            "Awards": "N/A",
            "Poster": "https://m.media-amazon.com/images/I/51RpUwBRjQL._UXNaN_FMjpg_QL85_.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "6.0/10"
                }
            ],
            "plot": "A mysterious mastermind - Daredevil and his team forms a plan and commits bank heist to find the corporate looted people's money.Dreaded gangster Radha's bank heist is foiled by mysterious Michael Jackson and his partner Kanmani, who expose ACP Ramachandran's involvement. They uncover ₹25,000 crores inside the bank, revealing a plot by the bank chairman Krish and a bank official Shyam. Dark Devil, previously thought to be deceased, reveals their tragic past, confronts the bank officials, forces confessions, and helps the hostages escape, eventually escaping with Kanmani. The bank is damaged in a shootout, Krish and others are killed in an explosive, and Dark Devil and Kanmani fake their deaths to settle in international waters.",
            "Language": "Tamil, English, Hindi",
            "Country": "India",
            "Awards": "1 nomination",
            "Poster": "https://way2ott.com/wp-content/uploads/2023/02/cropped-FoBFYyJaQAIVylL.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "6.1/10"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "6.1",
            "imdbVotes": "28,585",
            "imdbID": "tt15163652",
            "Type": "movie",
            "DVD": "N/A",
            "BoxOffice": "N/A",
            "Gross" : "N/A",
            "Production": "N/A",
            "Website": "N/A",
            "Response": "True"
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
    src="https://www.youtube-nocookie.com/embed/jnBZboK17_A?autoplay=1&mute=1"
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
                       <h4 style={{color:'#f70776'}}>Budget - <span style={{color:'#9896f1'}}>{movie.BoxOffice}</span></h4>
                       <h4 style={{color:'#f70776'}}>Gross - <span style={{color:'#9896f1'}}>{movie.Gross}</span></h4>
                    
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
                            src="https://silverscreenindia.com/wp-content/uploads/2017/11/INTERVIEW-FEATURE-Director-H-Vinoth-900x511.jpg"
                            alt="director"
                            width="160px"
                          />
                          <div class="col-lg-8">
                            <h6 style={{ color: "white" }} class="mb-0">
                              Director
                            </h6>
                            <small style={{ color: "white" }}>
                              {movie.Director}
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
                            src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/03/20/803989-553692-boney-kapoor.jpg"
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
                            src="https://th.bing.com/th/id/OIP.JZUJQL2z4CUj7izgsTI6MAHaEn?pid=ImgDet&rs=1"
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

export default KML5
