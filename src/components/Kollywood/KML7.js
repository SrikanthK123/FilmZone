import React from 'react'

const KML7 = () => {
    const movies = [
        {
            "Title": "Mark Antony",
            "Year": "2023",
            "Rated": "N/A",
            "Released": "15 Sep 2023",
            "Runtime": "150 min",
            "Genre": "Action, Comedy, Drama",
            "Director": "Adhik Ravichandran",
            "Producer" : "S. Vinod Kumar",
            "musicDirector" : "G. V. Prakash Kumar",
            "Writer": "SJ Arjun, Savari Muthu, Adhik Ravichandran",
            "actors": [
                {
                  "name": "Vishal",
                  "character": "Antony",
                  "pic" : "https://www.behindwoods.com/tamil-movies-cinema-news-16/images/vishal-to-play-a-triple-action-role-for-naalai-namadhe-photos-pictures-stills.jpg"
                },
                {
                  "name": "S. J. Suryah",
                  "character": "Jackie Pandian",
                  "pic" : "https://www.behindwoods.com/tamil-movies/slideshow/list-of-tamil-directors-who-played-cameos-in-their-own-films/images/sj-suryah.jpg"
                },
                {
                  "name": "Ritu Varma",
                  "character": "Ramya",
                  "pic" : "https://i2.cinestaan.com/image-bank/1500-1500/100001-101000/100667.jpg"
                },
                {
                  "name": "Sunil",
                  "character": "Ekambaram",
                  "pic" : "https://www.telugu360.com/wp-content/uploads/2015/08/Sunil1.jpg"
                },
                {
                  "name": "Selvaraghavan",
                  "character": "Chiranjeev",
                  "pic" : "https://www.sunpictures.in/wp-content/uploads/2021/08/Selvaraghavan.jpg"
                },
                {
                  "name": "Y. G. Mahendran",
                  "character": "Gowri",
                  "pic" : "https://cdn.celebsagewiki.com/images/42/y-g-mahendran.jpg"
                }
              ],
            "plot": "Two gangsters, Mark and Antony acquire a mobile phone that has the ability to time travel.In 1975, a scientist named Chiranjeevi invents a time-altering telephone, but dies after a gangster, Antony, is killed. In 1995, Antony's son Mark discovers the phone, learning the truth about his father's innocence and Jackie's betrayal. Mark alters history, but awakens in Jackie's place as a gangster. A battle ensues, with Antony surviving and revealing he was saved by Ekambaram, gaining Colombian underworld partnership. They defeat Jackie and Mark reunites with his father, using the phone to save Chiranjeevi from Jackie's threats in the past.",
            "Language": "Tamil, Telugu, Malayalam, Kannada",
            "Country": "India",
            "Awards": "N/A",
            "Poster": "https://www.nowrunning.com/content/movie/2022/mark-26088/bg-video382023112217.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "7.2/10"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "7.2",
            "imdbVotes": "1,925",
            "imdbID": "tt23052532",
            "Type": "movie",
            "DVD": "N/A",
            "BoxOffice": "N/A",
            "Gross": "N/A",
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
    src="https://www.youtube-nocookie.com/embed/Dg8X7SZ_4bs?autoplay=1&mute=1"
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
                            src="https://www.glamsham.com/wp-content/uploads/2022/05/Adhik-Ravichandran-_-pic-courtesy-adhik-co-in.jpg"
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
                            src="https://th.bing.com/th?id=OIF.oYJ%2f08rsUfM6UuR1Dri09A&pid=ImgDet&rs=1"
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
                            src="https://th.bing.com/th/id/OIP.BiRhbv8a7Ce17nvY1zyIbAHaE8?pid=ImgDet&rs=1"
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

export default KML7
