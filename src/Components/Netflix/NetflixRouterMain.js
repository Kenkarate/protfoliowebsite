import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css"
import {action,comedy,horror,originals, romance} from './urls'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";


function NetflixRouterMain() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost url={originals} title="Netfix Originals" />
      <RowPost url={action} title="Action" isSmall/>
      <RowPost url={romance} title="Romance" isSmall/>
      <RowPost url={horror} title="Horror" isSmall/>
      <RowPost url={comedy} title="Comedy" isSmall/>
      <Banner />
      <RowPost url={comedy} title="Documentary" isSmall/>
    </div>
    
  );
}

export default NetflixRouterMain;
