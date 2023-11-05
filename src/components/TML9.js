import React from 'react'

const TML9 = () => {
    const movies = [
        {
            "movieTitle": "Baby 2023",
            "releaseYear": 2023,
            "directors": ["Sai Rajesh Neelam"],
            "producers": ["SKN"],
            "musicDirector" : "	Vijay Bulganin",
            "actors": [
            {
            "name": "Anand Deverakonda",
            "character": "Anand",
            "pic" : "https://images.cinemaexpress.com/uploads/user/imagelibrary/2019/6/26/original/anand_deverakonda.jpg"
            },
            {
            "name": "Vaishnavi Chaitanya",
            "character": "Vaishnavi ",
            "pic" : "https://th.bing.com/th/id/OIP.HSXUxRISSQ6XZ_Je78YmaAHaHa?pid=ImgDet&w=794&h=794&rs=1"
            },
            {
            "name": "Viraj Ashwin",
            "character": "Viraj Ashwin ",
            "pic" : "https://szcdn.ragalahari.com/jul2023/hd/viraj-ashwin-interview-stills/viraj-ashwin-interview-stillsthumb.jpg"
            },
            {
            "name": "Nagendra Babu",
            "character": " Vaishnavi's father ",
            "pic" : "https://www.cinejosh.com/newsimg/newsmainimg/nagababu-a-major-asset-of-janasena--mega-family_b_0206200535.jpg"
            },
            {
            "name": "Harsha Chemudu",
            "character": "Harsha(Anand's friend)",
            "pic" : "https://starsunfolded.com/wp-content/uploads/2021/04/Harsha-Chemudu.jpg"
            },
            {
            "name": "Lirisha Kunapareddy",
            "character": "Vaishnavi's mother",
            "pic" : "https://th.bing.com/th/id/OIP.x95RaXYhWUJg1G7kGJyk7QHaHb?pid=ImgDet&rs=1"
            }
            ],
            "genre": ["Comedy", "Drama"],
            "plot": "Anand and Vaishnavi are neighours and high school students, who live in a slum in Hyderabad. Vaishnavi has a crush on Anand.",
            "posterUrl": "https://content.tupaki.com/en/feeds/2023/07/23/133893-b.jpg",
            "trailerUrl": "https://example.com/baby-2023-trailer.mp4",
            "runtimeMinutes": 130,
            "ratings": {
            "IMDb": 3,
            "RottenTomatoes": 0,
            "Metacritic": 0
            },
            "boxOffice": {
            "budget": "₹10 croren",
            "gross": "₹90 crore"
            },
            "languages": ["Telugu"],
            "country": "India",
            "awards": []
            }
    ]
  return (
    <>
       <div className="shyamMain">
        {movies.map((movie, index) => (
          <div key={index} className="movie-card">
            <div className="container pt-3 " > <h2 class="pb-2 " style={{ color: "white",marginBottom:'50px' }}>
                {movie.movieTitle}</h2></div>
           
            <div className="container">
            <div className="ratio ratio-21x9">
  <iframe
    src="https://www.youtube-nocookie.com/embed/_npN4uwDMLk?autoplay=1&mute=1"
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
                       <h4 style={{color:'#f70776'}}>Budget - <span style={{color:'#9896f1'}}>{movie.boxOffice.budget}</span></h4>
                       <h4 style={{color:'#f70776'}}>Gross - <span style={{color:'#9896f1'}}>{movie.boxOffice.gross}</span></h4>
                    
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
                            src="https://th.bing.com/th/id/OIP.lU6VQPk0LhTYmkCHeKPuxgHaE0?pid=ImgDet&rs=1"
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
                            src="https://static.toiimg.com/thumb/msid-84203321,imgsize-848778,width-800,height-600,resizemode-75/84203321.jpg"
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
                            src="https://szcdn.ragalahari.com/jul2023/hd/vijay-bulganin-interview-stills/vijay-bulganin-interview-stillsthumb.jpg"
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

export default TML9
