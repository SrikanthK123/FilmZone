import React from 'react'

const BML10 = () => {
    const movies = [
        {
            "Title": "Shehzada",
            "Year": "2023",
            "Rated": "N/A",
            "Released": "17 Feb 2023",
            "Runtime": "142 min",
            "Genre": "Action, Comedy, Drama",
            "Director": "Rohit Dhawan",
            "Producer" : "Bhushan Kumar,Krishan Kumar,Allu Aravind",
            "musicDirector" : "Pritam",
            "Writer": "Hussain Dalal, Rohit Dhawan, Trivikram Srinivas",
            "actors": [
                {
                    name : "Kartik Aaryan",
                    character: "Bantu Nanda",
                    pic: "https://th.bing.com/th/id/OIP.A1mnR_mlBgtJmPEvhf_8oQHaHa?pid=ImgDet&rs=1"
                },
                {
                    name : "Kriti Sanon",
                    character: "Samara Singh",
                    pic : "https://1.bp.blogspot.com/-EtUtKVCe8Aw/XSgbZ-isloI/AAAAAAAAZB0/bF9oOI-o-JgSxF-l1KmOdUxoYbcaVErGQCLcBGAs/s1600/1%2B%252832%2529.jpg"
                },
                {
                    name : "Paresh Rawal",
                    character: "Valmiki Upadhyay (Bantu's foster father)",
                    pic: "https://nettv4u.com/imagine/paresh-rawal.jpg?w=310"
                },
                {
                    name : "Manisha Koirala",
                    character: " Yashoda Jindal",
                    pic: "https://th.bing.com/th/id/R.4afebf0c6cf4b2317ede2dc257c533b7?rik=8ITOTJ9Rx2IwHQ&riu=http%3a%2f%2fwww.khabar.com%2f01_13_Bwood-Manisha.jpg%3fw%3d400&ehk=mHKN0JTrm563HTQeCPNOaPLIkO%2fyPmtg4ZIl3xz77zA%3d&risl=&pid=ImgRaw&r=0"
                },
                {
                    name : "Ronit Roy",
                    character: "Randeep Nanda (Bantu's biological father)",
                    pic: "https://lh3.googleusercontent.com/-uaj8YN9JiCA/YTomTSVqGdI/AAAAAAAAMTE/TbvWQyvV-XwSC5od2NdpWi8OuQJ7GnEHgCLcBGAsYHQ/s1600/1631200841597237-0.png"
                },
                
                {
                    name : "Rajpal Yadav",
                    character: "Inspector Satish Yadav DP",
                    pic: "https://cdn.idolnetworth.com/imgs/8/8f/rajpal-yadav-rajpal-yadav.jpg"
                }
              ],
            "Plot": "Bantu is hated by his father Valmiki since he was a toddler. Samara, his boss, shows him affection and love until he discovers that the Jindals are his parents. Bantu decides to seek Jindals love and protect them from threats they...",
            "Language": "Hindi",
            "Country": "India",
            "Awards": "N/A",
            "Poster": "https://i.ytimg.com/vi/OOjuP-gV-3A/maxresdefault.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "4.5/10"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "4.5",
            "imdbVotes": "30,632",
            "imdbID": "tt13130948",
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
            <iframe src="https://www.youtube-nocookie.com/embed/vbSGPIS2_ao?autoplay=1&mute=1" title="YouTube video" allowFullScreen style={{borderRadius: "10px"}}></iframe>

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
                          src="https://th.bing.com/th/id/OIP.3wcciq5CMiwgD-3_rdmtCAHaE8?pid=ImgDet&rs=1"
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
                          src="https://static-koimoi.akamaized.net/wp-content/new-galleries/2021/10/shooting-of-shehzada-begins-starring-kartik-aaryan-kriti-sanon-directed-by-rohit-dhawan-produced-by-bhushan-kumar-allu-arvind-aman-gill-to-release-in-theatres-next-year-on-4t-01.jpg"
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
                          src="https://static.toiimg.com/photo/83402681.cms"
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

export default BML10
