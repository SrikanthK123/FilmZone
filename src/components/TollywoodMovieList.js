import React from "react";

const TollywoodMovieList = () => {
  const movies = [
    // Add more movie entries as needed
    {
      movieTitle: "Shyam Singha Roy",
      releaseYear: 2023,
      directors: ["Sandeep Reddy Vanga"],
      producers: ["N. N. Venkatesh"],
      musicDirector: "Mickey J Meyer",
      actors: [
        {
          name: "Nani",
          character: "Shyam Singha Roy",
          pic: "https://2.bp.blogspot.com/-9naRWCutvmY/WLDhe5Oj2UI/AAAAAAAADjc/hGGkWAFSqOENjMEbOoSPsv2bXnmgR3VjQCLcB/s1600/Nani-Biography-Wiki-Biodata.jpg",
        },
        {
          name: "Krithi Shetty",
          character: "Name of Character",
          pic : "https://th.bing.com/th/id/OIP.0x9rljnM_Rq3msqOzTVJbwHaHa?pid=ImgDet&rs=1"
        },
        {
          name: "Sai Pallavi ",
          character: "Maithreyi alias Rosie",
          pic : "https://yt3.ggpht.com/wTUmYnlu1Aiim75PydgQ9qix7hATO_Vjr62pNVkTSQROsKlK4OQIn_gMHiZaZfVRZoNpNIqWUw=s900-c-k-c0x00ffffff-no-rj"
        },
        {
          name: "Madonna Sebastian ",
          character: " Lawyer Padmavathi",
          pic : "https://blogger.googleusercontent.com/img/a/AVvXsEgBgXup1H77eUdw9kRFeL5JQBQCOmpcJBaSWWubqnQlJwVqXOU8j6MLF_8QtxSwybeOYlt_PMZ4c-M3MR0-NsUCVHu3HF4v4vjVBFpMAlr8raD23ITjNFbUlHaDKQD_HAn7j3_1K2krf62XUjqqhNWeFPBgB9UX46hbYwoXa-PpYIJQ0n0t7zh4d1Lt=w640-h640"
        },
        {
          name: "Rahul Ravindran  ",
          character: "Manoj Singha Roy",
          pic : "https://wikiborn.com/wp-content/uploads/2021/04/Rahul%20Ravindran.jpg"
        },
        {
          name: "Abhinav Gomatam",
          character: " Pramod",
          pic : "https://pbs.twimg.com/profile_images/1402496294795419655/mtboYzns.jpg"
        },
        
        
      ],
      genre: ["Drama", "Fantasy"],
      plot: "Shyam Singha Roy is a story of a man and his quest to rediscover his roots and understand the folklore of a Bengal village, with a touch of fantasy.Vasu is an aspiring film director in Hyderabad. To impress a film producer, he starts making a short film and finds Keerthi, a psychology graduate to be the lead. After some resistance, Keerthi agrees to act in the film, and the shoot is completed within a few days. One day while shooting, some goons sexually harass Keerthi leading to Vasu fighting them. In that ongoing fight, a guy hits him on his head, which leads him to ear bleeding and starts suffering from a psychological disorder that temporarily manifest him into a different personality.",
      posterUrl:
        "https://dhruvam.files.wordpress.com/2021/12/shyam-singha-roy-movie-review.jpeg",
      trailerUrl:
        "https://www.youtube.com/watch?v=QliDRYaknmI&pp=ygUhc2h5YW0gc2luZ2hhIHJveSBtb3ZpZSB0cmFpbGVyIDRr",
      runtimeMinutes: 150,
      ratings: {
        IMDb: 7.6,
        RottenTomatoes: 88,
        Metacritic: 74,
      },
      boxOffice: {
        budget: "$10 million",
        gross: "$20 million",
      },
      languages: ["Telugu"],
      country: "India",
      awards: ["Example Award 1", "Example Award 2"],
    },
  ];
  return (
    <>
      <div className="shyamMain">
        {movies.map((movie, index) => (
          <div key={index} className="movie-card"  >
            <div className="container pt-3 " > <h2 class="pb-2 " style={{ color: "white",marginBottom:'50px' }}>
                {movie.movieTitle}</h2></div>
           
            <div className="container">
              <div className="ratio ratio-21x9">
                <iframe
                  src="https://www.youtube.com/embed/RAnHbKPss_k?autoplay=1&mute=1"
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
                      <li>
                        <a
                          class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none "
                          href="#"
                        >
                          <img
                            style={{
                              borderRadius: "20px",
                              boxShadow: "0 0 10px #00bbf0",
                            }}
                            src="https://th.bing.com/th/id/OIP.SvJhVzn_lRQRzWl1woyoswHaEK?pid=ImgDet&rs=1"
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
                      <li>
                        <a
                          class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none "
                          href="#"
                        >
                          <img
                            style={{
                              borderRadius: "20px",
                              boxShadow: "0 0 10px #00bbf0",
                            }}
                            src="https://gallery.greatandhra.com/upload/19830/images/DSC_0753_1600x10701639496559.JPG"
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
                      <li>
                        <a
                          class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none "
                          href="#"
                        >
                          <img
                            style={{
                              borderRadius: "20px",
                              boxShadow: "0 0 10px #00bbf0",
                            }}
                            src="https://www.tollywood.net/wp-content/uploads/2019/09/Mickey-J-Meyer-768x768.jpg"
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
        <h2 style={{ color: 'white',margin:'10px'}} className="fw-normal">
          {actor.name}
        </h2>
        <p style={{ color: 'white' }}>{actor.character}</p>
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
  );
};

export default TollywoodMovieList;
