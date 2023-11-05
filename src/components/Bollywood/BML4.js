import React from 'react'

const BML4 = () => {
    const movies = [
        {
            "Title": "Bawaal",
            "Year": "2023",
            "Rated": "N/A",
            "Released": "21 Jul 2023",
            "Runtime": "137 min",
            "Genre": "Action, Drama, Romance",
            "Director": "Nitesh Tiwari",
            "Producer": "Sajid Nadiadwala,Ashwiny Iyer Tiwari",
            "musicDirector": "Mithoon,Tanishk Bagchi,Akashdeep Sengupta",
            "Writer": "Piyush Gupta, Shreyas Jain, Nikhil Mehrotra",
            "actors": [
                {
                    name : "Varun Dhawan",
                    character: "Ajay Dixit",
                    pic: "https://th.bing.com/th/id/OIP.XY8cp3mu30PAMbO9RXaG6wHaHa?pid=ImgDet&w=800&h=800&rs=1"
                },
                {
                    name : "Janhvi Kapoor",
                    character: "Nisha Dixit",
                    pic: "https://data1.ibtimes.co.in/en/full/731713/janhvi-kapoor.jpg"
                },
                {
                    name : "Manoj Pahwa",
                    character: "Mr. Dixit (Ajay's father)",
                    pic: "https://th.bing.com/th/id/OIP.SwUJV-DYjpAT2tW6dINlkQAAAA?pid=ImgDet&rs=1"
                },
                {
                    name : "Anjuman Saxena",
                    character: "Mrs. Dixit (Ajay's mother)",
                    pic: "https://ik.imagekit.io/j83rchiauw/tring/202111111656_q68UKc1zbXfv7dUY.jpg"
                },
                {
                    name : "Mukesh Tiwari",
                    character: "MLA Vishwas Raghuvanshi",
                    pic: "https://starsunfolded.com/wp-content/uploads/2017/06/Mukesh-Tiwari..jpg"
                },
                
                {
                    name : "Shashie Vermaa",
                    character: "Principal",
                    pic: "https://nettv4u.com/imagine/j/i/t/e/n/d/jitendra-tiwari.jpg"
                }
              ],
            "Plot": "A small-town man who falls in love with the most beautiful girl in town. He wants to marry her one day because marrying her can raise his social position.",
            "Language": "Hindi, English",
            "Country": "India",
            "Awards": "N/A",
            "Poster": "https://timesofindia.indiatimes.com/photo/msid-101629963,imgsize-185263.cms",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "6.6/10"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "6.6",
            "imdbVotes": "14,571",
            "imdbID": "tt19755170",
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
              <iframe
                src="https://www.youtube-nocookie.com/embed/NyeG2mLVCS4?autoplay=1&mute=1"
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
                          src="https://images.mid-day.com/images/images/2019/sep/Nitesh-tiwari-suicide_l.jpg"
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
                          src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2019/09/sajid-niteshtiwari-1568184498.jpg"
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
                          src="https://wallpapercave.com/wp/wp8266492.jpg"
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
        <p style={{ color: 'white' }}  data-aos="zoom-in">{actor.character}</p>
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

export default BML4
