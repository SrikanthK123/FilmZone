import React from 'react'

const BML9 = () => {
    const movies = [
      {
        "Title": "Satyaprem Ki Katha",
        "Year": "2023",
        "Rated": "N/A",
        "Released": "29 Jun 2023",
        "Runtime": "146 min",
        "Genre": "Comedy, Drama, Musical",
        "Director": "Sameer Vidwans",
        "Producer" : "Sajid Nadiadwala,Shareen Mantri Kedia,Kishor Arora",
        "musicDirector" : "Manan Bhardwaj,Meet Bros,Payal Dev,Rochak Kohli",
        "Writer": "Karan Shrikant Sharma",
        "actors": [
          {
              name : "Kartik Aaryan",
              character: "Satyaprem 'Sattu' Narayan",
              pic: "https://th.bing.com/th/id/OIP.A1mnR_mlBgtJmPEvhf_8oQHaHa?pid=ImgDet&rs=1"
          },
          {
              name : "Kiara Advani",
              character: "Katha Kapadia",
              pic : "https://th.bing.com/th/id/OIP.ejoi2JFo1e9rksG5c1WWHAHaHa?pid=ImgDet&w=640&h=640&rs=1"
          },
          {
              name : "Gajraj Rao",
              character: "Narayan (Sattu's father)",
              pic: "https://th.bing.com/th/id/OIP.a7YWim6wpDUGu5SbhSmRIAAAAA?pid=ImgDet&rs=1"
          },
          {
              name : "Supriya Pathak",
              character: " Diwali (Sattu's mother)",
              pic: "https://jiocinemaweb.cdn.jio.com/jioimages.cdn.jio.com/content/entry/data/62/90/f3e6733e64403ff4720d9099d2a917f7_o_high.jpg"
          },
          {
              name : "Rajpal Yadav",
              character: "Doodhiya",
              pic: "https://static.joonsite.com/seelatest/topic/siddharth-randeria.jpg"
          },
          
          {
              name : "Adah Sharma",
              character: "Meera",
              pic: "https://cdn.idolnetworth.com/imgs/8/8f/rajpal-yadav-rajpal-yadav.jpg"
          }
        ],
        "Plot": "A middle-class boy in Ahmedabad, Satyaprem falling in one-sided love with Katha, who is coping with her breakup with Tapan. Through the journey, they discover each other's life and complement in accomplishing what was left halfway.",
        "Language": "Hindi",
        "Country": "India",
        "Awards": "N/A",
        "Poster": "https://i.ytimg.com/vi/Nlel57S46Kg/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGFYgXShlMA8=&rs=AOn4CLCIMQ94nvCNeabvTmSoq_KD2zkPdA",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "7.2/10"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "7.2",
        "imdbVotes": "27,438",
        "imdbID": "tt14914988",
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
            <iframe src="https://www.youtube-nocookie.com/embed/8EPJiFfWRfw?autoplay=1&mute=1" title="YouTube video" allowFullScreen style={{borderRadius: "10px"}}></iframe>

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

export default BML9
