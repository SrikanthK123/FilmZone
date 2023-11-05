import React from 'react'

const BML11 = () => {
    const movies = [
        {
            "Title": "IB 71",
            "Year": "2023",
            "Rated": "Not Rated",
            "Released": "12 May 2023",
            "Runtime": "117 min",
            "Genre": "Action, Thriller",
            "Director": "Sankalp Reddy, Lee Whittaker",
            "Producer" : "Krishan Kumar,Bhushan Kumar,Vidyut Jammwal,Abbas Sayyed",
            "musicDirector" : "Prashanth R Vihari,",
            "Writer": "Sahar Quaze, Sankalp Reddy, Vasudev Reddy",
            "actors": [
                {
                    name : "Vidyut Jammwal",
                    character: "IB agent Dev Jammwal",
                    pic: "https://i.pinimg.com/originals/13/bf/4c/13bf4c40b1a17cfb1749577c3e38e717.jpg"
                },
                {
                    name : "Anupam Kher",
                    character: "IB Chief N. S. Avasti",
                    pic : "https://th.bing.com/th/id/OIP.XFp8cYEqGgexy1wRpooa-gAAAA?pid=ImgDet&w=250&h=250&rs=1"
                },
                {
                    name : "Vishal Jethwa ",
                    character: "Qasim Qureshi",
                    pic: "https://i.pinimg.com/originals/69/a3/00/69a300bbd233cd54ae66f480bdf3e2c0.jpg"
                },
                {
                    name : "Danny Sura",
                    character: "Sikander",
                    pic: "https://th.bing.com/th/id/OIP.PcYWjfRVGOKes1sBqfq1aAHaIH?pid=ImgDet&rs=1"
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
            "Plot": "A two- front war between Indian intelligence agencies and the Pakistani establishment.",
            "Language": "Hindi, Telugu, Tamil",
            "Country": "India",
            "Awards": "N/A",
            "Poster": "https://i.ytimg.com/vi/LNXlvk9Uqxc/maxresdefault.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "7.2/10"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "7.2",
            "imdbVotes": "9,421",
            "imdbID": "tt15073166",
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
            <iframe src="https://www.youtube-nocookie.com/embed/-V9tu8rqWIg?autoplay=1&mute=1" title="YouTube video" allowFullScreen style={{borderRadius: "10px"}}></iframe>

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
                          src="https://cdn.123telugu.com/content/wp-content/uploads/2018/12/Sankalp-Reddy-m.jpg"
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
                          src="https://datastore05.rediff.com/h1500-w1500/thumb/4F6259655A5464655B656B586A636B716D72/3xvljmspottpuhhc.D.0.Kishen-Kumar-and-Bhushan-Kumar-of-T-Series-at-the-first-look-launch-of-film-AASHIQUI-2.JPG"
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
                          src="https://i.ytimg.com/vi/UB7TR-Hpx1c/maxresdefault.jpg"
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

export default BML11
