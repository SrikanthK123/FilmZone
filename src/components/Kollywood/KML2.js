import React from 'react'

const KML2 = () => {
    const movies = [
        {
            "Title": "Leo",
            "Year": "2023",
            "Rated": "N/A",
            "Released": "19 Oct 2023",
            "Runtime": "168 min",
            "Genre": "Action, Comedy, Crime",
            "Director": "Lokesh Kanagaraj",
            "Producer" : "S. S. Lalit Kumar,Jagadish Palanisamy",
            "musicDirector" : "Anirudh Ravichander",
            "Writer": "Lokesh Kanagaraj",
            "actors": [
                {
                    name : "Vijay",
                    character: "Parthiban 'Parthi' / Leo Das",
                    pic: "https://yt3.googleusercontent.com/UZjbHp99xbCsAmTx8pmAgnzZ-J_KxPJLtNa20bMccfoR5rn7uuGyraxxdmItOwVpkfT_b8er=s900-c-k-c0x00ffffff-no-rj"
                },
                {
                    name : "Sanjay Dutt",
                    character: "Antony Das",
                    pic : "https://pbs.twimg.com/profile_images/1086642346446413824/5membay5_400x400.jpg"
                },
                {
                    name : "Arjun",
                    character: "Harold Das",
                    pic: "https://th.bing.com/th/id/R.e2ce2001900aaf0ef429bfa74a955c20?rik=H2uX4cIc63G0Ng&riu=http%3a%2f%2fwww.behindwoods.com%2ftamil-movies%2fslideshow%2fyou-will-be-shocked-to-know-these-actors-real-names%2fimages%2farjun-sarja-srinivasa-sarja.jpg&ehk=e5s5595wsH8uilCwf9YcLiXJ4xI4RwFxEZrHXibhb%2bo%3d&risl=&pid=ImgRaw&r=0"
                },
                {
                    name : "Trisha",
                    character: "Sathya",
                    pic: "https://th.bing.com/th/id/R.44cf292ec4ed0d333690bec05f62680c?rik=ZdsjAkmyoHUxdg&riu=http%3a%2f%2f2.bp.blogspot.com%2f-kCsPHwX5HBQ%2fUfkXtnrB1TI%2fAAAAAAAAAuQ%2fbyrFx2QqNCM%2fs1600%2ftrisha-stills-61.jpg&ehk=IUEa%2fV0pm%2fppmtMSV1XXCIglLSp11DWJRGMSZt%2fbJnY%3d&risl=&pid=ImgRaw&r=0"
                },
                {
                    name : "Gautham Vasudev Menon",
                    character: "Joshy Andrews",
                    pic: "https://th.bing.com/th/id/OIP.7RqCKUu02Hper0zTYk3EJwHaHa?pid=ImgDet&w=600&h=600&rs=1"
                },
                
                {
                    name : "George Maryan",
                    character: "Napoleon",
                    pic: "https://lk-aps.bmscdn.com/Artist/4279.jpg"
                }
              ],
            
            "Language": "Tamil, Malayalam, Hindi, Telugu, Kannada",
            "Country": "India",
            "Awards": "N/A",
            "Poster": "https://wallpapercave.com/wp/wp12185319.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "7.1/10"
                }
            ],
            "Plot" : "Parthiban, an animal rescuer and café owner, faces a threat when he kills robbers in self-defense. Gangster Antony Das believes Parthiban is his presumed-dead son Leo Das. With police protection by officer Napoleon, Parthiban denies his identity, sparking investigations into his past. In a flashback, Leo and Elisa worked for their father's illegal Datura drug business, and Leo was presumed dead after a conflict. In the present, Leo confronts Antony's gang and saves his family while confronting his past. Ultimately, Leo acknowledges his identity as he eliminates the threats and seeks to eradicate drugs in society.",
            "Metascore": "N/A",
            "imdbRating": "7.9",
            "imdbVotes": "24,346",
            "imdbID": "tt11663228",
            "Type": "movie",
            "DVD": "N/A",
            "BoxOffice": "₹250–350 crore",
            "Gross": "₹543 crore",
            "Website": "N/A",
            "Response": "True"
        }
    ]
  return (
    <>
       <div className="shyamMain">
      {movies.map((movie, index) => (
        <div key={index} className="movie-card">
          <div className="container pt-3">
            <h2 className="pb-2" style={{ color: "white", marginBottom: '50px' }}>
              {movie.Title}
            </h2>
          </div>

          <div className="container">
            <div className="ratio ratio-21x9">
            <iframe src="https://www.youtube-nocookie.com/embed/Po3jStA673E?autoplay=1&mute=1" title="YouTube video" allowFullScreen style={{borderRadius: "10px"}}></iframe>

            </div>

            <div className="container px-4 py-5">
              <h2 className="pb-2 border-bottom" style={{ color: "#53a8b6" }}>
                About Movie
              </h2>

              <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
                <div className="col d-flex flex-column align-items-start gap-2">
                  <h2 className="fw-bold" style={{ color: "#f70776" }}>
                    Story
                  </h2>
                  <p style={{ color: "white", textAlign: 'justify' }}>{movie.Plot}</p>
                  <div className="mb-5">
                    <h4 style={{ color: '#f70776' }}>Budget - <span style={{ color: '#9896f1' }}>{movie.BoxOffice}</span></h4>
                    <h4 style={{ color: '#f70776' }}>BoxOffice - <span style={{ color: '#9896f1' }}>{movie.Gross}</span></h4>
                  </div>
                
                </div>

                <div>
                  <ul className="list-unstyled">
                    <li data-aos="zoom-in">
                      <a
                        className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none"
                        href="#"
                      >
                        <img
                          style={{
                            borderRadius: "20px",
                            boxShadow: "0 0 10px #00bbf0",
                          }}
                          src="https://jfwonline.com/wp-content/uploads/2022/08/Lokesh-Kanagaraj.jpg"
                          alt="director"
                          width="160px"
                        />
                        <div className="col-lg-8">
                          <h6 style={{ color: "white" }} className="mb-0">
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
                        className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none"
                        href="#"
                      >
                        <img
                          style={{
                            borderRadius: "20px",
                            boxShadow: "0 0 10px #00bbf0",
                          }}
                          src="https://glamsham.com/wp-content/uploads/2023/03/Jagadish-Palanisamy-with-Thalapathy-Vijay-1068x601.jpeg"
                          alt="Producer"
                          width="160px"
                          height="100px"
                        />
                        <div className="col-lg-8">
                          <h6 style={{ color: "white" }} className="mb-0">
                            Producer
                          </h6>
                          <small style={{ color: "white" }}>
                            {movie.Producer} {/* Replace with the actual producer's name */}
                          </small>
                        </div>
                      </a>
                    </li>
                    <li data-aos="zoom-in">
                      <a
                        className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none"
                        href="#"
                      >
                        <img
                          style={{
                            borderRadius: "20px",
                            boxShadow: "0 0 10px #00bbf0",
                          }}
                          src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202004/Anirudh.jpeg?8_3B9d6UO61on3Aa_cUVDa4hgGeIassc&size=770:433"
                          alt="music director"
                          width="160px"
                          height="100px"
                        />
                        <div className="col-lg-8">
                          <h6 style={{ color: "white" }} className="mb-0">
                            Music Director
                          </h6>
                          <small style={{ color: "white" }}>
                            {movie.musicDirector} {/* Replace with the actual music director */}
                          </small>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <h2 className="pb-2 border-bottom" style={{ color: "#53a8b6", marginBottom: '50px' }}>
                Star Cast
              </h2>
              <div className="container marketing">
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

export default KML2
