import React from 'react'

const BML2 = () => {
    const movies = [
        {
            "Title": "Kisi Ka Bhai Kisi Ki Jaan",
            "Year": "2023",
            "Rated": "Not Rated",
            "Released": "21 Apr 2023",
            "Runtime": "145 min",
            "Genre": "Action, Comedy, Drama",
            "Director": "Farhad Samji",
            "Producer": "Salma Khan",
            "musicDirector":"Ravi Basrur",
            "Writer": "Tasha Bhambra, Sparsh Khetarpal, Sajid Nadiadwala",
            "actors": [
                {
                    name : "Salman Khan",
                    character: "Bhaijaan",
                    pic: "https://i.pinimg.com/736x/8e/fd/19/8efd192f0d187b6beb6136f4e811908b--salman-khan-eyes.jpg"
                },
                {
                    name : " Pooja Hegde",
                    character: " Gundamaneni Bhagyalakshmi",
                    pic: "https://1.bp.blogspot.com/-OsgSPux-k2o/YKhtcJegz4I/AAAAAAAAq18/mDhvHtwp79cSB8f4_3PrZW_EunHhB1fKQCLcBGAsYHQ/s1250/pooja-hegde-light-emerald-earrings.jpeg"
                },
                {
                    name : " Venkatesh",
                    character: "Gundamaneni Balakrishna",
                    pic: "https://th.bing.com/th/id/OIP.5u9ySszOkttf49FS7vLnywHaHv?pid=ImgDet&w=564&h=589&rs=1"
                },
                {
                    name : "Bhumika Chawla ",
                    character: "Gundamaneni Anandini",
                    pic: "https://3.bp.blogspot.com/-jT_hSwmzhx0/T0VMHn0IMhI/AAAAAAAAKKY/SXyqCVmEs4w/s1600/bhumika_chawla_saree_thakita_thakita_02.jpg"
                },
                {
                    name : "Jagapathi Babu",
                    character: "Kodati Nageshwar",
                    pic: "https://th.bing.com/th/id/OIP.IOGjighXGtjKEd4Co1ZNugHaHZ?pid=ImgDet&w=788&h=787&rs=1"
                },
                {
                    name : "Raghav Juyal",
                    character: " Ishq (Bhaijaan's brother)",
                    pic: "https://wikibiopedia.com/wp-content/uploads/2018/05/Raghav-Juyal-.jpeg"
                },
              ],
            "Plot": "The eldest brother refuses to marry since he believes it may create disharmony in his big family. His brothers, who've already found partners, come together to find a match for him.",
            "Language": "Hindi",
            "Country": "India",
            "Awards": "N/A",
            "Poster": "https://e.telugurajyam.com/wp-content/uploads/2023/04/kisi-ka-bhai-kisi-ki-jaan-movie-review-rating-1024x569.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "4.4/10"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "4.4",
            "imdbVotes": "39,852",
            "imdbID": "tt3679040",
            "Type": "movie",
            "DVD": "N/A",
            "BoxOffice": "₹125 crore",
            "Gross":"₹182.44 crore",
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
                src="https://www.youtube-nocookie.com/embed/bsi8_9EoYyg?autoplay=1&mute=1"
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
                          src="https://stat2.bollywoodhungama.in/wp-content/uploads/2019/04/%E2%80%9CJab-Main-Baithta-Hu-Ajay-Devgn-Rohit-Shetty-Ke-sath-Toh-Ye-Sawaal-Uthte-Hai-ki%E2%80%A6%E2%80%9DFarhad-Samji.jpg"
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
                          src="https://th.bing.com/th/id/R.7663c9ed07cbd327f1d60d6880887d8d?rik=26kiGbtRpGG9KQ&riu=http%3a%2f%2fstatic.dnaindia.com%2fsites%2fdefault%2ffiles%2fstyles%2ffull%2fpublic%2f2018%2f03%2f22%2f663555-599083-salman-khan-080717.jpg&ehk=eICZmZaZH21bHXjmKfgo43sqb6Z8KtCIQGW2uD9Q0GY%3d&risl=&pid=ImgRaw&r=0"
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
                          src="https://th.bing.com/th/id/OIP.RZLu2nMiFeetMYVu10dJsQHaFL?pid=ImgDet&rs=1"
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

export default BML2
