import React from 'react'

const KML1 = () => {
    const movies = [
      {
        "Title": "Jailer",
        "Year": "2023",
        "Rated": "N/A",
        "Released": "10 Aug 2023",
        "Runtime": "168 min",
        "Genre": "Action, Comedy, Crime",
        "Director": "Nelson Dilipkumar",
        "Producer" : "Kalanithi Maran",
        "musicDirector" : "Anirudh Ravichander",
        "Writer": "Nelson Dilipkumar",
        "actors": [
          {
              name : "Rajinikanth",
              character: " 'Tiger' Muthuvel Pandian",
              pic: "https://th.bing.com/th/id/OIP.NezFBvKRmuJUPqucenKifgAAAA?pid=ImgDet&rs=1"
          },
          {
              name : "Vinayakan",
              character: "Varman",
              pic : "https://static.toiimg.com/thumb/msid-69881925,imgsize-67491,width-400,resizemode-4/69881925.jpg"
          },
          {
              name : "Ramya Krishnan",
              character: " Vijaya 'Viji' Pandian",
              pic: "https://th.bing.com/th/id/OIP.Nl9JqFtDUTHbRiXjuE7xfwHaHr?pid=ImgDet&rs=1"
          },
          {
              name : "Vasanth Ravi",
              character: " ACP Arjun Pandian",
              pic: "https://th.bing.com/th/id/OIP.nXFgHl63RX6Z8menyRcaEgHaHa?pid=ImgDet&rs=1"
          },
          {
              name : "Tamannaah",
              character: "Kamna",
              pic: "https://www.theindianwire.com/wp-content/uploads/2019/08/tamannaah.jpg"
          },
          
          {
              name : "Sunil",
              character: "Blast Mohan",
              pic: "https://www.telugu360.com/wp-content/uploads/2015/08/Sunil1.jpg"
          }
        ],
        "Plot": "A retired jailer goes on a manhunt to find his son's killers. But the road leads him to a familiar, albeit a bit darker place. Can he emerge from this complex situation successfully?",
        "Language": "Tamil, Malayalam, Hindi, Telugu, Kannada",
        "Country": "India",
        "Awards": "N/A",
        "Poster": "https://i.ytimg.com/vi/dPjsE-u2wdw/maxresdefault.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "7.1/10"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "7.1",
        "imdbVotes": "24,346",
        "imdbID": "tt11663228",
        "Type": "movie",
        "DVD": "N/A",
        "BoxOffice": "₹200–250 crore",
        "Gross" : " ₹605 crore",
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
            <iframe src="https://www.youtube-nocookie.com/embed/xenOE1Tma0A?autoplay=1&mute=1" title="YouTube video" allowFullScreen style={{borderRadius: "10px"}}></iframe>

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
                          src="https://i.cdn.newsbytesapp.com/images/l71220220621090220.jpeg"
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
                          src="https://starsunfolded.com/wp-content/uploads/2018/04/Kalanithi-Maran.jpg"
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

export default KML1
