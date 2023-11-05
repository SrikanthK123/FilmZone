import React from 'react'

const KML4 = () => {
    const movies = [
        {
            "Title": "Varisu",
            "Year": "2023",
            "Rated": "Not Rated",
            "Released": "11 Jan 2023",
            "Runtime": "169 min",
            "Genre": "Action, Drama",
            "Director": "Vamshi Paidipally",
            "producers": "Dil Raju",
            "musicDirector":"Thaman S",
            "Writer": "Vamshi Paidipally, Hari, Ahishor Solomon",
            "actors": [
                {
                  "name": "Vijay",
                  "character": "Vijay",
                  "pic" : "https://yt3.googleusercontent.com/UZjbHp99xbCsAmTx8pmAgnzZ-J_KxPJLtNa20bMccfoR5rn7uuGyraxxdmItOwVpkfT_b8er=s900-c-k-c0x00ffffff-no-rj"
                },
                {
                  "name": "Rashmika Mandanna",
                  "character": "Aadya",
                  "pic" : "https://i.pinimg.com/280x280_RS/4d/e4/1b/4de41ba3d92e8b99cf4ab7db01389fca.jpg"
                },
                {
                  "name": "R. Sarathkumar",
                  "character": "Rajendran",
                  "pic" : "https://www.behindwoods.com/tamil-movies/slideshow/kollywood-celebrities-donate-to-fefsi-during-corona-crisis/images/sarathkumars-donation.png"
                },
                {
                  "name": "Prakash Raj",
                  "character": "Jayaprakash",
                  "pic" : "https://th.bing.com/th/id/OIP.q9yni35pb0LX_RK3Tq6QJwHaGp?pid=ImgDet&rs=1"
                },
                {
                  "name": "Shaam",
                  "character": "Aditya",
                  "pic" : "https://th.bing.com/th/id/R.13217dcf2a1a6f756304013b79a1327c?rik=%2b%2fOUZJH3W%2fi6aw&riu=http%3a%2f%2fwww.behindwoods.com%2ftamil-movies%2fslideshow%2fyou-will-be-shocked-to-know-these-actors-real-names%2fimages%2fshaam-shamshuddin-ibrahim.jpg&ehk=qG945mVTZ1jERMzlKdht6KibIC0QmH5vfO8HWc5igPU%3d&risl=&pid=ImgRaw&r=0"
                },
                {
                  "name": "Srikanth",
                  "character": "Jai Rajendran",
                  "pic" : "https://th.bing.com/th/id/OIP.CYOrnQLPRxuEajRBRAYqIQHaHy?pid=ImgDet&rs=1"
                }
              ],
            "plot": "Vijay Rajendran is a happy to-go lucky man. Things change when his father becomes terminally ill, and he is left to manage his business empire.Vijay, disowned for starting a food delivery startup, returns to the family after his father's terminal cancer diagnosis. The elder brothers, Jai and Ajay, vie for succession, each with their own issues. Aarthi's divorce, Ajay's betrayal, and Vijay's emergence as the heir lead to family reconciliation. They thwart Ajay's share sale plan, honor their father's wishes, and reunite for a heartfelt ending.",
            "Language": "Tamil",
            "Country": "India",
            "Awards": "N/A",
            "Poster": "https://m.media-amazon.com/images/I/51RpUwBRjQL._UXNaN_FMjpg_QL85_.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "6.0/10"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "6.0",
            "imdbVotes": "35,815",
            "imdbID": "tt11998558",
            "Type": "movie",
            "DVD": "N/A",
            "BoxOffice": "N/A",
            "Gross":"N/A",
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
    src="https://www.youtube-nocookie.com/embed/9fux9swQ5AQ?autoplay=1&mute=1"
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
                            src="https://th.bing.com/th/id/OIP.md5uiWLYOtYp0BKOG0RqmwHaE7?pid=ImgDet&rs=1"
                            alt="director"
                            width="160px"
                          />
                          <div class="col-lg-8">
                            <h6 style={{ color: "white" }} class="mb-0">
                              Director
                            </h6>
                            <small style={{ color: "white" }}>
                              {movie.directors}
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
                            src="https://www.tollywood.net/wp-content/uploads/2019/05/Dil-Raju-1-768x512.jpg"
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
                              {movie.producers}{" "}
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
                            src="https://th.bing.com/th/id/OIP.gcyUQw2ejPmcFjCe9VwsZQHaHS?pid=ImgDet&w=640&h=630&rs=1"
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

export default KML4
