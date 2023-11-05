import React from 'react'

const BML6 = () => {
    const movies = [
        {
            "Title": "Rocky Aur Rani Kii Prem Kahaani",
            "Year": "2023",
            "Rated": "Not Rated",
            "Released": "28 Jul 2023",
            "Runtime": "168 min",
            "Genre": "Comedy, Drama, Family",
            "Director": "Karan Johar",
            "Producer" : "Karan Johar",
            "musicDirector" : "	Pritam",
            "Writer": "Shashank Khaitan, Ishita Moitra, Sumit Roy",
            "actors": [
                {
                    name : "Ranveer Singh",
                    character: "Rocky Randhawa",
                    pic: "https://img.starbiz.com/resize/750x-/2019/09/10/classic-slick-back-2c6f.jpg"
                },
                {
                    name : "Alia Bhatt",
                    character: "Rani Chatterjee",
                    pic : "https://th.bing.com/th/id/OIP.4wBAA2N2WyJLKoJhkVa0qgHaHa?pid=ImgDet&w=500&h=500&rs=1"
                },
                {
                    name : "Jaya Bachchan",
                    character: "Dhanalakshmi Randhawa (Rocky’s grandmother)",
                    pic: "https://media.vogue.in/wp-content/uploads/2019/03/Jaya-Bachchan.jpg"
                },
                {
                    name : "Dharmendra",
                    character: "Kanwal Lund (Rocky's grandfather)",
                    pic: "https://th.bing.com/th/id/R.693e07f2ece9f421d6499dc13ca036ec?rik=EVW%2bgUXeTDySpg&riu=http%3a%2f%2fwww.punjabigram.com%2fpg%2fdharmendra%2fdharmendra_singh_deol_film_star.jpg&ehk=DuupnPBgNUuV%2fRrnJEGK1M3AR8IJeYBG9y1SMDAg6cY%3d&risl=&pid=ImgRaw&r=0"
                },
                {
                    name : "Shabana Azmi",
                    character: "Jamini Chatterjee (Rani's grandmother)",
                    pic: "https://th.bing.com/th/id/R.ceb3417313012dd8a62e191345ec3764?rik=d5ktFTDT8FkOTQ&riu=http%3a%2f%2ftopnews.in%2flight%2ffiles%2fShabana+Azmi%2c.jpg&ehk=IA1TBcm3bsCmP8a88uYDSOvf42FDNnHnHWTBbqoOTfE%3d&risl=&pid=ImgRaw&r=0"
                },
                
                {
                    name : "Tota Roy Chowdhury",
                    character: " Chandon Chatterjee ( Rani's father)",
                    pic: "https://4.bp.blogspot.com/-PrZc1FQy7c8/XJ-0CKPNTrI/AAAAAAAARzc/xV9sD8MxLnEpjxPcOv5MCS5Hig1xkaKSACLcBGAs/s1600/fBt4fx2DtWCi3HZtBJuG_2017_07_08.jpg"
                }
              ],
            "Plot": "Flamboyant Punjabi Rocky and intellectual Bengali journalist Rani fall in love despite their differences. After facing family opposition, they decide to live with each other's families for three months before getting married.",
            "Language": "Hindi, English",
            "Country": "India",
            "Awards": "N/A",
            "Poster": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhhc--NOa4qyi8Ry5abiNH4mHFRDCWOXv86lkKw-2NI6i-QK2jTKSWspxAI1i4uPyjwa76zTi_fepbVOCaBnXzLiQ0A3kNkoIxVTKHkGD8jbwoi87_7i6DDf5jDOQjXTlZPj_de2GfkPvGHEMQLStL6g33iKUKi6CXbm_2E2RfxS1C6gqZUog-E06vLLy0/s16000/Rocky-Aur-Rani-Ki-Prem-Kahani-ibomma.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "6.8/10"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "6.8",
            "imdbVotes": "37,198",
            "imdbID": "tt14993250",
            "Type": "movie",
            "DVD": "N/A",
            "BoxOffice": "₹160 crore",
            "Gross" : "	₹355.61 crore",
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
                src="https://www.youtube-nocookie.com/embed/6mdxy3zohEk?autoplay=1&mute=1"
                title="YouTube video"
                allowFullScreen
                style={{ borderRadius: "10px" }}
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
                          src="https://data1.ibtimes.co.in/en/full/737721/karan-johar.jpg"
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
                          src="https://data1.ibtimes.co.in/en/full/737721/karan-johar.jpg"
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
                          src="https://static.toiimg.com/photo/83402681.cms"
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

export default BML6
