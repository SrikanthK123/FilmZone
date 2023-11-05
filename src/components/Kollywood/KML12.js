import React from 'react'

const KML12 = () => {
    const movies = [
        {
            "Title": "Kabali",
            "Year": "2016",
            "Rated": "Not Rated",
            "Released": "22 Jul 2016",
            "Runtime": "153 min",
            "Genre": "Action, Crime, Drama",
            "Director": "Pa. Ranjith",
            "Producer" : "Kalaipuli S. Thanu",
            "musicDirector" :"Santhosh Narayanan",
            "Writer": "Mohan Nair, Pa. Ranjith",
            "actors": [
                {
                    name : "Rajinikanth",
                    character: "Kabaleeswaran (Kabali)",
                    pic: "https://th.bing.com/th/id/OIP.NezFBvKRmuJUPqucenKifgAAAA?pid=ImgDet&rs=1"
                },
                {
                    name : "Radhika Apte",
                    character: "Kumudhavalli Kabaleeswaran (Kumudha)",
                    pic : "https://i3.behindwoods.com/tamil-movies-cinema-news-16/images/kabali-actress-radhika-apte-talks-about-sexual-abuse-of-men-in-the-film-industry-photos-pictures-stills.jpg"
                },
                {
                    name : "Winston Chao",
                    character: "Tony Lee",
                    pic: "https://th.bing.com/th/id/OIP.vILtVXm10W98TNFdBTmsqgHaHa?pid=ImgDet&rs=1"
                },
                {
                    name : "Rosyam Nor",
                    character: "Tony's sidekick",
                    pic: "https://assets.nst.com.my/images/articles/05rosya_1528091705.jpg"
                },
                {
                    name : "Kishore",
                    character: "Veerasekaran ( the second head of '43')",
                    pic: "https://www.veethi.com/images/people/profile/Kishore.jpeg"
                },
                
                {
                    name : "Mime Gopi",
                    character: "Loganathan",
                    pic: "https://starsunfolded.com/wp-content/uploads/2021/05/Mime-Gopi.jpg"
                }
              ],
            "Plot": "A reformed gangster is released from prison and attempts to protect his family from his enemies.'Kabali' is a 2016 Indian Tamil-language crime drama film. The story revolves around Kabali, a former gangster who is released from prison after 25 years. He seeks to reform his community and reunite with his family. As he confronts rival gangsters and a corrupt system, Kabali navigates a complex world of loyalty, betrayal, and retribution. The film explores themes of identity, social justice, and the consequences of a life of crime. Rajinikanth delivers a powerful performance as the titular character, making 'Kabali' a compelling tale of redemption and resilience.",
            "Language": "Tamil",
            "Country": "India",
            "Awards": "5 wins & 6 nominations",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYmY3MWIzMDgtMjFiMi00NTFjLWFlZWQtMjlhOThiNjEyNWU4XkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "6.1/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "53%"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "6.1",
            "imdbVotes": "13,915",
            "imdbID": "tt5071886",
            "Type": "movie",
            "DVD": "16 Mar 2017",
            "BoxOffice": "$100 crore",
            "Gross" : "₹286 — 499 crore",
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
    src="https://www.youtube-nocookie.com/embed/9mdJV5-eias?autoplay=1&mute=1"
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
                    <h2 class=" fw-bold " style={{ color: "#f70776" }}>
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
                            src="https://images.edexlive.com/uploads/user/imagelibrary/2020/7/25/original/DSC015561.JPG"
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
                            src="https://th.bing.com/th/id/OIP.LYKbQ4wOiVxOeKkaMGFXVgHaHa?pid=ImgDet&rs=1"
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
                            src="https://static.toiimg.com/photo/75739768.cms"
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
    <div className="col-lg-4 " key={actorIndex} data-aos="fade-up"  >
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

export default KML12
