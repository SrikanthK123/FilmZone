import React from 'react'

const KML11 = () => {
    const movies = [
        {
            "Title": "Kaithi",
            "Year": "2019",
            "Rated": "Not Rated",
            "Released": "24 Oct 2019",
            "Runtime": "145 min",
            "Genre": "Action, Adventure, Crime",
            "Director": "Lokesh Kanagaraj",
            "Producer" : "S. R. Prakashbabu,S. R. Prabhu",
            "musicDirector" : "Sam C. S.",
            "Writer": "Lokesh Kanagaraj, Pon Parthiban, Sanjeev Tiwari",
            "actors": [
                {
                  "name": "Karthi",
                  "character": "Dilli",
                  "pic" : "https://th.bing.com/th/id/OIP.QRXo2DvwhvJicRHXjOuJHQHaHa?pid=ImgDet&rs=1"
                },
                {
                  "name": "Narain",
                  "character": "Inspector Bejoy",
                  "pic" : "https://lh6.googleusercontent.com/proxy/CSYe_IGS3TD2QXMA9gqu3KhHqaX88PPFaJeowMf5dHmPfke_05yR2aVTHTmBi7l_ft8_YsmZ01nCcnfhh_IDGHXMMcEZH1ZZCync=w1200-h630-p-k-no-nu"
                },
                {
                  "name": "Arjun Das",
                  "character": "Anbu",
                  "pic" : "https://i.pinimg.com/736x/76/8e/da/768eda44417689824b23bf9289e59071.jpg"
                },
                {
                  "name": "George Maryan",
                  "character": "Constable Napoleon",
                  "pic" : "https://lk-aps.bmscdn.com/Artist/4279.jpg"
                },
                {
                  "name": "Harish Uthaman",
                  "character": "Adaikalam",
                  "pic" : "https://1.bp.blogspot.com/-NXKXAbv2h6g/XIEUnUXHGNI/AAAAAAAAdUc/EgjMmz9xzgs78t2RStxDEiax0fPh8wTSQCLcBGAs/s1600/harish.JPG"
                },
                {
                  "name": "Kanna Ravi",
                  "character": "Ajaz Ahmed",
                  "pic" : "https://www.filmibeat.com/img/popcorn/profile_photos/kanna-ravi-20210403170039-40176.jpg"
                }
              ],
            "Plot": "Dilli, an ex-convict, endeavours to meet his daughter for the first time after leaving prison. However, his attempts are interrupted due to a drug raid planned by Inspector Bejoy.'Kaithi' is a 2019 Indian Tamil-language action thriller film. The story follows Dilli, a recently released prisoner, who gets caught in the middle of a drug cartel's nefarious plans. With no knowledge of the impending danger, Dilli must protect a group of police officers from a deadly ambush. The film is a high-octane, suspenseful ride that unfolds in a single night, filled with intense action sequences and clever strategies. Karthi delivers a remarkable performance as the determined and resourceful lead, making 'Kaithi' a gripping and thrilling cinematic experience, exploring themes of redemption and sacrifice.",
            "Language": "Tamil",
            "Country": "India",
            "Awards": "15 wins & 8 nominations",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZTVlNGY2YTEtNTlmYy00NzY0LWE1NWUtOGJiNTgxZGM4ZmMzXkEyXkFqcGdeQXVyMTY1MzAyNjU4._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "8.4/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "100%"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "8.4",
            "imdbVotes": "38,799",
            "imdbID": "tt9900782",
            "Type": "movie",
            "DVD": "10 Mar 2020",
            "BoxOffice": "₹ 20.00 Cr",
            "Gross" : "₹ 105 Cr",
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
            <div className="container pt-3 " > <h2 class="pb-2 " style={{ color: "white",marginBottom:'50px' }}>
                {movie.Title}</h2></div>
           
            <div className="container ">
            <div className="ratio ratio-21x9">
  <iframe
    src="https://www.youtube-nocookie.com/embed/g79CvhHaj5I?autoplay=1&mute=1"
    title="YouTube video"
    allowFullScreen
    style={{ borderRadius: "10px" }}
  ></iframe>
</div>


              <div class="container px-4 py-5">
                <h2 class="pb-2 border-bottom" style={{ color: "#53a8b6" }}>
                  About Movie
                </h2>

                <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
                  <div class="col d-flex flex-column align-items-start gap-2">
                    <h2 class="fw-bold " style={{ color: "#f70776" }}>
                      Story
                    </h2>
                    <p style={{ color: "white",textAlign:'justify' }}>{movie.Plot}</p>
                    <div class="mb-5">
                       <h4 style={{color:'#f70776'}}>Budget - <span style={{color:'#9896f1'}}>{movie.BoxOffice}</span></h4>
                       <h4 style={{color:'#f70776'}}>Gross - <span style={{color:'#9896f1'}}>{movie.Gross}</span></h4>
                    
    </div>
                  </div>
                  

                  <div>
                    <ul class="list-unstyled">
                      <li data-aos="zoom-in">
                        <a
                          class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none "
                          href="#"
                        >
                          <img
                            style={{
                              borderRadius: "20px",
                              boxShadow: "0 0 10px #00bbf0",
                            }}
                            src="https://jfwonline.com/wp-content/uploads/2022/08/Lokesh-Kanagaraj.jpg"
                            alt="director"
                            width="160px"
                          />
                          <div class="col-lg-8">
                            <h6 style={{ color: "white" }} class="mb-0">
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
                          class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none "
                          href="#"
                        >
                          <img
                            style={{
                              borderRadius: "20px",
                              boxShadow: "0 0 10px #00bbf0",
                            }}
                            src="https://th.bing.com/th/id/OIP.1HDTVMmb0jivRcDq1t_7RQHaDt?pid=ImgDet&rs=1"
                            alt="Producer"
                            width="160px"
                            height="100px"
                          />
                          <div class="col-lg-8">
                            <h6 style={{ color: "white" }} class="mb-0">
                              Producer
                            </h6>
                            <small style={{ color: "white" }} class="text">
                              {" "}
                              {movie.Producer}{" "}
                            </small>
                          </div>
                        </a>
                      </li>
                      <li data-aos="zoom-in">
                        <a
                          class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none "
                          href="#"
                        >
                          <img
                            style={{
                              borderRadius: "20px",
                              boxShadow: "0 0 10px #00bbf0",
                            }}
                            src="https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-lbqp2tkhpgtt1hsnc0vmsf3ph7-20200730194000.Medi.jpeg"
                            alt="director"
                            width="160px"
                            height="100px"
                          />
                          <div class="col-lg-8">
                            <h6 style={{ color: "white" }} class="mb-0">
                              Music Director
                            </h6>
                            <small style={{ color: "white" }} class="text">
                              {" "}
                              {movie.musicDirector}{" "}
                            </small>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <h2 class="pb-2 border-bottom" style={{ color: "#53a8b6",marginBottom:'50px' }}>
                  Star Cast
                </h2>
                <div class="container marketing">
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

export default KML11
