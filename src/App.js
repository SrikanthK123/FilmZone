import React from "react";
import Home from "./components/Home";
import "./App.css";
import NavBar from "./components/NavBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import TollywoodMovie from "./components/TollywoodMovie";
import HollywoodMovie from "./components/HollywoodMovie";
import BollywoodMovie from "./components/BollywoodMovie";
import Kollywood from "./components/Kollywood";
import TollywoodMovieList from "./components/TollywoodMovieList";
import TML2 from "./components/TML2";
import TML3 from "./components/TML3";
import TML4 from "./components/TML4";
import TML5 from "./components/TML5";
import TML6 from "./components/TML6";
import TLM7 from "./components/TLM7";
import TML8 from "./components/TML8";
import TML9 from "./components/TML9";
import TML10 from "./components/TML10";
import TML11 from "./components/TML11";
import TML12 from "./components/TML12";
import TML13 from "./components/TML13";
import TML14 from "./components/TML14";
import TML15 from "./components/TML15";
import TML16 from "./components/TML16";
import TML17 from "./components/TML17";
import TML18 from "./components/TML18";
import Footer from "./components/Footer";
import HML1 from "./components/Hollywood/HML1";
import HML2 from "./components/Hollywood/HML2";
import HML3 from "./components/Hollywood/HML3";
import HML4 from "./components/Hollywood/HML4";
import HML5 from "./components/Hollywood/HML5";
import HML6 from "./components/Hollywood/HML6";
import HML7 from "./components/Hollywood/HML7";
import HML8 from "./components/Hollywood/HML8";
import HML9 from "./components/Hollywood/HML9";
import HML10 from "./components/Hollywood/HML10";
import HML11 from "./components/Hollywood/HML11";
import HML12 from "./components/Hollywood/HML12";
import HML13 from "./components/Hollywood/HML13";
import HML14 from "./components/Hollywood/HML14";
import HML15 from "./components/Hollywood/HML15";
import BML1 from "./components/Bollywood/BML1";
import BML2 from "./components/Bollywood/BML2";
import BML3 from "./components/Bollywood/BML3";
import BML4 from "./components/Bollywood/BML4";
import BML5 from "./components/Bollywood/BML5";
import BML6 from "./components/Bollywood/BML6";
import BML7 from "./components/Bollywood/BML7";
import BML8 from "./components/Bollywood/BML8";
import BML9 from "./components/Bollywood/BML9";
import BML10 from "./components/Bollywood/BML10";
import BML11 from "./components/Bollywood/BML11";
import BML12 from "./components/Bollywood/BML12";
import KML1 from "./components/Kollywood/KML1";
import KML2 from "./components/Kollywood/KML2";
import KML3 from "./components/Kollywood/KML3";
import KML4 from "./components/Kollywood/KML4";
import KML5 from "./components/Kollywood/KML5";
import KML6 from "./components/Kollywood/KML6";
import KML7 from "./components/Kollywood/KML7";
import KML8 from "./components/Kollywood/KML8";
import KML9 from "./components/Kollywood/KML9";
import KML10 from "./components/Kollywood/KML10";
import KML11 from "./components/Kollywood/KML11";
import KML12 from "./components/Kollywood/KML12";
import Bahubail from "./components/Bahubail";
import TestingVideo from "./components/TestingVideo";
import UpComingMoviesList from "./components/UpComingMoviesList";
import ProjectKMovie from "./components/ProjectKMovie";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/tollywood">
            <TollywoodMovie />
          </Route>
          <Route path="/hollywood" ><HollywoodMovie/></Route>
          <Route path="/bollywood"><BollywoodMovie/></Route>
          <Route path="/kollywood"><Kollywood/></Route>
          <Route path="/Shyam Singha Roy"><TollywoodMovieList/></Route>
          <Route path="/Love Story"><TML2/></Route>
          <Route path="/Narappa"><TML3/></Route>
          <Route path="/Vakeel Saab"><TML4/></Route>
          <Route path="/Aranya"><TML5/></Route>
          <Route path="/Adipurush"><TML6/></Route>
          <Route path="/Vaarasudu"><TLM7/></Route>
          <Route path="/Kushi"><TML8/></Route>
          <Route path="/Baby 2023"><TML9/></Route>
          <Route path="/Pushpa: The Rise - Part 1"><TML10/></Route>
          <Route path="/Most Eligible Bachelor"><TML11/></Route>
          <Route path="/Maestro"><TML12/></Route>
          <Route path="/Bimbisara"><TML13/></Route>
          <Route path="/Sita Ramam"><TML14/></Route>
          <Route path="/RRR"><TML15/></Route>
          <Route path="/Major"><TML16/></Route>
          <Route path="/Bheemla Nayak"><TML17/></Route>
          <Route path="/Dhamaka"><TML18/></Route>
          <Route path="/The Avengers"><HML1/></Route>
          <Route path="/Avengers: Infinity War"><HML2/></Route>
          <Route path="/Avengers: Age of Ultron"><HML3/></Route>
          <Route path="/Avatar"><HML4/></Route>
          <Route path="/Avatar: The Way of Water"><HML5/></Route>
          <Route path="/Mission: Impossible - Ghost Protocol"><HML6/></Route>
          <Route path="/John Wick: Chapter 4"><HML7/></Route>
          <Route path="/The Super Mario Bros. Movie"><HML8/></Route>
          <Route path="/The Nun 2"><HML9/></Route>
          <Route path="/Aquaman"><HML10/></Route>
          <Route path="/Dune"><HML11/></Route>
          <Route path="/Oppenheimer"><HML12/></Route>
          <Route path="/Killers of the Flower Moon"><HML13/></Route>
          <Route path="/Spider-Man: Across the Spider-Verse"><HML14/></Route>
          <Route path="/Terminator: Dark Fate"><HML15/></Route>
          <Route path="/Pathaan"><BML1/></Route>
          <Route path="/Kisi Ka Bhai Kisi Ki Jaan"><BML2/></Route>
          <Route path="/Jawan"><BML3/></Route>
          <Route path="/Bawaal"><BML4/></Route>
          <Route path="/The Kerala Story"><BML5/></Route>
          <Route path="/Rocky Aur Rani Kii Prem Kahaani"><BML6/></Route>
           <Route path="/Bholaa"><BML7/></Route>
           <Route path="/Selfiee"><BML8/></Route>
           <Route path="/Satyaprem Ki Katha"><BML9/></Route>
           <Route path="/Shehzada"><BML10/></Route>
           <Route path="/IB 71"><BML11/></Route>
           <Route path="/Mission Majnu"><BML12/></Route>
           <Route path="/Jailer"><KML1/></Route>
           <Route path="/leo"><KML2/></Route>
           <Route path="/Ponniyin Selvan: Part Two"><KML3/></Route>
           <Route path="/Varisu"><KML4/></Route>
           <Route path="/Thunivu"><KML5/></Route>
           <Route path="/Vaathi"><KML6/></Route>
           <Route path="/Mark Antony"><KML7/></Route>
           <Route path="/Maaveeran"><KML8/></Route>
           <Route path="/Maamannan"><KML9/></Route>
           <Route path="/Chithha"><KML10/></Route>
           <Route path="/Kaithi"><KML11/></Route>
           <Route path="/Kabali"><KML12/></Route>
           <Route path="/Baahubali 2: The Conclusion"><Bahubail/></Route>
           <Route path="/UpComingMovies"><UpComingMoviesList/></Route>
           <Route path="/Kalki 2898-AD"><ProjectKMovie/></Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
