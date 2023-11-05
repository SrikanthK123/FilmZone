import React from "react";
import img1 from "../Images/salaar4.jpg";
import img2 from "../Images/rrr-ram-charan-2.jpg";
import img3 from "../Images/rrrNtr.jpg";
import img4 from "../Images/pushparaj3.jpg";
import RRRvideo from "../Images/rrr3.mp4";
import ntrEntry from "../Images/NtrEntry.mp4";
import ramEntry from "../Images/RamEntry.mp4";
import IntervalRRR from "../Images/IntervalSceneRrr2.mp4"

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="HomePage">
        <div className="videoContainer">
          <video
            src= {IntervalRRR}
            autoPlay
            loop
            muted
            type="video/mp4"
            className="videoBG"
          />
          <div className="contentOnVideo">
            <h3 style={{fontWeight:'bold'}}  data-aos="fade-up">
              <span style={{ color: "green" }} className="ci">
                CI
              </span>
              <span className="ne">NE</span>
              <span style={{ color: "purple" }} className="ma">
                MA
              </span>
            </h3>
            <h1 style={{ color: "white",fontWeight:'bold' }}  data-aos="fade-up"><span style={{color:'rgb(255 157 114)',borderBottom:'6px solid red'}}>Movies</span> Without Limits, <span style={{color:'red',borderBottom:'6px solid rgb(255 157 114)'}}>Joy</span> Without Bounds</h1>
            <Link to="/RRR"><button class="RRR-Btn bn21"  data-aos="fade-up">Watch</button></Link>
          </div>
          <div className="linearGradientOverlay"></div>
        </div>
        <div class="d-flex align-items-center py-4 bg-body-tertiary FrontPage">
          <div class="col-lg-8 col-md-12 mx-auto p-4 py-md-5">
          <div class="row align-items-md-stretch">
  <h1 id="HomePageTitle" class="text mb-5" data-aos="zoom-in">
     "Where Every Movie Becomes an <span style={{color:'rgb(37 164 209)'}}>Adventure</span>"

  </h1>
  <div className="container VideoSlide"  data-aos="fade-up">
    <div id="carouselExample" class="carousel slide mx-auto" data-bs-ride="carousel" style={{ width: '300px' }}>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div style={{ width: "18rem" }}>
            <video
             
              style={{
                borderRadius: "15px",
                cursor: "pointer",
              }}
              src={ramEntry}
              autoPlay
              loop
              muted
              type="video/mp4"
            />
          </div>
        </div>
        <div class="carousel-item">
          <div style={{ width: "18rem" }}>
            <video
              style={{
                borderRadius: "15px",
                cursor: "pointer",
              }}
              src={ntrEntry}
              autoPlay
              loop
              muted
              type="video/mp4"
            />
          </div>
        </div>
        <div class="carousel-item">
          <div style={{ width: "18rem" }}>
            <video
              style={{
                borderRadius: "15px",
                cursor: "pointer",
              }}
              src={RRRvideo}
              autoPlay
              loop
              muted
              type="video/mp4"
            />
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type a- button
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</div>

            <img
              id="rrrLogo"
              src="https://movies4discord.xyz/_next/image?url=https:%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FhbHECFGS7IsBCA3DSC1dPgLm2Ig.png&w=3840&q=75"
              style={{
                width: "30vw",
                height: "30vh",
                margin: "50px",
                cursor: "pointer",
              }}
              data-aos="zoom-in"
            />

            <hr class="col-3 col-md-2 mb-5" />
          </div>
         
          </div>
       

        <div class="container py-4">
          <Link className="Section" to="/tollywood">
            <div
              id="tollywoodSection"
              class="p-5 mb-4 bg-body-tertiary rounded-3"
              data-aos="fade-up"
            >
              <div class="container-fluid py-5">
                <h1 id="titleWood" class="display-5 fw-bold">
                  TollyWood
                </h1>
              </div>
            </div>
          </Link>
          <Link className="Section" to="/hollywood">
            <div
              id="hollywoodSection"
              class="p-5 mb-4 bg-body-tertiary rounded-3"
              data-aos="fade-up"
            >
              <div class="container-fluid py-5">
                <h1 id="titleWood" class="display-5 fw-bold">
                  HollyWood
                </h1>
              </div>
            </div>
          </Link>
          <Link className="Section" to="/bollywood">
            <div
              id="bollywoodSection"
              class="p-5 mb-4 bg-body-tertiary rounded-3"
              data-aos="fade-up"
            >
              <div class="container-fluid py-5">
                <h1 id="titleWood" class="display-5 fw-bold">
                  BollyWood
                </h1>
              </div>
            </div>
          </Link>
          <Link className="Section" to="/kollywood">
            <div
              id="kollywoodSection"
              class="p-5 mb-4 bg-body-tertiary rounded-3"
              data-aos="fade-up"
            >
              <div class="container-fluid py-5">
                <h1 id="titleWood" class="display-5 fw-bold">
                  KollyWood
                </h1>
              </div>
            </div>
          </Link>
        </div>
        </div>
    </>
  );
};

export default Home;
