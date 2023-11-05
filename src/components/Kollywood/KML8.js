import React from 'react'

const KML8 = () => {
    const movies = [
        {
            "Title": "Maaveeran",
            "Year": "2023",
            "Rated": "N/A",
            "Released": "14 Jul 2023",
            "Runtime": "163 min",
            "Genre": "Action, Comedy, Drama",
            "Director": "Madonne Ashwin",
            "Producer" : "Arun Viswa",
            "musicDirector" : "Bharath Sankar",
            "Writer": "Madonne Ashwin",
            "actors": [
                {
                  "name": "Sivakarthikeyan",
                  "character": "Sathya",
                  "pic" : "https://th.bing.com/th/id/OIP.MpDBxVPWwBNaDEsjQzPT0gHaHn?pid=ImgDet&rs=1"
                },
                {
                  "name": "Aditi Shankar",
                  "character": "Nila",
                  "pic" : "https://www.gethucinema.com/wp-content/uploads/2022/07/AditiShankar-33-1068x1068.jpg"
                },
                {
                  "name": "Saritha ",
                  "character": " Eshwari (Sathya's mother)",
                  "pic" : "https://th.bing.com/th/id/OIP.yS33wgOVwKsDiAWGVVVTTQHaHa?pid=ImgDet&w=500&h=500&rs=1"
                },
                {
                  "name": "Mysskin",
                  "character": "M. N. Jeyakodi, a corrupt minister",
                  "pic" : "https://i1.wp.com/www.newsbugz.com/wp-content/uploads/2018/03/Mysskin-Images-1.jpg?resize=700%2C690&ssl=1"
                },
                {
                  "name": "Sunil",
                  "character": "Paramu",
                  "pic" : "https://www.telugu360.com/wp-content/uploads/2015/08/Sunil1.jpg"
                },
                {
                  "name": "Yogi Babu",
                  "character": "Kumar",
                  "pic" : "https://www.behindwoods.com/tamil-movies-cinema-news-16/images/yogi-babu-turns-hero-for-sam-antons-next-directorial-photos-pictures-stills.jpg"
                }
              ],
            "plot": "A cowardly cartoonist starts being 'controlled' by a cartoon action figure, and takes on a corrupt politician.'Sathya' follows the life of a timid comic book artist who is pushed to the brink when his family is forced to live in a poorly constructed government apartment. After a near-suicidal incident, he begins hearing a mysterious voice, guiding him to expose the corrupt system and the Housing Minister. Despite facing deception and brutality, he stands up for justice. However, when framed as mentally unstable, he loses his home and is beaten. The story takes a surprising turn as he reclaims his purpose, challenges the corrupt Minister, and saves the apartment dwellers, ultimately sacrificing himself in the process. In a twist, he miraculously survives, deaf but guided once again by the enigmatic voice.",
            "Language": "Telugu, Tamil",
            "Country": "India",
            "Awards": "N/A",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYTM0Mzk3MDYtMDQxMS00NjRhLTlmYWEtMTRmNDUzN2RlMmY2XkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "7.4/10"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "7.4",
            "imdbVotes": "6,658",
            "imdbID": "tt22543326",
            "Type": "movie",
            "DVD": "N/A",
            "BoxOffice": "₹35 crore",
            "Gross" :"89 crore",
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
                {movie.Title}</h2></div>
           
            <div className="container ">
            <div className="ratio ratio-21x9">
  <iframe
    src="https://www.youtube-nocookie.com/embed/EcNACt-LOi0?autoplay=1&mute=1"
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
                            src="https://movie.webindia123.com/movie/news/2017/Regional/Tamil/August/Ameer-Sultan.jpg"
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
                            src="https://pbs.twimg.com/profile_images/1365783935037308928/yC_H8i9s_400x400.jpg"
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
                              {movie.Producer}{" "}
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
                            src="https://i.scdn.co/image/ab6761610000e5eb1725d353edbb272af9ad59d4"
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

export default KML8
