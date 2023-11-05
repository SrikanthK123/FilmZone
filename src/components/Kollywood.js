import React from 'react'
import moviepic1 from '../Images/vk2.png'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
const Kollywood = () => {
    const movies =[
        {
            "Title": "Jailer",
            "Year": "2023",
            "Rated": "N/A",
            "Released": "10 Aug 2023",
            "Runtime": "168 min",
            "Genre": "Action, Comedy, Crime",
            "Director": "Nelson Dilipkumar",
            "Writer": "Nelson Dilipkumar",
            "Actors": "Rajinikanth, Mohanlal, Shivarajkumar",
            "Plot": "A retired jailer goes on a manhunt to find his son's killers. But the road leads him to a familiar, albeit a bit darker place. Can he emerge from this complex situation successfully?",
            "Language": "Tamil, Malayalam, Hindi, Telugu, Kannada",
            "Country": "India",
            "Awards": "N/A",
            "Poster": "https://i.ytimg.com/vi/dPjsE-u2wdw/maxresdefault.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "7.1/10"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "7.1",
            "imdbVotes": "24,346",
            "imdbID": "tt11663228",
            "Type": "movie",
            "DVD": "N/A",
            "BoxOffice": "N/A",
            "Production": "N/A",
            "Website": "N/A",
            "Response": "True"
        },
        {
            "Title": "Leo",
            "Year": "2023",
            "Rated": "N/A",
            "Released": "19 Oct 2023",
            "Runtime": "168 min",
            "Genre": "Action, Comedy, Crime",
            "Director": "Lokesh Kanagaraj",
            "Writer": "Lokesh Kanagaraj",
            "Actors": "Vijay, Trisha, Arjun,Sanjay Dutt ",
            
            "Language": "Tamil, Malayalam, Hindi, Telugu, Kannada",
            "Country": "India",
            "Awards": "N/A",
            "Poster": "https://wallpapercave.com/wp/wp12185319.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "7.1/10"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "7.9",
            "imdbVotes": "24,346",
            "imdbID": "tt11663228",
            "Type": "movie",
            "DVD": "N/A",
            "BoxOffice": "N/A",
            "Production": "N/A",
            "Website": "N/A",
            "Response": "True"
        },
        {
            "Title": "Ponniyin Selvan: Part Two",
            "Year": "2023",
            "Rated": "Not Rated",
            "Released": "28 Apr 2023",
            "Runtime": "164 min",
            "Genre": "Action, Adventure, Drama",
            "Director": "Mani Ratnam",
            "Writer": "Divya Prakash Dubey, Jayamohan, Kalki Krishnamoorthy",
            "Actors": "Vikram, Karthi, Jayam Ravi",
            "Plot": "Arulmozhi Varman continues on his journey to become Rajaraja I, the greatest ruler of the historic Chola empire of south India.",
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
            "Production": "N/A",
            "Website": "N/A",
            "Response": "True"
        },
        {
            "Title": "Varisu",
            "Year": "2023",
            "Rated": "Not Rated",
            "Released": "11 Jan 2023",
            "Runtime": "169 min",
            "Genre": "Action, Drama",
            "Director": "Vamshi Paidipally",
            "Writer": "Vamshi Paidipally, Hari, Ahishor Solomon",
            "Actors": "Joseph Vijay, Rashmika Mandanna, Shaam",
            "Plot": "Vijay Rajendran is a happy to-go lucky man. Things change when his father becomes terminally ill, and he is left to manage his business empire.",
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
            "Production": "N/A",
            "Website": "N/A",
            "Response": "True"
        },
        {
            "Title": "Thunivu",
            "Year": "2023",
            "Rated": "Not Rated",
            "Released": "11 Jan 2023",
            "Runtime": "146 min",
            "Genre": "Action, Crime, Thriller",
            "Director": "H. Vinoth",
            "Writer": "H. Vinoth",
            "Actors": "Ajith Kumar, Manju Warrier, Samuthirakani",
            "Plot": "A mysterious mastermind - Daredevil and his team forms a plan and commits bank heist to find the corporate looted people's money.",
            "Language": "Tamil, English, Hindi",
            "Country": "India",
            "Awards": "1 nomination",
            "Poster": "https://way2ott.com/wp-content/uploads/2023/02/cropped-FoBFYyJaQAIVylL.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "6.1/10"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "6.1",
            "imdbVotes": "28,585",
            "imdbID": "tt15163652",
            "Type": "movie",
            "DVD": "N/A",
            "BoxOffice": "N/A",
            "Production": "N/A",
            "Website": "N/A",
            "Response": "True"
        },
        {
            "Title": "Vaathi",
            "Year": "2023",
            "Rated": "Not Rated",
            "Released": "17 Feb 2023",
            "Runtime": "139 min",
            "Genre": "Action, Drama",
            "Director": "Venky Atluri",
            "Writer": "Venky Atluri",
            "Actors": "Dhanush, Samyuktha Menon, Sai Kumar",
            "Plot": "The life of a young man and his struggles against the privatization of education.",
            "Language": "Tamil, Telugu",
            "Country": "India",
            "Awards": "N/A",
            "Poster": "https://i.ytimg.com/vi/TVnb1OCFIgk/maxresdefault.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "7.3/10"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "7.3",
            "imdbVotes": "9,265",
            "imdbID": "tt15427980",
            "Type": "movie",
            "DVD": "N/A",
            "BoxOffice": "N/A",
            "Production": "N/A",
            "Website": "N/A",
            "Response": "True"
        },
        {
            "Title": "Mark Antony",
            "Year": "2023",
            "Rated": "N/A",
            "Released": "15 Sep 2023",
            "Runtime": "150 min",
            "Genre": "Action, Comedy, Drama",
            "Director": "Adhik Ravichandran",
            "Writer": "SJ Arjun, Savari Muthu, Adhik Ravichandran",
            "Actors": "Vishal, S.J. Suryah, Ritu Varma",
            "Plot": "Two gangsters, Mark and Antony acquire a mobile phone that has the ability to time travel.",
            "Language": "Tamil, Telugu, Malayalam, Kannada",
            "Country": "India",
            "Awards": "N/A",
            "Poster": "https://www.nowrunning.com/content/movie/2022/mark-26088/bg-video382023112217.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "7.2/10"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "7.2",
            "imdbVotes": "1,925",
            "imdbID": "tt23052532",
            "Type": "movie",
            "DVD": "N/A",
            "BoxOffice": "N/A",
            "Production": "N/A",
            "Website": "N/A",
            "Response": "True"
        },
        {
            "Title": "Maaveeran",
            "Year": "2023",
            "Rated": "N/A",
            "Released": "14 Jul 2023",
            "Runtime": "163 min",
            "Genre": "Action, Comedy, Drama",
            "Director": "Madonne Ashwin",
            "Writer": "Madonne Ashwin",
            "Actors": "Sivakarthikeyan, Aditi Shankar, Mysskin",
            "Plot": "A cowardly cartoonist starts being 'controlled' by a cartoon action figure, and takes on a corrupt politician.",
            "Language": "Telugu, Tamil",
            "Country": "India",
            "Awards": "N/A",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYTM0Mzk3MDYtMDQxMS00NjRhLTlmYWEtMTRmNDUzN2RlMmY2XkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "7.4/10"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "7.4",
            "imdbVotes": "6,658",
            "imdbID": "tt22543326",
            "Type": "movie",
            "DVD": "N/A",
            "BoxOffice": "N/A",
            "Production": "N/A",
            "Website": "N/A",
            "Response": "True"
        },
        {
            "Title": "Maamannan",
            "Year": "2023",
            "Rated": "N/A",
            "Released": "29 Jun 2023",
            "Runtime": "157 min",
            "Genre": "Action, Drama, Thriller",
            "Director": "Mari Selvaraj",
            "Writer": "Mari Selvaraj",
            "Actors": "Vadivelu, Fahadh Faasil, Keerthy Suresh",
            "Plot": "The community that was exploited by the town's influential man, who completely rules due to the powerful backing of the authorities. A man collects evidence to flip him upside down when he was helpless to stop his endless torture.",
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
            "BoxOffice": "N/A",
            "Production": "N/A",
            "Website": "N/A",
            "Response": "True"
        },
        {
            "Title": "Chithha",
            "Year": "2023",
            "Rated": "N/A",
            "Released": "28 Sep 2023",
            "Runtime": "140 min",
            "Genre": "Drama, Thriller",
            "Director": "S.U. Arun Kumar",
            "Writer": "N/A",
            "Actors": "Siddharth, Nimisha Sajayan",
            "Plot": "",
            "Language": "Tamil, Telugu, Kannada, Malayalam",
            "Country": "India",
            "Awards": "N/A",
            "Poster": "https://i.ytimg.com/vi/RqUbL6nbNlw/maxresdefault.jpg",
            "Ratings": [],
            "Metascore": "N/A",
            "imdbRating": "8.5",
            "imdbVotes": "N/A",
            "imdbID": "tt27540185",
            "Type": "movie",
            "DVD": "N/A",
            "BoxOffice": "N/A",
            "Production": "N/A",
            "Website": "N/A",
            "Response": "True"
        },
        {
          "Title": "Kaithi",
          "Year": "2019",
          "Rated": "Not Rated",
          "Released": "24 Oct 2019",
          "Runtime": "145 min",
          "Genre": "Action, Adventure, Crime",
          "Director": "Lokesh Kanagaraj",
          "Writer": "Lokesh Kanagaraj, Pon Parthiban, Sanjeev Tiwari",
          "Actors": "Karthi, Narain, Arjun Das",
          "Plot": "Dilli, an ex-convict, endeavours to meet his daughter for the first time after leaving prison. However, his attempts are interrupted due to a drug raid planned by Inspector Bejoy.",
          "Language": "Tamil",
          "Country": "India",
          "Awards": "15 wins & 8 nominations",
          "Poster": "https://assets.thehansindia.com/h-upload/2019/10/25/229480-kaidi-review.jpg",
          "Ratings": [
              {
                  "Source": "Internet Movie Database",
                  "Value": "8.4/10"
              },
              {
                  "Source": "Rotten Tomatoes",
                  "Value": "100%"
              }
          ],
          "Metascore": "N/A",
          "imdbRating": "8.4",
          "imdbVotes": "38,799",
          "imdbID": "tt9900782",
          "Type": "movie",
          "DVD": "10 Mar 2020",
          "BoxOffice": "N/A",
          "Production": "N/A",
          "Website": "N/A",
          "Response": "True"
      },
      {
        "Title": "Kabali",
        "Year": "2016",
        "Rated": "Not Rated",
        "Released": "22 Jul 2016",
        "Runtime": "153 min",
        "Genre": "Action, Crime, Drama",
        "Director": "Pa. Ranjith",
        "Writer": "Mohan Nair, Pa. Ranjith",
        "Actors": "Rajinikanth, Winston Chao, Radhika Apte",
        "Plot": "A reformed gangster is released from prison and attempts to protect his family from his enemies.",
        "Language": "Tamil",
        "Country": "India",
        "Awards": "5 wins & 6 nominations",
        "Poster": "https://th.bing.com/th/id/R.f0cfa2e85b4bb70b708c1f3734474be3?rik=fp2bOa1%2ftew4ug&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fwp1852207.jpg&ehk=DQAoYzrBtcylqEerW541BVJQJrsEXg9OG4KuBNtyqgU%3d&risl=&pid=ImgRaw&r=0",
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
        "BoxOffice": "$3,903,095",
        "Production": "N/A",
        "Website": "N/A",
        "Response": "True"
    }
    ]
  return (
    <div className='KollywoodPage'>
      <div class="container py-4">
        <div class="p-5 mb-4 bg-light rounded-3" id="vikramPoster">
          <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold" style={{ color: "white" }}></h1>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "baseline",
              }}
            >
              <img
                id="vikram"
                style={{ width: "35vw", height: "35vh", margin: "auto" }}
                 src={moviepic1}
                 data-aos="silde-up"
              />
            </div>
            <a href="/kollywood"><button type="button" id='kolly-hover' class="btn btn-secondary">Play</button></a>
          </div>{" "}
        </div>
      </div>
      <div className="container px-4 py-5" id="custom-cards">
        <h2 className="pb-2 border-bottom" style={{ color: "white" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            class="bi bi-film"
            viewBox="0 0 16 16"
          >
            <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />
          </svg>{" "}
          <span style={{ color: "#49beb7" }}>KollyWood Show</span>
        </h2>
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          {movies.map((movie, index) => (
            <div id='kollywoodCard' className="col" key={index} data-aos="fade-up">
              <Link style={{ textDecoration: "none" }} to= {movie.Title} >
                <div
                  id={`tmovie${index}`}
                  className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                  style={{ backgroundImage: `url(${movie.Poster})` }} // Use 'Poster' from the JSON data
                >
                  <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <h3
                      id="movieTitle"
                      className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold"
                      style={{ width: "fit-content" }}
                    >
                      {movie.Title} {/* Use 'Title' from the JSON data */}
                    </h3>
                    <ul
                      id="Rating"
                      style={{
                        color: "#facf5a",
                        fontWeight: "bold",
                        backgroundColor: "black",
                        width: "fit-content",
                        padding: "5px",
                        borderRadius: "8px",
                      }}
                      className="d-flex list-unstyled mt-auto"  data-aos="zoom-in"
                    >
                      {movie && movie.imdbRating && (
                        <li className="me-auto">
                          IMDb Rating:{" "}
                          <span style={{ color: "#ff0000" }}>{movie.imdbRating}</span>
                        </li>
                        
                      )}
                      {/* Add the rest of your movie information here */}
                    </ul>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Kollywood
