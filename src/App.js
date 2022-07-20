import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 const App=()=> {
    return (
      <Router>
        <Navbar />
            <Routes>
              <Route
                exact path="/"
                element={<News key="general" pageSize={6} country="in" category="general"  heading="General"/>}
              />
              <Route
                exact path="/business" 
                element={<News key="business" pageSize={6} country="in" category="business" heading="Business"/>}
              />
              <Route
              exact path="/entertainment"
                element={<News key="entertainment" pageSize={6} country="in" category="entertainment" heading="Entertaiment"/>}
              />
                <Route
              exact path="/health"
                element={<News key="health" pageSize={6} country="in" category="health" heading="Health"/>}
              />
                  <Route
              exact path="/science"
                element={<News key="science" pageSize={6} country="in" category="science" heading="Science"/>}
              />
                  <Route
              exact path="/sports"
                element={<News key="sports" pageSize={6} country="in" category="sports" heading="Sports"/>}
              /> 
                  <Route
              exact path="/technology"
                element={<News key="technology" pageSize={6} country="in" category="technology" heading="Technology"/>}
              /> 

            </Routes>
      </Router>
    );
  }

export default App;