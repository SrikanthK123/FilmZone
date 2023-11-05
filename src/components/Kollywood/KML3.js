import React from 'react'

const KML3 = () => {
    const movies = [
        {
            "Title": "Ponniyin Selvan: Part Two",
            "Year": "2023",
            "Rated": "Not Rated",
            "Released": "28 Apr 2023",
            "Runtime": "164 min",
            "Genre": "Action, Adventure, Drama",
            "Director": "Mani Ratnam",
            "Producer" : "Mani Ratnam,Subaskaran Allirajah",
            "musicDirector" : "	A. R. Rahman",
            "Writer": "Divya Prakash Dubey, Jayamohan, Kalki Krishnamoorthy",
            "actors": [
                {
                    name : "Vikram ",
                    character: "Aditha Karikalan",
                    pic: "https://th.bing.com/th/id/OIP.OFRdaK-MqWnQzUFAceC78wEBDy?pid=ImgDet&w=668&h=630&rs=1"
                },
                {
                    name : "Aishwarya Rai Bachchan",
                    character: "Nandini",
                    pic : "https://th.bing.com/th/id/OIP.fX8l6NOFpcB5Wt075iFb9gHaHa?pid=ImgDet&w=1024&h=1024&rs=1"
                },
                {
                    name : "Karthi",
                    character: "Vanthiyathevan",
                    pic: "https://th.bing.com/th/id/OIP.QRXo2DvwhvJicRHXjOuJHQHaHa?pid=ImgDet&rs=1"
                },
                {
                    name : "Trisha",
                    character: "Kundavai",
                    pic: "https://th.bing.com/th/id/R.44cf292ec4ed0d333690bec05f62680c?rik=ZdsjAkmyoHUxdg&riu=http%3a%2f%2f2.bp.blogspot.com%2f-kCsPHwX5HBQ%2fUfkXtnrB1TI%2fAAAAAAAAAuQ%2fbyrFx2QqNCM%2fs1600%2ftrisha-stills-61.jpg&ehk=IUEa%2fV0pm%2fppmtMSV1XXCIglLSp11DWJRGMSZt%2fbJnY%3d&risl=&pid=ImgRaw&r=0"
                },
                {
                    name : "Jayam Ravi",
                    character: "Arulmozhi Varman (Ponniyin Selvan)",
                    pic: "https://www.behindwoods.com/tamil-movies-cinema-news-16/images/jayam-ravis-vanamagan-teaser-to-release-on-6th-february-photos-pictures-stills.jpg"
                },
                
                {
                    name : "Jayaram",
                    character: "Azhwarkkadiyan Nambi / Thirumalaiappan",
                    pic: "https://englishmithra.com/wp-content/uploads/2023/07/jayaram.png"
                }
              ],
            "plot": "Arulmozhi Varman continues on his journey to become Rajaraja I, the greatest ruler of the historic Chola empire of south India.The film is a sequel to its predecessor, focusing on the lives of Aditha Karikalan, Nandini, and the political turmoil in the Chola empire. Nandini's conspiracy to assassinate Aditha Karikalan leads to a tragic love story, with Aditha Karikalan willingly sacrificing himself. The empire faces external threats, but Ponniyin Selvan emerges as a key figure, eventually becoming Rajaraja Chola, continuing the Chola dynasty's legacy. The film ends with the empire's stability restored after years of intrigue, battles, and personal sacrifices.",
            "Language": "Malayalam, Telugu, Kannada, Tamil",
            "Country": "India",
            "Awards": "5 nominations",
            "Poster": "https://i.ytimg.com/vi/RwOOczDv-7k/maxresdefault.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "7.3/10"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "7.3",
            "imdbVotes": "16,854",
            "imdbID": "tt22444570",
            "Type": "movie",
            "DVD": "N/A",
            "BoxOffice": "$3,813,000",
            "Gross" : "₹350 crore",
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
            <iframe src="https://www.youtube-nocookie.com/embed/EnhS3matIoU?autoplay=1&mute=1" title="YouTube video" allowFullScreen style={{borderRadius: "10px"}}></iframe>

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
                  <p style={{ color: "white", textAlign: 'justify' }}>{movie.plot}</p>
                  <div className="mb-5">
                    <h4 style={{ color: '#f70776' }}>Budget - <span style={{ color: '#9896f1' }}>{movie.BoxOffice}</span></h4>
                    <h4 style={{ color: '#f70776' }}>BoxOffice - <span style={{ color: '#9896f1' }}>{movie.Gross}</span></h4>
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
                          src="https://images.indianexpress.com/2019/06/mani-ratnam-759.jpg"
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
                          src="https://images.indianexpress.com/2019/06/mani-ratnam-759.jpg"
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
                          src="https://procaffenation.com/wp-content/uploads/2017/09/ARRahman-1.jpg"
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
                Star Cast
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

export default KML3
