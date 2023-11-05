import React from 'react'

const BML7 = () => {
    const movies = [
        {
            "Title": "Bholaa",
            "Year": "2023",
            "Rated": "Not Rated",
            "Released": "30 Mar 2023",
            "Runtime": "144 min",
            "Genre": "Action, Adventure, Crime",
            "Director": "Ajay Devgn",
            "Producer" : "Ajay Devgn,Bhushan Kumar",
            "musicDirector" : "Ravi Basrur",
            "Writer": "Lokesh Kanagaraj, Ankush Singh, Aamil Keeyan Khan",
            "actors": [
                {
                    name : "Ajay Devgn",
                    character: "Bholaa",
                    pic: "https://i.pinimg.com/736x/ac/5a/91/ac5a91c704e805b31a2663ffd15d62f6.jpg"
                },
                {
                    name : "Tabu",
                    character: "SP Diana Joseph",
                    pic : "https://th.bing.com/th/id/R.a92454b883bffdf6312bb4a97dbe6938?rik=GqKNcJQKvEHh8Q&riu=http%3a%2f%2fimages.indianexpress.com%2f2017%2f01%2ftabu-3.jpg&ehk=XsyjVgxD3gQ8jrFyUv6iBXC5dOABIGpwJNkdj6fVeBg%3d&risl=&pid=ImgRaw&r=0"
                },
                {
                    name : "Sanjay Mishra",
                    character: "Constable Angad Yadav",
                    pic: "https://1.bp.blogspot.com/-_LK1QaWwnns/W1gxrMTH60I/AAAAAAAAXWQ/rrFTsAV_uiwY_ggHhBg06ELj5TM0AdgIgCLcBGAs/s1600/sanjay.JPG"
                },
                {
                    name : "Gajraj Rao",
                    character: "Devraj Subramaniam",
                    pic: "https://th.bing.com/th/id/OIP.a7YWim6wpDUGu5SbhSmRIAAAAA?pid=ImgDet&rs=1"
                },
                {
                    name : "Vineet Kumar",
                    character: "Nithari (Ashu's elder brother)",
                    pic: "https://th.bing.com/th/id/OIP.fIq5reTsxAMKVUPVuzUiUwAAAA?pid=ImgDet&rs=1"
                },
                
                {
                    name : "Makarand Deshpande",
                    character: "a prisoner",
                    pic: "https://superstarsbio.com/wp-content/uploads/2020/03/Makarand-Deshpande-bio.jpg"
                }
              ],
            "Plot": "After getting out of prison with the desire to meet his daughter, Bholaa's plans are interrupted by a well-orchestrated drug bust.",
            "Language": "Hindi",
            "Country": "India",
            "Awards": "N/A",
            "Poster": "https://i.ytimg.com/vi/za7et_lK_NU/maxresdefault.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "6.0/10"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "6.0",
            "imdbVotes": "21,830",
            "imdbID": "tt15302222",
            "Type": "movie",
            "DVD": "N/A",
            "BoxOffice": "₹100 crore",
            "Gross" : "	₹112 crore",
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
                src="https://www.youtube-nocookie.com/embed/K-EMszLvRIQ?autoplay=1&mute=1"
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
                          src="https://images.thequint.com/thequint/2016-10/3ee65c25-dafe-43bf-b132-0f21e88a61d1/Untitled%20design%20(77).jpg?rect=0%2C0%2C1920%2C1080&auto=format%2Ccompress&fmt=webp"
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
                          src="https://i.zoomtventertainment.com/story/mkj.jpg"
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
                          src="https://th.bing.com/th/id/OIP.RZLu2nMiFeetMYVu10dJsQHaFL?pid=ImgDet&rs=1"
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

export default BML7
