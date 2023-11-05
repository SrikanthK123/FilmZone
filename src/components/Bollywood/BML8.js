import React from 'react'

const BML8 = () => {
    const movies = [
        {
            "Title": "Selfiee",
            "Year": "2023",
            "Rated": "N/A",
            "Released": "24 Feb 2023",
            "Runtime": "148 min",
            "Genre": "Action, Comedy, Drama",
            "Director": "Raj Mehta",
            "Producer" : "Karan Johar",
            "musicDirector" : "	Anu Malik,Tanishk Bagchi,Yo Yo Honey Singh",
            "Writer": "Sachy, Rishabh Sharma",
            "actors": [
                {
                    name : "Akshay Kumar",
                    character: "Vijay Kumar",
                    pic: "https://www.adgully.com/img/800/202009/akshayy.png.jpg"
                },
                {
                    name : "Emraan Hashmi",
                    character: "RTO Inspector Om Prakash Aggarwal",
                    pic : "https://th.bing.com/th/id/OIP.VOhD0JukHhuTkYt_JZCQCwHaHa?pid=ImgDet&rs=1"
                },
                {
                    name : "Diana Penty",
                    character: "Naina (Vijay's wife)",
                    pic: "https://th.bing.com/th/id/OIP.69KeIZBO0JPQ7JbduB-rAAAAAA?pid=ImgDet&rs=1"
                },
                {
                    name : "Nushrratt Bharuccha",
                    character: "Minty Aggarwal (Om's wife)",
                    pic: "https://s2.filmytoday.com/albums/Bollywood/2021/May/20/Nushrat_Bharucha_Latest_Photos/785355fa491f67c68e5816436e3b3eae.jpg"
                },
                {
                    name : "Mahesh Thakur",
                    character: "Naveen",
                    pic: "https://www.tellyfeed.net/wp-content/uploads/2018/08/Mahesh-Thakur-as-Tej-cast-on-Game-of-Love-StarLife.jpg"
                },
                
                {
                    name : "Adah Sharma",
                    character: "Meera",
                    pic: "https://th.bing.com/th/id/OIP.II2z5ijMOavcWBkDE34GPwAAAA?pid=ImgDet&w=299&h=299&rs=1"
                }
              ],
            "Plot": "Bollywood superstar Vijay Kumar needs to obtain a new driving license from RTO officer Om Prakash Agarwal, a diehard fan of Vijay. A misunderstanding escalates into a feud which is played out in front of the entire country.",
            "Language": "Hindi",
            "Country": "India",
            "Awards": "N/A",
            "Poster": "https://i.ytimg.com/vi/abBafZWTFXk/maxresdefault.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "5.7/10"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "5.7",
            "imdbVotes": "12,907",
            "imdbID": "tt15516726",
            "Type": "movie",
            "DVD": "N/A",
            "BoxOffice": "$335,775",
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
            <iframe src="https://www.youtube-nocookie.com/embed/lS1KScfdr70?autoplay=1&mute=1" title="YouTube video" allowFullScreen style={{borderRadius: "10px"}}></iframe>

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
                          src="https://www.tellychakkar.com/sites/www.tellychakkar.com/files/styles/display_665x429/public/images/movie_image/2020/01/11/raj.jpg?itok=Kbw8Oa9U"
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
                          src="https://data1.ibtimes.co.in/en/full/737721/karan-johar.jpg"
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
                          src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/03/24/805361-yoyohoneysingh-032519.jpg"
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

export default BML8
