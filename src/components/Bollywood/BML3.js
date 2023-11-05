import React from 'react'

const BML3 = () => {
    const movies = [
        {
            "Title": "Jawan",
            "Year": "2023",
            "Rated": "Not Rated",
            "Released": "07 Sep 2023",
            "Runtime": "169 min",
            "Genre": "Action, Thriller",
            "Director": "Atlee",
            "Producer" : "	Gauri Khan, Gaurav Verma",
            "musicDirector" : "Anirudh Ravichander",
            "Writer": "Sumit Arora, Atlee, Ramanagirivasan",
            "actors": [
                {
                    name : "Shah Rukh Khan ",
                    character: "Captain Vikram Rathore, an ex-commando",
                    pic: "https://th.bing.com/th/id/R.6db20567ba6b5f68aa184cab1d5489ad?rik=orUfWiNbWQr1yg&riu=http%3a%2f%2fstatic.dnaindia.com%2fsites%2fdefault%2ffiles%2f2015%2f01%2f27%2f305036-srk.jpg&ehk=P3SZJIdojjcIeiN79wzys6BR5lId87TgKGrwJ%2bw1Rao%3d&risl=&pid=ImgRaw&r=0"
                },
                {
                    name : " Deepika Padukone",
                    character: "Aishwarya Rathore",
                    pic: "https://i.pinimg.com/originals/27/48/7f/27487f922911385460189dd0b0db8fbd.jpg"
                },
                {
                    name : " Nayanthara",
                    character: "Narmada Rai (the head of Force One)",
                    pic: "https://i.pinimg.com/originals/3a/aa/21/3aaa216e7f798e1f8e25eac71c4a3f20.jpg"
                },
                {
                    name : "Vijay Sethupathi",
                    character: "Kalee Gaikwad (an arms dealer)",
                    pic: "https://th.bing.com/th/id/OIP.3XGSxlKxyZPaF1r1175iFAHaHa?pid=ImgDet&rs=1"
                },
                {
                    name : "Priyamani",
                    character: "Lakshmi",
                    pic: "https://th.bing.com/th/id/OIP.J6c5phB8LMMumx7EHKZ74QAAAA?pid=ImgDet&rs=1"
                },
                {
                    name : "Sunil Grover",
                    character: "Irani",
                    pic: "https://i0.wp.com/familytreebio.com/wp-content/uploads/2022/01/Sunil-Grover-Solo-2.png?resize=269%2C289&ssl=1"
                },
              ],
            "Plot": "A high-octane action thriller which outlines the emotional journey of a man who is set to rectify the wrongs in the society.",
            "Language": "Hindi, English",
            "Country": "India",
            "Awards": "N/A",
            "Poster": "https://ibomma.org.in/wp-content/uploads/2023/09/jawan-768x960.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "7.5/10"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "7.5",
            "imdbVotes": "60,891",
            "imdbID": "tt15354916",
            "Type": "movie",
            "DVD": "N/A",
            "BoxOffice": "$14,735,611",
            "Gross" : "$440 million",
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
                src="https://www.youtube-nocookie.com/embed/COv52Qyctws?autoplay=1&mute=1"
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
                          src="https://images.mid-day.com/images/images/2022/mar/Siddharth-Anand-al_e.jpg"
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
                          src="https://th.bing.com/th/id/R.9b7a5eb034b15809816d664e88715940?rik=CL5PmDiwTd8jJQ&riu=http%3a%2f%2fwww.weupdated.com%2fwp-content%2fuploads%2f2019%2f11%2fAditya-Chopra.jpg%3fx99691&ehk=SzD6nJnm0HH4ecxKRjfYDiJ%2bnBldBhGVEXl1Iz2%2bCHg%3d&risl=&pid=ImgRaw&r=0"
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

export default BML3
