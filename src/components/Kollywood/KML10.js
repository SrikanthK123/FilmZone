import React from 'react'

const KML10 = () => {
    const movies = [
        {
            "Title": "Chithha",
            "Year": "2023",
            "Rated": "N/A",
            "Released": "28 Sep 2023",
            "Runtime": "140 min",
            "Genre": "Drama, Thriller",
            "Director": "S.U. Arun Kumar",
            "Producer" : "Siddharth",
            "musicDirector" : "Dhibu Ninan Thomas,Santhosh Narayanan",
            "Writer": "N/A",
            "actors": [
                {
                  "name": "Siddharth",
                  "character": "Eeswaran, Sundari's uncle (Chithha)",
                  "pic" : "https://labuwiki.com/wp-content/uploads/2021/08/5.jpg"
                },
                {
                  "name": "Sahasra Shree",
                  "character": "Sundari 'Settai', Eeswaran's niece",
                  "pic" : "https://thesouthfirst.com/wp-content/uploads/2023/09/Stills-from-the-film-Chithha.jpg"
                },
                {
                  "name": "Nimisha Sajayan",
                  "character": "Sakthi",
                  "pic" : "https://th.bing.com/th/id/OIP.6w2_ixPqpEHuFY7L1DKV4wHaHa?pid=ImgDet&w=770&h=770&rs=1"
                },
                {
                  "name": "Anjali Nair",
                  "character": "Sundari's mother and Eeswaran's sister-in-law",
                  "pic" : "https://internethelpline.in/wp-content/uploads/2021/09/255-e1630496728622-768x768.jpg"
                }
              ],
            "plot": "'Eeswaran' a Tamil film, follows Eeswaran, a government employee who protects his niece, Sundari. When Sundari and her friend, Ponni, plan to visit a forest area, Ponni goes alone and faces danger, leading to false accusations against Eeswaran. Sundari gets kidnapped by a pedophile, and Eeswaran rescues her. Later, he discovers the identity of the pedophile, but his girlfriend urges him to let go of vengeance. A year later, a burnt corpse is found, suggesting Eeswaran might have sought his own form of justice, leaving the ending open to interpretation.",
            "Language": "Tamil, Telugu, Kannada, Malayalam",
            "Country": "India",
            "Awards": "N/A",
            "Poster": "https://i.ytimg.com/vi/RqUbL6nbNlw/maxresdefault.jpg",
            "Ratings": [],
            "Metascore": "N/A",
            "imdbRating": "8.5",
            "imdbVotes": "N/A",
            "imdbID": "tt27540185",
            "Type": "movie",
            "DVD": "N/A",
            "BoxOffice": "₹4 crore",
            "Gross" : "₹16 crore",
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
    src="https://www.youtube-nocookie.com/embed/T0C5I90Y-sA?autoplay=1&mute=1"
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
                            src="https://th.bing.com/th/id/OIP.ADdzBO1BrxUUQRscLIlE9QHaEN?pid=ImgDet&rs=1"
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
                            src="https://starsunfolded.com/wp-content/uploads/2016/09/Siddharth.jpg"
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
                            src="https://th.bing.com/th/id/OIP.4B73Gyn4VQEI3sGVkKiXIgHaEN?pid=ImgDet&rs=1"
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

export default KML10
