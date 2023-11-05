import React from 'react'

const BML1 = () => {
    const movies = [
        {
            "Title": "Pathaan",
            "Year": "2023",
            "Rated": "Not Rated",
            "Released": "25 Jan 2023",
            "Runtime": "146 min",
            "Genre": "Action, Adventure, Thriller",
            "Director": "Siddharth Anand",
            "Producer": "Aditya Chopra",
            "musicDirector" : "Sanchit Balhara, Ankit Balhara",
            "Writer": "Shridhar Raghavan, Abbas Tyrewala, Siddharth Anand",
            "actors": [
                {
                    name : "Shah Rukh Khan ",
                    character: "Pathaan (a RAW agent)",
                    pic: "https://th.bing.com/th/id/R.6db20567ba6b5f68aa184cab1d5489ad?rik=orUfWiNbWQr1yg&riu=http%3a%2f%2fstatic.dnaindia.com%2fsites%2fdefault%2ffiles%2f2015%2f01%2f27%2f305036-srk.jpg&ehk=P3SZJIdojjcIeiN79wzys6BR5lId87TgKGrwJ%2bw1Rao%3d&risl=&pid=ImgRaw&r=0"
                },
                {
                    name : " Deepika Padukone",
                    character: " Dr. Rubina Mohsin (an ISI agent)",
                    pic: "https://i.pinimg.com/originals/27/48/7f/27487f922911385460189dd0b0db8fbd.jpg"
                },
                {
                    name : " John Abraham ",
                    character: "Jim (leader of Outfit X and a former RAW Agent)",
                    pic: "https://i.pinimg.com/originals/f6/5d/27/f65d27688f42d2ab3cd7e713d55088ab.jpg"
                },
                {
                    name : "Dimple Kapadia",
                    character: "Nandini Grewal",
                    pic: "https://im.indiatimes.in/content/2019/May/dimple_kapadia_1558591950_725x725.jpg"
                },
                {
                    name : "Ashutosh Rana",
                    character: "Colonel Sunil Luthra",
                    pic: "https://www.glamsham.com/wp-content/uploads/2020/02/ashutosh-rana-in-savdhaan-india1-20190124155717519.jpg"
                },
                {
                    name : " Prakash Belawadi",
                    character: "Dr. Sahani",
                    pic: "https://www.wikibiodata.com/wp-content/uploads/2020/09/Prakash-Belawadi.jpg"
                },
              ],
            "Plot": "An Indian agent races against a doomsday clock as a ruthless mercenary, with a bitter vendetta, mounts an apocalyptic attack against the country.",
            "Language": "Hindi, English, Russian",
            "Country": "India",
            "Awards": "2 wins & 4 nominations",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYTgzNjBjYTctOGJiZi00MTliLTk0YzYtNDJmYTQyMDdkMjQ5XkEyXkFqcGdeQXVyNTkzNDQ4ODc@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "5.9/10"
                },
                {
                    "Source": "Metacritic",
                    "Value": "47/100"
                }
            ],
            "Metascore": "47",
            "imdbRating": "5.9",
            "imdbVotes": "147,688",
            "imdbID": "tt12844910",
            "Type": "movie",
            "DVD": "N/A",
            "BoxOffice": "$17,487,476",
            "Gross" : "$130 million",
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
                src="https://www.youtube-nocookie.com/embed/vqu4z34wENw?autoplay=1&mute=1"
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
                          src="https://res.cloudinary.com/jerrick/image/upload/c_scale,f_jpg,q_auto/dmwrl3avab26py8gcnoz.jpg"
                          alt="music director"
                          width="160px"
                          height="100px"
                        />
                        <div className="col-lg-8">
                          <h6 style={{ color: "white" }} className="mb-0">
                            Music Director
                          </h6>
                          <small style={{ color: "white" }}>
                            {movie.Writer} {/* Replace with the actual music director */}
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

export default BML1
