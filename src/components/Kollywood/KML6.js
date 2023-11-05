import React from 'react'

const KML6 = () => {
    const movies = [
        {
            "Title": "Vaathi",
            "Year": "2023",
            "Rated": "Not Rated",
            "Released": "17 Feb 2023",
            "Runtime": "139 min",
            "Genre": "Action, Drama",
            "Director": "Venky Atluri",
            "Producer" : "Suryadevara Naga Vamsi,Sai Soujanya",
            "musicDirector" : "	G. V. Prakash Kumar",
            "Writer": "Venky Atluri",
            "actors": [
                {
                  "name": "Dhanush",
                  "character": "Balamurugan 'Bala' Sir",
                  "pic" : "https://www.suntiros.com/wp-content/uploads/2018/09/Dhanush-HD-Images-At-Award-Show.jpg"
                },
                {
                  "name": "Samyuktha",
                  "character": "Meenakshi",
                  "pic" : "https://i2.wp.com/filmitamasha.com/wp-content/uploads/2020/05/Samyuktha_-Menon-8.jpg?fit=1024%2C1024&ssl=1 "
                },
                {
                  "name": "Samuthirakani",
                  "character": "Srinivas Thirupath",
                  "pic" : "https://thepersonage.com/wp-content/uploads/2020/07/Samuthirakani-Pic.jpg"
                },
                {
                  "name": "Tanikella Bharani",
                  "character": "Thanigachalam",
                  "pic" : "https://img.agecalculator.me/celeb-7605.jpg"
                },
                {
                  "name": "P. Sai Kumar",
                  "character": "President Muthu Pandian",
                  "pic" : "https://c.saavncdn.com/artists/Sai_Kumar_003_20180219095112_500x500.jpg"
                },
                {
                  "name": "Rajendran",
                  "character": "'Bittu' Bhupathi",
                  "pic" : "https://th.bing.com/th/id/OIP.DHC6PNFXppYMrlHCkVuSnQAAAA?pid=ImgDet&rs=1"
                }
              ],
            "plot": "The life of a young man and his struggles against the privatization of education.1995: Abhiram and friends discover educational tapes left by A. M. Kumar/A. S. Murthy in an old box. They journey to learn about him and uncover his story as a dedicated lecturer in a struggling government college in 1993. Despite challenges, Bala/Balu, a passionate teacher, transformed students lives and prepared them for exams, facing opposition from private colleges. The students eventually succeed, but are offered money by Thirupathi/Tripathi to claim credit for their achievements. Bala/Balu advises them to accept, use the opportunity to rise, and give back to society.",
            "Language": "Tamil, Telugu",
            "Country": "India",
            "Awards": "N/A",
            "Poster": "https://i.ytimg.com/vi/TVnb1OCFIgk/maxresdefault.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "7.3/10"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "7.3",
            "imdbVotes": "9,265",
            "imdbID": "tt15427980",
            "Type": "movie",
            "DVD": "N/A",
            "BoxOffice": "₹50 crore(Approx)",
            "Gross" : "₹118 crore",
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
    src="https://www.youtube-nocookie.com/embed/ahK67chVTgA?autoplay=1&mute=1"
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
                    <p style={{ color: "white",textAlign:'justify' }}>{movie.plot}</p>
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
                            src="https://th.bing.com/th/id/OIP.RXlMAFqs2Y4GDmJ_3LLAKQHaE6?pid=ImgDet&rs=1"
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
                            src="https://imageory.clapnumber.com/albums/medium/1620740081_suryadevara_naga_vamsi_1.jpg"
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
                            src="https://th.bing.com/th/id/OIP.BiRhbv8a7Ce17nvY1zyIbAHaE8?pid=ImgDet&rs=1"
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
    <div className="col-lg-4 " key={actorIndex}  >
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

export default KML6
