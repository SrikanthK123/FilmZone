import React from "react";
import moviepic from '../Images/bajaangi.png'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const BollywoodMovie = () => {
  const movies = [
    {
      id: 12345,
      Title: "Pathaan",
      release_date: "2023-01-25",
      cast: ["Shah Rukh Khan", "Deepika Padukone", "John Abraham"],
      crew: ["Siddharth Anand (director)", "Aditya Chopra (producer)"],
      imdbRating: "4.5/5",
      Poster:'https://cdn.bollywoodmdb.com/fit-in/movies/largethumb/2022/pathan/pathan-poster-9.jpg'
    },
    {
      "Title": "Kisi Ka Bhai Kisi Ki Jaan",
      "Year": "2023",
      "Rated": "Not Rated",
      "Released": "21 Apr 2023",
      "Runtime": "145 min",
      "Genre": "Action, Comedy, Drama",
      "Director": "Farhad Samji",
      "Writer": "Tasha Bhambra, Sparsh Khetarpal, Sajid Nadiadwala",
      "Actors": "Salman Khan, Pooja Hegde, Venkatesh Daggubati",
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
      "BoxOffice": "N/A",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
  },
    {
        "Title": "Jawan",
        "Year": "2023",
        "Rated": "Not Rated",
        "Released": "07 Sep 2023",
        "Runtime": "169 min",
        "Genre": "Action, Thriller",
        "Director": "Atlee",
        "Writer": "Sumit Arora, Atlee, Ramanagirivasan",
        "Actors": "Shah Rukh Khan, Nayanthara, Vijay Sethupathi",
        "Plot": "A high-octane action thriller which outlines the emotional journey of a man who is set to rectify the wrongs in the society.",
        "Language": "Hindi, English",
        "Country": "India",
        "Awards": "N/A",
        "Poster": "https://ibomma.org.in/wp-content/uploads/2023/09/jawan-768x960.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "7.5/10"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "7.5",
        "imdbVotes": "60,891",
        "imdbID": "tt15354916",
        "Type": "movie",
        "DVD": "N/A",
        "BoxOffice": "$14,735,611",
        "Gross" : "$440 million",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "Bawaal",
        "Year": "2023",
        "Rated": "N/A",
        "Released": "21 Jul 2023",
        "Runtime": "137 min",
        "Genre": "Action, Drama, Romance",
        "Director": "Nitesh Tiwari",
        "Writer": "Piyush Gupta, Shreyas Jain, Nikhil Mehrotra",
        "Actors": "Varun Dhawan, Janhvi Kapoor, Manoj Pahwa",
        "Plot": "A small-town man who falls in love with the most beautiful girl in town. He wants to marry her one day because marrying her can raise his social position.",
        "Language": "Hindi, English",
        "Country": "India",
        "Awards": "N/A",
        "Poster": "https://timesofindia.indiatimes.com/photo/msid-101629963,imgsize-185263.cms",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "6.6/10"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "6.6",
        "imdbVotes": "14,571",
        "imdbID": "tt19755170",
        "Type": "movie",
        "DVD": "N/A",
        "BoxOffice": "N/A",
        "Production": "N/A",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "The Kerala Story",
        "Year": "2023",
        "Rated": "N/A",
        "Released": "12 May 2023",
        "Runtime": "138 min",
        "Genre": "Drama",
        "Director": "Sudipto Sen, Vipul Amrutlal Shah",
        "Writer": "Suryapal Singh, Sudipto Sen, Vipul Amrutlal Shah",
        "Actors": "Adah Sharma, Yogita Bihani, Sonia Balani",
        "Plot": "A converted Muslim woman Fatima Ba narrates her ordeal of how she once wanted to become a nurse but was abducted from her home and manipulated by religious vanguards, turned into an ISIS terrorist and landed in Afghanistan jail.",
        "Language": "Malayalam, Tamil, Telugu, Hindi",
        "Country": "India",
        "Awards": "N/A",
        "Poster": "https://i.ytimg.com/vi/6VAX56iYmZE/maxresdefault.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "7.2/10"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "7.2",
        "imdbVotes": "65,691",
        "imdbID": "tt24268454",
        "Type": "movie",
        "DVD": "N/A",
        "BoxOffice": "N/A",
        "Production": "N/A",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "Rocky Aur Rani Kii Prem Kahaani",
        "Year": "2023",
        "Rated": "Not Rated",
        "Released": "28 Jul 2023",
        "Runtime": "168 min",
        "Genre": "Comedy, Drama, Family",
        "Director": "Karan Johar",
        "Writer": "Shashank Khaitan, Ishita Moitra, Sumit Roy",
        "Actors": "Ranveer Singh, Alia Bhatt, Dharmendra",
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
        "BoxOffice": "N/A",
        "Production": "N/A",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "Bholaa",
        "Year": "2023",
        "Rated": "Not Rated",
        "Released": "30 Mar 2023",
        "Runtime": "144 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Ajay Devgn",
        "Writer": "Lokesh Kanagaraj, Ankush Singh, Aamil Keeyan Khan",
        "Actors": "Tabu, Ajay Devgn, Abhishek Bachchan",
        "Plot": "After getting out of prison with the desire to meet his daughter, Bholaa's plans are interrupted by a well-orchestrated drug bust.",
        "Language": "Hindi",
        "Country": "India",
        "Awards": "N/A",
        "Poster": "https://i.ytimg.com/vi/za7et_lK_NU/maxresdefault.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "6.0/10"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "6.0",
        "imdbVotes": "21,830",
        "imdbID": "tt15302222",
        "Type": "movie",
        "DVD": "N/A",
        "BoxOffice": "N/A",
        "Production": "N/A",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "Selfiee",
        "Year": "2023",
        "Rated": "N/A",
        "Released": "24 Feb 2023",
        "Runtime": "148 min",
        "Genre": "Action, Comedy, Drama",
        "Director": "Raj Mehta",
        "Writer": "Sachy, Rishabh Sharma",
        "Actors": "Akshay Kumar, Emraan Hashmi, Mrunal Thakur",
        "Plot": "Bollywood superstar Vijay Kumar needs to obtain a new driving license from RTO officer Om Prakash Agarwal, a diehard fan of Vijay. A misunderstanding escalates into a feud which is played out in front of the entire country.",
        "Language": "Hindi",
        "Country": "India",
        "Awards": "N/A",
        "Poster": "https://i.ytimg.com/vi/abBafZWTFXk/maxresdefault.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "5.7/10"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "5.7",
        "imdbVotes": "12,907",
        "imdbID": "tt15516726",
        "Type": "movie",
        "DVD": "N/A",
        "BoxOffice": "$335,775",
        "Production": "N/A",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "Satyaprem Ki Katha",
        "Year": "2023",
        "Rated": "N/A",
        "Released": "29 Jun 2023",
        "Runtime": "146 min",
        "Genre": "Comedy, Drama, Musical",
        "Director": "Sameer Vidwans",
        "Writer": "Karan Shrikant Sharma",
        "Actors": "Kartik Aaryan, Kiara Advani, Supriya Pathak",
        "Plot": "A middle-class boy in Ahmedabad, Satyaprem falling in one-sided love with Katha, who is coping with her breakup with Tapan. Through the journey, they discover each other's life and complement in accomplishing what was left halfway.",
        "Language": "Hindi",
        "Country": "India",
        "Awards": "N/A",
        "Poster": "https://i.ytimg.com/vi/Nlel57S46Kg/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGFYgXShlMA8=&rs=AOn4CLCIMQ94nvCNeabvTmSoq_KD2zkPdA",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "7.2/10"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "7.2",
        "imdbVotes": "27,438",
        "imdbID": "tt14914988",
        "Type": "movie",
        "DVD": "N/A",
        "BoxOffice": "N/A",
        "Production": "N/A",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "Shehzada",
        "Year": "2023",
        "Rated": "N/A",
        "Released": "17 Feb 2023",
        "Runtime": "142 min",
        "Genre": "Action, Comedy, Drama",
        "Director": "Rohit Dhawan",
        "Writer": "Hussain Dalal, Rohit Dhawan, Trivikram Srinivas",
        "Actors": "Kartik Aaryan, Kriti Sanon, Paresh Rawal",
        "Plot": "Bantu is hated by his father Valmiki since he was a toddler. Samara, his boss, shows him affection and love until he discovers that the Jindals are his parents. Bantu decides to seek Jindals love and protect them from threats they...",
        "Language": "Hindi",
        "Country": "India",
        "Awards": "N/A",
        "Poster": "https://i.ytimg.com/vi/OOjuP-gV-3A/maxresdefault.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "4.5/10"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "4.5",
        "imdbVotes": "30,632",
        "imdbID": "tt13130948",
        "Type": "movie",
        "DVD": "N/A",
        "BoxOffice": "N/A",
        "Production": "N/A",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "IB 71",
        "Year": "2023",
        "Rated": "Not Rated",
        "Released": "12 May 2023",
        "Runtime": "117 min",
        "Genre": "Action, Thriller",
        "Director": "Sankalp Reddy, Lee Whittaker",
        "Writer": "Sahar Quaze, Sankalp Reddy, Vasudev Reddy",
        "Actors": "Anupam Kher, Vidyut Jammwal, Nissar Khan",
        "Plot": "A two- front war between Indian intelligence agencies and the Pakistani establishment.",
        "Language": "Hindi, Telugu, Tamil",
        "Country": "India",
        "Awards": "N/A",
        "Poster": "https://i.ytimg.com/vi/LNXlvk9Uqxc/maxresdefault.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "7.2/10"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "7.2",
        "imdbVotes": "9,421",
        "imdbID": "tt15073166",
        "Type": "movie",
        "DVD": "N/A",
        "BoxOffice": "N/A",
        "Production": "N/A",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "Mission Majnu",
        "Year": "2023",
        "Rated": "TV-MA",
        "Released": "20 Jan 2023",
        "Runtime": "129 min",
        "Genre": "Action, Drama, History",
        "Director": "Shantanu Bagchi",
        "Writer": "Parveez Sheikh, Aseem Arrora, Sumit Batheja",
        "Actors": "Sidharth Malhotra, Rashmika Mandanna, Parmeet Sethi",
        "Plot": "In the 1970s, an undercover Indian spy takes on a deadly mission to expose a covert nuclear weapons program in the heart of Pakistan.",
        "Language": "Hindi",
        "Country": "India",
        "Awards": "3 wins & 3 nominations",
        "Poster": "https://i.ytimg.com/vi/UktTIIiu8ZY/maxresdefault.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "7.1/10"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "7.1",
        "imdbVotes": "42,878",
        "imdbID": "tt13131232",
        "Type": "movie",
        "DVD": "N/A",
        "BoxOffice": "N/A",
        "Production": "N/A",
        "Website": "N/A",
        "Response": "True"
    }
  ];

  return (
    <div className="BollywoodPage">
      <div class="container py-4">
        <div class="p-5 mb-4 bg-light rounded-3" id="BajrangiBhaijaanmovie">
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
                id="BajrangiBhaijaan"
                style={{ width: "35vw", height: "35vh", margin: "auto" }}
                 src={moviepic}
                 data-aos="silde-up"
              />
            </div>
            <a href="/bollywood"><button class="bolly-hover bn21">Play</button></a>
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
          <span style={{ color: "#49beb7" }}>BollyWood Show</span>
        </h2>
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          {movies.map((movie, index) => (
            <div id='bollywoodCard'  className="col" key={index} data-aos="fade-up">
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
  );
};

export default BollywoodMovie;
