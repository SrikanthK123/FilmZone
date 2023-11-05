import React from 'react'

const HML4 = () => {
    const movies = [
        {
            "Title": "Avatar",
            "Year": "2009",
            "Rated": "PG-13",
            "Released": "18 Dec 2009",
            "Runtime": "162 min",
            "Genre": "Action, Adventure, Fantasy",
            "Director": "James Cameron",
            "Producer": "James Cameron",
            "musicDirector" : "James Horner",
            "Writer": "James Cameron",
            "actors": [
                {
                    name : "Sam Worthington",
                    character: "Corporal Jake Sully",
                    pic: "https://files.thehandbook.com/uploads/2014/10/sam-worthington-shoots-back-02.jpg"
                },
                {
                    name : "Zoe Saldaña",
                    character: "Neytiri te Tskaha Mo'at'ite",
                    pic: "https://th.bing.com/th/id/R.d82c6d30d660524bbfc2b739a941ef5e?rik=ZL5p7gVR5x9G%2fA&riu=http%3a%2f%2fhairstyles.thehairstyler.com%2fhairstyle_views%2ffront_view_images%2f2111%2foriginal%2fZoe-Saldana.jpg&ehk=m0vCAUPs2LqtZTmExnzn%2bcSEx47ULxCZbIREpiZYHl0%3d&risl=&pid=ImgRaw&r=0"
                },
                {
                    name : " Stephen Lang ",
                    character: " Colonel Miles Quaritch",
                    pic: "https://www.thefamouspeople.com/profiles/images/stephen-lang-3.jpg"
                },
                {
                    name : "Giovanni Ribisi",
                    character: "Parker Selfridge",
                    pic: "https://th.bing.com/th/id/R.26718c667465577da1b5fa0aa0010b05?rik=yrKbQHcykQWUew&riu=http%3a%2f%2ftonyortega.org%2fwp-content%2fuploads%2f2016%2f09%2fGiovanni_Ribisi-e1474254255936.jpg&ehk=WQkLUx%2bTwn3mSuJToMBEX3gFWpI06HFRkw0qld5zMsw%3d&risl=&pid=ImgRaw&r=0"
                },
                {
                    name : "Wes Studi",
                    character: "Eytukan te Tskaha Kamun'itan",
                    pic: "https://th.bing.com/th/id/R.42918b89ee505efaa6d92a89b775d043?rik=8mXFi8cJhssrjg&riu=http%3a%2f%2fethnicelebs.com%2fwp-content%2fplugins%2ffeatured-post-with-thumbnail%2fscripts%2ftimthumb.php%3fsrc%3dhttp%3a%2f%2fethnicelebs.com%2fwp-content%2fuploads%2f2016%2f04%2fbigstock-LOS-ANGELES-JUL-Wes-Stu-68701762-Wes-Studi-400x600.jpg%26h%3d300%26w%3d300%26zc%3d1&ehk=vScnWDwPIXXdLjTOKO4%2fQymsUNmR7JGuD5er6%2bgcjgA%3d&risl=&pid=ImgRaw&r=0"
                },
                {
                    name : " Joel David Moore",
                    character: "Dr. Norm Spellman",
                    pic: "https://i.pinimg.com/originals/2b/78/65/2b7865672b8300edf42065ea210c72b1.jpg"
                },
              ],
            "Plot": "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
            "Language": "English, Spanish",
            "Country": "United States",
            "Awards": "Won 3 Oscars. 90 wins & 131 nominations total",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "7.9/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "81%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "83/100"
                }
            ],
            "Metascore": "83",
            "imdbRating": "7.9",
            "imdbVotes": "1,361,917",
            "imdbID": "tt0499549",
            "Type": "movie",
            "DVD": "10 Feb 2016",
            "BoxOffice": "$237 million",
            "Gross":"	$2.923 billion",
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
                src="https://www.youtube-nocookie.com/embed/5PSNL1qE6VY?autoplay=1&mute=1"
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
                    <h4 style={{ color: '#f70776' }}>Gross - <span style={{ color: '#9896f1' }}>{movie.Gross}</span></h4>
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
                          src="https://th.bing.com/th/id/OIP.j6zFaofT3XKLNFX2VfhqlgHaE8?pid=ImgDet&rs=1"
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
                          src="https://th.bing.com/th/id/OIP.j6zFaofT3XKLNFX2VfhqlgHaE8?pid=ImgDet&rs=1"
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
                          src="https://th.bing.com/th/id/OIP.TxDbz3cRhqONQSN5vPFsKwHaEo?pid=ImgDet&rs=1"
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

export default HML4
