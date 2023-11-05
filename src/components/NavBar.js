import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NavBar = () => {
  return (
    <div >
     <header data-bs-theme="dark" >
  <div class="text collapse show" id="navbarHeader" style={{backgroundColor:'#272424'}} >
    <div class="container">
      <div class="row">
      <div class="col-sm-8 col-md-7 py-4">
          
          <h3 style={{borderBottom:'4px solid black',width:'fit-content',cursor:'pointer'}}>
               <span style={{color:'green'}} className="ci">CI</span><span  className="ne" style={{color:'white'}}>NE</span><span style={{color:'purple'}} className="ma">MA</span>
              </h3>
              <ul  class="list-unstyled">
            <li><Link to="/" class="text">Home</Link></li>
            <li><Link to="/UpComingMovies" class="text">UpComingMovies</Link></li>
          </ul>
          </div>
        <div class="col-sm-4 offset-md-1 py-4">
          <h4 className="contactTitle">Contact</h4>
          <ul class="list-unstyled" >
            <li><a href="https://www.instagram.com/srikanth.kondapaka/?igshid=NGVhN2U2NjQ0Yg%3D%3D"  class="text">Follow on Instagram</a></li>
          
            <li><a href="mailto:kondapakasrikanth2010@gmail.com" class="text">Email me</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="navbar navbar-dark shadow-sm" style={{backgroundColor:'#272424'}} >
    <div class="container">
      <a href="#" class="navbar-brand d-flex align-items-center">
      <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  class="bi bi-camera-reels"
                  viewBox="0 0 16 16"
                  style={{color:'#f70776'}}
                >
                  <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0z" />
                  <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7zm6 8.73V7.27l-3.5 1.555v4.35l3.5 1.556zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z" />
                  <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                </svg> 
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="true" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </div>
</header>
      
    </div>
  );
};

export default NavBar;







