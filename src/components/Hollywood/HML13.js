import React from 'react'

const HML13 = () => {
    const movies = [
        {
            "Title": "Killers of the Flower Moon",
            "Year": "2023",
            "Rated": "R",
            "Released": "20 Oct 2023",
            "Runtime": "206 min",
            "Genre": "Crime, Drama, History",
            "Director": "Martin Scorsese",
            "Producer": "Dan Friedkin,Bradley Thomas,Martin Scorsese,Daniel Lupi",
            "musicDirector":"Robbie Robertson",
            "actors": [
                {
                    name : "Leonardo DiCaprio",
                    character: "Ernest Burkhart",
                    pic: "https://th.bing.com/th/id/OIP.3J-GZz2KwGe7MIo-i3b_GQHaHa?pid=ImgDet&rs=1"
                },
                {
                    name : "Robert De Niro ",
                    character: "William King Hale (Ernest's uncle)",
                    pic: "https://vz.cnwimg.com/thumbc-250x250/wp-content/uploads/2020/07/GettyImages-144735358.jpg"
                },
                {
                    name : "Lily Gladstone",
                    character: "Mollie Kyle (Ernest's wife)",
                    pic: "https://biographymask.com/wp-content/uploads/2023/07/Lily-Gladstone.jpg"
                },
                {
                    name : "Jesse Plemons",
                    character: "Thomas Bruce White Sr.",
                    pic: "https://resizing.flixster.com/bRpo6-0RlQysWxJQn657SSPG2sM=/2063x1838/v1.cjs0NDY2ODtqOzE4MDkwOzEyMDA7MjA2MzsxODM4"
                },
                {
                    name : "Tantoo Cardinal ",
                    character: "Lizzie Q (Mollie's mother)",
                    pic: "https://th.bing.com/th/id/OIP.tA-k7lpTZwalM7JaWCE6GQAAAA?pid=ImgDet&w=300&h=300&rs=1"
                },
                {
                    name : "John Lithgow ",
                    character: "Prosecutor Peter Leaward",
                    pic: "https://th.bing.com/th/id/OIP.pC9SC-34i4ez4lBDBv-ITAHaHK?pid=ImgDet&rs=1"
                },
              ],
            "Plot": "Members of the Osage tribe in the United States are murdered under mysterious circumstances in the 1920s, sparking a major F.B.I. investigation involving J. Edgar Hoover.",
            "Language": "English, Sioux",
            "Country": "United States",
            "Awards": "2 nominations",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNjQwOGM2YTItMGYwNC00YTM4LWI0Y2QtZjQ2ZDcyMmRjMTFhXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "93%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "89/100"
                }
            ],
            "Metascore": "89",
            "imdbRating": "N/A",
            "imdbVotes": "N/A",
            "imdbID": "tt5537002",
            "Type": "movie",
            "DVD": "N/A",
            "BoxOffice": "$200 million",
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
              <iframe
                src="https://www.youtube-nocookie.com/embed/7cx9nCHsemc?autoplay=1&mute=1"
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
                          src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https:%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2020%2F05%2F28%2Fmartin-scorcese.jpg"
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
                          src="https://th.bing.com/th/id/R.adb573b3463bc716533b318247752d10?rik=L6ISdU9520OFPQ&riu=http%3a%2f%2fwww1.pictures.zimbio.com%2fgi%2fBradley%2bThomas%2bDan%2bFriedkin%2bPremiere%2bSony%2bpELgxPrqajKl.jpg&ehk=LPXZNNZ2jvgaHyGjEG5vXLB9cQcKl2DoUL9PXBVUZSU%3d&risl=&pid=ImgRaw&r=0"
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
                          src="https://th.bing.com/th/id/OIP.S4xTbrW5pjdAVaSv-N6kQwHaE8?pid=ImgDet&rs=1"
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

export default HML13
