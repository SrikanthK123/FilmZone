import React from 'react'

const BML5 = () => {
    const movies = [
        {
            "Title": "The Kerala Story",
            "Year": "2023",
            "Rated": "N/A",
            "Released": "12 May 2023",
            "Runtime": "138 min",
            "Genre": "Drama",
            "Director": "Sudipto Sen, Vipul Amrutlal Shah",
            "Producer" : "	Vipul Amrutlal Shah",
            "musicDirector" : "Viresh Sreevalsa",
            "Writer": "Suryapal Singh, Sudipto Sen, Vipul Amrutlal Shah",
            "actors": [
                {
                    name : "Adah Sharma",
                    character: "Shalini Unnikrishnan / Fatima Ba",
                    pic: "https://th.bing.com/th/id/OIP.II2z5ijMOavcWBkDE34GPwAAAA?pid=ImgDet&w=299&h=299&rs=1"
                },
                {
                    name : "Yogita Bihani",
                    character: "Nimah",
                    pic: "https://th.bing.com/th/id/OIP.K0oXiW-ZUBG8Czct9JbMFwHaH_?pid=ImgDet&rs=1"
                },
                {
                    name : "Sonia Balani",
                    character: "Asifa",
                    pic: "https://starsunfolded.com/wp-content/uploads/2017/12/Sonia-Balani.jpg"
                },
                {
                    name : "Siddhi Idnani",
                    character: "Geetanjali",
                    pic: "https://th.bing.com/th/id/OIP.1FgnOCVE3eOiNvIVk3YAGwHaHa?pid=ImgDet&rs=1"
                },
                {
                    name : "Devadarshini",
                    character: "Shalini's mother",
                    pic: "https://www.filmibeat.com/img/220x100x275/popcorn/profile_photos/devadarshini-20181112152635-3946.jpg"
                },
                
                {
                    name : "Pranav Misshra",
                    character: "Abdul",
                    pic: "https://www.easterneye.biz/wp-content/uploads/2022/04/Pranav-Misshra-3-Copy.jpeg"
                }
              ],
            "Plot": "A converted Muslim woman Fatima Ba narrates her ordeal of how she once wanted to become a nurse but was abducted from her home and manipulated by religious vanguards, turned into an ISIS terrorist and landed in Afghanistan jail.",
            "Language": "Malayalam, Tamil, Telugu, Hindi",
            "Country": "India",
            "Awards": "N/A",
            "Poster": "https://i.ytimg.com/vi/6VAX56iYmZE/maxresdefault.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "7.2/10"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "7.2",
            "imdbVotes": "65,691",
            "imdbID": "tt24268454",
            "Type": "movie",
            "DVD": "N/A",
            "BoxOffice": "₹15–20 crore",
            "Gross" : "₹303.97 crore",
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
              <iframe
                src="https://www.youtube-nocookie.com/embed/3Jk3vquJDGs?autoplay=1&mute=1"
                title="YouTube video"
                allowFullScreen
                style={{ borderRadius: "10px" }}
              ></iframe>
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
                          src="https://m.media-amazon.com/images/M/MV5BYWVmZDA3YWUtNzU4ZS00MzAyLTgzZjUtMjAxMDU2NWMwN2E4XkEyXkFqcGdeQXVyNDM2OTY5OTU@._V1_.jpg"
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
                          src="https://images.cinemaexpress.com/uploads/user/imagelibrary/2019/4/26/original/A477928_gal_20180427141311.jpg"
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
                          src="https://i.ytimg.com/vi/CsWFg_gmEUM/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AGaA4AC4AOKAgwIABABGF4gXiheMA8=&rs=AOn4CLCgfXElVrzGGzJB7siau6VSSDG8cw"
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

export default BML5
