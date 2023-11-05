import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import ProjectKLogo from "../Images/ProjectKTitle2.png"

const UpComingMoviesList = () => {
    const tollywoodMovies202 =[
        {
            movieTitle : 'Salaar',
            posterUrl : 'https://th.bing.com/th/id/OIP.3yP3Mpzd4sFetaNW8G96JwHaFI?pid=ImgDet&rs=1'
        },
        {
            movieTitle : 'OG',
            posterUrl : 'https://images.cinemaexpress.com/uploads/user/imagelibrary/2023/4/15/original/og.jpg'
        },
        {
            movieTitle : 'Devara',
            posterUrl : 'https://i.ytimg.com/vi/PBTbyOHAYHY/maxresdefault.jpg'
        },
        {
            movieTitle : 'GameChanger',
            posterUrl : 'https://www.behindwoods.com/uploads/642182bb4519c.jpg'
        },
        {
            movieTitle : 'Hi Nanna',
            posterUrl : 'https://cdn.123telugu.com/videosimg/wp-content/uploads/2023/07/maxresdefault-32.jpg'
        },
        {
            movieTitle : 'Pushpa: The Rule - Part 2',
            posterUrl : 'https://th.bing.com/th/id/OIP.Ym0vF06A9JhTMfC-MmK5uAAAAA?pid=ImgDet&rs=1'
        },
    ]
    const Search = [
        {
            Title : "Dune-2",
            posterUrl:'https://fandomwire.com/wp-content/uploads/2021/10/dune-lede-2-1300x650-1.jpeg'
        },
        {
            Title : "The Beekeeper",
            posterUrl:'https://i.ytimg.com/vi/-dXoapBkAUs/maxresdefault.jpg'
        },
        {
            Title : "The Fall Guy (2024)",
            posterUrl:'https://th.bing.com/th/id/OIF.lP5OugUbFRh9rojgbJ27Eg?pid=ImgDet&rs=1'
        },
        {
            Title : "Mickey 17 (2024)",
            posterUrl:'https://i.ytimg.com/vi/dR1LjDVXQtg/maxresdefault.jpg'
        },
        {
            Title : "Deadpool 3 (2024)",
            posterUrl:'https://1.bp.blogspot.com/-0YGuraRscgM/YO4jkc3pshI/AAAAAAAAB5Q/rBYC3YFiMXkpfx9ORYeoi1I20fsgv0CuQCLcBGAsYHQ/s1350/deadpool%2B3.jpg'
        },
        {
            Title : "Garfield (2024)",
            posterUrl:'https://m.media-amazon.com/images/M/MV5BMjY5MTI3OGEtMTgyYy00ODM0LWIzNGQtNTdmYjE0MDY3MjE3XkEyXkFqcGdeQXVyMTA1NjE5MTAz._V1_FMjpg_UX1000_.jpg'
        },
    ]
    const bollywoodUpcoming = [
        {
            Title : "Fighter (2024)",
            Poster : "https://m.media-amazon.com/images/M/MV5BY2FmMmIzOWQtYzk4ZS00NjhiLWJjNzMtOWNhNjM5MDlkOTJiXkEyXkFqcGdeQXVyMTYyMzI1NDMw._V1_.jpg"
        },
        {
            Title : " Housefull 5 (2024)",
            Poster : "https://static.tnn.in/thumb/msid-101385997,updatedat-1688109272284,width-1280,height-720,resizemode-75/101385997.jpg"
        },
        {
            Title : "Singham Again (2024)",
            Poster : "https://th.bing.com/th/id/OIP.ApXh-gHIi8nYgA2XiIeFIAHaIq?pid=ImgDet&rs=1"
        },
        {
            Title : "Tiger-3",
            Poster : "https://i.ytimg.com/vi/0fu2q1pdyAM/maxresdefault.jpg"
        },
        {
            Title : "Dunki",
            Poster : "https://english.cdn.zeenews.com/sites/default/files/2023/11/04/1310887-dunki-srk-release.gif"
        },
        {
            Title : "Animal",
            Poster : "https://autowithsid.in/wp-content/uploads/2023/06/Animal-Upcoming-Ranbir-Kapoor-Movie-2023.jpg"
        },
    ]
    const KollyWoodUpComing =[
        {
            Title:"Ayalaan",
            Poster : "https://i.ytimg.com/vi/YYiU2yKRmwo/maxresdefault.jpg"
        },
        {
            Title : "Kanguva",
            Poster : "https://kanguva.com/wp-content/uploads/2023/04/Kanguva-Title-25-Million-Reach-Trending-Image.jpg"
        },
        {
            Title : "Lal Salaam",
            Poster : "https://th.bing.com/th/id/OIF.dyboYlUZIaFqKrBJVvHm4A?pid=ImgDet&rs=1"
        },
        {
            Title : "Thangalaan",
            Poster : "https://th.bing.com/th/id/OIF.MYURIRfz1EYJvrZOfOitUA?pid=ImgDet&rs=1"
        },
        {
            Title : "Indian 2",
            Poster : "https://th.bing.com/th/id/OIF.oQnf4B5zmdBydD2KEGdbOA?pid=ImgDet&rs=1"
        },
        {
            Title : "Japan",
            Poster : "https://i.ytimg.com/vi/sWGWvHy2Zxw/maxresdefault.jpg"
        }
    ]
  return (
    <div className="tollywoodMain">
    <div class="container py-4" >
<div class="p-5 mb-4 bg-light rounded-3" id="ProjecK">
  <div class="container-fluid py-5" >
    <h1 class="display-5 fw-bold" style={{color:'white'}}></h1>
    <div style={{ display: 'flex', justifyContent: 'center',alignItems:'baseline' }}>
   <img id="bahu"  data-aos="silde-up"  style={{ width: '50vw', height: '50vh', margin: 'auto' }} src= {ProjectKLogo}/>
  </div><Link to="/Kalki 2898-AD"><button class="ProjectK">Play</button></Link></div>
</div>
</div>
<div className="container px-4 py-5" id="custom-cards">
  <h2 className="pb-2 border-bottom" style={{ color: 'white' }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-film" viewBox="0 0 16 16">
<path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"/>
</svg> <span style={{color:'#49beb7'}}>TollyWood Upcoming Movies</span> 
  </h2>

  <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
    {tollywoodMovies202.map((movie, index) => (
      <div id='tollywoodCard'  className="col" key={index} data-aos="fade-up">
        <Link style={{ textDecoration: 'none', }} to={`/${movie.movieTitle}`}>
          <div
            id={`tmovie${index}`}
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{ backgroundImage: `url(${movie.posterUrl})` }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h3
                id="movieTitle"
                className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold"
                style={{ width: 'fit-content' }}
              >
                {movie.movieTitle}
              </h3>
           



            </div>
          </div>
        </Link>
      </div>
    ))}
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
          <span style={{ color: "#49beb7" }}>HollyWood Upcoming Movies</span>
        </h2>
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          {Search.map((movie, index) => (
            <div id='hollywoodCard'  className="col" key={index} data-aos="fade-up" >
              <Link style={{ textDecoration: "none" }} to={movie.Title}>
                <div
                  id={`tmovie${index}`}
                  className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                  style={{ backgroundImage: `url(${movie.posterUrl})` }} // Use 'Poster' from the JSON data
                >
                  <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <h3
                      id="movieTitle"
                      className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold"
                      style={{ width: "fit-content" }}
                      data-aos="fade-up"
                    >
                      {movie.Title} {/* Use 'Title' from the JSON data */}
                    </h3>
                   
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="container px-4 py-5" id="custom-cards">
  <h2 className="pb-2 border-bottom" style={{ color: 'white' }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-film" viewBox="0 0 16 16">
<path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"/>
</svg> <span style={{color:'#49beb7'}}>BollyWood ShowUpcoming Movies</span> 
  </h2>

  <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
    {bollywoodUpcoming.map((movie, index) => (
      <div id='tollywoodCard'  className="col" key={index} data-aos="fade-up">
        <Link style={{ textDecoration: 'none', }} to={`/${movie.movieTitle}`}>
          <div
            id={`tmovie${index}`}
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{ backgroundImage: `url(${movie.Poster})` }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h3
                id="movieTitle"
                className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold"
                style={{ width: 'fit-content' }}
              >
                {movie.Title}
              </h3>
           



            </div>
          </div>
        </Link>
      </div>
    ))}
  </div>
</div>
<div className="container px-4 py-5" id="custom-cards">
  <h2 className="pb-2 border-bottom" style={{ color: 'white' }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-film" viewBox="0 0 16 16">
<path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"/>
</svg> <span style={{color:'#49beb7'}}>KollyWood Upcoming Movies</span> 
  </h2>

  <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
    {KollyWoodUpComing.map((movie, index) => (
      <div id='tollywoodCard'  className="col" key={index} data-aos="fade-up">
        <Link style={{ textDecoration: 'none', }} to={`/${movie.movieTitle}`}>
          <div
            id={`tmovie${index}`}
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{ backgroundImage: `url(${movie.Poster})` }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h3
                id="movieTitle"
                className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold"
                style={{ width: 'fit-content' }}
              >
                {movie.Title}
              </h3>
           



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

export default UpComingMoviesList
