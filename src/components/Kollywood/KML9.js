import React from 'react'

const KML9 = () => {
    const movies = [
        {
            "Title": "Maamannan",
            "Year": "2023",
            "Rated": "N/A",
            "Released": "29 Jun 2023",
            "Runtime": "157 min",
            "Genre": "Action, Drama, Thriller",
            "Director": "Mari Selvaraj",
            "Producer" : "Udhayanidhi Stalin",
            "musicDirector" : "	A. R. Rahman",
            "Writer": "Mari Selvaraj",
            "actors": [
                {
                  "name": "Udhayanidhi Stalin",
                  "character": "Athiveeran (Veera)",
                  "pic" : "https://th.bing.com/th/id/OIP.dTQZVZurm3OGcXmR5siQWwAAAA?pid=ImgDet&w=402&h=390&rs=1"
                },
                {
                  "name": "Vadivelu",
                  "character": "Sa. Maamannan",
                  "pic" : "https://www.famousbirthdays.com/faces/vadivelu-image.jpg"
                },
                {
                  "name": "Fahadh Faasil",
                  "character": "Rathnavelu",
                  "pic" : "https://th.bing.com/th/id/R.bceaaabc07d6bb2d6cd7b43182ca69bc?rik=svDjr7kE2b%2bNWA&riu=http%3a%2f%2fwww.behindwoods.com%2ftamil-movies-cinema-news-16%2fimages%2ftrance-malayalam-trailer-fahadh-faasil-nazriya-nazim-gautham-menon-photos-pictures-stills.png&ehk=jpk5lAorqUEpD6XZyVahBBlgsiACaodu3mXcE1PVsVk%3d&risl=&pid=ImgRaw&r=0"
                },
                {
                  "name": "Keerthy Suresh",
                  "character": "Leela",
                  "pic" : "https://starsbiog.com/wp-content/uploads/2020/05/Keerthy-Suresh.jpg"
                },
                {
                  "name": "Lal",
                  "character": "Ka. Sindhanai Rajan",
                  "pic" : "https://chiloka.com/i/i/l/a/l/lal-4.jpg"
                },
                {
                  "name": "Vijayakumar",
                  "character": "the Leader of the Opposition",
                  "pic" : "https://i.pinimg.com/736x/39/97/72/399772aff94d6037318834b6212bc31c.jpg"
                }
              ],
            "plot": "The community that was exploited by the town's influential man, who completely rules due to the powerful backing of the authorities. A man collects evidence to flip him upside down when he was helpless to stop his endless torture.'Maamannan' is a 2023 Tamil political drama directed by Mari Selvaraj. The film follows Maamannan, an MLA from the Dalit community, and his estranged son Veera, who practices Adimurai. Conflict arises when Rathnavelu, a dominant caste member, clashes with Maamannan. Rathnavelu's attempts to defeat Maamannan in the elections backfire, as youth rebel against his tactics, resulting in Maamannan's victory and appointment as the Legislative Assembly Speaker. Veera and Leela continue their grassroots social work. The film explores caste dynamics and the triumph of social justice.",
            "Language": "Tamil, Telugu, Kannada, Malayalam",
            "Country": "India",
            "Awards": "N/A",
            "Poster": "https://imgeng.jagran.com/images/2023/jul/Maamannan1689663951989.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "6.7/10"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "6.7",
            "imdbVotes": "4,675",
            "imdbID": "tt20242416",
            "Type": "movie",
            "DVD": "N/A",
            "BoxOffice": "	₹35 crore",
            "Gross" : "₹52 crore",
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
    src="https://www.youtube-nocookie.com/embed/xWe03YByWEI?autoplay=1&mute=1"
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
                            src="https://images.ottplay.com/images/mari-selvaraj-565.jpg?impolicy=ottplay-20210210&width=1200&height=675"
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
                            src="https://th.bing.com/th/id/OIP.qsLAUufpeROZnb1cMxhFiwHaE7?pid=ImgDet&rs=1"
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
                            src="https://i.scdn.co/image/ab6761610000e5eb1725d353edbb272af9ad59d4"
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

export default KML9
