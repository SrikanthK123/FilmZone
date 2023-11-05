import React from 'react'

const HML14 = () => {
    const movies = [
        {
            "Title": "Spider-Man: Across the Spider-Verse",
            "Year": "2023",
            "Rated": "PG",
            "Released": "02 Jun 2023",
            "Runtime": "140 min",
            "Genre": "Animation, Action, Adventure",
            "Director": "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
            "Producer": "Phil Lord,Christopher Miller,Amy Pascal,Avi Arad,Christina Steinberg",
            "musicDirector" : "Daniel Pemberton",
            "Writer": "Phil Lord, Christopher Miller, Dave Callaham",
            "actors": [
                {
                    name : "Shameik Moore",
                    character: "Miles Morales (Spider-Man)",
                    pic: "https://th.bing.com/th/id/OIP.yjXbJ4ouFE2xULVBMHWgzAAAAA?pid=ImgDet&w=320&h=320&rs=1"
                },
                {
                    name : "Hailee Steinfeld ",
                    character: " Gwen Stacy (Spider-Gwen)",
                    pic: "https://gl-images.condecdn.net/image/JP60d388YBK/crop/200/square"
                },
                {
                    name : "Brian Tyree Henry",
                    character: "Jeff Morales",
                    pic: "https://th.bing.com/th/id/OIP.V0oeA_CzeMOafInj_A7XXgAAAA?pid=ImgDet&w=350&h=350&rs=1"
                },
                {
                    name : "Lauren Vélez",
                    character: "Rio Morales",
                    pic: "https://www.famousbirthdays.com/headshots/lauren-velez-1.jpg"
                },
                {
                    name : "Jake Johnson ",
                    character: " Peter B. Parker (Spider-Man)",
                    pic: "https://sm.askmen.com/t/askmen_in/article/j/jake-johnson-interview/jake-johnson-interview_yvrq.1200.jpg"
                },
                {
                    name : "Jason Schwartzman",
                    character: "Johnathon Ohnn (the Spot)",
                    pic: "https://th.bing.com/th/id/OIP.8iA8_puVP7d4ijHRd94tQAHaIV?pid=ImgDet&w=480&h=540&rs=1"
                },
              ],
            "Plot": "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a ...",
            "Language": "English",
            "Country": "United States",
            "Awards": "3 wins & 1 nomination",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "8.7/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "96%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "86/100"
                }
            ],
            "Metascore": "86",
            "imdbRating": "8.7",
            "imdbVotes": "273,644",
            "imdbID": "tt9362722",
            "Type": "movie",
            "DVD": "08 Aug 2023",
            "BoxOffice": "$100 million",
            "Gross": "$690 million",
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
              <iframe
                src="https://www.youtube-nocookie.com/embed/shW9i6k8cB0?autoplay=1&mute=1"
                title="YouTube video"
                allowFullScreen
                style={{ borderRadius: "10px" }}
                allow= "autoplay"
                
              ></iframe>
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
                    <h4 style={{ color: '#f70776' }}>Gross - <span style={{ color: '#9896f1' }}>{movie.Gross}</span></h4>
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
                          src="https://media.gettyimages.com/id/1494730800/photo/world-premiere-of-sony-pictures-animations-spider-man-across-the-spider-verse-arrivals.jpg?s=594x594&w=gi&k=20&c=Bp3dhycVdDr1aUPXkIAH9d9KmafP7Kyda2xp9qWBS7M="
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
                          src="https://th.bing.com/th/id/R.7f8815c6397f40beb15177b6778a605c?rik=WlyChyDRKOJxOA&riu=http%3a%2f%2fwww.femalefirst.co.uk%2fimage-library%2fpartners%2fbang%2fland%2f500%2fp%2fphil-lord-and-christopher-miller-aW1hZ2VzMS8yMDE2LzExLzAxLzA.jpg&ehk=eS9%2fe9k4ElhcM0Qvi47sM2Yre8Y94Pb0u8iUbUq147M%3d&risl=&pid=ImgRaw&r=0"
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
                          src="https://ichef.bbci.co.uk/images/ic/1200x675/p07f3h15.jpg"
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
              Voice cast
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

export default HML14
