import React from 'react'

const BML12 = () => {
    const movies = [
        {
            "Title": "Mission Majnu",
            "Year": "2023",
            "Rated": "TV-MA",
            "Released": "20 Jan 2023",
            "Runtime": "129 min",
            "Genre": "Action, Drama, History",
            "Director": "Shantanu Bagchi",
            "Producer" : "Ronnie Screwvala",
            "musicDirector" : "Ketan Sodha",
            "Writer": "Parveez Sheikh, Aseem Arrora, Sumit Batheja",
            "actors": [
                {
                    name : "Sidharth Malhotra",
                    character: " Amandeep Ajitpal Singh IPS (Aman)",
                    pic: "https://3.bp.blogspot.com/-Q29Yux9jdyw/W5LwAhf5okI/AAAAAAAABkM/O9xnXjsNQTUJmf3clGWtFIrLqRwKt8rBwCLcBGAs/s320/18253128_124137334805857_8751600188973383680_n.jpg"
                },
                {
                    name : "Rashmika Mandanna",
                    character: "Nasreen Hussain/Nasreen Singh",
                    pic : "https://i.pinimg.com/280x280_RS/4d/e4/1b/4de41ba3d92e8b99cf4ab7db01389fca.jpg"
                },
                {
                    name : "Parmeet Sethi",
                    character: "R.N. Kao",
                    pic: "https://images.mubicdn.net/images/cast_member/236466/cache-396426-1544496251/image-w856.jpg"
                },
                {
                    name : "Sharib Hashmi",
                    character: "Aslam Usmaniya ( a RAW field agent)",
                    pic: "https://images.plex.tv/photo?size=small-120&scale=2&url=https:%2F%2Fmetadata-static.plex.tv%2F8%2Fpeople%2F889d15ecbcafefbfc46bede57c3c8604.jpg"
                },
                {
                    name : "Suvrat Joshi",
                    character: "agent Sangram",
                    pic: "https://weekendleave.com/in/wp-content/uploads/2022/08/suvrat-joshi.jpg"
                },
                
                {
                    name : "Hobby Dhaliwal",
                    character: "Abdul Hamid Khan",
                    pic: "https://th.bing.com/th/id/OIP.8-P6QSYCKWzFFP99GesDYAAAAA?pid=ImgDet&rs=1"
                }
              ],
            "Plot": "In the 1970s, an undercover Indian spy takes on a deadly mission to expose a covert nuclear weapons program in the heart of Pakistan.",
            "Language": "Hindi",
            "Country": "India",
            "Awards": "3 wins & 3 nominations",
            "Poster": "https://i.ytimg.com/vi/UktTIIiu8ZY/maxresdefault.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "7.1/10"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "7.1",
            "imdbVotes": "42,878",
            "imdbID": "tt13131232",
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
          <div className="container pt-3">
            <h2 className="pb-2" style={{ color: "white", marginBottom: '50px' }}>
              {movie.Title}
            </h2>
          </div>

          <div className="container">
            <div className="ratio ratio-21x9">
            <iframe src="https://www.youtube-nocookie.com/embed/Gw77Nx4eBMc?autoplay=1&mute=1" title="YouTube video" allowFullScreen style={{borderRadius: "10px"}}></iframe>

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
                          src="https://starsunfolded.com/wp-content/uploads/2023/04/Shantanu-Bagchi.jpg"
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
                          src="https://th.bing.com/th/id/OIP.qcepdueaLFKstPZZGZuC7QHaEH?pid=ImgDet&rs=1"
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
                          src="https://m.media-amazon.com/images/M/MV5BOWU3ODAwMmItMzFiMy00MjgzLWJjZTgtZGJlNTBhOTVmNjljXkEyXkFqcGdeQXVyMjE1MTg0ODg@._V1_FMjpg_UX1000_.jpg"
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

export default BML12
