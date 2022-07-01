import NetflixRouterMain from "./Components/Netflix/NetflixRouterMain";
import ToDo from "./Components/ToDo/ToDo";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";



function App() {
  
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<NetflixRouterMain />} />
          <Route path="/todo" element={<ToDo />} />
        </Routes>
      </BrowserRouter>
     
      
      
    </div>
  );
}

export default App;
